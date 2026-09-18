/**
 * goatCatalogPage.js
 * Clean GOAT Catalog Page UI:
 * - Header (GOAT logo, TYPE TO SEARCH, ••• menu)
 * - 4-Column Dropdown Filter Bar (CATEGORY, SIZE, COLOR, PRICE)
 * - Blank content canvas
 * - Signature pitch-black GOAT Footer
 */

export function renderGoatCatalogPage(onBackToStory) {
  const container = document.createElement('div');
  container.className = 'goat-page-container';
  container.id = 'goat-page';

  container.innerHTML = `
    <!-- 1. GOAT Top Bar Header -->
    <header class="goat-header">
      <div class="goat-header-inner">
        <div class="goat-header-left">
          <span class="goat-logo-text" id="goat-nav-home" style="cursor: pointer;" title="Back to Home">GOAT</span>
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
          <button class="goat-dots-btn" aria-label="Menu">•••</button>
        </div>
      </div>
    </header>

    <!-- 2. 4-Column Dropdown Filter Bar -->
    <nav class="goat-filter-bar-wrap">
      <div class="goat-filter-bar-grid">
        <div class="goat-filter-cell" data-filter="category">
          <span>CATEGORY</span>
          <span class="goat-arrow">∨</span>
        </div>
        <div class="goat-filter-cell" data-filter="size">
          <span>SIZE</span>
          <span class="goat-arrow">∨</span>
        </div>
        <div class="goat-filter-cell" data-filter="color">
          <span>COLOR</span>
          <span class="goat-arrow">∨</span>
        </div>
        <div class="goat-filter-cell" data-filter="price">
          <span>PRICE</span>
          <span class="goat-arrow">∨</span>
        </div>
      </div>
    </nav>

    <!-- 3. Clean Blank Canvas Area -->
    <main class="goat-grid-section" id="goat-grid-section" style="min-height: 55vh; background: #FFFFFF;">
      <!-- Intentionally blank per user request -->
    </main>

    <!-- 4. Pitch-Black GOAT Footer -->
    <footer class="goat-footer-black">
      <div class="goat-footer-inner">
        <!-- Left: Newsletter & Socials -->
        <div class="goat-footer-left">
          <div class="goat-footer-heading">SIGN UP FOR NEWSLETTER</div>
          <div class="goat-newsletter-box">
            <input type="email" placeholder="" class="goat-newsletter-input" />
            <span class="goat-cursor-blink">|</span>
          </div>
          <div class="goat-social-row">
            <!-- Instagram -->
            <a href="#" class="goat-social-icon" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <!-- Tumblr -->
            <a href="#" class="goat-social-icon" aria-label="Tumblr">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.5 18c-1.2 0-2.1-.7-2.1-2.2V11H15V8h-2.6V4.5h-2.5c-.2 2.5-1.5 3.9-3.9 4v2.5h2.1v4.7c0 3.1 1.9 5.3 5.4 5.3 1.5 0 2.8-.4 3.5-.9l-.8-2.6c-.5.3-1.1.5-1.7.5z"/>
              </svg>
            </a>
            <!-- Twitter -->
            <a href="#" class="goat-social-icon" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <!-- YouTube -->
            <a href="#" class="goat-social-icon" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
              </svg>
            </a>
            <!-- Snapchat -->
            <a href="#" class="goat-social-icon" aria-label="Snapchat">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 1.2.2 2.2.5 3-.7.2-1.8.6-1.8 1.5 0 .7.6 1.1 1.2 1.2-.2.6-.7 1.4-1.4 1.8-.4.2-.6.5-.4.8.2.3.6.4 1.1.4.6 0 1.2-.2 1.8-.4.5 1 1.4 1.7 2.5 1.7.6 0 1.1-.2 1.5-.5.4.3.9.5 1.5.5 1.1 0 2-.7 2.5-1.7.6.2 1.2.4 1.8.4.5 0 .9-.1 1.1-.4.2-.3 0-.6-.4-.8-.7-.4-1.2-1.2-1.4-1.8.6-.1 1.2-.5 1.2-1.2 0-.9-1.1-1.3-1.8-1.5.3-.8.5-1.8.5-3 0-3.5-2.5-6-6-6z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Middle: Links -->
        <div class="goat-footer-middle">
          <ul class="goat-footer-nav-list">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">AUTHENTICITY</a></li>
            <li><a href="#">GUARANTEE</a></li>
          </ul>
        </div>

        <!-- Right: Careers & Support -->
        <div class="goat-footer-right">
          <ul class="goat-footer-nav-list">
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">SUPPORT</a></li>
            <li><a href="#">PRIVACY TERMS</a></li>
          </ul>
          <div class="goat-footer-subtext">SITE BY SIX</div>
        </div>
      </div>
    </footer>
  `;

  // Attach logo click to return to story
  const logo = container.querySelector('#goat-nav-home');
  if (logo && onBackToStory) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      onBackToStory();
    });
  }

  return container;
}
