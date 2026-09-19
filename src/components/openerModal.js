/**
 * openerModal.js
 * Editorial White-Theme First Landing Intro:
 * - Pure White / Minimalist High-Editorial Backdrop
 * - Single iconic sentence with PP Editorial Serif typography
 * - Aesthetic "ENTER THE LAB" pill button trigger
 */

export function renderOpenerModal(onEnter) {
  const overlay = document.createElement('div');
  overlay.className = 'mg-opener-overlay mg-opener-light';
  overlay.id = 'mg-opener';

  overlay.innerHTML = `
    <div class="mg-opener-bg-glow"></div>
    <div class="mg-opener-content">
      <span class="mg-opener-tag">KADAM CULTURE LAB // PROLOGUE</span>
      <h1 class="mg-opener-sentence">
        What if laces were never an afterthought, but <em>the entire narrative?</em>
      </h1>
      <div class="mg-opener-trigger-box">
        <button class="mg-opener-enter-btn" id="mg-opener-enter">
          <span>ENTER THE LAB</span>
          <svg class="mg-opener-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  `;

  let dismissed = false;

  function dismiss() {
    if (dismissed) return;
    dismissed = true;

    overlay.classList.add('dismissed');

    setTimeout(() => {
      overlay.remove();
      if (typeof onEnter === 'function') onEnter();
    }, 800);
  }

  // Click Enter button to proceed to landing page
  const enterBtn = overlay.querySelector('#mg-opener-enter');
  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismiss();
    });
  }

  // Also click anywhere on backdrop to proceed
  overlay.addEventListener('click', dismiss);

  // Trigger smooth entrance animation on mount
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });

  return overlay;
}
