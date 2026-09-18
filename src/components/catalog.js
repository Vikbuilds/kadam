import { PRODUCTS } from '../data/products.js';
import { store } from '../data/store.js';

export function renderCatalog() {
  const section = document.createElement('section');
  section.className = 'section catalog-section';
  section.id = 'catalog';

  let activeCategory = 'all';

  section.innerHTML = `
    <div class="container">
      <div class="catalog-header-wrap">
        <div>
          <div class="tag-brand">
            <span class="pulse-dot"></span>
            <span>DROP #01 • CURATED THREADS</span>
          </div>
          <h2>Select Your Thread</h2>
          <p style="margin-top: 6px;">Engineered for high durability. Woven for street-level expression.</p>
        </div>

        <!-- Filter Tabs -->
        <div class="tabs-nav" id="catalog-tabs">
          <button class="tab-btn active" data-category="all">All Threads (10)</button>
          <button class="tab-btn" data-category="funky">Funky & Pop Art</button>
          <button class="tab-btn" data-category="heritage">Indian Heritage & Craft</button>
          <button class="tab-btn" data-category="reflective">Reflective & Ropes</button>
          <button class="tab-btn" data-category="accessories">Hardware & Locks</button>
        </div>
      </div>

      <!-- Product Cards Grid -->
      <div class="products-grid" id="products-grid-container">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;

  function filterProducts() {
    if (activeCategory === 'all') return PRODUCTS;
    if (activeCategory === 'funky') return PRODUCTS.filter(p => p.category === 'funky');
    if (activeCategory === 'heritage') return PRODUCTS.filter(p => p.category === 'heritage');
    if (activeCategory === 'reflective') return PRODUCTS.filter(p => p.isReflective || p.isRope);
    if (activeCategory === 'accessories') return PRODUCTS.filter(p => p.category === 'accessories');
    return PRODUCTS;
  }

  function renderGrid() {
    const grid = section.querySelector('#products-grid-container');
    const items = filterProducts();

    grid.innerHTML = items.map(product => `
      <div class="kdm-card product-card" data-product-id="${product.id}">
        <div class="card-img-wrapper" data-action="quickview" data-product-id="${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-card-img" />
          <div class="card-overlay-badge">
            <span class="badge badge-${product.badgeType || 'hot'}">${product.badge}</span>
          </div>
          <button class="quick-view-overlay-btn" data-action="quickview" data-product-id="${product.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick Specs
          </button>
        </div>

        <div class="card-body">
          <div class="card-meta-row">
            <span class="product-code">${product.code}</span>
            <div class="rating-stars">
              <span class="star-icon">★</span>
              <span class="rating-val">${product.rating}</span>
              <span class="review-count">(${product.reviewCount})</span>
            </div>
          </div>

          <h3 class="product-title" data-action="quickview" data-product-id="${product.id}">
            ${product.name}
          </h3>
          <p class="product-tagline">${product.tagline}</p>

          <div class="product-specs-chip">
            <span>${product.specs.material.split(',')[0]}</span>
            <span>•</span>
            <span>${product.specs.width || product.specs.dimensions || 'Universal'}</span>
          </div>

          <div class="card-price-row">
            <div class="price-wrap">
              <span class="price-current">₹${product.price}</span>
              ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice}</span>` : ''}
            </div>
            <div class="card-actions-group">
              <button 
                class="btn btn-outline btn-sm add-bundle-btn" 
                data-product-id="${product.id}"
                title="Add to 3-Piece Bundle"
              >
                + Bundle
              </button>
              <button 
                class="btn btn-saffron btn-sm cop-thread-btn" 
                data-product-id="${product.id}"
              >
                Cop
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    attachGridEvents();
  }

  function attachGridEvents() {
    // Quickview click
    section.querySelectorAll('[data-action="quickview"]').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = el.getAttribute('data-product-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          store.emit('openPDP', prod);
        }
      });
    });

    // Cop button (instant add to cart)
    section.querySelectorAll('.cop-thread-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          store.addToCart(prod);
          store.emit('openCart');
        }
      });
    });

    // Add to Bundle button
    section.querySelectorAll('.add-bundle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          store.addToBundle(prod);
          // Smooth scroll to bundle section if not visible
          const bundleEl = document.getElementById('bundle');
          if (bundleEl && window.innerWidth <= 768) {
            bundleEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // Filter tab clicks
  const tabs = section.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      renderGrid();
    });
  });

  // Initial render
  setTimeout(() => renderGrid(), 0);

  return section;
}
