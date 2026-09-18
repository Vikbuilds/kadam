export function renderStoryNavbar() {
  const header = document.createElement('header');
  header.className = 'story-header';

  header.innerHTML = `
    <div class="story-container story-header-inner">
      <a href="#hero" class="goat-brand-logo">
        <img src="/assets/kadam_logo.png" alt="Kadam Logo" class="kadam-brand-logo-img" />
        <span class="goat-brand-name">KADAM</span>
      </a>

      <div class="goat-search-wrap">
        <input 
          type="text" 
          id="goat-search-input"
          class="goat-search-input" 
          placeholder="TYPE TO SEARCH" 
          aria-label="Search Catalog"
        />
      </div>

      <div class="goat-menu-right">
        <button class="goat-dots-btn" id="goat-menu-btn" title="Menu">•••</button>
      </div>
    </div>
  `;

  return header;
}
