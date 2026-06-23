// C&C Property Care static site interactions
// This file is intentionally small so GitHub Pages can serve the site directly.

document.addEventListener('DOMContentLoaded', () => {
  const yearNodes = document.querySelectorAll('[data-current-year]');
  yearNodes.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
