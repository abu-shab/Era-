import { BREAKPOINT, durL, durM, gsap, listen, onDispose, qs, qsa, reducedMotion, SplitText, stagger } from './core';

const desktopOnly = (fn: () => void | (() => void)) => {
  const mm = gsap.matchMedia();
  mm.add(`(min-width: ${BREAKPOINT}px)`, fn);
  onDispose(() => mm.revert());
};

export function initMagneticEffect() {
  if (reducedMotion) return;
  desktopOnly(() => {
    const btns = qsa('[data-magnetic-btn]');
    const inners = (el: HTMLElement) => qsa('[data-magnetic-inner]', el);
    const reset = (el: HTMLElement, instant: boolean) => {
      gsap.killTweensOf(el);
      const vars = { x: 0, y: 0, force3D: true, clearProps: 'all' };
      if (instant) gsap.set(el, vars);
      else gsap.to(el, { ...vars, ease: 'elastic.out(1, 0.3)', duration: 1.6 });
    };
    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      reset(el, true);
      inners(el).forEach((i) => reset(i, true));
    };
    const move = (e: Event) => {
      const ev = e as MouseEvent;
      const el = ev.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const strength = parseFloat(el.dataset.magneticStrength ?? '') || 25;
      const inner = parseFloat(el.dataset.magneticStrengthInner ?? '') || strength;
      const px = (ev.clientX - r.left) / el.offsetWidth - 0.5;
      const py = (ev.clientY - r.top) / el.offsetHeight - 0.5;
      gsap.to(el, {
        x: px * (strength / 16) + 'em',
        y: py * (strength / 16) + 'em',
        force3D: true,
        ease: 'power4.out',
        duration: 1.6,
      });
      inners(el).forEach((i) =>
        gsap.to(i, {
          x: px * (inner / 16) + 'em',
          y: py * (inner / 16) + 'em',
          force3D: true,
          ease: 'power4.out',
          duration: 2,
        }),
      );
    };
    const leave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      reset(el, false);
      inners(el).forEach((i) => reset(i, false));
    };
    btns.forEach((b) => {
      b.addEventListener('mouseenter', enter);
      b.addEventListener('mousemove', move);
      b.addEventListener('mouseleave', leave);
    });
    return () =>
      btns.forEach((b) => {
        b.removeEventListener('mouseenter', enter);
        b.removeEventListener('mousemove', move);
        b.removeEventListener('mouseleave', leave);
      });
  });
}

const positionalStagger = (amount: number) => (i: number, _t: Element, list: Element[]) => {
  const xs = list.map((c) => c.getBoundingClientRect().left);
  const min = Math.min(...xs);
  const span = Math.max(...xs) - min || 1;
  return ((xs[i] - min) / span) * amount;
};

export function initNavItemHover() {
  qsa('[hover-nav-item]').forEach((item) => {
    const texts = qsa("[hover='text']", item);
    if (texts.length < 2) return;
    const opts = {
      type: 'words,chars',
      tag: 'span',
      smartWrap: true,
      wordsClass: 'split-word',
      charsClass: 'split-char',
      mask: 'words',
    } as const;
    const a = new SplitText(texts[0], opts);
    const b = new SplitText(texts[1], opts);
    gsap.set(b.chars, { yPercent: 100, opacity: 0 });
    const st = positionalStagger(2 * stagger);
    const enter = () => {
      gsap.fromTo(
        a.chars,
        { opacity: 1, yPercent: 0 },
        { opacity: 0, yPercent: -100, duration: durM, ease: 'Ease', stagger: st, overwrite: true, force3D: true },
      );
      gsap.fromTo(
        b.chars,
        { yPercent: 100, opacity: 0 },
        { opacity: 1, yPercent: 0, duration: durM, ease: 'Ease', stagger: st, overwrite: true, force3D: true },
      );
    };
    const leave = () => {
      gsap.to(a.chars, {
        opacity: 1,
        yPercent: 0,
        duration: durM,
        ease: 'Ease',
        stagger: st,
        overwrite: true,
        force3D: true,
      });
      gsap.to(b.chars, {
        opacity: 0,
        yPercent: 100,
        duration: durM,
        ease: 'Ease',
        stagger: st,
        overwrite: true,
        force3D: true,
      });
    };
    const trigger = item.closest('[hover-nav-item-trigger]') || item;
    listen(trigger, 'mouseenter', enter);
    listen(trigger, 'mouseleave', leave);
  });
}

export function initLinkHover() {
  qsa('[hover-link]').forEach((link) => {
    const texts = qsa("[hover='text']", link);
    if (texts.length < 2) return;
    const a = new SplitText(texts[0], {
      type: 'lines,words,chars',
      tag: 'span',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      smartWrap: true,
    });
    const b = new SplitText(texts[1], {
      type: 'words,chars',
      tag: 'span',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      smartWrap: true,
    });
    const lines = a.lines.map((line) => {
      const span = document.createElement('span');
      span.classList.add('link_line');
      line.appendChild(span);
      return span;
    });
    gsap.set(lines, { scaleX: 1, transformOrigin: 'right center' });
    gsap.set(b.chars, { opacity: 0, x: '-0.4em', yPercent: 25, rotateY: 90 });
    const enter = () => {
      gsap.fromTo(
        a.chars,
        { opacity: 1, x: '0em', yPercent: 0, rotateY: 0 },
        {
          opacity: 0,
          x: '0.4em',
          yPercent: -25,
          rotateY: -90,
          duration: durM,
          ease: 'Out',
          stagger: stagger / 4,
          overwrite: true,
          force3D: true,
        },
      );
      gsap.fromTo(
        b.chars,
        { opacity: 0, x: '-0.4em', yPercent: 25, rotateY: 90 },
        {
          opacity: 1,
          x: '0em',
          yPercent: 0,
          rotateY: 0,
          duration: durM,
          ease: 'Out',
          delay: 0.2,
          stagger: stagger / 4,
          overwrite: true,
          force3D: true,
        },
      );
      gsap.fromTo(
        lines,
        { scaleX: 1, transformOrigin: 'right center' },
        { scaleX: 0, duration: durM, ease: 'Out', stagger, overwrite: true },
      );
    };
    const leave = () => {
      gsap.to(a.chars, {
        opacity: 1,
        x: '0em',
        yPercent: 0,
        rotateY: 0,
        duration: durM,
        ease: 'Out',
        delay: 0.2,
        stagger: stagger / 4,
        overwrite: true,
        force3D: true,
      });
      gsap.to(b.chars, {
        opacity: 0,
        x: '-0.4em',
        yPercent: 25,
        rotateY: 90,
        duration: durM,
        ease: 'Out',
        stagger: stagger / 4,
        overwrite: true,
        force3D: true,
      });
      gsap.to(lines, {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: durM,
        ease: 'Out',
        stagger,
        overwrite: true,
      });
    };
    const trigger = link.closest('[hover-link-trigger]') || link;
    listen(trigger, 'mouseenter', enter);
    listen(trigger, 'mouseleave', leave);
  });
}

export function initBtnCircleHover() {
  qsa('[hover-btn-circle]').forEach((btn) => {
    const arcs = qsa('[data-arc]', btn);
    if (!arcs.length) return;
    const circumference = 2 * Math.PI * 103.5;
    gsap.set(arcs, { strokeDasharray: `${0.0417 * circumference} ${circumference}` });
    const tl = gsap
      .timeline({ paused: true })
      .to(arcs, { strokeDasharray: `${circumference / 2} ${circumference}`, duration: durM, ease: 'InOut' });
    listen(btn, 'mouseenter', () => tl.play());
    listen(btn, 'mouseleave', () => tl.reverse());
  });
}

export function initPins() {
  qsa('[data-pin]').forEach((pin) => {
    const plus = qs('[data-ico-plus="v"]', pin);
    const pulses = qsa('[data-pin-pulse]', pin);
    const size = pin.offsetWidth;
    if (pulses.length && !reducedMotion)
      gsap.fromTo(
        pulses,
        { opacity: 1, width: size, height: size },
        { opacity: 0, width: 1.6 * size, height: 1.6 * size, duration: durL, ease: 'In', stagger: 0.2, repeat: -1 },
      );
    if (plus) {
      listen(pin, 'mouseenter', () =>
        gsap.fromTo(plus, { rotate: 0 }, { rotate: -90, duration: durM, ease: 'Out', overwrite: true }),
      );
      listen(pin, 'mouseleave', () => gsap.to(plus, { rotate: -180, duration: durM, ease: 'Out', overwrite: true }));
    }
  });
}

export function initFloatingTips() {
  desktopOnly(() => {
    const tips = new Map(qsa('[floating-tip]').map((t) => [t.getAttribute('floating-tip')!, t]));
    const active = new Set<HTMLElement>();
    const place = (tip: HTMLElement, x: number, y: number) => {
      const r = tip.getBoundingClientRect();
      tip.classList.toggle('is-left', x + r.width > window.innerWidth);
      tip.classList.toggle('is-top', y + r.height > window.innerHeight);
    };
    const show = (tip: HTMLElement, x: number, y: number) => {
      gsap.set(tip, { x, y });
      place(tip, x, y);
      tip.classList.add('is-active');
      active.add(tip);
    };
    const hide = (tip: HTMLElement) => {
      tip.classList.remove('is-active', 'is-left', 'is-top');
      active.delete(tip);
    };
    const onMove = (e: MouseEvent) =>
      active.forEach((tip) => {
        place(tip, e.clientX, e.clientY);
        gsap.to(tip, { x: e.clientX, y: e.clientY, duration: 2 * durL, ease: 'power3' });
      });
    document.addEventListener('mousemove', onMove);
    const cleanups: (() => void)[] = [];
    qsa('[floating-tip-trigger]').forEach((trigger) => {
      const tip = tips.get(trigger.getAttribute('floating-tip-trigger')!);
      if (!tip) return;
      const enter = (e: MouseEvent) => show(tip, e.clientX, e.clientY);
      const leave = () => hide(tip);
      trigger.addEventListener('mouseenter', enter);
      trigger.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        trigger.removeEventListener('mouseenter', enter);
        trigger.removeEventListener('mouseleave', leave);
      });
      if (trigger.matches(':hover')) show(tip, 0, 0);
    });
    return () => {
      document.removeEventListener('mousemove', onMove);
      cleanups.forEach((c) => c());
    };
  });
}

export function initCreditsLogo() {
  const all = qsa('.credits');
  if (!all.length) return;
  let disposed = false;
  onDispose(() => (disposed = true));
  import('lottie-web/build/player/lottie_light').then(({ default: lottie }) => {
    if (disposed) return;
    all.forEach((credits) => {
      const holder = qs('.credits_logo', credits);
      if (!holder) return;
      const anim = lottie.loadAnimation({
        container: holder,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: holder.getAttribute('data-json')!,
      });
      anim.goToAndStop(0, true);
      const frames = 99;
      const tl = gsap.timeline({ paused: true });
      tl.to(
        { p: 0 },
        {
          p: 1,
          duration: 1,
          ease: 'none',
          onUpdate() {
            anim.goToAndStop(Math.round((this.targets()[0] as { p: number }).p * (frames - 1)), true);
          },
        },
      );
      listen(credits, 'mouseenter', () => gsap.to(tl, { progress: 0.5, duration: 1 }));
      listen(credits, 'mouseleave', () => gsap.to(tl, { progress: 1, duration: 1 }));
      onDispose(() => anim.destroy());
    });
  });
}
