import { store } from '../data/store.js';
import { renderVisualizerWidget } from './visualizer.js';

export function renderHero() {
  const hero = document.createElement('section');
  hero.className = 'hero-section';
  hero.id = 'hero';

  hero.innerHTML = `
    <div class="container hero-split-grid">
      <!-- Left Column: Editorial Brand Collage (Matching Reference Image 1) -->
      <div class="hero-brand-collage">
        <div class="brand-display-badge">
          <svg viewBox="0 0 100 100" width="22" height="22" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 25 35 C 10 50, 10 70, 30 80 C 50 90, 70 70, 75 50 C 80 30, 60 10, 40 20 C 20 30, 40 60, 50 75" />
            <path d="M 75 35 C 90 50, 90 70, 70 80 C 50 90, 30 70, 25 50 C 20 30, 40 10, 60 20 C 80 30, 60 60, 50 75" />
          </svg>
          <span>कदम • KADAM CULTURE</span>
        </div>

        <h1 class="hero-brand-headline">
          KADAM<br />
          <span class="highlight-saffron">CULTURE</span>
        </h1>

        <p class="hero-brand-sub">
          Tie the Narrative. India's first culture-led sneaker lace brand—elevating everyday kicks with Truck Art jacquards, Lucknowi Chikankari, and 3M reflective threads.
        </p>

        <!-- Graphic Ribbon Preview Tags -->
        <div class="hero-ribbon-tags">
          <div class="ribbon-tag ribbon-yellow">
            <span class="ribbon-text">★ HORN OK PLEASE ★</span>
            <span class="ribbon-sub">'GULLY OK PLEASE'</span>
          </div>
          <div class="ribbon-tag ribbon-neon">
            <span class="ribbon-text">3M CYBER-NEON SPLIT</span>
            <span class="ribbon-sub">'GULLY CYBER-NEON'</span>
          </div>
        </div>

        <div class="hero-cta-row">
          <a href="#catalog" class="btn btn-primary btn-lg">
            Shop All Laces
          </a>
          <button class="btn btn-outline btn-lg" id="hero-quiz-btn">
            Lace Length Finder Quiz
          </button>
        </div>
      </div>

      <!-- Right Column: Studio Lace Visualizer Widget (Matching Image 1 UI Mockup) -->
      <div class="hero-visualizer-wrap" id="hero-vis-container">
        <!-- Embedded Visualizer Widget -->
      </div>
    </div>
  `;

  // Mount visualizer widget in right column
  const visContainer = hero.querySelector('#hero-vis-container');
  if (visContainer) {
    visContainer.appendChild(renderVisualizerWidget());
  }

  // Quiz trigger
  const quizBtn = hero.querySelector('#hero-quiz-btn');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      store.emit('openQuiz');
    });
  }

  return hero;
}
