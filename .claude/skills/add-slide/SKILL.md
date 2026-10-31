---
name: add-slide
description: Add or edit a slide in the v3 deck using its shared theme and layout. Use when asked to add, create, change or reorder a slide in this deck.
---

# add-slide

Every slide is one HTML file in `v3/slides/`. `v3/slides.js` sets the order. `v3/theme.css` sets the look.

## Steps

1. Read `v3/slides.js`, `v3/theme.css` and the slide closest to what you need.
2. Create `v3/slides/NN-short-name.html` from the template below.
3. Add it to `v3/slides.js` in the right position. If it goes mid-deck, rename the later files so the numbers stay in order, and update their paths in `slides.js`.
4. Render it at 1920×1080 and look at it. Nothing may overflow, touch the header band or sit too close to the bottom edge.

## Template

```html
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Short title</title>
<link rel="stylesheet" href="../theme.css">
</head><body>
<section class="slide"><div class="canvas">
  <header class="band"><div class="kicker">Section name</div><h1>The slide's main message</h1></header>
  <p class="lead">Optional one-sentence intro.</p>
  <div class="body">
    <!-- one component from the list below -->
  </div>
  <div class="control"><small>Control</small><span>Optional takeaway line.</span></div>
</div></section>
</body></html>
```

## Components in theme.css

- `.rows`: label and text rows. `<div class="rows"><div><b>Label</b><span>Text</span></div></div>`
- `.flow`: side-by-side cards, up to 5. `<div class="flow"><div><b>Step</b><span>Text</span></div></div>`
- `table.t`: comparison table with `th` headers.
- `.code`: code sample, on a `<pre class="code">`.
- `.control`: bottom takeaway bar.
- `.note`: small source or footnote line.

## Rules

- One main idea per slide, in short plain sentences. Headlines say the message, not just the topic.
- Keep the look in `theme.css`. Use its color variables, and don't add new colors or fonts.
- Size everything in `cqw`, so slides scale on any 16:9 TV. Keep body text at 1.6cqw or larger.
- Put CSS needed by only one slide in that slide's `<style>`. Don't change `theme.css` for one slide.
- Use real examples, and don't invent facts about how the team works.
- This deck is public: no secrets, credentials, server addresses or personal data.
- Pushing to `main` publishes the deck, so get the slide reviewed first.
