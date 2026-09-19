/**
 * goatCatalogPage.js
 * Signature 1:1 GOAT Catalog Page UI:
 * - Floating Return Pill Bar
 * - Header (GOAT logo, TYPE TO SEARCH, BAG counter)
 * - 4-Column Dropdown Filter Bar (ALL, HERITAGE, FUNKY, ACCESSORIES)
 * - Signature 4-Column Bordered Product Grid
 * - Pitch-Black GOAT Footer
 */
import { PRODUCTS } from '../data/products.js';
import { store } from '../data/store.js';

export function renderGoatCatalogPage(onBackToStory) {
  const container = document.createElement('div');
  container.className = 'goat-page-container';
  container.id = 'goat-page';

  let currentCategory = 'all';
  let searchQuery = '';

  container.innerHTML = `
    <!-- 1. Kadam Top Bar Header -->
    <header class="goat-header">
      <div class="goat-header-inner">
        <div class="goat-header-left">
          <span class="goat-logo-text" id="goat-nav-home" style="cursor: pointer;" title="Kadam Culture">KADAM</span>
        </div>
        <div class="goat-header-center">
          <input 
            type="text" 
            id="goat-type-search" 
            class="goat-search-field" 
            placeholder="TYPE TO SEARCH" 
            autocomplete="off"
            spellcheck="false"
          />
        </div>
        <div class="goat-header-right">
          <button class="goat-dots-btn" id="goat-cart-btn" aria-label="Cart">
            BAG (<span id="goat-cart-count">0</span>)
          </button>
        </div>
      </div>
    </header>

    <!-- 3. 4-Column Dropdown Filter Bar -->
    <nav class="goat-filter-bar-wrap">
      <div class="goat-filter-bar-grid">
        <div class="goat-filter-cell active" data-filter="all">
          <span>ALL PRODUCTS</span>
          <span class="goat-arrow">∨</span>
        </div>
        <div class="goat-filter-cell" data-filter="heritage">
          <span>HERITAGE WEAVES</span>
          <span class="goat-arrow">∨</span>
        </div>
        <div class="goat-filter-cell" data-filter="funky">
          <span>STREET & FUNKY</span>
          <span class="goat-arrow">∨</span>
        </div>
        <div class="goat-filter-cell" data-filter="accessories">
          <span>ACCESSORIES</span>
          <span class="goat-arrow">∨</span>
        </div>
      </div>
    </nav>

    <!-- 4. Signature 4-Column Product Grid -->
    <main class="goat-grid-section" style="min-height: 55vh; background: #FFFFFF;">
      <div class="goat-sneaker-grid" id="goat-product-grid">
        <!-- Dynamic Product Cards populated here -->
      </div>
    </main>

    <!-- 5. Pitch-Black GOAT Footer -->
    <footer class="goat-footer-black">
      <div class="goat-footer-inner">
        <div class="goat-footer-left">
          <div class="goat-footer-heading">SIGN UP FOR NEWSLETTER</div>
          <div class="goat-newsletter-box">
            <input type="email" placeholder="" class="goat-newsletter-input" />
            <span class="goat-cursor-blink">|</span>
          </div>
          <div class="goat-social-row">
            <a href="#" class="goat-social-icon" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="goat-social-icon" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="goat-social-icon" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
              </svg>
            </a>
          </div>
        </div>

        <div class="goat-footer-middle">
          <ul class="goat-footer-nav-list">
            <li><a href="#">ABOUT KADAM</a></li>
            <li><a href="#">AUTHENTICITY</a></li>
            <li><a href="#">GUARANTEE</a></li>
          </ul>
        </div>

        <div class="goat-footer-right">
          <ul class="goat-footer-nav-list">
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">SUPPORT</a></li>
            <li><a href="#">PRIVACY TERMS</a></li>
          </ul>
          <div class="goat-footer-subtext">KADAM CULTURE LAB © 2026</div>
        </div>
      </div>
    </footer>
  `;

  function renderGrid() {
    const grid = container.querySelector('#goat-product-grid');
    if (!grid) return;

    const filtered = PRODUCTS.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const matchSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 100px 20px; text-align: center; color: #767676; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;">
          NO PRODUCTS FOUND MATCHING "${searchQuery.toUpperCase()}".
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'goat-card';
      card.dataset.id = product.id;

      card.innerHTML = `
        <div class="goat-card-img-box">
          <img src="${product.image}" alt="${product.name}" class="goat-card-img" loading="lazy" />
        </div>
        <div class="goat-card-footer">
          <div class="goat-card-title-group">
            <span class="goat-title-line">${product.code}</span>
            <span class="goat-title-line sub">${product.name}</span>
          </div>
          <div class="goat-card-price-tag">₹${product.price}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        store.emit('openProductDrawer', product);
      });

      grid.appendChild(card);
    });
  }

  // Bind filter tab clicks
  const filterCells = container.querySelectorAll('.goat-filter-cell');
  filterCells.forEach(cell => {
    cell.addEventListener('click', () => {
      filterCells.forEach(c => c.classList.remove('active'));
      cell.classList.add('active');
      currentCategory = cell.dataset.filter || 'all';
      renderGrid();
    });
  });

  // Bind live search
  const searchInput = container.querySelector('#goat-type-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderGrid();
    });
  }

  // Cart button click
  const cartBtn = container.querySelector('#goat-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      if (PRODUCTS.length > 0) store.emit('openProductDrawer', PRODUCTS[0]);
    });
  }

  // Update cart count
  function updateCartBadge() {
    const badge = container.querySelector('#goat-cart-count');
    if (badge) {
      badge.textContent = store.getCartSummary().totalItems;
    }
  }

  store.on('cartUpdated', updateCartBadge);
  updateCartBadge();

  // Navigation handlers
  const backBtn = container.querySelector('#goat-nav-back');
  if (backBtn && onBackToStory) backBtn.addEventListener('click', onBackToStory);

  const homeBtn = container.querySelector('#goat-nav-home');
  if (homeBtn && onBackToStory) homeBtn.addEventListener('click', onBackToStory);

  renderGrid();

  return container;
}
