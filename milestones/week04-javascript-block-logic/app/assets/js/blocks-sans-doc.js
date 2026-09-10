// This array stores a list of content blocks.
// Each block is an object with information about one type of page content.
const blockLibrary = [
  {
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

// This function counts how many blocks are ready to use.
function countReadyBlocks(blocks) {
  // let is used because the count changes as the loop runs.
  let readyCount = 0;

  // The loop checks each block in the array.
  for (const block of blocks) {
    // If isReady is true, add 1 to the count.
    if (block.isReady) {
      readyCount = readyCount + 1;
    }
  }

  // return sends the finished count back to the code that called the function.
  return readyCount;
}

// This function creates a message based on the number of ready blocks.
function createLibraryMessage(blocks) {
  const readyCount = countReadyBlocks(blocks);

  // blocks.length is the total number of items in the array.
  if (readyCount === blocks.length) {
    return "All block definitions are ready.";
  }

  if (readyCount > 0) {
    return `${readyCount} of ${blocks.length} block definitions are ready for the builder.`;
  }

  return "No block definitions are ready yet.";
}

// Call the function and store the message it returns.
const libraryMessage = createLibraryMessage(blockLibrary);

// Find the HTML element whose id is "logic-output".
const output = document.querySelector("#logic-output");

// Show useful values in the browser's developer console.
console.log("PageForge block library:", blockLibrary);
console.log("Ready block count:", countReadyBlocks(blockLibrary));
console.log("Library message:", libraryMessage);

// Only update the page if the HTML element was found.
if (output) {
  output.textContent = libraryMessage;
}
