# Week 03 Responsive Builder Layout

Source:
`week02-css-foundation`

Course Week:
Week 3 - layout and responsive design

Purpose:
Preserve the first app-shaped PageForge milestone. The project is still static, but the builder page now has a responsive layout that previews the major regions of the final application.

Monday Concept Connection:
- Monday introduces layout as the placement of sections and regions on the page.
- PageForge shows this through constrained content widths, card grids, and a builder workspace.

Wednesday Iteration / Deepening:
- The end-of-week version adds media queries so multi-column layouts stack on smaller screens.
- The builder page now models the future library/editor/preview structure that later JavaScript will activate.

What Changed:
- Expanded the home page hero into a two-column layout on wider screens.
- Converted the builder page into a three-panel workspace.
- Added static block options, composition examples, edit placeholder, and preview placeholder.
- Added responsive breakpoints for narrower screens.

What This Demonstrates:
- Layout can make a page feel like an application before it has behavior.
- CSS Grid is useful for arranging major page regions.
- Media queries allow the same content to adapt to different screen widths.

Intentional Limits:
- The builder buttons still do not do anything.
- The preview is static placeholder content.
- No JavaScript files exist yet.
- The edit area reserves space for future forms but does not include input controls.

Optional PageForge Video Notes:
1. Open `builder.html` at a wide browser width and identify the three panels.
2. Narrow the browser to show the responsive stacking behavior.
3. Explain that the layout creates places for future JavaScript behavior.
4. Reinforce that this milestone is about structure and responsiveness, not interaction.

What Not To Over-Explain Yet:
- Do not introduce DOM selection or event handling.
- Do not discuss form processing.
- Do not treat the static preview as real generated output.

Verification:
- Opened as static HTML files.
- Confirmed all pages link to `assets/css/styles.css`.
- Confirmed responsive breakpoints are present for 900px and 620px widths.
- Confirmed no JavaScript is required for this milestone.
