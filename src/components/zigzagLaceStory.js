/**
 * zigzagLaceStory.js
 * "Tell Our Story" in Perplexity-type editorial font,
 * featuring dynamic scroll-driven zig-zag shoelace physics with 3D brass aglet follower.
 */

export function renderZigZagLaceStory(onExploreChapter) {
  const section = document.createElement('section');
  section.className = 'mg-story-section';
  section.id = 'mg-story-section';

  section.innerHTML = `
    <!-- Perplexity-Style Story Header -->
    <div class="mg-story-header">
      <span class="mg-story-eyebrow">[ NARRATIVE DISCLOSURE // CHAPTER 01—04 ]</span>
      <h2 class="mg-story-main-title">
        The Anatomy of a <em>Cultural Thread.</em>
      </h2>
      <p class="mg-story-subtitle">
        How we replaced synthetic polyester laces with living handloom jacquards, CNC-milled solid brass aglets, and street-level cultural expression.
      </p>
    </div>

    <!-- Container for Chapters & Interactive Zig-Zag Shoelace Canvas -->
    <div class="mg-lace-engine-container" id="mg-lace-engine-container">
      
      <!-- SVG Canvas for the Dynamic Shoelace -->
      <svg class="mg-lace-svg-canvas" id="mg-lace-canvas" preserveAspectRatio="none">
        <defs>
          <filter id="laceShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="rgba(0,0,0,0.22)" />
          </filter>
          <linearGradient id="laceAgletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff099" />
            <stop offset="50%" stop-color="#d4af37" />
            <stop offset="100%" stop-color="#8a6d14" />
          </linearGradient>
        </defs>
        
        <!-- Background Shadow Path -->
        <path id="mg-lace-shadow-path" class="mg-lace-shadow" />
        <!-- Braided Dark Body Path -->
        <path id="mg-lace-body-path" class="mg-lace-body" />
        <!-- Reflective Gold Accent Tracer -->
        <path id="mg-lace-core-path" class="mg-lace-core" />
      </svg>

      <!-- 3D Brass Aglet Tip Follower -->
      <div class="mg-aglet-follower" id="mg-aglet-follower" title="Kadam Culture Solid Brass Aglet">
        <div class="mg-aglet-ring"></div>
      </div>

      <!-- Story Chapters with Alternating Eyelets -->
      <div class="mg-story-chapters" id="mg-story-chapters">
        
        <!-- Chapter 01 -->
        <div class="mg-story-chapter-card" id="story-chapter-1">
          <div class="mg-eyelet right" id="eyelet-1"></div>
          <div class="mg-chapter-content">
            <span class="mg-chapter-number">[ 01 / SPECIFICATION ]</span>
            <h3 class="mg-chapter-title">Engineered for the Air Force 1 Silhouette</h3>
            <p class="mg-chapter-text">
              Standard factory laces are 100% mass-extruded petrochemical plastic that loosen and fray within weeks. Our Air Force 1 edition is calibrated at 140cm flat weave, engineered to maintain perfect lock tension with zero lace bunching.
            </p>
            <div class="mg-chapter-meta">
              <span class="mg-chapter-tag">140CM AF1 PRECISION</span>
              <span class="mg-chapter-tag">ZERO SLIP LOCK</span>
              <span class="mg-chapter-tag">FLAT HIGH-DENSITY WEAVE</span>
            </div>
          </div>
          <div class="mg-chapter-media">
            <img src="/assets/af1_chikankari.jpg" alt="Air Force 1 styled with Chikankari handcrafted laces" loading="lazy" />
          </div>
        </div>

        <!-- Chapter 02 (Reverse Layout) -->
        <div class="mg-story-chapter-card reverse" id="story-chapter-2">
          <div class="mg-eyelet left" id="eyelet-2"></div>
          <div class="mg-chapter-content">
            <span class="mg-chapter-number">[ 02 / PROVENANCE ]</span>
            <h3 class="mg-chapter-title">Centuries of Handloom Lineage</h3>
            <p class="mg-chapter-text">
              Woven on artisanal looms in Lucknow and Barmer, Rajasthan. Every pair integrates authentic shadow-work embroidery and resist-dye Ajrakh geometry made with madder root, indigo, and pomegranate peel.
            </p>
            <div class="mg-chapter-meta">
              <span class="mg-chapter-tag">NATURAL BOTANICAL DYES</span>
              <span class="mg-chapter-tag">FAIR WAGE ARTISANS</span>
              <span class="mg-chapter-tag">AJRAKH & CHIKANKARI</span>
            </div>
          </div>
          <div class="mg-chapter-media">
            <img src="/assets/af1_ajrakh.jpg" alt="Ajrakh botanical handloom laces on Nike Air Force 1" loading="lazy" />
          </div>
        </div>

        <!-- Chapter 03 -->
        <div class="mg-story-chapter-card" id="story-chapter-3">
          <div class="mg-eyelet right" id="eyelet-3"></div>
          <div class="mg-chapter-content">
            <span class="mg-chapter-number">[ 03 / HARDWARE ]</span>
            <h3 class="mg-chapter-title">Solid Brass Aglets & Custom Dubraes</h3>
            <p class="mg-chapter-text">
              Cheap plastic heat-shrink tips belong in the past. We cap every lace tip with heavy-gauge solid brass aglets, micro-engraved with the Devanagari कदम glyph. Designed to outlast five sneaker lifecycles.
            </p>
            <div class="mg-chapter-meta">
              <span class="mg-chapter-tag">CNC MILLED SOLID BRASS</span>
              <span class="mg-chapter-tag">SCRATCH RESISTANT PVD</span>
              <span class="mg-chapter-tag">REPLACEABLE AGLET SCREWS</span>
            </div>
          </div>
          <div class="mg-chapter-media">
            <img src="/assets/catalog_aglet_kit.jpg" alt="Solid brass aglets and dubraes kit" loading="lazy" />
          </div>
        </div>

        <!-- Chapter 04 (Reverse Layout) -->
        <div class="mg-story-chapter-card reverse" id="story-chapter-4">
          <div class="mg-eyelet left" id="eyelet-4"></div>
          <div class="mg-chapter-content">
            <span class="mg-chapter-number">[ 04 / CIRCULARITY ]</span>
            <h3 class="mg-chapter-title">Zero Microplastics, Complete Circularity</h3>
            <p class="mg-chapter-text">
              By upgrading your existing kicks with distinctive cultural laces instead of buying new footwear, you extend the sneaker lifecycle while eliminating synthetic plastic shedding into municipal waterways.
            </p>
            <div class="mg-chapter-meta">
              <span class="mg-chapter-tag">100% ORGANIC COTTON</span>
              <span class="mg-chapter-tag">LIFETIME RELACE WARRANTY</span>
              <span class="mg-chapter-tag">CARBON NEGATIVE LOGISTICS</span>
            </div>
          </div>
          <div class="mg-chapter-media">
            <img src="/assets/catalog_horn_ok.jpg" alt="Horn OK Please truck art laces" loading="lazy" />
          </div>
        </div>

      </div>
    </div>

    <!-- Perplexity-Style Pull Quote Manifesto Strip -->
    <div class="mg-manifesto-strip">
      <div class="mg-manifesto-inner">
        <blockquote class="mg-manifesto-quote">
          “The street you walk upon remembers every stride. <em>Tie the narrative with intention.</em>”
        </blockquote>
        <div class="mg-manifesto-author">— KADAM CULTURE LABS · TOKYO / NEW DELHI / NEW YORK</div>
      </div>
    </div>
  `;

  // Attach the dynamic scroll-driven zig-zag lace engine
  setTimeout(() => {
    initZigZagLaceEngine();
  }, 100);

  return section;
}

/**
 * Initializes the dynamic SVG zig-zag lace animation tied to scroll position
 */
function initZigZagLaceEngine() {
  const container = document.getElementById('mg-lace-engine-container');
  const svg = document.getElementById('mg-lace-canvas');
  const shadowPath = document.getElementById('mg-lace-shadow-path');
  const bodyPath = document.getElementById('mg-lace-body-path');
  const corePath = document.getElementById('mg-lace-core-path');
  const aglet = document.getElementById('mg-aglet-follower');

  if (!container || !svg || !bodyPath || !aglet) return;

  const eyelet1 = document.getElementById('eyelet-1');
  const eyelet2 = document.getElementById('eyelet-2');
  const eyelet3 = document.getElementById('eyelet-3');
  const eyelet4 = document.getElementById('eyelet-4');

  let totalLength = 0;

  function buildLacePath() {
    const cRect = container.getBoundingClientRect();
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    if (height < 100) return;

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Compute eyelet center relative coordinates inside container
    function getEyeletPos(el, fallbackX, fallbackY) {
      if (!el) return { x: fallbackX, y: fallbackY };
      const r = el.getBoundingClientRect();
      return {
        x: r.left - cRect.left + r.width / 2,
        y: r.top - cRect.top + r.height / 2
      };
    }

    const p0 = { x: width / 2, y: 10 }; // Top entry point
    const p1 = getEyeletPos(eyelet1, width - 40, height * 0.15); // Eyelet 1 (Right)
    const p2 = getEyeletPos(eyelet2, 40, height * 0.4);         // Eyelet 2 (Left)
    const p3 = getEyeletPos(eyelet3, width - 40, height * 0.65); // Eyelet 3 (Right)
    const p4 = getEyeletPos(eyelet4, 40, height * 0.88);        // Eyelet 4 (Left)
    const pEnd = { x: width / 2, y: height - 20 };              // Bottom center loop

    // Construct smooth continuous cubic bezier curves that thread zig-zag
    const d = [
      `M ${p0.x} ${p0.y}`,
      // Curve from start to Eyelet 1 (Right)
      `C ${p0.x} ${(p0.y + p1.y) / 2}, ${p1.x} ${(p0.y + p1.y) / 2}, ${p1.x} ${p1.y}`,
      // Zig-Zag Across to Eyelet 2 (Left)
      `C ${p1.x - 80} ${p1.y + 120}, ${p2.x + 80} ${p2.y - 120}, ${p2.x} ${p2.y}`,
      // Zig-Zag Across to Eyelet 3 (Right)
      `C ${p2.x + 80} ${p2.y + 120}, ${p3.x - 80} ${p3.y - 120}, ${p3.x} ${p3.y}`,
      // Zig-Zag Across to Eyelet 4 (Left)
      `C ${p3.x - 80} ${p3.y + 120}, ${p4.x + 80} ${p4.y - 120}, ${p4.x} ${p4.y}`,
      // Curve to bottom finish
      `C ${p4.x} ${p4.y + 100}, ${pEnd.x - 60} ${pEnd.y - 40}, ${pEnd.x} ${pEnd.y}`
    ].join(' ');

    [shadowPath, bodyPath, corePath].forEach(path => {
      if (path) {
        path.setAttribute('d', d);
      }
    });

    totalLength = bodyPath.getTotalLength();

    [shadowPath, bodyPath, corePath].forEach(path => {
      if (path) {
        path.style.strokeDasharray = `${totalLength}`;
        path.style.strokeDashoffset = `${totalLength}`;
      }
    });

    updateScrollPosition();
  }

  let ticking = false;

  function updateScrollPosition() {
    if (!container || !bodyPath || totalLength <= 0) return;

    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Calculate scroll progress from when container enters bottom of screen to when it passes top
    const startY = rect.top - windowH * 0.75;
    const scrollSpan = rect.height + windowH * 0.5;
    const rawProgress = -startY / scrollSpan;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const currentLength = totalLength * progress;
    const offset = totalLength - currentLength;

    [shadowPath, bodyPath, corePath].forEach(path => {
      if (path) path.style.strokeDashoffset = `${offset}`;
    });

    // Move and rotate the metallic brass aglet follower
    if (progress > 0.01 && progress < 0.99) {
      aglet.style.opacity = '1';
      try {
        const point = bodyPath.getPointAtLength(currentLength);
        const pointAhead = bodyPath.getPointAtLength(Math.min(currentLength + 2, totalLength));
        const angle = Math.atan2(pointAhead.y - point.y, pointAhead.x - point.x) * (180 / Math.PI);

        aglet.style.left = `${point.x}px`;
        aglet.style.top = `${point.y}px`;
        aglet.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;
      } catch (e) {
        // SVG math catch
      }
    } else if (progress <= 0.01) {
      aglet.style.opacity = '0';
    } else {
      aglet.style.opacity = '1';
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    buildLacePath();
  }, { passive: true });

  buildLacePath();
}
