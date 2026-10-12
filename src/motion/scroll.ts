import Lenis from 'lenis';
import {
  addTicker,
  BREAKPOINT,
  durL,
  gsap,
  listen,
  onDispose,
  qs,
  qsa,
  reducedMotion,
  ScrollTrigger,
  state,
} from './core';

const easeExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function initLenis() {
  const lenis = new Lenis({
    wrapper: window,
    duration: 1.2,
    smoothWheel: !reducedMotion,
    touchMultiplier: 2,
    easing: easeExpo,
    infinite: false,
  });
  state.lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  addTicker((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  onDispose(() => {
    lenis.destroy();
    state.lenis = null;
  });
}

export function initLocalLenis() {
  qsa('[data-lenis-scroll]').forEach((el) => {
    const local = new Lenis({
      wrapper: el,
      duration: 0.6,
      smoothWheel: !reducedMotion,
      touchMultiplier: 2,
      easing: easeExpo,
      infinite: false,
    });
    state.localLenis.push(local);
    addTicker((time) => local.raf(time * 1000));
    onDispose(() => local.destroy());
  });
}

export function initSnapSections() {
  const mm = gsap.matchMedia();
  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const sections = gsap.utils.toArray<HTMLElement>('[data-snap]');
    const lenis = state.lenis;
    if (!sections.length || !lenis) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const vh = window.innerHeight;
        let best: HTMLElement | null = null;
        let bestRatio = 0;
        sections.forEach((s) => {
          const r = s.getBoundingClientRect();
          const ratio = (Math.min(r.bottom, vh) - Math.max(r.top, 0)) / Math.min(s.offsetHeight, vh);
          if (ratio > 0.5 && ratio > bestRatio) {
            bestRatio = ratio;
            best = s;
          }
        });
        if (best) lenis.scrollTo(best, { duration: durL, easing: gsap.parseEase('Ease') });
      }, 40);
    };
    const off = lenis.on('scroll', onScroll);
    return () => {
      clearTimeout(timer);
      off();
    };
  });
  onDispose(() => mm.revert());
}

export function initScrollBar() {
  const mm = gsap.matchMedia();
  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const bar = qs('[data-s-bar]');
    if (!bar) return;
    const thumb = qs('[data-s-bar-thumb]', bar)!;
    const label = qs('[data-s-bar-label]', bar);
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const pct = Math.round(100 * self.progress);
        bar.style.setProperty('--progress', `${100 * self.progress}%`);
        if (label) label.textContent = String(pct).padStart(2, '0');
      },
    });
    let dragging = false;
    const enter = () => (document.body.style.cursor = 'grab');
    const leave = () => {
      if (!dragging) document.body.style.cursor = '';
    };
    const down = (e: PointerEvent) => {
      dragging = true;
      thumb.setPointerCapture(e.pointerId);
      document.body.style.cursor = 'grabbing';
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const r = bar.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      state.lenis?.scrollTo(p * max, { duration: 3.2 });
    };
    const up = () => {
      dragging = false;
      document.body.style.cursor = 'grab';
    };
    thumb.addEventListener('pointerenter', enter);
    thumb.addEventListener('pointerleave', leave);
    thumb.addEventListener('pointerdown', down);
    thumb.addEventListener('pointermove', move);
    thumb.addEventListener('pointerup', up);
    return () => {
      thumb.removeEventListener('pointerenter', enter);
      thumb.removeEventListener('pointerleave', leave);
      thumb.removeEventListener('pointerdown', down);
      thumb.removeEventListener('pointermove', move);
      thumb.removeEventListener('pointerup', up);
    };
  });
  onDispose(() => mm.revert());
}

export function initLogo() {
  const logo = qs('.header-logo');
  if (!logo || reducedMotion) return;
  const ring = qsa('.header-logo_bg', logo).find((el) => getComputedStyle(el).display !== 'none');
  if (!ring) return;
  const speed = { speed: 30 };
  let dir = 1;
  let rotation = 0;
  let userScrolled = false;
  let settle: ReturnType<typeof setTimeout> | undefined;
  listen(window, 'wheel', () => (userScrolled = true), { once: true });
  listen(window, 'touchmove', () => (userScrolled = true), { once: true });
  addTicker((_time, deltaMs) => {
    const dt = Math.min(deltaMs, 100);
    rotation += speed.speed * (dt / 1000);
    gsap.set(ring, { rotation, transformOrigin: 'center center' });
  });
  const off = state.lenis?.on('scroll', ({ velocity }: { velocity: number }) => {
    if (!userScrolled) return;
    if (velocity !== 0) dir = velocity > 0 ? 1 : -1;
    gsap.to(speed, { speed: dir * (30 + 10 * Math.abs(velocity)), duration: 0.3, ease: 'Out', overwrite: true });
    clearTimeout(settle);
    settle = setTimeout(() => gsap.to(speed, { speed: 30 * dir, duration: durL, ease: 'Out' }), 100);
  });
  onDispose(() => {
    off?.();
    clearTimeout(settle);
  });
}

export function initAnchors() {
  listen(document, 'click', (e) => {
    const a = (e.target as Element).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const hash = a.getAttribute('href')!;
    if (hash === '#') {
      e.preventDefault();
      return;
    }
    const target = document.querySelector<HTMLElement>(hash);
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();
    if (location.hash !== hash) history.pushState({ hash }, '', hash);
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    if (start === end) return;
    const duration = reducedMotion ? 0 : 472.143 * Math.log(Math.abs(start - end) + 125) - 2000;
    const t0 = Date.now();
    const step = () => {
      const t = Date.now() - t0;
      const p = t / duration;
      const e2 = p < 0.5 ? 4 * p * p * p : (p - 1) * (2 * p - 2) * (2 * p - 2) + 1;
      window.scroll(0, t > duration ? end : start + (end - start) * e2);
      if (t <= duration) requestAnimationFrame(step);
      else {
        const hadTabIndex = target.hasAttribute('tabindex');
        if (!hadTabIndex) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        if (!hadTabIndex) target.removeAttribute('tabindex');
      }
    };
    requestAnimationFrame(step);
  });
}
