/**
 * landingHero.js
 * Renders Top Navbar, Subheader, Rounded Surreal Hero Banner, and Mega Headline
 * Exact match with the preview screenshot architecture.
 */

export function renderLandingNavbar(onShopClick, onCartClick, onStoryClick, onVisualizerClick) {
  const nav = document.createElement('header');
  nav.className = 'mg-navbar';

  nav.innerHTML = `
    <!-- Left Navigation Pills -->
    <div class="mg-nav-group">
      <button class="mg-pill-btn" id="nav-btn-shop">Shop Catalog</button>
      <button class="mg-pill-btn" id="nav-btn-story">The Story</button>
    </div>

    <!-- Center Logo -->
    <a href="#" class="mg-logo-container" id="nav-logo" aria-label="Kadam Culture Home">
      <div class="mg-logo-glyph">
        KADAM<span class="omega" style="font-size: 16px; vertical-align: top; margin-left: 2px;">®</span>
      </div>
      <div class="mg-logo-sub">कदम · CULTURE LAB</div>
    </a>

    <!-- Right Balanced Spacer (Ensures Center Logo stays dead-centered) -->
    <div class="mg-nav-group mg-nav-spacer" style="visibility: hidden; pointer-events: none;" aria-hidden="true">
      <button class="mg-pill-btn">Shop Catalog</button>
      <button class="mg-pill-btn">The Story</button>
    </div>
  `;

  // Attach event listeners
  nav.querySelector('#nav-btn-shop').addEventListener('click', (e) => {
    e.preventDefault();
    if (onShopClick) onShopClick();
  });

  nav.querySelector('#nav-btn-story').addEventListener('click', (e) => {
    e.preventDefault();
    if (onStoryClick) onStoryClick();
  });

  nav.querySelector('#nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    if (onStoryClick) onStoryClick();
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
