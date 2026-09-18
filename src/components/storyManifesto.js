export function renderStoryManifesto() {
  const section = document.createElement('section');
  section.className = 'story-section';
  section.id = 'manifesto';

  section.innerHTML = `
    <div class="story-container">
      <div class="story-label">Act I • The Origin</div>
      <h2 class="story-heading">Why We Wear What We Weave</h2>
      <p class="story-subtext">
        Sneakers have become the canvas of modern global identity. Yet for decades, Indian street culture relied on imported silhouettes and silent defaults. Kadam Culture changes the narrative.
      </p>

      <div class="manifesto-quote-box">
        <blockquote class="manifesto-quote">
          "Sneaker culture in India lived on imported silhouettes for decades. Kadam Culture puts our trucks, our Chikankari, our Bandhani, and our street stories right where everybody looks: at your feet."
        </blockquote>

        <div class="manifesto-author">
          <div class="author-line"></div>
          <div>
            <div class="author-title">The Kadam Culture Manifesto</div>
            <div class="author-sub">Bengaluru • Mumbai • New Delhi</div>
          </div>
        </div>
      </div>

      <div class="pillars-grid">
        <div class="pillar-card">
          <span class="pillar-num">01</span>
          <h3>Woven Heritage</h3>
          <p>
            Centuries of royal embroidery and block geometry—Lucknowi Chikankari and Kutch Ajrakh—re-engineered into heavy-density 8mm flat woven cotton.
          </p>
        </div>

        <div class="pillar-card">
          <span class="pillar-num">02</span>
          <h3>Street Lore</h3>
          <p>
            Vibrant Indian highway truck art typography, tapri chai speckles, and 3M reflective threads built to flare up under phone flashes and night lights.
          </p>
        </div>

        <div class="pillar-card">
          <span class="pillar-num">03</span>
          <h3>Tactile Hardware</h3>
          <p>
            Zero disposable plastic packaging. Delivered in collectible matte sliding metal tins, screw-on solid brass aglets, and custom micro screwdrivers.
          </p>
        </div>
      </div>
    </div>
  `;

  return section;
}
