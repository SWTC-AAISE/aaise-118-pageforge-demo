# Week 02 CSS Foundation

Source:
`week01-refine-structured-pages`

Course Week:
Week 2 - CSS foundations and shared styling

Purpose:
Preserve the first styled PageForge milestone. The project remains static, but the three HTML pages now share a single stylesheet and begin to feel like one intentional site.

Monday Concept Connection:
- Monday introduces CSS rules, selectors, colors, typography, spacing, borders, and class names.
- PageForge shows those ideas through a shared stylesheet linked from every page.

Wednesday Iteration / Deepening:
- The end-of-week version uses repeated classes such as `section`, `content-width`, `card`, and `button`.
- The builder page becomes visually easier to scan while staying non-interactive.

What Changed:
- Added `assets/css/styles.css`.
- Linked the stylesheet from `index.html`, `builder.html`, and `about.html`.
- Added consistent navigation, hero, section, card, and footer styling.
- Introduced reusable classes for repeated visual patterns.

What This Demonstrates:
- A single CSS file can control multiple pages.
- Class selectors make repeated design patterns easier to maintain.
- Styling can improve readability before layout or JavaScript are added.

Intentional Limits:
- No responsive breakpoints yet.
- No JavaScript yet.
- The builder page is still a styled plan, not a functioning tool.
- Some layout uses simple grid columns but does not yet address small screens.

Optional PageForge Video Notes:
1. Open the Week 1 milestone first or describe it briefly as plain HTML.
2. Show the `<link rel="stylesheet">` line in each page.
3. Point out shared classes and how changing one CSS rule affects repeated elements.
4. Keep the focus on visual consistency, not advanced layout.

What Not To Over-Explain Yet:
- Do not introduce media queries.
- Do not discuss JavaScript behavior.
- Do not frame the builder panels as finished application layout.

Verification:
- Opened as static HTML files.
- Confirmed all pages link to `assets/css/styles.css`.
- Confirmed no JavaScript is required for this milestone.
