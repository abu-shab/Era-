import { disposeAll, gsap, listen, lockScroll, onDispose, ScrollTrigger, state } from './core';
import { runPreloader } from './preloader';
import { initAnchors, initLenis, initLocalLenis, initLogo, initScrollBar, initSnapSections } from './scroll';
import {
  initAllParallax,
  initPlayPauseVideoScroll,
  initScrollElementsReveal,
  initScrollRevealFirst,
  initThemeChange,
} from './reveal';
import { initTransitionFlow } from './flow';
import {
  initBtnCircleHover,
  initCreditsLogo,
  initFloatingTips,
  initLinkHover,
  initMagneticEffect,
  initNavItemHover,
  initPins,
} from './hovers';
import {
  initAccordion,
  initCookies,
  initModalCta,
  initModalMenu,
  initSlider,
  initTabs,
  initTabsHero,
  initTabsHilight,
} from './components';
import { initForm, initUtmFields } from './form';
import { fitText, initOther } from './misc';

function initScripts() {
  initTransitionFlow();
  initLocalLenis();
  initThemeChange();
  initSnapSections();
  initForm();
  initUtmFields();
  initPlayPauseVideoScroll();
  initOther();
  fitText();
  initScrollRevealFirst();
  initScrollElementsReveal();
  initMagneticEffect();
  initNavItemHover();
  initLinkHover();
  initBtnCircleHover();
  initPins();
  initLogo();
  initScrollBar();
  initCreditsLogo();
  initAccordion();
  initSlider();
  initTabs();
  initTabsHilight();
  initTabsHero();
  initModalCta();
  initModalMenu();
  initFloatingTips();
}

export function initSite() {
  let resizeTimer: ReturnType<typeof setTimeout> | undefined;
  listen(window, 'resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(true), 40);
  });
  history.scrollRestoration = 'manual';
  initAnchors();

  let cancelled = false;
  lockScroll();
  fontsReady(3000).then(() => {
    if (cancelled) return;
    document.documentElement.style.setProperty('--_100svh', `${window.innerHeight}px`);
    initLenis();
    initCookies();
    initAllParallax();
    runPreloader(initScripts);
  });

  return () => {
    cancelled = true;
    clearTimeout(resizeTimer);
    disposeAll();
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.globalTimeline.clear();
    state.localLenis = [];
  };
}

function fontsReady(timeoutMs: number) {
  const faces = [
    '400 16px ambroise-francois-std',
    '400 16px sloop-script-three',
    '400 16px "Maison Neue Extended"',
    '700 16px "Maison Neue Extended"',
  ];
  const loaded = Promise.all(faces.map((f) => document.fonts.load(f))).then(() => document.fonts.ready);
  return Promise.race([loaded, new Promise((r) => setTimeout(r, timeoutMs))]).catch(() => undefined);
}

export { onDispose };
