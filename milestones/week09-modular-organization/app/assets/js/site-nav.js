const sitePages = [
  { key: "home", href: "index.html", label: "Home" },
  { key: "builder", href: "builder.html", label: "Builder" },
  { key: "about", href: "about.html", label: "About" },
];

function createSiteLink(page, currentPage) {
  const isCurrentPage = page.key === currentPage;

  return `
    <li>
      <a href="${page.href}"${isCurrentPage ? ' class="active" aria-current="page"' : ""}>${page.label}</a>
    </li>
  `;
}

function renderSiteHeader() {
  const header = document.querySelector("#site-header");

  if (!header) {
    return;
  }

  const currentPage = document.body.dataset.page || "";
  const links = sitePages
    .map(function (page) {
      return createSiteLink(page, currentPage);
    })
    .join("");

  header.innerHTML = `
    <nav class="site-nav" aria-label="Primary navigation">
      <a class="site-logo" href="index.html">PageForge</a>
      <ul>${links}</ul>
    </nav>
  `;
}

renderSiteHeader();
