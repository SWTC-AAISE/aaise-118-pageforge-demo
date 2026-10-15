# Week 09 Modular Organization

Source:
`week08-async-preview-timing`

Course Week:
Week 9 - modular thinking

Purpose:
Preserve a PageForge milestone that separates responsibilities across JavaScript files while avoiding a heavy jump into formal module syntax. Students can see modularity as an organization habit first.

Monday Concept Connection:

- Monday introduces the distinction between modularity and modules.
- PageForge separates shared site navigation, block definitions, and builder behavior while keeping the app easy to run locally.

Wednesday Iteration / Deepening:

- The end-of-week version uses three JavaScript files: `site-nav.js` for shared navigation, `blocks.js` for block data, and `builder.js` for interaction/rendering.
- `builder.html` still loads `blocks.js` before `builder.js` because the builder depends on the block definitions.

What Changed:

- Added `assets/js/site-nav.js`.
- Replaced repeated navigation markup with a shared header renderer across all three pages.
- Added `assets/js/blocks.js`.
- Moved `blockDefinitions` out of `builder.js`.
- Updated `builder.html` to load both scripts in order.
- Updated page text to focus on modular organization.

What This Demonstrates:

- Modularity is about separating responsibilities.
- Multiple files can support modularity across both shared UI and builder logic.
- Script order matters when one file depends on another.
- A larger project benefits from organization before it adds more features.

Intentional Limits:

- This does not use `import` or `export`.
- The scripts still share global values.
- No JSON loading yet.
- No persistent state yet.

Optional PageForge Video Notes:

1. Open `site-nav.js` and show that one file now owns the shared header markup.
2. Refresh all three pages and point out that the active navigation state still follows the page.
3. Open `blocks.js` and show that it contains data only.
4. Open `builder.js` and show that it handles behavior and rendering.
5. Point out the script order in `builder.html`.
6. Say explicitly that modularity and formal modules are related, but not identical.

What Not To Over-Explain Yet:

- Do not introduce bundlers.
- Do not introduce Node/npm.
- Do not convert to ES modules at this stage.

Verification:

- Opened as static HTML files.
- Confirmed all three pages render the shared navigation with the correct active link.
- Ran `node --check app/assets/js/site-nav.js`.
- Confirmed `builder.html` loads `blocks.js` before `builder.js`.
- Ran `node --check app/assets/js/blocks.js`.
- Ran `node --check app/assets/js/builder.js`.
