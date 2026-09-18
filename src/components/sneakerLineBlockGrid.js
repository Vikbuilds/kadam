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
    laceStyle: 'Crimson Red Double-Jacquard',
    price: '₹899'
  },
  {
    id: 'court-bandhani',
    num: '02',
    img: '/assets/hero_grid/hd_cell_02.jpg',
    silhouette: 'Bape Sta Court Low',
    laceStyle: 'Bandhani Ruby Dot Jacquard',
    price: '₹899'
  },
  {
    id: 'samba-tangerine',
    num: '03',
    img: '/assets/hero_grid/hd_cell_03.jpg',
    silhouette: 'Adidas Samba OG',
    laceStyle: 'Saffron Tangerine Flat Weave',
    price: '₹799'
  },
  {
    id: 'sk8hi-flame',
    num: '04',
    img: '/assets/hero_grid/hd_cell_04.png',
    silhouette: 'Vans Sk8-Hi All-Black',
    laceStyle: 'Inferno Flame Street Jacquard',
    price: '₹899'
  },
  {
    id: 'center-kadam',
    isCenter: true,
    img: '/assets/hero_grid/cell_1_1.png'
  },
  {
    id: 'puma-houndstooth',
    num: '05',
    img: '/assets/hero_grid/hd_cell_05.png',
    silhouette: 'Puma Suede Classic Navy',
    laceStyle: 'Monochrome Houndstooth Weave',
    price: '₹799'
  },
  {
    id: 'nb574-truckart',
    num: '06',
    img: '/assets/hero_grid/hd_cell_06.jpg',
    silhouette: 'New Balance 574 Grey',
    laceStyle: 'Multi-Thread Truck Art Laces',
    price: '₹899'
  },
  {
    id: 'chuck70-chikankari',
    num: '07',
    img: '/assets/hero_grid/hd_cell_07.jpg',
    silhouette: 'Converse Chuck 70 High',
    laceStyle: 'Lucknowi Chikankari Heirloom',
    price: '₹899'
  },
  {
    id: 'oldskool-camo',
    num: '08',
    img: '/assets/hero_grid/hd_cell_08.jpg',
    silhouette: 'Vans Old Skool Tan Suede',
    laceStyle: 'Tactical Olive Camo Weave',
    price: '₹799'
  }
];

export function renderSneakerLineBlockGrid(onExploreClick) {
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

      <!-- 3x3 Sharp Line-Block Grid Frame (Exact 1:1 Match with Reference Image) -->
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
                    <button class="mg-lb-center-cta" id="lb-center-explore-btn">
                      <span>SHOP COLLECTION</span>
                      <span class="arrow">→</span>
                    </button>
                  </div>
                </div>
              `;
            }

            return `
              <div class="mg-lb-cell mg-lb-shoe-cell" data-id="${item.id}">
                <div class="mg-lb-shoe-wrap">
                  <img 
                    src="${item.img}" 
                    alt="${item.silhouette} with ${item.laceStyle}" 
                    class="mg-lb-shoe-img" 
                    loading="lazy"
                  />
                </div>

                <!-- Corner Numbering Tag -->
                <div class="mg-lb-num-tag">${item.num}</div>

                <!-- Hover Information Capsule -->
                <div class="mg-lb-hover-capsule">
                  <div class="mg-lb-hover-title-group">
                    <span class="mg-lb-hover-name">${item.silhouette}</span>
                    <span class="mg-lb-hover-lace">${item.laceStyle}</span>
                  </div>
                  <div class="mg-lb-hover-bottom-bar">
                    <span class="mg-lb-hover-price">${item.price}</span>
                    <span class="mg-lb-hover-action">COP LACE →</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Line Block Bottom Footnote -->
      <div class="mg-line-block-footer">
        <div>TAP ANY SILHOUETTE TO VIEW ARTISAN WEAVE & BRASS AGLET SPECIFICATIONS</div>
        <div>NEW DELHI · TOKYO · MILAN</div>
      </div>

    </div>
  `;

  // Center button click
  const centerBtn = section.querySelector('#lb-center-explore-btn');
  if (centerBtn) {
    centerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (onExploreClick) onExploreClick();
    });
  }

  // Sneaker cell clicks
  section.querySelectorAll('.mg-lb-shoe-cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      e.preventDefault();
      const id = cell.dataset.id;
      const shoeItem = SNEAKER_LINE_BLOCKS.find(s => s.id === id);
      if (onExploreClick) onExploreClick(shoeItem);
    });
  });

  return section;
}
