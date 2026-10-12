import {
  BREAKPOINT,
  CustomEase,
  durL,
  durS,
  gsap,
  lockScroll,
  qs,
  qsa,
  reducedMotion,
  scrollToTop,
  unlockScroll,
} from './core';
import { animateCtn, animateLine, animateTextA, animateTextH, animateTextP } from './text';

const VISITED_KEY = 'hasVisited';

export function runPreloader(onReveal: () => void) {
  let visited = false;
  try {
    visited = !!sessionStorage.getItem(VISITED_KEY);
  } catch {}
  try {
    sessionStorage.setItem(VISITED_KEY, 'true');
  } catch {}

  const preloader = qs('[data-preloader]');
  const master = qs('[data-master-preloader]');
  const heroImg = qs('.hero-w_bg_master_img');
  const hideMaster = () => master && (master.style.display = 'none');

  if (!preloader || reducedMotion) {
    if (preloader) preloader.style.display = 'none';
    hideMaster();
    unlockScroll();
    onReveal();
    return;
  }

  setTimeout(scrollToTop, 100);
  lockScroll();

  const mask = new Image();
  mask.src = ARCH_MASK_URL;
  let started = false;
  const begin = () => {
    if (started) return;
    started = true;
    play(preloader, master, heroImg, visited, onReveal);
  };
  mask.decode().then(begin, begin);
  setTimeout(begin, 1500);
}

const ARCH_MASK_URL = '/assets/svg/preloader_arch-l.8420a0.svg';

function play(
  preloader: HTMLElement,
  master: HTMLElement | null,
  heroImg: HTMLElement | null,
  visited: boolean,
  onReveal: () => void,
) {
  const hideMaster = () => master && (master.style.display = 'none');
  const desktop = window.innerWidth >= BREAKPOINT;
  const archStart = desktop ? '24vw' : '40vw';
  const archOpen = desktop ? '36vw' : '50vw';
  const heroScale = desktop ? 0.75 : 1.15;

  if (heroImg) gsap.set(heroImg, { scale: heroScale, transformOrigin: 'center top' });

  const bgScript = qs('.preloader_bg_a', preloader);
  const bgFrame = qs('.preloader_bg_decor', preloader);
  const tl = gsap.timeline().set(preloader, { '--arch-w': archStart, '--arch-y': '104vh' });

  if (!visited) {
    CustomEase.create(
      'loaderEase',
      'M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1',
    );
    tl.add(() => {
      animateTextA(qsa('[data-part="a"]', preloader), 'reveal');
      animateTextH(qsa('[data-part="h"]', preloader), 'reveal');
      animateTextP(qsa('[data-part="p"]', preloader), 'reveal');
      animateCtn(qsa('[data-part="ctn"]', preloader), 'reveal', durS);
      animateLine(qsa('[data-part="line"]', preloader), 'reveal');
    })
      .to({}, { duration: durL })
      .fromTo(bgScript, { opacity: 0 }, { opacity: 0.05, duration: durL, ease: 'Out' })
      .fromTo(bgFrame, { opacity: 0 }, { opacity: 1, duration: durL, ease: 'Out' }, '<')
      .fromTo(
        qsa('.preloader_progress_track', preloader),
        { yPercent: -100 },
        { yPercent: 0, duration: 4, ease: 'loaderEase' },
      )
      .fromTo(
        preloader,
        { '--arch-w': archStart, '--arch-y': '104vh' },
        { '--arch-w': archOpen, '--arch-y': '15vh', duration: 1.25 * durL, ease: 'InOut' },
      );
  } else {
    tl.set(qs('.preloader_ctn', preloader), { display: 'none' })
      .fromTo(bgScript, { opacity: 0 }, { opacity: 0.05, duration: durL, ease: 'Out' })
      .fromTo(bgFrame, { opacity: 0 }, { opacity: 1, duration: durL, ease: 'Out' }, '<')
      .fromTo(
        preloader,
        { '--arch-w': archStart, '--arch-y': '104vh' },
        { '--arch-w': archOpen, '--arch-y': '15vh', duration: 1.25 * durL, ease: 'InOut' },
        '<',
      );
  }

  tl.to(preloader, { '--arch-w': '125', '--arch-y': '-100vh', duration: 2 * durL, ease: 'diveIn' }, '<90%')
    .add(() => {
      if (heroImg) gsap.fromTo(heroImg, { scale: heroScale }, { scale: 1, duration: 1.25 * durL, ease: 'InOut' });
    }, '<')
    .add(onReveal, '<25%')
    .add(() => {
      unlockScroll();
      gsap.set(preloader, { display: 'none' });
    });

  hideMaster();
}
