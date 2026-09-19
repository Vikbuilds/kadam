import './styles/index.css';

import { store } from './data/store.js';
import { renderOpenerModal } from './components/openerModal.js';
import { renderLandingNavbar, renderHeroBanner, renderMegaHeadline } from './components/landingHero.js';
import { renderEditorialFooter } from './components/editorialFooter.js';
import { renderGoatCatalogPage } from './pages/goatCatalogPage.js';
import { renderProductDetailDrawer } from './components/productDetailDrawer.js';
import { renderSneakerLineBlockGrid } from './components/sneakerLineBlockGrid.js';
import { renderCrowThiefSection } from './components/crowThiefSection.js';

let currentView = 'story'; // 'story' | 'catalog'

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Aggressively purge any rogue elements attached to body
  Array.from(document.body.children).forEach(child => {
    if (
      child.id !== 'app' && 
      child.id !== 'mg-drawer-backdrop' && 
      child.id !== 'mg-opener' && 
      child.tagName !== 'SCRIPT'
    ) {
      child.remove();
    }
  });
  document.querySelectorAll('.modal-overlay, .upi-modal-overlay, .pdp-modal-overlay, .guarantee-item, .pdp-guarantee-box, .upi-methods-section, .checkout-address-card').forEach(el => el.remove());

  // Mount clean Apple-grade Product Detail & Cart Drawer
  let drawer = null;
  const existingDrawer = document.getElementById('mg-drawer-backdrop');
  if (existingDrawer) existingDrawer.remove();
  drawer = renderProductDetailDrawer();
  document.body.appendChild(drawer.element);

  // Mount Apple Opener Modal on initial session load
  if (!sessionStorage.getItem('mg_opener_seen') && !document.getElementById('mg-opener')) {
    const opener = renderOpenerModal(() => {
      sessionStorage.setItem('mg_opener_seen', 'true');
    });
    document.body.appendChild(opener);
  }

  // Check URL hash for initial route
  const hash = window.location.hash.toLowerCase();
  if (hash === '#/catalog' || hash === '#/shop' || hash === '#catalog') {
    currentView = 'catalog';
  } else {
    currentView = 'story';
  }

  function setView(view) {
    currentView = view;
    window.location.hash = view === 'catalog' ? '#/catalog' : '#/story';
    renderView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.toLowerCase();
    if (newHash === '#/catalog' || newHash === '#/shop' || newHash === '#catalog') {
      if (currentView !== 'catalog') {
        currentView = 'catalog';
        renderView();
      }
    } else {
      if (currentView !== 'story') {
        currentView = 'story';
        renderView();
      }
    }
  });

  function renderView() {
    app.innerHTML = '';

    if (currentView === 'catalog') {
      // EXACT 1:1 GOAT CATALOG (Pure design with zero extra widgets or clutter)
      app.appendChild(renderGoatCatalogPage(() => setView('story')));
    } else {
      // KADAM CULTURE® EDITORIAL LANDING PAGE
      const navbar = renderLandingNavbar(
        () => setView('catalog'),      // onShopClick
        () => drawer && drawer.open(), // onCartClick
        () => setView('story')         // onStoryClick
      );
      app.appendChild(navbar);

      const main = document.createElement('main');
      main.id = 'mg-main-content';
      main.appendChild(renderHeroBanner());
      main.appendChild(renderSneakerLineBlockGrid(() => setView('catalog')));
      main.appendChild(renderCrowThiefSection());
      app.appendChild(main);

      app.appendChild(renderEditorialFooter());
    }

    // Update cart count if navbar is present
    const countSpan = document.getElementById('mg-nav-cart-count');
    if (countSpan) {
      countSpan.textContent = store.getCartSummary().totalItems;
    }
  }

  // Update navbar cart count when cart updates
  store.on('cartUpdated', summary => {
    const countSpan = document.getElementById('mg-nav-cart-count');
    if (countSpan) {
      countSpan.textContent = summary.totalItems;
    }
  });

  renderView();
  console.log('👟 Kadam Culture & GOAT Catalog — Pure Clean Architecture Loaded.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
