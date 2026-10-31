AI IN THE SDLC — COLLABORATION PACK

PRESENT
Extract the entire ZIP. Open index.html in a current desktop browser.
Use Previous / Next, the slide menu, or arrow keys.
TV mode hides the toolbar and uses the full screen. Escape exits the mode.
Browser fullscreen may require a click and browser support.
The combined-presentation.html file is a standalone snapshot with no dependencies.

EDIT AN EXISTING SLIDE
Each numbered file in slides/ is a complete, independent HTML slide.
Assign different files to different contributors. They can change the section content
in a text editor or ask their AI assistant to edit their assigned file.
Keep the supplied style and 16:9 canvas. Save the edited file with the same name.
index.html loads those files directly, so their edits appear on reopening the slide.
No server, npm install, or build is required.

ADD A SLIDE
Copy slide-template.html into slides/ with a unique filename.
Edit its title, subtitle and content.
Add an entry in slides.js using the same {"file": ..., "title": ...} format.
The order of entries in slides.js is the presentation order.
Update visible footer numbers if you change the order.

TV DESIGN
Fixed 16:9 slides, large text and high contrast.
At 1920px slide width, body text is about 35px, subtitles about 36px,
and headings about 77px. At 4K these dimensions scale proportionally.
Keep one main idea per slide and no more than four main text rows.
Viewing distance and TV scaling still affect readability. Use browser fullscreen.

IMPORTANT
Keep the slides/ folder and slides.js beside index.html.
The combined presentation is a snapshot and does not automatically reflect edits
to separate slide files. Present from index.html after collaborators edit slides.
Share source files only through your approved team channels.
