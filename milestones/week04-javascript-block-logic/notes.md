# Week 04 JavaScript Block Logic

Source:
`week03-responsive-builder-layout`

Course Week:
Week 4 - JavaScript foundations

Purpose:
Preserve the first PageForge milestone that includes JavaScript. The app does not have full interaction yet; it introduces the idea that blocks can be represented as data and processed with functions.

Monday Concept Connection:
- Monday introduces values, variables/constants, arrays, objects, conditions, and console output.
- PageForge uses an array of block objects and logs the block library to the console.

Wednesday Iteration / Deepening:
- The end-of-week version adds helper functions that count ready blocks and choose a status message.
- A small result is written to the page so students can see JavaScript affect visible content without full DOM interaction yet.

What Changed:
- Added `assets/js/blocks.js`.
- Added a `blockLibrary` array with object values.
- Added `countReadyBlocks()` and `createLibraryMessage()` helper functions.
- Added a small `#logic-output` area to `builder.html`.
- Updated page text so Week 4 focuses on logic rather than layout.

What This Demonstrates:
- JavaScript can describe application information before it creates interaction.
- Arrays and objects are useful for storing repeated structured data.
- Functions make decisions easier to name and reuse.
- Console output is a valid early verification tool.

Intentional Limits:
- Block buttons do not add blocks yet.
- The preview remains static.
- The block data is simple and not yet the final `BLOCK_DEFINITIONS` structure.
- No event listeners are used yet.

Optional PageForge Video Notes:
1. Open `builder.html` and show the visible logic message.
2. Open the browser console and show the block array and ready count.
3. Connect `blockLibrary` to the future block buttons.
4. Emphasize that logic can exist before interaction.

What Not To Over-Explain Yet:
- Do not introduce `createElement()` or event listeners.
- Do not discuss modules.
- Do not turn this into the full final block renderer yet.

Verification:
- Opened as static HTML files.
- Confirmed `builder.html` loads `assets/js/blocks.js`.
- Ran `node --check app/assets/js/blocks.js`.
