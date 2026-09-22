/**
 * Two progressive enhancements, both no-ops if this file never runs:
 *   1. Scroll reveal — content is only hidden once we know we can show it again.
 *   2. The folio rail — a running section marker in the outer margin.
 *
 * Re-initialised on every view transition, since the body is swapped, not reloaded.
 */

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer: IntersectionObserver | undefined;
let folioObserver: IntersectionObserver | undefined;

function initReveal() {
  observer?.disconnect();

  const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]');
  if (targets.length === 0) return;

  // Only now do the hiding rules in CSS come into force.
  document.documentElement.setAttribute('data-reveal-ready', '');

  if (reduced()) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  for (const el of targets) {
    if (el.hasAttribute('data-reveal-stagger')) {
      [...el.children].forEach((child, i) =>
        (child as HTMLElement).style.setProperty('--i', String(i)),
      );
    }
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );

  targets.forEach((el) => observer!.observe(el));
}

function initFolio() {
  folioObserver?.disconnect();

  const rail = document.querySelector<HTMLElement>('[data-folio]');
  const numberEl = rail?.querySelector<HTMLElement>('[data-folio-number]');
  const titleEl = rail?.querySelector<HTMLElement>('[data-folio-title]');
  if (!rail || !numberEl || !titleEl) return;

  const headings = [...document.querySelectorAll<HTMLElement>('.prose-editorial h2')];
  if (headings.length === 0) {
    rail.dataset.state = 'none';
    return;
  }

  const READING_LINE = 200;
  let current = -2;

  const apply = () => {
    // The last heading whose top has passed the reading line.
    let index = -1;
    headings.forEach((heading, i) => {
      if (heading.getBoundingClientRect().top < READING_LINE) index = i;
    });

    if (index === current) return;
    current = index;

    if (index < 0) {
      rail.dataset.state = 'before';
      return;
    }

    rail.dataset.state = 'active';
    numberEl.textContent = String(index + 1).padStart(2, '0');
    titleEl.textContent = headings[index].textContent ?? '';
  };

  // Driven by IntersectionObserver rather than a scroll listener: it fires exactly
  // when a heading crosses the reading line, costs nothing in between, and does not
  // depend on requestAnimationFrame.
  folioObserver = new IntersectionObserver(apply, {
    rootMargin: `-${READING_LINE}px 0px 0px 0px`,
    threshold: [0, 1],
  });

  headings.forEach((heading) => folioObserver!.observe(heading));
  apply();
}

function init() {
  initReveal();
  initFolio();
}

document.addEventListener('astro:page-load', init);
