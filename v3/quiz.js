// Quiz slide behaviour. The deck player (index.html) keeps the score and forwards keys.
// Markup: <div class="opts" data-quiz="id"> with <button class="opt" data-correct> on the right answer,
// and a <div class="control why"> holding the explanation.
(function () {
  const opts = document.querySelector(".opts[data-quiz]");
  const send = msg => { try { parent.postMessage(Object.assign({ quiz: true }, msg), "*"); } catch (e) {} };

  // Arrow keys, F and mouse movement go to the player, so the deck still moves when this slide has focus.
  document.addEventListener("keydown", e => {
    if (pick(e.key)) return;
    if (["ArrowRight", "ArrowLeft", "PageDown", "PageUp", " ", "Home", "End", "f", "F"].includes(e.key)) {
      e.preventDefault(); send({ type: "key", key: e.key });
    }
  });
  document.addEventListener("mousemove", () => send({ type: "wake" }));

  if (!opts) return;
  const id = opts.dataset.quiz;
  const buttons = [...opts.querySelectorAll(".opt")];
  const why = document.querySelector(".why");

  function reveal(chosen, report) {
    buttons.forEach((b, n) => {
      b.disabled = true;
      if (b.hasAttribute("data-correct")) b.classList.add("right");
      else if (n === chosen) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    const ok = buttons[chosen].hasAttribute("data-correct");
    why.querySelector("small").textContent = ok ? "Correct" : "Not quite";
    why.classList.add("show");
    if (report) send({ type: "answer", id, pick: chosen, correct: ok });
  }
  function pick(key) {
    const n = "1234".indexOf(key) >= 0 ? "1234".indexOf(key) : "abcd".indexOf(String(key).toLowerCase());
    if (n < 0 || !buttons[n] || buttons[0].disabled) return false;
    reveal(n, true); return true;
  }
  buttons.forEach((b, n) => b.addEventListener("click", () => reveal(n, true)));

  window.addEventListener("message", e => {
    const d = e.data || {};
    if (!d.quiz) return;
    if (d.type === "pick") pick(d.key);
    if (d.type === "state" && d.id === id && typeof d.pick === "number" && !buttons[0].disabled) reveal(d.pick, false);
  });
  send({ type: "hello", id }); // ask the player whether this question was already answered
})();
