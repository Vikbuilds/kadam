export function renderStoryFooter() {
  const footer = document.createElement('footer');
  footer.className = 'goat-footer';
  footer.id = 'footer';

  footer.innerHTML = `
    <div class="story-container">
      <div class="goat-footer-grid">
        <div class="goat-footer-col">
          <div class="kadam-footer-logo-wrap">
            <img src="/assets/kadam_logo.png" alt="Kadam Logo" class="kadam-footer-logo-img" />
          </div>
          <h5>SIGN UP FOR NEWSLETTER</h5>
          <form class="goat-newsletter-form" id="goat-newsletter-form">
            <input 
              type="email" 
              class="goat-newsletter-input" 
              placeholder="ENTER EMAIL ADDRESS" 
              required 
            />
            <button type="submit" class="goat-newsletter-btn">→</button>
          </form>
        </div>

        <div class="goat-footer-col">
          <h5>ABOUT</h5>
          <ul class="goat-footer-links">
            <li><a href="#hero">CRAFT & HERITAGE</a></li>
            <li><a href="#catalog">AUTHENTICITY</a></li>
            <li><a href="#catalog">LIMITED DROPS</a></li>
          </ul>
        </div>

        <div class="goat-footer-col">
          <h5>STUDIOS</h5>
          <ul class="goat-footer-links">
            <li><a href="#">BENGALURU</a></li>
            <li><a href="#">MUMBAI</a></li>
            <li><a href="#">NEW DELHI</a></li>
          </ul>
        </div>
      </div>

      <div class="goat-footer-bottom">
        <div>© 2026 KADAM CULTURE LABS (कदम). ALL RIGHTS RESERVED.</div>
        <div>STREET CULTURE • DESIGN LAB</div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const form = footer.querySelector('#goat-newsletter-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input.value) {
          alert(`✨ Thank you! Access reserved for ${input.value}.`);
          input.value = '';
        }
      });
    }
  }, 50);

  return footer;
}
