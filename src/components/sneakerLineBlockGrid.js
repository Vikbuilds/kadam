/**
 * sneakerLineBlockGrid.js
 * 3x3 Streetwear Sneaker Matrix Line-Block Grid
 * Positioned directly below KADAM CULTURE® STREET—WOVEN CLASSICS
 * Features sharp black line blocks, exact match with user's reference image,
 * 8 classic sneaker silhouettes with cultural laces, and center brand archive block.
 */

export const SNEAKER_LINE_BLOCKS = [
  {
    id: 'af1-crimson',
    num: '01',
    img: '/assets/hero_grid/hd_cell_01.jpg',
    silhouette: "Nike Air Force 1 '07",
    laceStyle: 'CRIMSON',
    price: '₹899'
  },
  {
    id: 'court-bandhani',
    num: '02',
    img: '/assets/hero_grid/hd_cell_02.jpg',
    silhouette: 'Bape Sta Court Low',
    laceStyle: 'BANDHANI',
    price: '₹899'
  },
  {
    id: 'samba-tangerine',
    num: '03',
    img: '/assets/hero_grid/hd_cell_03.jpg',
    silhouette: 'Adidas Samba OG',
    laceStyle: 'SAFFRON',
    price: '₹799'
  },
  {
    id: 'jordan1-chitra-gold',
    num: '04',
    img: '/assets/hero_grid/hd_cell_04_new.jpg',
    silhouette: "Air Jordan 1 High OG 'Chicago'",
    laceStyle: 'BROCADE',
    price: '₹899'
  },
  {
    id: 'center-kadam',
    isCenter: true,
    img: '/assets/hero_grid/cell_1_1.png'
  },
  {
    id: 'campus-ajrakh-indigo',
    num: '05',
    img: '/assets/hero_grid/hd_cell_05_new.jpg',
    silhouette: 'Adidas Campus 00s Navy',
    laceStyle: 'AJRAKH',
    price: '₹899'
  },
  {
    id: 'nb574-truckart',
    num: '06',
    img: '/assets/hero_grid/hd_cell_06.jpg',
    silhouette: 'New Balance 574 Grey',
    laceStyle: 'TRUCKART',
    price: '₹899'
  },
  {
    id: 'chuck70-chikankari',
    num: '07',
    img: '/assets/hero_grid/hd_cell_07.jpg',
    silhouette: 'Converse Chuck 70 High',
    laceStyle: 'CHIKANKARI',
    price: '₹899'
  },
  {
    id: 'oldskool-camo',
    num: '08',
    img: '/assets/hero_grid/hd_cell_08.jpg',
    silhouette: 'Vans Old Skool Tan Suede',
    laceStyle: 'CAMO',
    price: '₹799'
  }
];

export function renderSneakerLineBlockGrid(onProductClick) {
  const section = document.createElement('section');
  section.className = 'mg-line-block-section';
  section.id = 'mg-line-block-section';

  section.innerHTML = `
    <div class="mg-line-block-inner">
      
      <!-- Section Header -->
      <div class="mg-line-block-header">
        <div class="mg-line-block-header-left">
          <span class="mg-line-block-kicker">[03 // ARCHIVE GRID]</span>
          <h2 class="mg-line-block-heading">THE 8 SILHOUETTES LOOKBOOK</h2>
        </div>
        <div class="mg-line-block-header-right">
          <span class="mg-line-block-meta">140CM DOUBLE JACQUARD · SOLID BRASS AGLETS · CERTIFIED 0% PLASTIC</span>
        </div>
      </div>

      <!-- 3x3 Sharp Line-Block Grid Frame -->
      <div class="mg-line-block-frame">
        <div class="mg-line-block-grid">
          ${SNEAKER_LINE_BLOCKS.map(item => {
            if (item.isCenter) {
              return `
                <div class="mg-lb-cell mg-lb-center-cell" data-center="true">
                  <div class="mg-lb-center-content">
                    <span class="mg-lb-center-kicker">ARCHIVE // 01</span>
                    <h3 class="mg-lb-center-brand">KADAM<span class="omega">®</span></h3>
                    <div class="mg-lb-center-hi">कदम</div>
                    <p class="mg-lb-center-copy">
                      8 Iconic Silhouettes.<br />One Cultural Thread.
                    </p>
                    <div class="mg-lb-center-tags">
                      <span>140CM WEAVE</span>
                      <span class="dot">•</span>
                      <span>SOLID BRASS</span>
                      <span class="dot">•</span>
                      <span>ZERO PLASTIC</span>
                    </div>
                  </div>
                </div>
              `;
            }

            return `
              <div class="mg-lb-cell mg-lb-shoe-cell" data-id="${item.id}">
                <div class="mg-lb-shoe-wrap">
                  <img 
                    src="${item.img}" 
                    alt="${item.laceStyle} on ${item.silhouette}" 
                    class="mg-lb-shoe-img" 
                    loading="lazy"
                  />
                </div>

                <!-- Corner Numbering Tag -->
                <div class="mg-lb-num-tag">${item.num}</div>

                <!-- Hover Information & Waitlist Capsule -->
                <div class="mg-lb-hover-capsule">
                  <div class="mg-lb-hover-top">
                    <div class="mg-lb-hover-lock">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span>LOCKED DROP</span>
                    </div>
                    <span class="mg-lb-hover-name">${item.laceStyle}</span>
                  </div>
                  <div class="mg-lb-hover-bottom">
                    <span class="mg-lb-hover-cta">JOIN THE WAITLIST →</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Line Block Bottom Footnote -->
      <div class="mg-line-block-footer">
        <div>TAP ANY LACE TO VIEW ARTISAN WEAVE & BRASS AGLET SPECIFICATIONS</div>
      </div>

    </div>
  `;

  // Sneaker cell clicks - Scroll smoothly to Join Waitlist section
  const shoeCells = section.querySelectorAll('.mg-lb-shoe-cell');
  shoeCells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      e.preventDefault();
      const waitlistSec = document.getElementById('mg-crow-mascot');
      if (waitlistSec) {
        waitlistSec.scrollIntoView({ behavior: 'smooth' });
        const emailInput = waitlistSec.querySelector('input[type="email"]');
        if (emailInput) {
          setTimeout(() => emailInput.focus(), 600);
        }
      }
    });
  });

  return section;
}
