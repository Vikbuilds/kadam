import './styles/index.css';

import { renderLandingNavbar, renderHeroBanner } from './components/landingHero.js';
import { renderEditorialFooter } from './components/editorialFooter.js';
import { renderSneakerLineBlockGrid } from './components/sneakerLineBlockGrid.js';
import { renderKadamStorySection } from './components/kadamStorySection.js';
import { renderCrowThiefSection } from './components/crowThiefSection.js';

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Clear hash if present
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  function renderView() {
    app.innerHTML = '';

    // KADAM CULTURE® EDITORIAL LANDING PAGE
    const navbar = renderLandingNavbar(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    app.appendChild(navbar);

    const main = document.createElement('main');
    main.id = 'mg-main-content';
    main.classList.add('mg-blur-entrance');

    main.appendChild(renderHeroBanner());
    main.appendChild(renderSneakerLineBlockGrid());
    main.appendChild(renderKadamStorySection());
    main.appendChild(renderCrowThiefSection());
    app.appendChild(main);

    app.appendChild(renderEditorialFooter());

    // Automatic Launch Blur-to-Clear Entrance Effect
    requestAnimationFrame(() => {
      setTimeout(() => {
        main.classList.remove('mg-blur-entrance');
      }, 50);
    });
  }

  renderView();
  console.log('👟 Kadam Culture — Pure Clean Pure Editorial Architecture Loaded with Auto Launch Blur Reveal.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


