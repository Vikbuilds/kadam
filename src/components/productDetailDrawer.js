/**
 * productDetailDrawer.js
 * Apple-grade slide-out drawer for product details and collector checkout
 */
import { store } from '../data/store.js';

export function renderProductDetailDrawer() {
  const backdrop = document.createElement('div');
  backdrop.className = 'mg-drawer-backdrop';
  backdrop.id = 'mg-drawer-backdrop';

  let currentProduct = null;
  let selectedLength = '140 cm';

  backdrop.innerHTML = `
    <div class="mg-drawer" id="mg-drawer">
      <div class="mg-drawer-header">
        <div class="mg-drawer-title" id="drawer-code">KADAM CULTURE</div>
        <button class="mg-drawer-close" id="mg-drawer-close" aria-label="Close drawer">✕</button>
      </div>

      <div class="mg-drawer-body">
        <!-- Hero Product Image -->
        <div style="border-radius: 16px; overflow: hidden; height: 260px; background: #fafafa; border: 1px solid #e5e5e8; display: flex; align-items: center; justify-content: center; padding: 16px;">
          <img 
            id="drawer-preview-img"
            src="/assets/af1_chikankari.jpg" 
            alt="Product Preview" 
            style="max-width: 100%; max-height: 100%; object-fit: contain;"
          />
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; gap: 12px;">
            <h3 style="font-family: var(--font-serif-editorial); font-size: 24px; font-weight: 400; line-height: 1.2;" id="drawer-title">Air Force 1 Cultural Lace Kit</h3>
            <span style="font-family: var(--font-mono); font-size: 18px; font-weight: 800; white-space: nowrap;" id="drawer-price">₹449</span>
          </div>
          <p style="font-size: 13px; color: #555555; line-height: 1.55;" id="drawer-desc">
            Engineered exclusively for Air Force 1 silhouettes.
          </p>
        </div>

        <!-- Length Selector -->
        <div>
          <label style="display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px; color: #333333;">
            SELECT LENGTH:
          </label>
          <div style="display: flex; gap: 8px;" id="drawer-length-options">
            <button class="mg-pill-btn primary" data-length="120 cm" style="flex: 1; padding: 10px; font-size: 10.5px;">120 CM (6-7 Eyelets)</button>
            <button class="mg-pill-btn" data-length="140 cm" style="flex: 1; padding: 10px; font-size: 10.5px;">140 CM (8 Eyelets)</button>
            <button class="mg-pill-btn" data-length="160 cm" style="flex: 1; padding: 10px; font-size: 10.5px;">160 CM (High-Tops)</button>
          </div>
        </div>

        <!-- Specifications & Craft -->
        <div style="background: #f9f9f9; border-radius: 14px; padding: 18px; border: 1px solid #e5e5e8;">
          <div style="font-size: 10.5px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; color: #767676;">
            SPECIFICATIONS & CRAFT
          </div>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 12px;" id="drawer-specs">
            <li style="display: flex; justify-content: space-between;">
              <span style="color: #666;">Material:</span>
              <strong style="color: #000;" id="spec-material">100% Jacquard Weave</strong>
            </li>
            <li style="display: flex; justify-content: space-between;">
              <span style="color: #666;">Width:</span>
              <strong style="color: #000;" id="spec-width">8mm Flat Width</strong>
            </li>
            <li style="display: flex; justify-content: space-between;">
              <span style="color: #666;">Aglet Tip:</span>
              <strong style="color: #000;" id="spec-aglet">Gunmetal Solid Alloy</strong>
            </li>
          </ul>
        </div>

        <!-- Add to Cart CTA -->
        <div style="margin-top: auto; padding-top: 16px;">
          <button class="mg-pill-btn primary" id="drawer-add-to-cart" style="width: 100%; padding: 16px; font-size: 12.5px; letter-spacing: 0.12em; background: #000; color: #fff; border: none; border-radius: 9999px; font-weight: 800; cursor: pointer; text-transform: uppercase;">
            ADD TO BAG — ₹449
          </button>
        </div>
      </div>
    </div>
  `;

  // Handle length selection
  const lengthBtns = backdrop.querySelectorAll('#drawer-length-options button');
  lengthBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lengthBtns.forEach(b => b.classList.remove('primary'));
      btn.classList.add('primary');
      selectedLength = btn.dataset.length || '140 cm';
    });
  });

  function closeDrawer() {
    backdrop.classList.remove('active');
    const drawerEl = backdrop.querySelector('#mg-drawer');
    if (drawerEl) drawerEl.classList.remove('active');
  }

  backdrop.querySelector('#mg-drawer-close').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeDrawer();
  });

  const addBtn = backdrop.querySelector('#drawer-add-to-cart');
  addBtn.addEventListener('click', () => {
    if (currentProduct) {
      store.addToCart(currentProduct, { length: selectedLength });
      addBtn.innerText = 'ADDED TO BAG ✓';
      addBtn.style.background = '#16a34a';
      setTimeout(() => {
        if (currentProduct) addBtn.innerText = `ADD TO BAG — ₹${currentProduct.price}`;
        addBtn.style.background = '#000';
        closeDrawer();
      }, 900);
    }
  });

  // Listen for openProductDrawer event
  store.on('openProductDrawer', (product) => {
    openDrawer(product);
  });

  function openDrawer(product) {
    if (product) {
      currentProduct = product;
      const codeEl = backdrop.querySelector('#drawer-code');
      if (codeEl) codeEl.textContent = product.code || 'KADAM CULTURE';
      const titleEl = backdrop.querySelector('#drawer-title');
      if (titleEl) titleEl.textContent = product.name;
      const priceEl = backdrop.querySelector('#drawer-price');
      if (priceEl) priceEl.textContent = `₹${product.price}`;
      const descEl = backdrop.querySelector('#drawer-desc');
      if (descEl) descEl.textContent = product.description;
      const imgEl = backdrop.querySelector('#drawer-preview-img');
      if (imgEl && product.image) imgEl.src = product.image;

      const specMat = backdrop.querySelector('#spec-material');
      if (specMat) specMat.textContent = product.specs?.material || '100% Jacquard';
      const specWidth = backdrop.querySelector('#spec-width');
      if (specWidth) specWidth.textContent = product.specs?.width || '8mm Flat';
      const specAglet = backdrop.querySelector('#spec-aglet');
      if (specAglet) specAglet.textContent = product.agletOptions?.[0]?.name || 'Solid Metal';

      if (addBtn) addBtn.innerText = `ADD TO BAG — ₹${product.price}`;
    }
    backdrop.classList.add('active');
    const drawerEl = backdrop.querySelector('#mg-drawer');
    if (drawerEl) drawerEl.classList.add('active');
  }

  return {
    element: backdrop,
    open: openDrawer,
    close: closeDrawer
  };
}
