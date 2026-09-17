# Week 05 DOM Block Builder

Source:
`week04-javascript-block-logic`

Course Week:
Week 5 - DOM interaction and events

Purpose:
Preserve the first interactive PageForge milestone. Users can click block buttons, add blocks to a composition list, and see a simple preview update.

Monday Concept Connection:
- Monday introduces selecting elements, changing text, and responding to button clicks.
- PageForge uses `querySelector`, `textContent`, `innerHTML`, and `addEventListener`.

Wednesday Iteration / Deepening:
- The end-of-week version renders the block library from JavaScript data instead of hard-coded HTML buttons.
- User clicks change the composition and preview, showing the basic input/action/output loop.

What Changed:
- Replaced static block buttons with JavaScript-rendered buttons.
- Added click handlers for each block type.
- Added a `placedBlocks` array.
- Added composition rendering and simple preview rendering.
- Replaced `blocks.js` with `builder.js` because behavior now belongs to the builder page.

What This Demonstrates:
- JavaScript can create page elements.
- Events connect user actions to code.
- Data changes can drive visible page updates.
- The same data can update multiple regions of the page.

Intentional Limits:
- Blocks cannot be edited yet.
- Blocks cannot be removed or reordered yet.
- The preview uses simple placeholder content.
- State exists only in memory and disappears on refresh.

Optional PageForge Video Notes:
1. Show the library buttons and explain that JavaScript created them.
2. Add several blocks and point out the composition list and preview changing together.
3. Open `builder.js` and identify the key DOM references.
4. Connect this to the Week 5 demos without explaining every line at once.

What Not To Over-Explain Yet:
- Do not introduce localStorage.
- Do not discuss async loading.
- Do not refactor heavily yet; Week 7 handles structure.

Verification:
- Opened as static HTML files.
- Confirmed `builder.html` loads `assets/js/builder.js`.
- Ran `node --check app/assets/js/builder.js`.
