export function renderStoryHero() {
  const section = document.createElement('section');
  section.className = 'goat-hero';
  section.id = 'hero';

  section.innerHTML = `
    <div class="story-container">
      <div class="kadam-hero-logo-wrap">
        <img src="/assets/kadam_logo.png" alt="Kadam Emblem Logo" class="kadam-hero-logo-img" />
      </div>
      <h1 class="goat-hero-title">KADAM CULTURE</h1>
      <p class="goat-hero-sub">INDIA'S FIRST CULTURE-LED SNEAKER LACE LAB</p>
    </div>
  `;

  return section;
}

export function renderStoryFilterBar() {
  const bar = document.createElement('div');
  bar.className = 'goat-filter-bar';

  bar.innerHTML = `
    <div class="story-container">
      <div class="goat-filter-grid">
        <div class="goat-filter-item" data-filter-type="category">
          <span>CATEGORY</span>
          <span class="goat-filter-arrow">∨</span>
        </div>
        <div class="goat-filter-item" data-filter-type="length">
          <span>LACE LENGTH</span>
          <span class="goat-filter-arrow">∨</span>
        </div>
        <div class="goat-filter-item" data-filter-type="color">
          <span>COLOR</span>
          <span class="goat-filter-arrow">∨</span>
        </div>
        <div class="goat-filter-item" data-filter-type="price">
          <span>PRICE</span>
          <span class="goat-filter-arrow">∨</span>
        </div>
      </div>
    </div>
  `;

  return bar;
}
