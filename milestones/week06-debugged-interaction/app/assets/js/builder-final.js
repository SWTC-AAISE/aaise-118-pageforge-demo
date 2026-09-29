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

const placedBlocks = [];

const libraryPanel = document.querySelector("#library-panel");
const compositionList = document.querySelector("#composition-list");
const previewPage = document.querySelector("#preview-page");
const builderStatus = document.querySelector("#builder-status");

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

// ? Refactor (1)
function addBlock(type) {
  placedBlocks.push(type);
  // Added
  console.log("Added block:", type);
  updateBuilder();
}

// ? Refactor (3)
function renderComposition() {
  compositionList.innerHTML = "";

  if (placedBlocks.length === 0) {
    compositionList.innerHTML =
      '<p class="empty-message">No blocks added yet.</p>';
    return;
  }

  for (let index = 0; index < placedBlocks.length; index++) {
    const type = placedBlocks[index];
    const block = blockLibrary.find(function (item) {
      return item.type === type;
    });

    if (!block) {
      console.warn("Unknown block type skipped:", type);
      continue;
    }

    const item = document.createElement("article");
    item.className = "composition-item";
    item.innerHTML = `
      <div>
        <h3>${block.label}</h3>
        <p>${block.description}</p>
      </div>
      <button type="button" aria-label="Remove ${block.label} block">Remove</button>
    `;

    // * Added (3a)
    const removeButton = item.querySelector("button");
    removeButton.addEventListener("click", function () {
      removeBlock(index);
    });

    compositionList.appendChild(item);
  }
}

// * Added (3b)
function removeBlock(index) {
  const removedBlock = placedBlocks.splice(index, 1);
  console.log("Removed block:", removedBlock[0]);
  updateBuilder();
}

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

// * Added (2a)
function updateStatus() {
  if (placedBlocks.length === 0) {
    builderStatus.textContent = "Choose a block to start building.";
    return;
  }

  builderStatus.textContent = `${placedBlocks.length} block(s) in the composition.`;
}

// * Added (2)
function updateBuilder() {
  updateStatus();
  renderComposition();
  renderPreview();
}

// ? Refactor (2b)
renderLibrary();
updateBuilder();
