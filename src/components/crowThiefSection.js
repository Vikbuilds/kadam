/**
 * crowThiefSection.js
 * The Black Crow Mascot with Interactive Tracking Eye & Embedded Waitlist
 */
import { renderWaitlistPillBar } from './waitlistPillBar.js';

export function renderCrowThiefSection(onLaceClick) {
  const section = document.createElement('section');
  section.className = 'mg-crow-mascot-section';
  section.id = 'mg-crow-mascot';

  section.innerHTML = `
    <div class="mg-crow-foreground-container">
      <!-- Crow Mascot Perched on Left -->
      <div class="mg-crow-mascot-wrapper">
        <img 
          src="/assets/crow_branch_exact.png" 
          alt="Kadam Culture Crow Mascot on Tree Branch with Custom Laces and Sneakers" 
          class="mg-crow-mascot-img"
          loading="lazy"
        />
        <!-- Mathematically Exact Interactive Eye Tracking Socket -->
        <div class="mg-crow-eye-socket" id="mg-crow-eye" title="I see you!">
          <div class="mg-crow-eye-lid">
            <div class="mg-crow-pupil">
              <span class="mg-crow-pupil-glint"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Embedded Waitlist Content on Right -->
      <div class="mg-crow-waitlist-box">
        <span class="mg-crow-waitlist-kicker">[ DROP 001 VIP ACCESS ]</span>
        <h3 class="mg-crow-waitlist-title">JOIN THE WAITLIST</h3>
        <p class="mg-crow-waitlist-sub">
          Be first to claim limited 140cm double-jacquard laces, solid CNC brass aglets, and handcrafted Indian heritage weaves.
        </p>
        <div class="mg-crow-waitlist-input-slot"></div>
      </div>
    </div>
  `;

  // Render waitlist input inside the crow mascot section slot
  const inputSlot = section.querySelector('.mg-crow-waitlist-input-slot');
  if (inputSlot) {
    const pill = renderWaitlistPillBar({
      placeholder: 'Enter your email for early access...',
      buttonText: 'CLAIM VIP ACCESS →',
      idPrefix: 'crow-section-wl'
    });
    inputSlot.appendChild(pill);
  }

  // Attach interactive eye tracking physics
  const eye = section.querySelector('#mg-crow-eye');
  const pupil = section.querySelector('.mg-crow-pupil');
  const eyeLid = section.querySelector('.mg-crow-eye-lid');

  if (eye && pupil) {
    const maxTravel = 5.6; // max travel radius inside eye socket in pixels
    let mouseX = null;
    let mouseY = null;
    let lastRealMouseMove = 0;
    let prevClientX = null;
    let prevClientY = null;
    let isScrolling = false;
    let scrollTimeout = null;
    let wheelImpulse = 0;
    let rafId = null;

    const markScrolling = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        scheduleUpdate();
      }, 500);
    };

    const updateGaze = () => {
      const windowHeight = window.innerHeight || 800;
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - windowHeight);
      const currentScrollY = window.scrollY || window.pageYOffset || 0;

      const pageRatio = Math.max(0, Math.min(1, currentScrollY / maxScroll));

      const sectionRect = section.getBoundingClientRect();
      const travelDistance = windowHeight + sectionRect.height * 0.8;
      const sectionProgress = Math.max(0, Math.min(1, (windowHeight - sectionRect.top) / travelDistance));

      const scrollProgress = sectionProgress * 0.65 + pageRatio * 0.35;

      const normalizedScrollY = (scrollProgress - 0.5) * 2;
      let scrollGazeY = normalizedScrollY * (maxTravel * 0.94);

      scrollGazeY += wheelImpulse * 1.8;
      wheelImpulse *= 0.82;

      const scrollGazeX = 1.8;

      let finalX = scrollGazeX;
      let finalY = scrollGazeY;

      const now = performance.now();
      const isMouseActive = !isScrolling && mouseX !== null && (now - lastRealMouseMove < 1800);

      if (isMouseActive) {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const dx = mouseX - eyeCenterX;
        const dy = mouseY - eyeCenterY;
        const dist = Math.hypot(dx, dy);

        if (dist > 0) {
          const angle = Math.atan2(dy, dx);
          const clampedDist = Math.min(dist / 22, maxTravel);
          const mX = Math.cos(angle) * clampedDist;
          const mY = Math.sin(angle) * clampedDist;

          const mouseWeight = Math.max(0, 1 - (now - lastRealMouseMove) / 1800);
          finalX = mX * mouseWeight + scrollGazeX * (1 - mouseWeight);
          finalY = mY * mouseWeight + scrollGazeY * (1 - mouseWeight);
        }
      }

      const currentDist = Math.hypot(finalX, finalY);
      if (currentDist > maxTravel) {
        const scale = maxTravel / currentDist;
        finalX *= scale;
        finalY *= scale;
      }

      pupil.style.transform = `translate(${finalX.toFixed(2)}px, ${finalY.toFixed(2)}px)`;
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          updateGaze();
          rafId = null;
        });
      }
    };

    const onScroll = () => {
      markScrolling();
      scheduleUpdate();
    };

    const onWheel = (e) => {
      markScrolling();
      wheelImpulse = Math.max(-1, Math.min(1, e.deltaY / 40));
      scheduleUpdate();
    };

    const onMouseMove = (e) => {
      if (prevClientX !== null && prevClientY !== null) {
        const moveDist = Math.hypot(e.clientX - prevClientX, e.clientY - prevClientY);
        if (moveDist < 3 && isScrolling) {
          return;
        }
      }
      prevClientX = e.clientX;
      prevClientY = e.clientY;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastRealMouseMove = performance.now();
      scheduleUpdate();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    requestAnimationFrame(() => {
      updateGaze();
    });

    const triggerBlink = () => {
      if (eyeLid) {
        eyeLid.style.transform = 'scaleY(0.06)';
        setTimeout(() => {
          eyeLid.style.transform = 'scaleY(1)';
        }, 120);
      }
    };

    setInterval(() => {
      triggerBlink();
    }, 4000 + Math.random() * 3000);

    eye.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerBlink();
      setTimeout(triggerBlink, 180);
      if (onLaceClick) onLaceClick();
    });
  }

  const img = section.querySelector('.mg-crow-mascot-img');
  if (img && onLaceClick) {
    img.addEventListener('click', () => onLaceClick());
  }

  return section;
}
