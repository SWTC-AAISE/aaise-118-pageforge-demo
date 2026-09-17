// Initialization of usable blocks
const blockLibrary = [
  {
    type: "hero",
    label: "Hero",
    description: "Heading, text, and button",
  },
  {
    type: "text",
    label: "Text",
    description: "Heading and paragraph",
  },
  {
    type: "image",
    label: "Image",
    description: "Image placeholder and caption",
  },
  {
    type: "cards",
    label: "Cards",
    description: "Three feature cards",
  },
];

// Selected blocks from user
const placedBlocks = [];

// The three main panels: blocks, composition, & preview
const libraryPanel = document.querySelector("#library-panel");
const compositionList = document.querySelector("#composition-list");
const previewPage = document.querySelector("#preview-page");

// Simple status message for the Composition Header cell
const builderStatus = document.querySelector("#builder-status");

// Show the available blocks and setup the event listener
function renderLibrary() {
  for (const block of blockLibrary) {
    const button = document.createElement("button");
    button.className = "block-option";
    button.type = "button";
    button.innerHTML = `
      <span>${block.label}</span>
      <small>${block.description}</small>
    `;

    button.addEventListener("click", function () {
      addBlock(block.type);
    });

    libraryPanel.appendChild(button);
  }
}

// Append the user selected block
function addBlock(type) {
  placedBlocks.push(type);
  builderStatus.textContent = `${placedBlocks.length} block(s) in the composition.`;
  // console.log("builderStatus: ", builderStatus.textContent);
  renderComposition();
  renderPreview();
}

// Render/re-render the current composition
function renderComposition() {
  compositionList.innerHTML = "";

  if (placedBlocks.length === 0) {
    compositionList.innerHTML =
      '<p class="empty-message">No blocks added yet.</p>';
    return;
  }

  for (const type of placedBlocks) {
    const block = blockLibrary.find(function (item) {
      return item.type === type;
    });

    const item = document.createElement("article");
    item.innerHTML = `
      <h3>${block.label}</h3>
      <p>${block.description}</p>
    `;
    compositionList.appendChild(item);
  }
}

// Display the preview of the chosen blocks
function renderPreview() {
  previewPage.innerHTML = "";

  if (placedBlocks.length === 0) {
    previewPage.innerHTML =
      '<p class="empty-message">Add a block to see a simple preview.</p>';
    return;
  }

  for (const type of placedBlocks) {
    const section = document.createElement("section");

    if (type === "hero") {
      section.className = "preview-hero";
      section.innerHTML =
        "<h3>Sample Hero</h3><p>A strong opening section for the page.</p>";
    } else if (type === "text") {
      section.className = "preview-content";
      section.innerHTML =
        "<h3>Sample Text</h3><p>This is a simple text section.</p>";
    } else if (type === "image") {
      section.className = "preview-image";
      section.innerHTML =
        "<h3>Image Placeholder</h3><p>Image content later.</p>";
    } else {
      section.className = "preview-card-row";
      section.innerHTML =
        "<article>Card 1</article><article>Card 2</article><article>Card 3</article>";
    }

    previewPage.appendChild(section);
  }
}

// Initial rendering/display of html page
renderLibrary();
renderComposition();
renderPreview();
