/**
 * openerModal.js
 * Apple-grade cinematic product opener overlay
 */

export function renderOpenerModal(onEnter) {
  const overlay = document.createElement('div');
  overlay.className = 'mg-opener-overlay';
  overlay.id = 'mg-opener';

  overlay.innerHTML = `
    <div class="mg-opener-bg-glow"></div>
    <div class="mg-opener-content">
      <span class="mg-opener-tag">PROLOGUE // KADAM CULTURE LAB</span>
      <h1 class="mg-opener-title">What if laces were never an afterthought, but <em>the entire narrative?</em></h1>
      <p class="mg-opener-desc">
        Handwoven heritage jacquards, solid brass aglets, and street-engineered durability for your Air Force 1s. Step into tomorrow.
      </p>
      <div class="mg-opener-trigger-box">
        <button class="mg-opener-enter-btn" id="mg-opener-enter">
          <span>Pull The Lace & Enter</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button class="mg-opener-skip" id="mg-opener-skip">Skip Intro</button>
      </div>
    </div>
  `;

  function dismiss() {
    overlay.classList.add('dismissed');
    setTimeout(() => {
      overlay.remove();
      if (typeof onEnter === 'function') onEnter();
    }, 850);
  }

  overlay.querySelector('#mg-opener-enter').addEventListener('click', dismiss);
  overlay.querySelector('#mg-opener-skip').addEventListener('click', dismiss);

  return overlay;
}
