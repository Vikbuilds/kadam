import { SNEAKERS } from '../data/sneakers.js';
import { PRODUCTS } from '../data/products.js';

export function renderStoryStudio() {
  const section = document.createElement('section');
  section.className = 'story-section';
  section.id = 'studio';

  // Select key drop products for studio selector
  const STUDIO_LACES = [
    { id: 'kdm-h01', name: 'Lucknowi Chikankari Glow', img: '/assets/kdm_h01_chikankari_1788805059972.jpg', tag: 'Chikankari Glow', type: '100% Cotton Jacquard' },
    { id: 'kdm-f01', name: 'Horn OK Please Truck Art', img: '/assets/kdm_f01_horn_ok_1788804957894.jpg', tag: 'Horn OK Please', type: 'High-Vis Jacquard' },
    { id: 'kdm-h02', name: 'Ajrakh Astronomical Matrix', img: '/assets/kdm_h02_ajrakh_1788805088486.jpg', tag: 'Ajrakh Matrix', type: 'Natural Indigo Print' },
    { id: 'kdm-h04', name: 'Bandhani Flame Tie-Dye', img: '/assets/kdm_h04_bandhani_1788805144538.jpg', tag: 'Bandhani Flame', type: 'Liquid Satin' },
    { id: 'kdm-f02', name: 'Gully Cyber-Neon (3M)', img: '/assets/kdm_f02_gully_neon_1788804982170.jpg', tag: 'Gully Cyber-Neon', type: '3M Reflective Nylon' },
    { id: 'kdm-f03', name: 'Cutting Chai Speckle', img: '/assets/kdm_f03_chai_speckle_1788805007580.jpg', tag: 'Chai Speckle', type: 'Braided Rope' }
  ];

  const STUDIO_AGLETS = [
    { id: 'brass', name: 'Antique Brass', color: '#D97706', previewClass: 'aglet-brass' },
    { id: 'gunmetal', name: 'Gunmetal Silver', color: '#64748B', previewClass: 'aglet-gunmetal' },
    { id: 'black', name: 'Matte Black', color: '#1E293B', previewClass: 'aglet-black' },
    { id: 'saffron', name: 'Neon Saffron', color: '#FF5722', previewClass: 'aglet-saffron' }
  ];

  section.innerHTML = `
    <div class="story-container">
      <div class="story-label">Act IV • Photorealistic Studio</div>
      <h2 class="story-heading">The Kadam Studio Previewer</h2>
      <p class="story-subtext">
        Match authentic high-resolution Indian heritage thread drops with iconic street sneaker silhouettes.
      </p>

      <div class="studio-box">
        <!-- Realistic Dual Photo Showcase -->
        <div class="studio-realistic-stage">
          <div class="studio-photo-card sneaker-card">
            <span class="studio-badge" id="studio-sneaker-badge">AIR FORCE 1 (LOW)</span>
            <img id="studio-sneaker-img" src="${SNEAKERS[0].image}" alt="Sneaker Silhouette" />
          </div>

          <div class="studio-photo-card lace-card">
            <span class="studio-badge" id="studio-lace-badge">CHIKANKARI GLOW</span>
            <img id="studio-lace-img" src="${STUDIO_LACES[0].img}" alt="Kadam Lace Texture" />
            <div class="studio-aglet-overlay" id="studio-aglet-tag">
              <span class="mini-aglet-dot aglet-brass"></span>
              <span id="studio-aglet-text">Antique Brass Tips</span>
            </div>
          </div>
        </div>

        <!-- Studio Control Panel -->
        <div class="studio-controls">
          <div class="studio-readout-header">
            <span class="story-label" style="margin-bottom: 4px;">CONFIGURATION</span>
            <h3 id="studio-combination-title" style="font-family: var(--font-heading); font-size: 22px; font-weight: 800; color: #FFF;">
              Lucknowi Chikankari Glow × Air Force 1
            </h3>
            <p id="studio-combination-sub" style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
              100% Cotton Jacquard • Antique Brass Hardware
            </p>
          </div>

          <!-- Selector 1: Sneaker Silhouette -->
          <div class="control-group">
            <span class="control-label">1. SELECT SNEAKER SILHOUETTE</span>
            <div class="selector-grid" id="sneaker-selector-grid">
              ${SNEAKERS.map((s, idx) => `
                <button class="selector-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                  ${s.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Selector 2: Kadam Narrative Drop -->
          <div class="control-group">
            <span class="control-label">2. SELECT KADAM CULTURAL DROP</span>
            <div class="selector-grid" id="lace-selector-grid">
              ${STUDIO_LACES.map((l, idx) => `
                <button class="selector-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                  ${l.tag}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Selector 3: Hardware Tip Finish -->
          <div class="control-group">
            <span class="control-label">3. SELECT METAL AGLET FINISH</span>
            <div class="selector-grid" id="aglet-selector-grid">
              ${STUDIO_AGLETS.map((a, idx) => `
                <button class="selector-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                  ${a.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Interactivity logic for realistic studio preview
  setTimeout(() => {
    let activeSneaker = SNEAKERS[0];
    let activeLace = STUDIO_LACES[0];
    let activeAglet = STUDIO_AGLETS[0];

    const sneakerImg = section.querySelector('#studio-sneaker-img');
    const sneakerBadge = section.querySelector('#studio-sneaker-badge');
    const laceImg = section.querySelector('#studio-lace-img');
    const laceBadge = section.querySelector('#studio-lace-badge');
    const agletText = section.querySelector('#studio-aglet-text');
    const agletDot = section.querySelector('.mini-aglet-dot');
    const comboTitle = section.querySelector('#studio-combination-title');
    const comboSub = section.querySelector('#studio-combination-sub');

    function updateRealisticStudio() {
      if (sneakerImg) sneakerImg.src = activeSneaker.image;
      if (sneakerBadge) sneakerBadge.textContent = activeSneaker.name.toUpperCase();
      if (laceImg) laceImg.src = activeLace.img;
      if (laceBadge) laceBadge.textContent = activeLace.tag.toUpperCase();

      if (agletText) agletText.textContent = `${activeAglet.name} Tips`;
      if (agletDot) {
        agletDot.className = `mini-aglet-dot ${activeAglet.previewClass}`;
      }

      if (comboTitle) {
        comboTitle.textContent = `${activeLace.name} × ${activeSneaker.name}`;
      }
      if (comboSub) {
        comboSub.textContent = `${activeLace.type} • ${activeAglet.name} Hardware`;
      }
    }

    // Sneaker buttons
    section.querySelectorAll('#sneaker-selector-grid .selector-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        section.querySelectorAll('#sneaker-selector-grid .selector-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSneaker = SNEAKERS[btn.dataset.index];
        updateRealisticStudio();
      });
    });

    // Lace buttons
    section.querySelectorAll('#lace-selector-grid .selector-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        section.querySelectorAll('#lace-selector-grid .selector-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeLace = STUDIO_LACES[btn.dataset.index];
        updateRealisticStudio();
      });
    });

    // Aglet buttons
    section.querySelectorAll('#aglet-selector-grid .selector-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        section.querySelectorAll('#aglet-selector-grid .selector-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeAglet = STUDIO_AGLETS[btn.dataset.index];
        updateRealisticStudio();
      });
    });

    updateRealisticStudio();
  }, 50);

  return section;
}
