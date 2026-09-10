/*
 * PageForge block library
 * -----------------------
 * This file demonstrates how JavaScript can store application data, process
 * that data with functions, and display a result on a web page.
 */

// An array stores an ordered list of values. Each value in this array is an
// object that describes one type of content block.
const blockLibrary = [
  {
    // Object properties use key-value pairs, such as type: "hero".
    type: "hero",
    label: "Hero",
    description: "A heading, short introduction, and action button.",
    isReady: true,
  },
  {
    type: "text",
    label: "Text",
    description: "A heading and paragraph for regular page content.",
    isReady: true,
  },
  {
    type: "image",
    label: "Image",
    description: "A placeholder for an image with a caption.",
    isReady: false,
  },
  {
    type: "cards",
    label: "Cards",
    description: "A group of feature cards.",
    isReady: false,
  },
];

/**
 * Count the block objects whose isReady property is true.
 *
 * @param {Array<{isReady: boolean}>} blocks - The block objects to inspect.
 * @returns {number} The number of blocks that are ready.
 */
function countReadyBlocks(blocks) {
  // let declares a variable whose value can change.
  let readyCount = 0;

  // A for...of loop visits each object in the array once.
  for (const block of blocks) {
    // The code inside this condition runs only when isReady is true.
    if (block.isReady) {
      readyCount = readyCount + 1;
    }
  }

  return readyCount;
}

/**
 * Create a status message based on the number of ready blocks.
 *
 * @param {Array<{isReady: boolean}>} blocks - The block objects to summarize.
 * @returns {string} A message for the builder page.
 */
function createLibraryMessage(blocks) {
  // Calling the helper avoids repeating the counting logic in this function.
  const readyCount = countReadyBlocks(blocks);

  if (readyCount === blocks.length) {
    return "All block definitions are ready.";
  }

  if (readyCount > 0) {
    // A template literal uses backticks and ${...} to insert values into text.
    return `${readyCount} of ${blocks.length} block definitions are ready for the builder.`;
  }

  return "No block definitions are ready yet.";
}

// const declares names that will not be assigned a different value later.
const libraryMessage = createLibraryMessage(blockLibrary);
// querySelector finds the first HTML element that matches this CSS selector.
const output = document.querySelector("#logic-output");

// Console messages help developers inspect values while the program runs.
console.log("PageForge block library:", blockLibrary);
console.log("Ready block count:", countReadyBlocks(blockLibrary));
console.log("Library message:", libraryMessage);

// querySelector returns null when no match exists. This guard prevents an
// error if the script is loaded by a page without the #logic-output element.
if (output) {
  // textContent replaces the element's text with the message from JavaScript.
  output.textContent = libraryMessage;
}
