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

function countReadyBlocks(blocks) {
  let readyCount = 0;

  for (const block of blocks) {
    if (block.isReady) {
      readyCount = readyCount + 1;
    }
  }

  return readyCount;
}

function createLibraryMessage(blocks) {
  const readyCount = countReadyBlocks(blocks);

  if (readyCount === blocks.length) {
    return "All block definitions are ready.";
  }

  if (readyCount > 0) {
    return `${readyCount} of ${blocks.length} block definitions are ready for the builder.`;
  }

  return "No block definitions are ready yet.";
}

const libraryMessage = createLibraryMessage(blockLibrary);
const output = document.querySelector("#logic-output");

console.log("PageForge block library:", blockLibrary);
console.log("Ready block count:", countReadyBlocks(blockLibrary));
console.log("Library message:", libraryMessage);

if (output) {
  output.textContent = libraryMessage;
}
