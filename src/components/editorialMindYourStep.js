/**
 * editorialMindYourStep.js
 * Split section: "Mind Your Step" in Perplexity-style editorial serif font,
 * paired with the high-fashion editorial chair photography card and colorful badge row.
 */

export function renderEditorialMindYourStep(onMeetDerbyClick) {
  const container = document.createElement('div');
  container.className = 'mg-mind-step-container';

  container.innerHTML = `
    <section class="mg-mind-step-section">
      <div class="mg-mind-step-grid">
        <!-- Left Column: Editorial Headline & Copy -->
        <div class="mg-mind-step-left">
          <h2 class="mg-mind-step-title">
            Mind Your<br />
            <span class="italic-accent">Step</span>
          </h2>
          <p class="mg-mind-step-body">
            The future of classic footwear starts here: one that puts people and the planet first, and leaves the nasty stuff in the dust.
          </p>
          <button class="mg-mind-step-cta" id="mind-step-cta">
            <span>MEET THE AF1 1.0</span>
            <span class="arrow">→</span>
          </button>
        </div>

        <!-- Right Column: Editorial Chair Card with AF1 Sneakers -->
        <div class="mg-mind-step-right">
          <img 
            src="/assets/af1_editorial_chair.jpg" 
            alt="Editorial portrait of model seated on Bauhaus chair wearing AF1 sneakers with custom woven laces" 
            class="mg-mind-step-img"
          />
          <div class="mg-card-tag">LOOKBOOK 2026 // EDITION 01</div>
        </div>
      </div>
    </section>

    <!-- Colorful Icon Badges Marquee Row -->
    <div class="mg-badge-bar">
      <div class="mg-badge-row">
        <div class="mg-badge-item">
          <div class="mg-badge-icon pink">🌸</div>
          <div class="mg-badge-text">SUPER NATURAL</div>
        </div>
        <div class="mg-badge-item">
          <div class="mg-badge-icon orange">☀️</div>
          <div class="mg-badge-text">MUSHROOM MAGIC</div>
        </div>
        <div class="mg-badge-item">
          <div class="mg-badge-icon purple">🪡</div>
          <div class="mg-badge-text">HANDWOVEN JACQUARD</div>
        </div>
        <div class="mg-badge-item">
          <div class="mg-badge-icon green">🌱</div>
          <div class="mg-badge-text">ZERO PETRO-PLASTIC</div>
        </div>
        <div class="mg-badge-item">
          <div class="mg-badge-icon blue">⚡</div>
          <div class="mg-badge-text">SOLID BRASS AGLETS</div>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#mind-step-cta').addEventListener('click', (e) => {
    e.preventDefault();
    if (onMeetDerbyClick) onMeetDerbyClick();
  });

  return container;
}
