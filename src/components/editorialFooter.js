/**
 * editorialFooter.js
 * Pitch-black luxury minimalist footer — Clean & Essential
 */

export function renderEditorialFooter() {
  const footer = document.createElement('footer');
  footer.className = 'mg-footer';

  footer.innerHTML = `
    <div class="mg-footer-top" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 48px;">
      <!-- Brand Column -->
      <div class="mg-footer-brand-col" style="max-width: 540px;">
        <div class="mg-footer-logo">KADAM CULTURE® · कदम</div>
        <p class="mg-footer-tagline">
          Crafting culture from the ground up. Generational Indian handloom art meets iconic sneaker silhouettes through zero-plastic craft and solid brass aglets.
        </p>
      </div>
    </div>

    <div class="mg-footer-bottom">
      <div>© 2026 KADAM CULTURE® (कदम) · ALL RIGHTS RESERVED.</div>
      <div style="display: flex; gap: 24px;">
        <a href="#" class="mg-footer-link">PRIVACY</a>
        <a href="#" class="mg-footer-link">TERMS</a>
      </div>
    </div>
  `;

  return footer;
}
