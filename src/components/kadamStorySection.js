/**
 * kadamStorySection.js
 * The Kadam Story — High-editorial text blur animation narrative section
 */
export function renderKadamStorySection() {
  const section = document.createElement('section');
  section.className = 'mg-story-section';
  section.id = 'mg-story-section';

  section.innerHTML = `
    <div class="mg-story-inner">
      <div class="mg-story-header">
        <span class="mg-story-kicker">[ 04 // THE KADAM NARRATIVE ]</span>
        <h2 class="mg-story-heading">THE KADAM STORY</h2>
        <div class="mg-story-hi">कदम · EVERY STEP A STATEMENT</div>
      </div>

      <div class="mg-story-content">
        <p class="mg-story-paragraph mg-blur-text">
          <strong>Kadam Culture (कदम)</strong> represents a movement to reclaim the details that define your style. We merge the raw heritage of Indian master weavers with the bold edge of street culture, turning everyday sneaker laces into wearable art.
        </p>

        <blockquote class="mg-story-quote mg-blur-text">
          “We don't just change your laces. We elevate your footprint.”
        </blockquote>

        <p class="mg-story-paragraph mg-blur-text">
          Handcrafted with 100% organic cotton weaves and crowned with solid CNC brass aglets, each 140cm pair carries zero plastic and 100% soul. From local artisan looms to global streetwear capitals, step with intention.
        </p>
      </div>
    </div>
  `;

  // Attach IntersectionObserver for scroll-triggered text blur animation
  const blurElements = section.querySelectorAll('.mg-blur-text');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    blurElements.forEach((el) => observer.observe(el));
  } else {
    blurElements.forEach((el) => el.classList.add('visible'));
  }

  return section;
}
