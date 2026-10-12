import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import type Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

export const BREAKPOINT = 992;
export const durS = 0.4;
export const durM = 0.8;
export const durL = 1.2;
export const stagger = 0.1;
export const delayReveal = 0.3;

CustomEase.create('InOut', '0.75,0,0.25,1');
CustomEase.create('Out', '0.25,1,0.5,1');
CustomEase.create('In', '0.5,0,0.75,0');
CustomEase.create('Ease', '0.25,0.1,0.25,1');
CustomEase.create('Write', '0.333,0,0.667,1');
CustomEase.create('diveIn', '0.6,0,0,1');
CustomEase.create('horScroll', '0.25,0,0.75,1');

export const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isDesktop = () => window.innerWidth >= BREAKPOINT;

export const state: { lenis: Lenis | null; localLenis: Lenis[] } = { lenis: null, localLenis: [] };

const disposers: (() => void)[] = [];

export function onDispose(fn: () => void) {
  disposers.push(fn);
}

export function listen<K extends keyof HTMLElementEventMap>(
  target: EventTarget,
  type: K | string,
  fn: (e: Event) => void,
  opts?: AddEventListenerOptions,
) {
  target.addEventListener(type, fn as EventListener, opts);
  onDispose(() => target.removeEventListener(type, fn as EventListener, opts));
}

export function addTicker(fn: gsap.TickerCallback) {
  gsap.ticker.add(fn);
  onDispose(() => gsap.ticker.remove(fn));
}

export function disposeAll() {
  while (disposers.length) {
    try {
      disposers.pop()!();
    } catch {}
  }
}

export const qs = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T & Element>(sel) as T | null;
export const qsa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  [...root.querySelectorAll(sel)] as T[];

export function lockScroll() {
  const w = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--scrollbar-width', `${w}px`);
  document.body.style.paddingRight = 'var(--scrollbar-width)';
  document.documentElement.style.overflow = 'hidden';
  state.lenis?.stop();
}

export function unlockScroll() {
  document.documentElement.style.removeProperty('--scrollbar-width');
  document.body.style.paddingRight = '';
  document.documentElement.style.overflow = '';
  state.lenis?.start();
}

export function scrollToTop() {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  state.lenis?.scrollTo(0, { immediate: true });
}

export { gsap, ScrollTrigger, SplitText, CustomEase };
