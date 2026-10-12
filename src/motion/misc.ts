import { BREAKPOINT, gsap, listen, onDispose, qs, qsa } from './core';

export function initOther() {
  qsa('.year').forEach((el) => (el.textContent = String(new Date().getFullYear())));

  const mm = gsap.matchMedia();
  mm.add(`(max-width: ${BREAKPOINT - 1}px)`, () => {
    const path = qs('.loc-path-s_path');
    if (path) path.scrollLeft = (path.scrollWidth - path.clientWidth) / 2;
  });
  onDispose(() => mm.revert());

  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    qsa('source[src$=".webm"]').forEach((s) => s.remove());
    qsa<HTMLVideoElement>('video').forEach((v) => {
      if (v.closest('.hero-w') || v.closest('.cta-w')) return;
      v.load();
      v.play().catch(() => {});
    });
  }
}

export function fitText() {
  const run = () => {
    qsa('[data-fit-text]').forEach((el) => {
      el.style.whiteSpace = 'nowrap';
      el.style.fontSize = '';
      el.style.width = 'max-content';
      const available = el.parentElement!.clientWidth;
      const natural = el.offsetWidth;
      const size = parseFloat(getComputedStyle(el).fontSize);
      el.style.width = '';
      el.style.fontSize = `${size * (available / natural)}px`;
    });
  };
  run();
  listen(window, 'resize', run);
}
