/**
 * editorialFooter.js
 * Pitch-black luxury minimalist footer
 */

export function renderEditorialFooter() {
  const footer = document.createElement('footer');
  footer.className = 'mg-footer';

  footer.innerHTML = `
    <div class="mg-footer-top">
      <!-- Brand Column -->
      <div class="mg-footer-brand-col">
        <div class="mg-footer-logo">KADAM · कदम</div>
        <p class="mg-footer-tagline">
          India's first culture-led sneaker lace laboratory. Elevating the Air Force 1 and classic street silhouettes through generational handloom art and zero-plastic craft.
        </p>
        <div style="margin-top: 12px;">
          <span style="font-family: var(--font-mono); font-size: 11px; color: #a1a1aa; letter-spacing: 0.15em;">
            NEW DELHI · TOKYO · MILAN
          </span>
        </div>
      </div>

      <!-- Navigation Column 1 -->
      <div>
        <div class="mg-footer-col-title">COLLECTIONS</div>
        <ul class="mg-footer-links">
          <li><a href="#" class="mg-footer-link">Air Force 1 (140cm)</a></li>
          <li><a href="#" class="mg-footer-link">Adidas Samba (120cm)</a></li>
          <li><a href="#" class="mg-footer-link">Air Jordan 1 High (160cm)</a></li>
          <li><a href="#" class="mg-footer-link">Solid Brass Dubraes</a></li>
          <li><a href="#" class="mg-footer-link">CNC Aglet Repair Kits</a></li>
        </ul>
      </div>

      <!-- Navigation Column 2 -->
      <div>
        <div class="mg-footer-col-title">PROVENANCE</div>
        <ul class="mg-footer-links">
          <li><a href="#" class="mg-footer-link">Artisan Lineage</a></li>
          <li><a href="#" class="mg-footer-link">Botanical Dye Index</a></li>
          <li><a href="#" class="mg-footer-link">Plastic-Free Audit</a></li>
          <li><a href="#" class="mg-footer-link">Lace Care Protocol</a></li>
          <li><a href="#" class="mg-footer-link">Custom Commissions</a></li>
        </ul>
      </div>

      <!-- Newsletter Column -->
      <div>
        <div class="mg-footer-col-title">MEMBERSHIP</div>
        <p style="font-size: 12.5px; color: #888888; line-height: 1.5; margin-bottom: 16px;">
          Receive private drop alerts, unreleased jacquard samples, and gallery invitations.
        </p>
        <div style="display: flex; gap: 8px;">
          <input 
            type="email" 
            placeholder="Enter your email" 
            style="flex: 1; padding: 10px 14px; border-radius: 9999px; background: #18181b; border: 1px solid #27272a; color: #ffffff; font-size: 12px; outline: none;"
          />
          <button class="mg-pill-btn primary" style="background: #ffffff; color: #000000; border-color: #ffffff; padding: 10px 18px; font-size: 11px;">
            JOIN →
          </button>
        </div>
      </div>
    </div>

    <div class="mg-footer-bottom">
      <div>© 2026 KADAM CULTURE (कदम) · ALL RIGHTS RESERVED.</div>
      <div style="display: flex; gap: 24px;">
        <a href="#" class="mg-footer-link">PRIVACY</a>
        <a href="#" class="mg-footer-link">TERMS</a>
        <a href="#" class="mg-footer-link">PROVENANCE REPORT</a>
      </div>
    </div>
  `;

  return footer;
}
