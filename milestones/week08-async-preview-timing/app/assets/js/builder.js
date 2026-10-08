const blockDefinitions = [
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

const appState = {
  placedBlocks: [],
  previewTimer: null,
};

const dom = {
  libraryPanel: document.querySelector("#library-panel"),
  compositionList: document.querySelector("#composition-list"),
  previewPage: document.querySelector("#preview-page"),
  builderStatus: document.querySelector("#builder-status"),
};

function initBuilder() {
  renderBlockLibrary();
  renderBuilder();
}

function findBlockDefinition(type) {
  return blockDefinitions.find(function (block) {
    return block.type === type;
  });
}

function createBlockButton(block) {
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
  return button;
}

function renderBlockLibrary() {
  dom.libraryPanel.innerHTML = "";

  for (const block of blockDefinitions) {
    dom.libraryPanel.appendChild(createBlockButton(block));
  }
}

function addBlock(type) {
  appState.placedBlocks.push(type);
  console.log("Added block:", type);
  renderBuilder();
}

function removeBlock(index) {
  const removedBlocks = appState.placedBlocks.splice(index, 1);
  console.log("Removed block:", removedBlocks[0]);
  renderBuilder();
}

function renderBuilder() {
  renderStatus();
  renderComposition();
  schedulePreviewRender();
}

function renderStatus() {
  const count = appState.placedBlocks.length;
  dom.builderStatus.textContent =
    count === 0
      ? "Choose a block to start building."
      : `${count} block(s) in the composition.`;
}

function renderComposition() {
  dom.compositionList.innerHTML = "";

  if (appState.placedBlocks.length === 0) {
    dom.compositionList.innerHTML =
      '<p class="empty-message">No blocks added yet.</p>';
    return;
  }

  appState.placedBlocks.forEach(function (type, index) {
    const block = findBlockDefinition(type);

    if (!block) {
      console.warn("Unknown block type skipped:", type);
      return;
    }

    dom.compositionList.appendChild(createCompositionItem(block, index));
  });
}

function createCompositionItem(block, index) {
  const item = document.createElement("article");
  item.className = "composition-item";
  item.innerHTML = `
    <div>
      <h3>${block.label}</h3>
      <p>${block.description}</p>
    </div>
    <button type="button" aria-label="Remove ${block.label} block">Remove</button>
  `;

  const removeButton = item.querySelector("button");
  removeButton.addEventListener("click", function () {
    removeBlock(index);
  });

  return item;
}

function schedulePreviewRender() {
  if (appState.previewTimer !== null) {
    clearTimeout(appState.previewTimer);
  }

  dom.previewPage.innerHTML =
    '<div class="preview-loading">Generating preview...</div>';

  appState.previewTimer = setTimeout(function () {
    renderPreview();
    appState.previewTimer = null;
  }, 600);
}

function renderPreview() {
  dom.previewPage.innerHTML = "";

  if (appState.placedBlocks.length === 0) {
    dom.previewPage.innerHTML =
      '<p class="empty-message">Add a block to see a simple preview.</p>';
    return;
  }

  for (const type of appState.placedBlocks) {
    dom.previewPage.appendChild(createPreviewSection(type));
  }
}

function createPreviewSection(type) {
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
    section.innerHTML = "<h3>Image Placeholder</h3><p>Image content later.</p>";
  } else {
    section.className = "preview-card-row";
    section.innerHTML =
      "<article>Card 1</article><article>Card 2</article><article>Card 3</article>";
  }

  return section;
}

initBuilder();
