/**
 * waitlistPillBar.js
 * Ultra-minimal raw waitlist input component (No boxes, no pills, no badges).
 * Clean underline input + minimal submit text button.
 */
import { store } from '../data/store.js';

export function renderWaitlistPillBar(options = {}) {
  const {
    placeholder = 'Enter email address...',
    buttonText = 'SUBMIT →',
    idPrefix = 'raw-wl',
    customClass = ''
  } = options;

  const wrapper = document.createElement('div');
  wrapper.className = `mg-raw-waitlist-wrap ${customClass}`.trim();

  wrapper.innerHTML = `
    <form class="mg-raw-waitlist-form" id="${idPrefix}-form">
      <input 
        type="email" 
        class="mg-raw-waitlist-input" 
        placeholder="${placeholder}" 
        required 
        autocomplete="email"
      />
      <button type="submit" class="mg-raw-waitlist-btn">
        ${buttonText}
      </button>
    </form>
    <div class="mg-raw-waitlist-success" id="${idPrefix}-success" style="display: none;">
      <span style="font-weight: 800; color: #10B981;">✓</span>
      <span>YOU'RE IN. WE'LL NOTIFY YOU FOR DROP 001.</span>
    </div>
  `;

  // Prevent parent clicks (e.g. hero banner click)
  wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  const form = wrapper.querySelector('form');
  const successBox = wrapper.querySelector('.mg-raw-waitlist-success');
  const input = wrapper.querySelector('input');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const emailVal = input?.value.trim();
      if (!emailVal) return;

      if (store && store.saveWaitlistEntry) {
        store.saveWaitlistEntry({
          name: 'Subscriber',
          email: emailVal,
          sneaker: idPrefix
        });
      }

      form.style.display = 'none';
      if (successBox) successBox.style.display = 'flex';
    });
  }

  return wrapper;
}
