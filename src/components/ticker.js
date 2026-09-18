export function renderTicker() {
  const tickerContainer = document.createElement('div');
  tickerContainer.className = 'ticker-wrap';
  
  const messages = [
    'FREE SHIPPING ON BUNDLES OF 3+',
    'NEW DROP LIVE: CHIKANKARI NEON',
    'TIE THE NARRATIVE',
    '100% STREET TESTED JACQUARD WEAVES',
    'COP 3 PAIRS & UNLOCK FREE METAL AGLET SCREWDRIVER KIT',
    'PAN-INDIA 2-4 DAY FAST DELIVERY'
  ];

  // Repeat for continuous marquee
  const repeated = [...messages, ...messages, ...messages];

  tickerContainer.innerHTML = `
    <div class="ticker-track">
      ${repeated.map(msg => `
        <div class="ticker-item">
          <span>${msg}</span>
          <span class="ticker-dot">★</span>
        </div>
      `).join('')}
    </div>
  `;

  return tickerContainer;
}
