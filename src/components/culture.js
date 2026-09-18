export function renderCulture() {
  const section = document.createElement('section');
  section.className = 'section culture-section';
  section.id = 'culture';

  section.innerHTML = `
    <div class="container">
      <div class="culture-header">
        <div class="tag-brand">
          <span class="pulse-dot"></span>
          <span>UNBOXING & HARDWARE KIT</span>
        </div>
        <h2>The Unboxing Experience</h2>
        <p style="font-size: 16px; color: var(--text-secondary); max-width: 620px; margin: 12px auto 0; font-family: var(--font-body);">
          Every drop arrives inside a collectible metal sliding box complete with custom aglet hardware, micro tool, and street sticker pack.
        </p>
      </div>

      <div class="culture-grid">
        <!-- Feature 1: Metal Tin Box & Hangtag -->
        <div class="culture-card card-large">
          <div class="culture-card-img-wrap" style="background: #FAFAFB;">
            <div class="tin-box-illustration">
              <div class="tin-body">
                <div class="tin-lid-groove"></div>
                <div class="tin-brand-logo">कदम</div>
                <div class="tin-brand-sub">STUDIO EDITION • 100% COTTON WAYS</div>
                <div class="tin-hangtag">
                  <span class="hangtag-string"></span>
                  <span class="hangtag-label">RAW LINEN #0492</span>
                </div>
              </div>
            </div>
          </div>
          <div class="culture-card-content">
            <span class="badge badge-metal">Collectible Tinware</span>
            <h3>Sliding Matte Metal Box & Raw Linen Hangtag</h3>
            <p>
              Zero disposable plastic bags. Your pair is encased in a reusable heavy-gauge steel sliding tin with custom raw linen brand hangtag detailing edition number.
            </p>
          </div>
        </div>

        <!-- Feature 2: Micro Screwdriver Kit & 8 Metal Tips -->
        <div class="culture-card">
          <div class="culture-card-img-wrap" style="background: #F4F4F6;">
            <div class="hardware-kit-preview">
              <div class="aglet-row">
                <span class="mini-aglet aglet-matte-black"></span>
                <span class="mini-aglet aglet-gunmetal"></span>
                <span class="mini-aglet aglet-brass"></span>
                <span class="mini-aglet aglet-silver"></span>
              </div>
              <div class="mini-screwdriver">
                <span class="tool-handle"></span>
                <span class="tool-shaft"></span>
              </div>
              <span class="kit-count-pill">8 Screw-on Tips + Driver</span>
            </div>
          </div>
          <div class="culture-card-content">
            <span class="badge badge-hot">Hardware Kit</span>
            <h3>Micro Screwdriver & Screw-on Aglet Set</h3>
            <p>
              Includes 8 precision screw-on brass metal aglets (4 Gunmetal, 4 Brass) and a mini screwdriver kit for easy customization.
            </p>
          </div>
        </div>

        <!-- Feature 3: Holographic Sticker Pack & Guide -->
        <div class="culture-card">
          <div class="culture-card-img-wrap" style="background: #F8F9FB;">
            <div class="sticker-pack-preview">
              <div class="holo-sticker sticker-1">कदम STICKER PACK</div>
              <div class="holo-sticker sticker-2">TIE THE NARRATIVE</div>
              <div class="holo-sticker sticker-3">HORN OK PLEASE ⚡</div>
            </div>
          </div>
          <div class="culture-card-content">
            <span class="badge badge-pink">Street Collectable</span>
            <h3>Die-Cut Holographic Sticker Pack</h3>
            <p>
              Includes iconic "कदम STICKER PACK", "TIE THE NARRATIVE", and "HORN OK PLEASE" vinyl stickers for laptops, cases, and boards.
            </p>
          </div>
        </div>
      </div>

      <!-- Street Quote Editorial Band -->
      <div class="culture-quote-band">
        <div class="quote-watermark">कदम</div>
        <blockquote>
          "Sneaker culture in India has lived on imported silhouettes for decades. Kadam Culture puts our trucks, our Chikankari, our Bandhani, and our street stories right where everybody looks: at your feet."
        </blockquote>
        <div class="quote-author">
          <span class="author-name">— The Kadam Culture Manifesto</span>
          <span class="author-city">Bengaluru • Mumbai • New Delhi</span>
        </div>
      </div>
    </div>
  `;

  return section;
}

