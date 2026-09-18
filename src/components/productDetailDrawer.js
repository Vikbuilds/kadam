/**
 * productDetailDrawer.js
 * Apple-grade slide-out drawer for product details and collector checkout
 */

export function renderProductDetailDrawer() {
  const backdrop = document.createElement('div');
  backdrop.className = 'mg-drawer-backdrop';
  backdrop.id = 'mg-drawer-backdrop';

  backdrop.innerHTML = `
    <div class="mg-drawer" id="mg-drawer">
      <div class="mg-drawer-header">
        <div class="mg-drawer-title">THE AF1 EDITION 1.0</div>
        <button class="mg-drawer-close" id="mg-drawer-close" aria-label="Close drawer">✕</button>
      </div>

      <div class="mg-drawer-body">
        <!-- Hero Product Image -->
        <div style="border-radius: 20px; overflow: hidden; height: 260px; background: #f2f2f5;">
          <img 
            id="drawer-preview-img"
            src="/assets/af1_chikankari.jpg" 
            alt="Air Force 1 Woven Laces" 
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
            <h3 style="font-family: var(--font-serif-editorial); font-size: 28px; font-weight: 400;">Air Force 1 Cultural Lace Kit</h3>
            <span style="font-family: var(--font-mono); font-size: 16px; font-weight: 700;">₹899</span>
          </div>
          <p style="font-size: 13px; color: var(--mg-text-secondary); line-height: 1.5;">
            Engineered exclusively for Nike Air Force 1 low & mid silhouettes. Features dense organic cotton jacquard weave, heavy brass aglet tips, and custom dubrae lock.
          </p>
        </div>

        <!-- Colorway Selector -->
        <div>
          <label style="display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">
            SELECT COLORWAY / ARTISANAL CLUSTER:
          </label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;" id="drawer-colorway-grid">
            <button class="mg-pill-btn primary" data-name="Chikankari Ivory" data-img="/assets/af1_chikankari.jpg" style="padding: 10px; font-size: 11px;">
              Chikankari Ivory
            </button>
            <button class="mg-pill-btn" data-name="Ajrakh Indigo" data-img="/assets/af1_ajrakh.jpg" style="padding: 10px; font-size: 11px;">
              Ajrakh Indigo
            </button>
            <button class="mg-pill-btn" data-name="Horn OK Truck Art" data-img="/assets/af1_horn_ok.jpg" style="padding: 10px; font-size: 11px;">
              Truck Art Neon
            </button>
            <button class="mg-pill-btn" data-name="Bandhani Ochre" data-img="/assets/catalog_bandhani.jpg" style="padding: 10px; font-size: 11px;">
              Bandhani Ochre
            </button>
          </div>
        </div>

        <!-- Material Provenance List -->
        <div style="background: var(--mg-surface-subtle); border-radius: 16px; padding: 20px; border: 1px solid var(--mg-border);">
          <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; color: var(--mg-text-muted);">
            SPECIFICATIONS & CRAFT
          </div>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 12.5px;">
            <li style="display: flex; justify-content: space-between;">
              <span style="color: var(--mg-text-secondary);">Length:</span>
              <strong style="font-family: var(--font-mono);">140 CM (8 Eyelets)</strong>
            </li>
            <li style="display: flex; justify-content: space-between;">
              <span style="color: var(--mg-text-secondary);">Weave:</span>
              <strong>Double Jacquard Flat</strong>
            </li>
            <li style="display: flex; justify-content: space-between;">
              <span style="color: var(--mg-text-secondary);">Aglet Tip:</span>
              <strong>Laser-Engraved Solid Brass</strong>
            </li>
            <li style="display: flex; justify-content: space-between;">
              <span style="color: var(--mg-text-secondary);">Plastic Content:</span>
              <strong>0.00% (Certified Zero)</strong>
            </li>
          </ul>
        </div>

        <!-- Add to Cart CTA -->
        <div style="margin-top: auto;">
          <button class="mg-pill-btn primary" id="drawer-add-to-cart" style="width: 100%; padding: 16px; font-size: 13px; letter-spacing: 0.08em;">
            ADD TO BAG — ₹899
          </button>
        </div>
      </div>
    </div>
  `;

  // Handle colorway switching
  const previewImg = backdrop.querySelector('#drawer-preview-img');
  const colorwayBtns = backdrop.querySelectorAll('#drawer-colorway-grid button');

  colorwayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorwayBtns.forEach(b => b.classList.remove('primary'));
      btn.classList.add('primary');
      if (previewImg && btn.dataset.img) {
        previewImg.src = btn.dataset.img;
      }
    });
  });

  // Handle close
  function closeDrawer() {
    backdrop.classList.remove('active');
    backdrop.querySelector('#mg-drawer').classList.remove('active');
  }

  backdrop.querySelector('#mg-drawer-close').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeDrawer();
  });

  // Add to cart click
  const addBtn = backdrop.querySelector('#drawer-add-to-cart');
  addBtn.addEventListener('click', () => {
    addBtn.innerText = 'ADDED TO BAG ✓';
    addBtn.style.background = '#16a34a';
    setTimeout(() => {
      addBtn.innerText = 'ADD TO BAG — ₹899';
      addBtn.style.background = '';
      closeDrawer();
      const cartBtn = document.getElementById('nav-btn-cart');
      if (cartBtn) cartBtn.innerText = 'Cart (1)';
    }, 1200);
  });

  return {
    element: backdrop,
    open: (item) => {
      if (item && item.silhouette) {
        const titleHeader = backdrop.querySelector('.mg-drawer-title');
        if (titleHeader) titleHeader.textContent = `${item.silhouette.toUpperCase()} EDITION`;
        const titleEl = backdrop.querySelector('.mg-drawer-body h3');
        if (titleEl) titleEl.textContent = `${item.silhouette} Cultural Lace Kit`;
        const priceEl = backdrop.querySelector('.mg-drawer-body span[style*="font-mono"]');
        if (priceEl) priceEl.textContent = item.price || '₹899';
        const copyEl = backdrop.querySelector('.mg-drawer-body p');
        if (copyEl && item.laceStyle) {
          copyEl.textContent = `Paired with ${item.laceStyle}. Engineered with dense handloom jacquard weave, solid brass aglet tips, and certified zero-plastic craft.`;
        }
        if (previewImg && item.img) previewImg.src = item.img;
      }
      backdrop.classList.add('active');
      backdrop.querySelector('#mg-drawer').classList.add('active');
    },
    close: closeDrawer
  };
}
