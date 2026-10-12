import { BREAKPOINT, gsap, qsa, reducedMotion, ScrollTrigger } from './core';
import { animateCtn, animateLine, animateSlide, animateTextA, animateTextH, animateTextP, type Mode } from './text';

type Anim = (t: Element[], mode: Mode, delay?: number) => void;

export function initThemeChange() {
  const themed = qsa('[data-theme]');
  if (!themed.length) return;
  const bind = (band: HTMLElement, add: string, remove: string[]) => {
    if (getComputedStyle(band).display === 'none') return;
    const b = band.getBoundingClientRect();
    themed.forEach((el) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      if (cx < b.left || cx > b.right) return;
      const apply = () => {
        el.classList.add(add);
        el.classList.remove(...remove);
      };
      ScrollTrigger.create({
        trigger: band,
        start: () => `top top+=${r.top + r.height / 2}`,
        end: () => `bottom top+=${r.top + r.height / 2}`,
        onEnter: apply,
        onEnterBack: apply,
      });
    });
  };
  qsa('[data-bg="color"]').forEach((b) => bind(b, 'theme_on-color', ['theme_on-light', 'theme_on-dark']));
  qsa('[data-bg="light"]').forEach((b) => bind(b, 'theme_on-light', ['theme_on-dark', 'theme_on-color']));
  qsa('[data-bg="dark"]').forEach((b) => bind(b, 'theme_on-dark', ['theme_on-light', 'theme_on-color']));
}

export function initScrollRevealFirst() {
  const groups = new Map<Element, HTMLElement[]>();
  qsa('[data-reveal-first]').forEach((el) => {
    const p = el.parentElement!;
    if (!groups.has(p)) groups.set(p, []);
    groups.get(p)!.push(el);
  });
  groups.forEach((items) =>
    items
      .slice(1)
      .forEach((item) => qsa('[data-scroll-reveal]', item).forEach((el) => el.removeAttribute('data-scroll-reveal'))),
  );
}

export function initScrollElementsReveal() {
  const kinds: [string, Anim][] = [
    ['a', animateTextA],
    ['h', animateTextH],
    ['p', animateTextP],
    ['ctn', animateCtn],
    ['line', animateLine],
    ['slide', animateSlide],
  ];
  kinds.forEach(([kind, fn]) => {
    const els = qsa(`[data-scroll-reveal="${kind}"]`);
    if (!els.length) return;
    const groups = new Map<HTMLElement, HTMLElement[]>();
    els.forEach((el) => {
      const trigger = (el.closest('[data-scroll-reveal="w"]') as HTMLElement) || el;
      if (!groups.has(trigger)) groups.set(trigger, []);
      groups.get(trigger)!.push(el);
    });
    groups.forEach((items, trigger) => {
      gsap.set(items, { visibility: 'visible' });
      const horizontal = trigger.closest('[data-scroll-horizontal]') as
        (HTMLElement & { _horizontalTween?: gsap.core.Tween }) | null;
      ScrollTrigger.create({
        trigger,
        containerAnimation: horizontal?._horizontalTween,
        start: horizontal ? 'left bottom' : 'top bottom',
        once: true,
        onEnter: () => fn(items, 'reveal'),
      });
      fn(items, 'initial');
    });
  });
}

export function initAllParallax() {
  if (reducedMotion) return;
  const mobile = window.innerWidth < BREAKPOINT;
  const allowed = (w: HTMLElement) => !(mobile && w.dataset.mob === 'off') && (mobile || w.dataset.desk !== 'off');

  const imgVariants: [string, gsap.TweenVars, gsap.TweenVars, ScrollTrigger.Vars][] = [
    ['img', { yPercent: -15, translateZ: 10 }, { yPercent: 15, translateZ: 10 }, { start: 'top bottom', scrub: 0.5 }],
    [
      'img-out',
      { yPercent: 0, translateZ: 10 },
      { yPercent: 20, translateZ: 10 },
      { start: 'bottom bottom', end: 'bottom top', scrub: 0.5 },
    ],
    [
      'img-in',
      { yPercent: -20, translateZ: 10 },
      { yPercent: 0, translateZ: 10 },
      { start: 'top bottom', end: 'bottom bottom', scrub: true },
    ],
  ];
  imgVariants.forEach(([kind, from, to, st]) => {
    gsap.utils.toArray<HTMLElement>(`[data-parallax="${kind}"]`).forEach((el) => {
      const w = el.closest('[data-parallax="w"]') as HTMLElement | null;
      if (!w || !allowed(w)) return;
      gsap.fromTo(el, from, { ...to, ease: 'none', scrollTrigger: { trigger: w, ...st } });
    });
  });

  const ctnVariants: [string, number, number][] = [
    ['ctn-down', -10, 10],
    ['ctn-up', 10, -10],
  ];
  ctnVariants.forEach(([kind, from, to]) => {
    gsap.utils.toArray<HTMLElement>(`[data-parallax="${kind}"]`).forEach((el) => {
      if (!allowed(el)) return;
      gsap.fromTo(
        el,
        { yPercent: from },
        {
          yPercent: to,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 125%', end: 'bottom -25%', scrub: 0.5 },
        },
      );
    });
  });
}

export function initPlayPauseVideoScroll() {
  gsap.utils.toArray<HTMLElement>('[data-video-playpause]').forEach((block) => {
    const videos = qsa<HTMLVideoElement>('.video', block);
    if (!videos.length) return;
    videos.forEach((v) => {
      v.load();
      v.currentTime = 0;
    });
    if (reducedMotion) return;
    const play = () => videos.forEach((v) => v.play().catch(() => {}));
    const pause = () => videos.forEach((v) => v.pause());
    ScrollTrigger.create({
      trigger: block,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: play,
      onEnterBack: play,
      onLeave: pause,
      onLeaveBack: pause,
    });
  });
}
