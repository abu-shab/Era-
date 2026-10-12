import { gsap, SplitText, BREAKPOINT, delayReveal, durL, durS, reducedMotion, stagger } from './core';

export type Mode = 'reveal' | 'hide' | 'initial';
type SplitEl = HTMLElement & { _split?: SplitText };
type Targets = Element | Element[] | NodeListOf<Element> | null | undefined;

const toArray = (t: Targets) => (t ? (gsap.utils.toArray(t) as SplitEl[]) : []);
const d = (v: number) => (reducedMotion ? 0 : v);

export function animateTextA(targets: Targets, mode: Mode, delay?: number) {
  toArray(targets).forEach((el, i) => {
    if (!el.textContent?.trim()) return;
    el._split ??= new SplitText(el, { type: 'chars', tag: 'span', charsClass: 'split-char', smartWrap: true });
    const offset = i * stagger;
    const chars = el._split.chars;
    if (mode === 'reveal')
      gsap.fromTo(
        chars,
        { opacity: 0, rotateX: 90, x: '10rem', transformOrigin: 'center bottom' },
        {
          opacity: 1,
          rotateX: 0,
          x: '0rem',
          duration: d(durL),
          delay: d((delay ?? delayReveal) + offset),
          stagger: d(stagger),
          ease: 'Out',
          overwrite: true,
        },
      );
    else if (mode === 'hide')
      gsap.to(chars, {
        opacity: 0,
        rotateX: -90,
        x: '-10rem',
        transformOrigin: 'center top',
        duration: d(durS),
        delay: d(delay ?? 0),
        stagger: d(0.5 * stagger),
        ease: 'In',
        overwrite: true,
      });
    else gsap.set(chars, { opacity: 0, rotateX: -90, x: '-10rem', transformOrigin: 'center top' });
  });
}

export function animateTextH(targets: Targets, mode: Mode, delay?: number) {
  toArray(targets).forEach((el, i) => {
    if (!el.textContent?.trim()) return;
    el._split ??= new SplitText(el, {
      type: 'words,chars',
      tag: 'span',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      smartWrap: true,
    });
    const offset = i * stagger;
    const chars = el._split.chars;
    if (mode === 'reveal')
      gsap.fromTo(
        chars,
        { opacity: 0, yPercent: 50, rotateY: 90 },
        {
          opacity: 1,
          yPercent: 0,
          rotateY: 0,
          duration: d(durL),
          delay: d((delay ?? delayReveal) + offset),
          stagger: d(0.5 * stagger),
          ease: 'Out',
          overwrite: true,
        },
      );
    else if (mode === 'hide')
      gsap.to(chars, {
        opacity: 0,
        yPercent: -50,
        rotateY: -90,
        duration: d(durS),
        delay: d(delay ?? 0),
        stagger: d(0.25 * stagger),
        ease: 'In',
        overwrite: true,
      });
    else gsap.set(chars, { opacity: 0, yPercent: 50, rotateY: 90 });
  });
}

export function animateTextP(targets: Targets, mode: Mode, delay?: number) {
  toArray(targets).forEach((el, i) => {
    if (!el.textContent?.trim()) return;
    if (!el._split) {
      el._split = new SplitText(el, {
        type: 'lines,words',
        tag: 'span',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        mask: 'lines',
      });
      el.querySelectorAll('br').forEach((br) => {
        if (br.nextSibling?.nodeName !== 'BR') br.after(document.createElement('br'));
      });
    }
    const offset = i * stagger;
    const lines = el._split.lines;
    if (mode === 'reveal')
      gsap.fromTo(
        lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: d(durL),
          delay: d((delay ?? delayReveal) + offset),
          stagger: d(stagger),
          ease: 'Out',
          overwrite: true,
        },
      );
    else if (mode === 'hide')
      gsap.to(lines, {
        yPercent: -110,
        duration: d(durS),
        delay: d(delay ?? 0),
        stagger: d(0.5 * stagger),
        ease: 'In',
        overwrite: true,
      });
    else gsap.set(lines, { yPercent: 110 });
  });
}

export function animateCtn(targets: Targets, mode: Mode, delay?: number) {
  const els = toArray(targets);
  if (!els.length) return;
  const y = window.innerWidth >= BREAKPOINT ? '3.333rem' : '11.54rem';
  if (mode === 'reveal')
    gsap.fromTo(
      els,
      { opacity: 0, y },
      {
        opacity: 1,
        y: '0rem',
        duration: d(durL),
        delay: d(delay ?? delayReveal),
        stagger: d(stagger),
        ease: 'Out',
        overwrite: true,
      },
    );
  else if (mode === 'hide')
    gsap.to(els, {
      opacity: 0,
      y: '0rem',
      duration: d(durS),
      delay: d(delay ?? 0),
      stagger: d(0.5 * stagger),
      ease: 'In',
      overwrite: true,
    });
  else gsap.set(els, { opacity: 0, y });
}

export function animateLine(targets: Targets, mode: Mode, delay?: number) {
  const els = toArray(targets);
  if (!els.length) return;
  if (mode === 'reveal')
    gsap.fromTo(
      els,
      { clipPath: 'inset(0% 0% 100% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: d(durL),
        delay: d(delay ?? delayReveal),
        stagger: d(stagger),
        ease: 'Out',
        overwrite: true,
      },
    );
  else if (mode === 'hide')
    gsap.to(els, {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: d(durS),
      delay: d(delay ?? 0),
      stagger: d(0.5 * stagger),
      ease: 'In',
      overwrite: true,
    });
  else gsap.set(els, { clipPath: 'inset(0% 0% 100% 0%)' });
}

export function animateSlide(targets: Targets, mode: Mode, delay?: number) {
  const els = toArray(targets);
  if (!els.length) return;
  const inner = els.map((e) => e.firstElementChild).filter(Boolean) as Element[];
  if (mode === 'reveal') {
    gsap.fromTo(
      els,
      { clipPath: 'polygon(100% 0%, 100% 0%, 101% 100%, 125% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: d(durL),
        delay: d(delay ?? delayReveal),
        ease: 'InOut',
        overwrite: true,
      },
    );
    gsap.fromTo(
      inner,
      { scale: 1.5, xPercent: 25 },
      { scale: 1, xPercent: 0, duration: d(durL), delay: d(delay ?? delayReveal), ease: 'InOut', overwrite: true },
    );
  } else if (mode === 'hide') {
    gsap.fromTo(
      els,
      { clipPath: 'polygon(0% 0%, 100% 0%, 125% 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        duration: d(durL),
        delay: d(delay ?? 0),
        ease: 'InOut',
        overwrite: true,
      },
    );
    gsap.to(inner, {
      scale: 1.5,
      xPercent: -25,
      duration: d(durL),
      delay: d(delay ?? 0),
      ease: 'InOut',
      overwrite: true,
    });
  } else {
    gsap.set(els, { clipPath: 'inset(100% 0% 0% 0%)' });
    gsap.set(inner, { scale: 1.5, xPercent: 25 });
  }
}
