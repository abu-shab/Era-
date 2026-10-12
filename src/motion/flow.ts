import { BREAKPOINT, durL, durM, durS, gsap, onDispose, qs, qsa, reducedMotion, ScrollTrigger } from './core';
import { animateCtn, animateTextH, animateTextP } from './text';

type Horizontal = HTMLElement & { _horizontalTween?: gsap.core.Tween };

export function initTransitionFlow() {
  initHeroFlow();
  initBenefitsIntro();
  initLocationInfo();
  initLocationHorizontal();
  initLocationPathReveal();
  initLocationMap();
  initAmenitiesFlow();
  initArchitectureFlow();
  initFooterFlow();
}

function initHeroFlow() {
  const area = qs('.hero-scroll-area');
  if (!area) return;
  const content = qs('.hero-s', area)!;
  const mobile = window.innerWidth < BREAKPOINT;
  const bg = qs('.hero-w_bg', area)!;
  const img = qs<HTMLImageElement>('.img', bg)!;
  const build = () => {
    const h = bg.offsetHeight;
    const tl = gsap.timeline({ scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: true } });
    if (!mobile)
      tl.fromTo(content, { y: 0 }, { y: -(1.25 * h - window.innerHeight), ease: 'Ease', duration: 0.6 }).fromTo(
        bg,
        { y: 0 },
        { y: -(h - window.innerHeight), ease: 'Ease', duration: 0.6 },
        '<',
      );
    tl.fromTo(
      bg,
      { scale: 1, translateZ: 10, transformOrigin: '50% 75%' },
      { scale: reducedMotion ? 1 : 2, translateZ: 10, ease: 'In', duration: 0.6 },
      mobile ? '>' : '-=0.2',
    );
  };
  if (img.complete) build();
  else img.addEventListener('load', build, { once: true });
}

function initBenefitsIntro() {
  const w = qs('.benefits-intro-w');
  if (!w || reducedMotion) return;
  gsap
    .timeline({ scrollTrigger: { trigger: w, start: 'top bottom', end: 'bottom top', scrub: true } })
    .fromTo(qsa('[data-circle-text]', w), { wordSpacing: '0rem' }, { wordSpacing: '10rem', ease: 'none' });
}

function initLocationInfo() {
  const w = qs('.loc-info-w');
  if (!w) return;
  const card = qs('.loc-info-s', w)!;
  const ps = qsa('[data-part="p"]', w);
  const ctns = qsa('[data-part="ctn"]', w);
  animateTextP(ps, 'initial');
  animateCtn(ctns, 'initial');
  gsap
    .timeline({
      scrollTrigger: {
        trigger: w,
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: 0.5,
        onEnter: () => {
          animateTextP(ps, 'reveal', 0.1);
          animateCtn(ctns, 'reveal', 0.1);
        },
        onLeaveBack: () => {
          animateTextP(ps, 'hide', 0);
          animateCtn(ctns, 'hide', 0);
        },
      },
    })
    .fromTo(card, { opacity: 0, scale: reducedMotion ? 1 : 0.75 }, { opacity: 1, scale: 1, ease: 'none' }, 0);
}

function initLocationHorizontal() {
  const area = qs('.loc-scroll-area') as Horizontal | null;
  if (!area) return;
  const mm = gsap.matchMedia();
  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const track = qs('.loc-scroll-area_track', area)!;
    const distance = track.scrollWidth - area.offsetWidth;
    area.style.height = `${track.scrollWidth}px`;
    ScrollTrigger.refresh();
    area._horizontalTween = gsap.to(track, {
      x: -distance,
      ease: 'horScroll',
      scrollTrigger: { trigger: area, start: '2.5% top', end: '97.5% bottom', scrub: 0.25 },
    });
    if (!reducedMotion) {
      gsap.fromTo(
        qsa('.loc-intro-s_title_line', area),
        { xPercent: gsap.utils.wrap([-5, 25, -15]) },
        {
          xPercent: gsap.utils.wrap([5, -25, 25]),
          ease: 'none',
          scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: 0.25 },
        },
      );
      gsap.fromTo(
        qs('.flower.loc-intro', area),
        { xPercent: 0 },
        {
          xPercent: -25,
          ease: 'none',
          scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: 0.25 },
        },
      );
      gsap.fromTo(
        qs('.flower.loc-path', area),
        { yPercent: 0 },
        {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: { trigger: area, start: 'bottom bottom', end: 'bottom top', scrub: 0.25 },
        },
      );
    }
    return () => {
      area.style.height = '';
      delete area._horizontalTween;
    };
  });
  onDispose(() => mm.revert());
}

function initLocationPathReveal() {
  const path = qs('.img.loc-path');
  if (!path) return;
  const horizontal = path.closest('[data-scroll-horizontal]') as Horizontal | null;
  gsap.fromTo(
    path,
    { clipPath: 'inset(0% 100% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: reducedMotion ? 0 : 2 * durL,
      ease: 'Out',
      delay: reducedMotion ? 0 : durM,
      scrollTrigger: {
        trigger: path,
        containerAnimation: horizontal?._horizontalTween,
        start: horizontal ? 'left bottom' : 'top bottom',
        once: true,
      },
    },
  );
}

function initLocationMap() {
  const w = qs('.loc-w');
  if (!w || reducedMotion) return;
  gsap.from(qs('.loc-w_bg_img', w), {
    scale: 1.15,
    transformOrigin: 'center bottom',
    ease: 'Ease',
    scrollTrigger: { trigger: w, start: 'top bottom', end: 'bottom bottom', scrub: 0.25 },
  });
}

function initAmenitiesFlow() {
  const area = qs('.amen-scroll-area');
  if (!area) return;
  gsap
    .timeline({ scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: true } })
    .fromTo(qs('.amen-cms', area), { scale: 1 }, { scale: reducedMotion ? 1 : 2, ease: 'In' })
    .fromTo(qs('.amen-w', area), { opacity: 1 }, { opacity: 0, ease: 'In' }, '<');
}

function initArchitectureFlow() {
  const area = qs('.arch-scroll-area');
  if (!area) return;
  const mm = gsap.matchMedia();
  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const intro = qs('.arch-intro-s', area)!;
    const left = qs('.arch-intro-s_bg_l', intro);
    const right = qs('.arch-intro-s_bg_r', intro);
    const flowerL = qs('.flower.arch-intro-l', intro);
    const flowerR = qs('.flower.arch-intro-r', intro);
    const w = qs('.arch-w', area)!;
    const img = qs('.img', w);
    const h = qs('[data-text="h"]', w);
    const p = qs('[data-text="p"]', w);
    const zoom = reducedMotion ? 1 : 1.84;
    gsap
      .timeline({ scrollTrigger: { trigger: intro, start: 'top bottom', end: '200% top', scrub: true } })
      .fromTo(
        left,
        {
          clipPath:
            'polygon(0% 0%, 0% 100%, 44.444% 100%, 44.444% 36.111%, 98.889% 36.111%, 98.889% 99.074%, 44.444% 99.074%, 1.111% 100%, 100% 100%, 100% 0%)',
        },
        {
          clipPath:
            'polygon(0% 0%, 0% 100%, 44.444% 100%, 44.444% 18.519%, 98.889% 18.519%, 98.889% 81.481%, 44.444% 81.481%, 1.111% 100%, 100% 100%, 100% 0%)',
          ease: 'none',
          duration: 0.5,
        },
      )
      .fromTo(
        right,
        {
          clipPath:
            'polygon(0% 0%, 0% 100%, 1.111% 100%, 1.111% 0.926%, 55.556% 0.926%, 55.556% 63.889%, 1.111% 63.889%, 1.111% 100%, 100% 100%, 100% 0%)',
        },
        {
          clipPath:
            'polygon(0% 0%, 0% 100%, 1.111% 100%, 1.111% 18.519%, 55.556% 18.519%, 55.556% 81.481%, 1.111% 81.481%, 1.111% 100%, 100% 100%, 100% 0%)',
          ease: 'none',
          duration: 0.5,
        },
        '<',
      )
      .to(left, {
        clipPath:
          'polygon(0% 0%, 0% 100%, 44.444% 100%, 44.444% 18.519%, 100% 18.519%, 100% 81.481%, 44.444% 81.481%, 1.111% 100%, 100% 100%, 100% 0%)',
        ease: 'none',
        duration: 0.1,
      })
      .to(
        right,
        {
          clipPath:
            'polygon(0% 0%, 0% 100%, 0% 100%, 0% 18.519%, 55.556% 18.519%, 55.556% 81.481%, 0% 81.481%, 0% 100%, 100% 100%, 100% 0%)',
          ease: 'none',
          duration: 0.1,
        },
        '<',
      )
      .fromTo(intro, { scale: 1 }, { scale: zoom, ease: 'InOut', duration: 0.4 })
      .to(flowerL, { scale: zoom, xPercent: -50, ease: 'InOut', duration: 0.4 }, '<')
      .to(flowerR, { scale: zoom, xPercent: 50, ease: 'InOut', duration: 0.4 }, '<')
      .fromTo(
        w,
        { scale: reducedMotion ? 1 : 0.75, transformOrigin: 'center top' },
        { scale: 1, ease: 'InOut', duration: 0.4 },
        '<',
      );
    animateTextH(h, 'initial');
    animateTextP(p, 'initial');
    ScrollTrigger.create({
      trigger: area,
      start: '30% top',
      onEnter: () => {
        animateTextH(h, 'reveal', 0);
        animateTextP(p, 'reveal', durS);
      },
      onLeaveBack: () => {
        animateTextH(h, 'hide', 0);
        animateTextP(p, 'hide', 0);
      },
    });
    if (!reducedMotion)
      gsap.to(img, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: area, start: '55% top', end: 'bottom top', scrub: true },
      });
  });
  onDispose(() => mm.revert());
}

function initFooterFlow() {
  const footer = qs('.footer-w');
  if (!footer) return;
  const clip = qs('[data-footer-clip]');
  const card = qs('.footer-s', footer);
  const hs = qsa('[data-text="h"]', footer);
  const ps = qsa('[data-text="p"]', footer);
  const cs = qsa('[data-text="ctn"]', footer);
  const inset = window.innerWidth >= BREAKPOINT ? 'inset(8% 22% 8% 22%)' : 'inset(4% 32% 4% 32%)';
  animateTextH(hs, 'initial');
  animateTextP(ps, 'initial');
  animateCtn(cs, 'initial');
  gsap
    .timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: 0.5,
        onEnter: () => {
          animateTextH(hs, 'reveal', 0.1);
          animateTextP(ps, 'reveal', 0.1);
          animateCtn(cs, 'reveal', 0.1);
        },
        onLeaveBack: () => {
          animateTextH(hs, 'hide', 0);
          animateTextP(ps, 'hide', 0);
          animateCtn(cs, 'hide', 0);
        },
      },
    })
    .fromTo(clip, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: inset, ease: 'none' }, 0)
    .fromTo(card, { opacity: 0, scale: reducedMotion ? 1 : 0.75 }, { opacity: 1, scale: 1, ease: 'none' }, 0);
  const scrollHint = qs('.s-down');
  if (scrollHint)
    gsap.to(scrollHint, {
      opacity: 0,
      ease: 'InOut',
      scrollTrigger: { trigger: footer, start: 'top bottom', end: 'center bottom', scrub: true },
    });
}
