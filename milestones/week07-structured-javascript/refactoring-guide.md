# From Week 6 Script to Week 7 Structure

Use `week06-debugged-interaction/app/assets/js/6_builder-final.js` as the starting point and `week07-structured-javascript/app/assets/js/builder.js` as the destination.

The goal is to improve the organization of the JavaScript without changing what students see: they can still add blocks, remove blocks, and view the updated composition and preview.

## Changes at a Glance

- Rename `blockLibrary` to `blockDefinitions` to describe the data more precisely.
- Move `placedBlocks` into an `appState` object.
- Move the four DOM references into a `dom` object.
- Add a named `initBuilder()` function for startup.
- Add `findBlockDefinition()` so block lookup happens in one place.
- Extract button creation into `createBlockButton()`.
- Extract composition-item creation into `createCompositionItem()`.
- Extract preview-section creation into `createPreviewSection()`.
- Rename `updateBuilder()` to `renderBuilder()` and use `renderStatus()` for the status message.
- Update all references to use `appState` and `dom`.
- Keep the add, remove, composition, status, and preview behavior the same.

## Suggested Execution Order

### 1. Establish the behavior baseline

Open the Week 6 page and demonstrate:

1. The library displays four block buttons.
2. Clicking a block adds it to the composition.
3. The status count changes.
4. The preview changes.
5. Remove deletes the selected composition item.

Why: A refactor should begin with a shared understanding of the behavior that already works. This gives students a reference point and makes it easier to recognize that the later changes improve structure without changing the product.

Checkpoint: students should be able to describe the behavior before looking at the refactor.

### 2. Rename the library data

Change `blockLibrary` to `blockDefinitions` everywhere.

Explain that the array contains definitions and metadata, not the blocks currently placed on the page.

Why: `blockDefinitions` is more precise than `blockLibrary`: these objects describe the available block types, while the library UI is created from them. A meaningful name helps students understand the role of the data before any larger restructuring happens.

Checkpoint: reload the page and confirm that the library still renders and a block can still be added.

### 3. Group application state

Replace:

```js
const placedBlocks = [];
```

with:

```js
const appState = {
  placedBlocks: [],
};
```

Update reads and writes to use `appState.placedBlocks`.

Why: The application already has state, but it is mixed into the top level of the script. Giving state a named home makes it easier to see what can change and prepares the code for additional state later without introducing a full state-management system.

Checkpoint: add two blocks, remove one, and confirm the count and preview remain correct.

### 4. Group DOM references

Replace the four separate DOM variables with one `dom` object containing `libraryPanel`, `compositionList`, `previewPage`, and `builderStatus`.

Update the rendering functions to use `dom.<name>`.

Why: DOM references are another distinct category of information. Grouping them separates page elements from application data and makes the functions easier to scan when students need to find where a particular part of the page is updated.

Checkpoint: confirm that all three areas still update after adding and removing a block.

### 5. Name the startup process

Replace the two loose startup calls at the bottom with:

```js
function initBuilder() {
  renderBlockLibrary();
  renderBuilder();
}

initBuilder();
```

Explain that the named function gives initialization one clear entry point.

Why: Loose startup calls work in a small file, but a named initialization function makes the order of setup explicit and gives the application one place to expand when more startup work is added. It also makes the script read like a sequence of named responsibilities.

Checkpoint: open the page with no blocks and confirm both empty states and the initial status appear.

### 6. Extract reusable lookup and creation helpers

Refactor in this order:

1. Move the `.find()` logic into `findBlockDefinition(type)`.
2. Move library button creation into `createBlockButton(block)`.
3. Move composition item creation into `createCompositionItem(block, index)`.
4. Move preview section creation into `createPreviewSection(type)`.

After each extraction, replace the original inline code with the helper call before starting the next extraction.

Why: Long functions currently create buttons and sections while also deciding how they should be rendered. Extracting those construction details reduces repetition and lets each function communicate its intent. Doing one helper at a time keeps each change understandable and makes errors easier to locate.

Checkpoint after each helper: add a hero, text, image, and cards block; then remove at least two items. The output should remain unchanged.

### 7. Clarify the render flow

Rename `updateBuilder()` to `renderBuilder()` and rename `updateStatus()` to `renderStatus()`.

Keep `renderBuilder()` as the single coordinator:

```js
function renderBuilder() {
  renderStatus();
  renderComposition();
  renderPreview();
}
```

Keep `addBlock()` and `removeBlock()` focused on changing state and then calling `renderBuilder()`.

Why: User actions should have a predictable path: change the state, then refresh the visible interface. One render coordinator prevents add and remove from accidentally updating different parts of the page and gives future actions a consistent pattern to follow.

Checkpoint: verify that both add and remove trigger the status, composition, and preview updates.

### 8. Finish with a side-by-side review

Compare the major sections in both files:

- data: `blockDefinitions`
- state: `appState`
- DOM references: `dom`
- actions: `addBlock()` and `removeBlock()`
- rendering: `renderBuilder()`, `renderStatus()`, `renderComposition()`, and `renderPreview()`
- helpers: the `find`, `create`, and preview functions
- startup: `initBuilder()`

Final checkpoint: run the complete add/remove demonstration again and confirm that the refactor changed the code structure, not the user-facing behavior.

Why: The final review helps students connect individual edits to the larger design. Comparing the sections side by side makes the responsibilities visible and reinforces the central lesson that refactoring can reduce cognitive load while preserving behavior.

## Verification

From the Week 07 milestone directory, run:

```powershell
node --check app/assets/js/builder.js
```

Then open `app/builder.html` as a static page and repeat the final checkpoint.

## Teaching Boundary

Do not add modules, `localStorage`, async loading, APIs, or edit forms in this demonstration. Those are useful later, but they would distract from the central lesson: clear structure can be introduced incrementally while working behavior is preserved.
