import { store } from '../data/store.js';

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-top-grid">
        <!-- Brand Col -->
        <div class="footer-brand-col">
          <div class="brand-logo" style="margin-bottom: 12px;">
            <span class="brand-en">KADAM</span>
            <span class="brand-hi">कदम</span>
            <span class="brand-dot"></span>
          </div>
          <p class="footer-tagline">
            Tie the Narrative. India's first culture-led sneaker lace lab elevating humble threads into street-level art.
          </p>
          <div class="footer-drop-signup">
            <span class="signup-label">⚡ Join WhatsApp Drop Cypher</span>
            <div class="signup-input-wrap">
              <input type="tel" placeholder="+91 98765 43210" class="signup-input" id="wa-drop-input" />
              <button class="btn btn-saffron btn-sm" id="wa-drop-btn">Join</button>
            </div>
          </div>
        </div>

        <!-- Links Col 1 -->
        <div class="footer-links-col">
          <h4 class="footer-heading">The Collection</h4>
          <ul class="footer-links-list">
            <li><a href="#catalog">All Threads (10)</a></li>
            <li><a href="#catalog">Horn OK Please (Truck Art)</a></li>
            <li><a href="#catalog">Chikankari Glow (Awadh)</a></li>
            <li><a href="#catalog">Gully Cyber-Neon (3M)</a></li>
            <li><a href="#catalog">Ajrakh Matrix (Indus)</a></li>
            <li><a href="#catalog">Matka Bubblegum (Fat Lace)</a></li>
          </ul>
        </div>

        <!-- Links Col 2 -->
        <div class="footer-links-col">
          <h4 class="footer-heading">The Lab & Tools</h4>
          <ul class="footer-links-list">
            <li><a href="#visualizer">The Lace Lab Visualizer</a></li>
            <li><a href="#bundle">Bundle & Flex (Save 20%)</a></li>
            <li><a href="#" id="footer-quiz-link">Find Your Size Quiz</a></li>
            <li><a href="#catalog">Metal Aglet DIY Kits</a></li>
            <li><a href="#catalog">Devanagari Dubraes</a></li>
          </ul>
        </div>

        <!-- Col 3: Logistics & Trust -->
        <div class="footer-links-col">
          <h4 class="footer-heading">Street Logistics</h4>
          <ul class="footer-links-list">
            <li><span>🚀 2-4 Day Pan-India Delivery</span></li>
            <li><span>📦 Sliding Tin Protective Box</span></li>
            <li><span>🛡️ 90-Day Anti-Snag Guarantee</span></li>
            <li><span>💳 UPI Intent (GPay, PhonePe, Paytm)</span></li>
            <li><span>🚚 Shiprocket Metro Hubs</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div class="footer-copyright">
          © 2026 Kadam Culture (कदम). All street rights reserved. Tie the Narrative.
        </div>
        <div class="footer-cities">
          <span>Bengaluru</span> • <span>Mumbai</span> • <span>New Delhi</span> • <span>Kolkata</span>
        </div>
      </div>
    </div>
  `;

  // Attach quiz link
  const quizLink = footer.querySelector('#footer-quiz-link');
  quizLink.addEventListener('click', (e) => {
    e.preventDefault();
    store.emit('openQuiz');
  });

  // Attach WhatsApp Drop Alert
  const waBtn = footer.querySelector('#wa-drop-btn');
  const waInput = footer.querySelector('#wa-drop-input');
  waBtn.addEventListener('click', () => {
    if (waInput.value.trim().length >= 10) {
      store.emit('toast', {
        title: 'Drop Cypher Joined!',
        message: 'You will receive private drop links 15 mins before Drop #02.'
      });
      waInput.value = '';
    } else {
      alert('Please enter a valid 10-digit mobile number for WhatsApp drop updates.');
    }
  });

  return footer;
}
