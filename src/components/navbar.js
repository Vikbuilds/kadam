import { store } from '../data/store.js';

export function renderNavbar() {
  const nav = document.createElement('header');
  nav.className = 'site-header';

  nav.innerHTML = `
    <div class="container nav-container">
      <div class="nav-left">
        <a href="#hero" class="brand-logo" id="brand-logo-btn">
          <div class="brand-text-stack">
            <span class="brand-hi-master">कदम</span>
            <span class="brand-en-master">KADAM</span>
          </div>
          <svg class="brand-knot-icon" viewBox="0 0 100 100" width="28" height="28" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 25 35 C 10 50, 10 70, 30 80 C 50 90, 70 70, 75 50 C 80 30, 60 10, 40 20 C 20 30, 40 60, 50 75" />
            <path d="M 75 35 C 90 50, 90 70, 70 80 C 50 90, 30 70, 25 50 C 20 30, 40 10, 60 20 C 80 30, 60 60, 50 75" />
          </svg>
        </a>
      </div>

      <nav class="nav-center">
        <a href="#catalog" class="nav-link" id="nav-catalog-link">
          <span class="nav-link-dot"></span>
          All Laces
        </a>
        <a href="#visualizer-widget" class="nav-link" id="nav-visualizer-link">Lace Visualizer</a>
        <a href="#bundle" class="nav-link" id="nav-bundle-link">
          Bundle & Save
          <span class="nav-badge-pill">20% OFF</span>
        </a>
        <a href="#culture" class="nav-link" id="nav-culture-link">Unboxing & Kit</a>
        <button class="nav-link nav-btn-quiz" id="open-quiz-nav-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          Lace Quiz
        </button>
      </nav>

      <div class="nav-right">
        <div class="currency-tag">
          <span class="currency-symbol">₹</span>
          <span class="currency-name">INR</span>
        </div>

        <button class="cart-trigger-btn" id="open-cart-btn" aria-label="Open Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span class="cart-badge-count" id="nav-cart-count">0</span>
        </button>

        <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Attach event handlers
  const openCartBtn = nav.querySelector('#open-cart-btn');
  openCartBtn.addEventListener('click', () => {
    store.emit('openCart');
  });

  const quizBtn = nav.querySelector('#open-quiz-nav-btn');
  quizBtn.addEventListener('click', () => {
    store.emit('openQuiz');
  });

  // Mobile menu toggle
  const mobileToggle = nav.querySelector('#mobile-menu-toggle');
  const navCenter = nav.querySelector('.nav-center');
  mobileToggle.addEventListener('click', () => {
    navCenter.classList.toggle('mobile-open');
  });

  // Close mobile menu on link click
  navCenter.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      navCenter.classList.remove('mobile-open');
    });
  });

  // Update badge on cart change
  store.on('cartUpdated', summary => {
    const badge = nav.querySelector('#nav-cart-count');
    if (badge) {
      badge.textContent = summary.totalItems;
      if (summary.totalItems > 0) {
        badge.classList.add('pulse');
        setTimeout(() => badge.classList.remove('pulse'), 600);
      }
    }
  });

  return nav;
}
