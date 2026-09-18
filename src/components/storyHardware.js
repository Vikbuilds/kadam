export function renderStoryHardware() {
  const section = document.createElement('section');
  section.className = 'story-section';
  section.id = 'hardware';

  section.innerHTML = `
    <div class="story-container">
      <div class="story-label">Act III • The Packaging Ritual</div>
      <h2 class="story-heading">Tactile Unboxing & Hardware</h2>
      <p class="story-subtext">
        Every Kadam Culture drop arrives inside a collectible heavy-gauge steel tin complete with custom metal aglet hardware and street stickers. Zero plastic bags.
      </p>

      <div class="unboxing-grid">
        <!-- Card 1: Matte Steel Tin -->
        <div class="unboxing-card">
          <div class="unboxing-visual">
            <div class="tin-illustration">
              <span class="tin-logo-text">कदम</span>
              <span class="tin-sub-text">LIMITED TINWARE</span>
            </div>
          </div>
          <span class="story-label" style="margin-bottom: 8px;">Collectible Storage</span>
          <h3 style="font-family: var(--font-heading); font-size: 20px; font-weight: 800; margin-bottom: 8px;">Sliding Matte Metal Box</h3>
          <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
            A heavy-gauge steel tin with a sliding top and embossed Devanagari logo. Built to protect your laces or store your sneaker accessories for life.
          </p>
        </div>

        <!-- Card 2: Screw-On Aglets & Screwdriver -->
        <div class="unboxing-card">
          <div class="unboxing-visual">
            <div class="aglets-row">
              <div class="aglet-pill aglet-gunmetal" title="Gunmetal Silver"></div>
              <div class="aglet-pill aglet-brass" title="Antique Brass"></div>
              <div class="aglet-pill aglet-black" title="Matte Black"></div>
              <div class="aglet-pill aglet-saffron" title="Neon Saffron"></div>
            </div>
          </div>
          <span class="story-label" style="margin-bottom: 8px;">Custom Hardware</span>
          <h3 style="font-family: var(--font-heading); font-size: 20px; font-weight: 800; margin-bottom: 8px;">8 Aglets & Micro Screwdriver</h3>
          <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
            Includes 8 precision screw-on stainless steel aglet tips in Gunmetal & Brass, plus a mini branded magnetic screwdriver for 2-minute customization.
          </p>
        </div>

        <!-- Card 3: Holographic Sticker Pack -->
        <div class="unboxing-card">
          <div class="unboxing-visual">
            <div class="stickers-preview">
              <div class="sticker-tag">कदम STICKER PACK</div>
              <div class="sticker-tag" style="border-color: #EAB308; color: #EAB308;">TIE THE NARRATIVE</div>
              <div class="sticker-tag" style="border-color: #22C55E; color: #22C55E;">HORN OK PLEASE ⚡</div>
            </div>
          </div>
          <span class="story-label" style="margin-bottom: 8px;">Street Collectible</span>
          <h3 style="font-family: var(--font-heading); font-size: 20px; font-weight: 800; margin-bottom: 8px;">Die-Cut Vinyl Stickers</h3>
          <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
            High-durability holographic vinyl sticker pack celebrating street signage, truck slogans, and Devanagari typography for laptops, cases, and boards.
          </p>
        </div>
      </div>
    </div>
  `;

  return section;
}
