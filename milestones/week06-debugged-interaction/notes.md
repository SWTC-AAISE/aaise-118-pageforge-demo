# Week 06 Debugged Interaction

Source:
`week05-dom-block-builder`

Course Week:
Week 6 - debugging and problem solving

Purpose:
Preserve a fixed, runnable PageForge milestone that supports a debugging discussion. The code adds a remove action and includes safer update behavior while the notes document the kind of issue that was debugged.

Monday Concept Connection:
- Monday focuses on reading error messages, checking selectors, and isolating where behavior stops.
- PageForge gives concrete places to inspect: library rendering, click handlers, composition updates, preview updates, and status text.

Wednesday Iteration / Deepening:
- The end-of-week version fixes the update flow so add/remove actions both refresh the same page regions.
- The code now guards against unknown block types instead of assuming every lookup succeeds.

What Changed:
- Added remove buttons to composition items.
- Added `removeBlock()`, `updateStatus()`, and `updateBuilder()`.
- Added console messages for add/remove actions.
- Added a guard for missing block definitions.
- Updated the milestone text to focus on debugging and verification.

What This Demonstrates:
- Debugging starts with confirming what code actually runs.
- Repeated update steps can be gathered into one function.
- Small guard clauses prevent one bad value from breaking the whole page.
- A fixed version can still preserve the debugging story through notes.

Intentional Limits:
- This milestone does not preserve a separate broken folder.
- Blocks still cannot be edited or reordered.
- The preview remains simple placeholder output.
- The code is improved but not fully refactored; Week 7 handles structure more directly.

Optional PageForge Video Notes:
1. Describe the likely bug: a selector mismatch or a missing update call caused part of the interface not to refresh.
2. Show the DOM references and the event listener.
3. Add and remove blocks while watching the status, composition list, and preview.
4. Point out `console.log()` and `console.warn()` as temporary investigation tools.

What Not To Over-Explain Yet:
- Do not introduce browser storage.
- Do not introduce async errors.
- Do not turn this into a formal testing lesson.

Verification:
- Opened as static HTML files.
- Confirmed add and remove actions update status, composition, and preview.
- Ran `node --check app/assets/js/builder.js`.
