/**
 * landingHero.js
 * Renders Top Navbar, Subheader, Rounded Surreal Hero Banner, and Mega Headline
 * Exact match with the preview screenshot architecture.
 */
import { store } from '../data/store.js';

export function renderLandingNavbar(onLogoClick) {
  const nav = document.createElement('header');
  nav.className = 'mg-navbar';

  nav.innerHTML = `
    <!-- Left Spacer for centering logo -->
    <div style="width: 140px;" class="mg-nav-spacer"></div>

    <!-- Center Logo -->
    <a href="#" class="mg-logo-container" id="nav-logo" aria-label="Kadam Culture Home">
      <div class="mg-logo-glyph">
        KADAM<span class="omega" style="font-size: 16px; vertical-align: top; margin-left: 2px;">®</span>
      </div>
      <div class="mg-logo-sub">कदम · CULTURE LAB</div>
    </a>

    <!-- Right Side: Waitlist CTA Button -->
    <button class="mg-pill-btn" id="nav-waitlist-btn">
      JOIN WAITLIST →
    </button>
  `;

  nav.querySelector('#nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    if (onLogoClick) onLogoClick();
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  nav.querySelector('#nav-waitlist-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const waitlistSec = document.getElementById('mg-crow-mascot');
    if (waitlistSec) {
      waitlistSec.scrollIntoView({ behavior: 'smooth' });
      const emailInput = waitlistSec.querySelector('input[type="email"]');
      if (emailInput) {
        setTimeout(() => emailInput.focus(), 600);
      }
    }
  });

  return nav;
}

export function renderSubbar() {
  // Completely removed per user instruction
  const subbar = document.createElement('div');
  subbar.style.display = 'none';
  return subbar;
}

export function renderHeroBanner(onExploreClick) {
  const section = document.createElement('section');
  section.className = 'mg-hero-fullbleed';
  section.id = 'mg-hero-section';

  section.innerHTML = `
    <img 
      src="/assets/kadam_hero_mind_bust.jpg" 
      alt="Kadam Culture Mind of the Maker" 
      class="mg-hero-fullbleed-img"
    />
    <!-- Grit texture overlay -->
    <div class="mg-hero-grit" aria-hidden="true"></div>
    <!-- Bottom text overlay -->
    <div class="mg-hero-text-overlay">
      <h1 class="mg-hero-headline">
        KADAM CULTURE®<span class="highlight">STREET—WOVEN CLASSICS</span>
      </h1>
    </div>
  `;

  if (onExploreClick) {
    section.style.cursor = 'pointer';
    section.addEventListener('click', () => {
      onExploreClick();
    });
  }

  return section;
}

export function renderMegaHeadline() {
  const section = document.createElement('section');
  section.className = 'mg-mega-headline-section';

  section.innerHTML = `
    <h1 class="mg-mega-headline">
      KADAM CULTURE®<br />
      <span class="highlight">STREET—WOVEN CLASSICS</span>
    </h1>
  `;

  return section;
}
