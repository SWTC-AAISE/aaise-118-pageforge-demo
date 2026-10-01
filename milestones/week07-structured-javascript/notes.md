# Week 07 Structured JavaScript

Source:
`week06-debugged-interaction`

Course Week:
Week 7 - structured JavaScript and refactoring

Purpose:
Preserve a PageForge milestone where the visible behavior remains familiar, but the JavaScript is reorganized into clearer responsibilities. This models refactoring as an ordinary part of iterative development.

Monday Concept Connection:

- Monday introduces the problem of working code that becomes hard to read as it grows.
- PageForge begins with behavior students already saw: add blocks, remove blocks, update composition, and update preview.

Wednesday Iteration / Deepening:

- The end-of-week version groups related ideas into named sections:
  - **_data_**
  - **_state_**
  - **_DOM references_**
  - **_actions_**
  - **_rendering_**
  - **_helpers_**
- Functions such as `renderBlockLibrary()`, `createCompositionItem()`, `renderPreview()`, and `createPreviewSection()` make the file easier to scan.

What Changed:

- Renamed `blockLibrary` to `blockDefinitions` to better describe its purpose.
- Added an `appState` object for placed block data.
- Added a `dom` object for page references.
- Split rendering and creation work into smaller named functions.
- Preserved the same add/remove/preview behavior from Week 6.

What This Demonstrates:

- Refactoring does not have to change what the user sees.
- Function names can explain intent.
- Grouping related code lowers cognitive load.
- A clearer structure prepares the project for async, data loading, and state management.

Intentional Limits:

- Still one JavaScript file.
- No async or JSON loading yet.
- No persistent state yet.
- No edit form yet.

Optional PageForge Video Notes:

1. Add and remove blocks first to show the behavior is familiar.
2. Open `builder.js` and compare the major sections to Week 6.
3. Point out `appState` as a preview of future state management, but do not teach full state yet.
4. Emphasize that better organization is a project skill, not just a style preference.

What Not To Over-Explain Yet:

- Do not introduce ES modules yet.
- Do not introduce localStorage.
- Do not discuss async loading or APIs.

Verification:

- Opened as static HTML files.
- Confirmed add and remove actions still update status, composition, and preview.
- Ran `node --check app/assets/js/builder.js`.
