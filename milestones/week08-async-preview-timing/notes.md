# Week 08 Async Preview Timing

Source:
`week07-structured-javascript`

Course Week:
Week 8 - async timing

Purpose:
Preserve a PageForge milestone that makes timing visible. The builder updates status and composition immediately, then delays preview rendering briefly so students can see "now" and "later" as separate moments.

Monday Concept Connection:

- Monday introduces the idea that async is about time, not magic.
- PageForge uses `setTimeout()` to delay preview rendering after a user action.

Wednesday Iteration / Deepening:

- The end-of-week version cancels an earlier pending preview timer when a new change happens.
- This models the idea that future work may still be waiting while the page continues to respond.

What Changed:

- Added `previewTimer` to `appState`.
- Added `schedulePreviewRender()`.
- Added a visible "Generating preview..." state.
- Used `setTimeout()` and `clearTimeout()` around preview rendering.
- Updated milestone text to focus on timing.

What This Demonstrates:

- Some code runs immediately.
- Some code is scheduled to run later.
- Waiting still happens even when the UI stays responsive.
- Async timing prepares the project for later `fetch()` and JSON loading.

Intentional Limits:

- No external data is loaded yet.
- No Promises are written directly yet.
- No template JSON is used yet.
- The delay is artificial and exists for teaching visibility.

Optional PageForge Video Notes:

1. Add a block and point out that the status changes immediately.
2. Watch the preview show the loading message before it updates.
3. Add blocks quickly to show the previous timer being cleared.
4. Connect this to the question: what happens now, and what happens later?

What Not To Over-Explain Yet:

- Do not go deep into Promise chaining.
- Do not introduce CORS or network errors yet.
- Do not claim this is real performance optimization.

Verification:

- Opened as static HTML files.
- Confirmed add/remove actions still update the builder.
- Ran `node --check app/assets/js/builder.js`.

---

## `clearTimeout()` Purpose and Use:

- `clearTimeout(id)` cancels a timer that was previously scheduled with `setTimeout()`.
- It takes the timer ID returned by `setTimeout()` so it knows exactly which pending timer to stop.
- In PageForge, it cancels an older "Generating preview..." timer when a newer change happens.
- This keeps stale preview renders from firing out of order and overwriting newer state.
- Key idea for students: scheduling future work also means being able to un-schedule it.
