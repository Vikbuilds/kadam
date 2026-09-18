import { PRODUCTS } from '../data/products.js';

export function renderStoryChapters() {
  const section = document.createElement('section');
  section.className = 'goat-catalog-section';
  section.id = 'catalog';

  section.innerHTML = `
    <div class="story-container">
      <div class="goat-product-grid" id="goat-grid-container">
        ${PRODUCTS.map(product => `
          <div class="goat-product-cell" data-id="${product.id}">
            <div class="ref-rating-badge">★ ${product.rating || '4.9'}</div>
            
            <div class="goat-image-wrapper">
              <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="goat-product-img"
                loading="lazy"
              />
            </div>

            <div class="goat-cell-info-stack">
              <span class="goat-product-name-bold">${product.name.toUpperCase()}</span>
              <span class="goat-product-price-bold">Rs. ${product.price}.00</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Create PDP Modal Element
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'goat-modal-backdrop';
  modalBackdrop.id = 'goat-pdp-modal';
  modalBackdrop.innerHTML = `
    <div class="goat-modal-box">
      <button class="goat-modal-close" id="close-goat-modal">✕</button>
      
      <div class="goat-modal-gallery">
        <img id="pdp-modal-img" src="" alt="Product Image" />
      </div>

      <div class="goat-modal-details">
        <div>
          <div style="font-family: var(--font-heading); font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;" id="pdp-modal-code">
            KDM-F01
          </div>
          <h2 class="goat-modal-title" id="pdp-modal-title">HORN OK PLEASE</h2>
          <div class="goat-modal-price" id="pdp-modal-price">Rs. 449.00</div>
          <p class="goat-modal-desc" id="pdp-modal-desc"></p>
          
          <div style="margin-bottom: 24px;">
            <span style="display: block; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
              MATERIAL & WEAVE
            </span>
            <span style="font-size: 12px; font-weight: 600; color: #000000;" id="pdp-modal-material">
              100% Polyester Jacquard
            </span>
          </div>
        </div>

        <button class="goat-btn-add" id="pdp-reserve-btn">RESERVE PAIR • Rs. 449.00</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);

  // Bind cell click events
  setTimeout(() => {
    const gridContainer = section.querySelector('#goat-grid-container');
    
    gridContainer.querySelectorAll('.goat-product-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const productId = cell.dataset.id;
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        document.getElementById('pdp-modal-img').src = product.image;
        document.getElementById('pdp-modal-code').textContent = product.code || 'KADAM LABS';
        document.getElementById('pdp-modal-title').textContent = product.name;
        document.getElementById('pdp-modal-price').textContent = `Rs. ${product.price}.00`;
        document.getElementById('pdp-modal-desc').textContent = product.description;
        document.getElementById('pdp-modal-material').textContent = product.specs?.material || 'High-Density Woven Threads';

        const btn = document.getElementById('pdp-reserve-btn');
        btn.textContent = `RESERVE PAIR • Rs. ${product.price}.00`;
        btn.onclick = () => {
          alert(`✨ Pair reserved! You have added ${product.name} (Rs. ${product.price}.00) to your reservation.`);
          modalBackdrop.classList.remove('open');
        };

        modalBackdrop.classList.add('open');
      });
    });

    // Close handlers
    document.getElementById('close-goat-modal').addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });

    // Search filtering
    const searchInput = document.getElementById('goat-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        gridContainer.querySelectorAll('.goat-product-cell').forEach(cell => {
          const productId = cell.dataset.id;
          const product = PRODUCTS.find(p => p.id === productId);
          if (product) {
            const matches = product.name.toLowerCase().includes(term) || 
                            product.description.toLowerCase().includes(term) ||
                            (product.category && product.category.toLowerCase().includes(term));
            cell.style.display = matches ? 'flex' : 'none';
          }
        });
      });
    }
  }, 50);

  return section;
}
