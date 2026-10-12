import {
  delayReveal,
  durL,
  durM,
  durS,
  gsap,
  listen,
  lockScroll,
  onDispose,
  qs,
  qsa,
  reducedMotion,
  ScrollTrigger,
  unlockScroll,
} from './core';
import { animateCtn, animateSlide, animateTextA, animateTextH, animateTextP } from './text';

const d = (v: number) => (reducedMotion ? 0 : v);

function keyboardActivate(el: HTMLElement) {
  listen(el, 'keydown', (e) => {
    const k = (e as KeyboardEvent).key;
    if (k === 'Enter' || k === ' ') {
      e.preventDefault();
      el.click();
    }
  });
}

type Card = HTMLElement & { closeFunc?: () => void };

export function initAccordion() {
  let open: Card | null = null;
  qsa<Card>('[data-accordion-card]').forEach((card) => {
    const content = qs('[data-accordion-card="content"]', card);
    if (!content) return;
    const icon = qs('[data-ico-plus]', card);
    const ps = qsa('[data-accordion-card="p"]', card);
    const ctns = qsa('[data-accordion-card="ctn"]', card);
    const openCard = () => {
      card.classList.add('is-active');
      card.setAttribute('aria-expanded', 'true');
      gsap.to(content, { height: 'auto', duration: d(durL), ease: 'Out', onComplete: () => ScrollTrigger.refresh() });
      gsap.fromTo(icon, { rotate: 0 }, { rotate: -45, duration: d(durM), ease: 'InOut', overwrite: true });
      animateTextP(ps, 'reveal');
      animateCtn(ctns, 'reveal');
    };
    const closeCard = () => {
      card.classList.remove('is-active');
      card.setAttribute('aria-expanded', 'false');
      gsap.to(content, {
        height: 0,
        duration: d(durL),
        ease: 'Out',
        onComplete: () => ScrollTrigger.refresh(),
        overwrite: true,
      });
      gsap.to(icon, { rotate: -90, duration: d(durM), ease: 'InOut', overwrite: true });
      animateTextP(ps, 'hide', 0);
      animateCtn(ctns, 'hide', 0);
    };
    gsap.set(content, { height: 0, overflow: 'hidden' });
    card.setAttribute('aria-expanded', 'false');
    listen(card, 'click', () => {
      if (open && open !== card) open.closeFunc?.();
      if (open !== card) {
        openCard();
        open = card;
      } else {
        closeCard();
        open = null;
      }
    });
    keyboardActivate(card);
    card.closeFunc = closeCard;
  });
  ScrollTrigger.refresh();
}

export function initSlider() {
  gsap.utils.toArray<HTMLElement>('[data-slider]').forEach((root) => {
    const s = {
      slides: qsa('[data-slider="slide"]', root),
      pag: qs('[data-slider="pag"]', root),
      prevBtn: qs('[data-slider="prev"]', root),
      nextBtn: qs('[data-slider="next"]', root),
      current: qs('[data-slider="current"]', root),
      total: qs('[data-slider="total"]', root),
      nextNum: qs('[data-slider="next-num"]', root),
      progress: qs('[data-slider="progress"]', root),
      index: 0,
      prev: 0,
      animating: false,
      autoDuration: 6,
    };
    const count = s.slides.length;
    if (!count) return;
    if (count === 1) {
      if (s.pag) s.pag.style.display = 'none';
      return;
    }

    const transition = () => {
      const from = s.slides[s.prev];
      const to = s.slides[s.index];
      const part = (el: HTMLElement, k: string) => qsa(`[data-slider="${k}"]`, el);
      from.style.zIndex = '0';
      to.style.zIndex = '1';
      gsap.killTweensOf([from, to]);
      gsap
        .timeline({
          onComplete: () => {
            from.style.zIndex = 'auto';
            to.style.zIndex = '1';
            s.animating = false;
          },
        })
        .set(to, { display: 'block', position: 'relative' })
        .set(from, { display: 'block', position: 'absolute' })
        .add(() => {
          animateTextH(part(to, 'h'), 'initial');
          animateTextP(part(to, 'p'), 'initial');
          animateCtn(part(to, 'ctn'), 'initial');
          animateSlide(part(to, 'img'), 'initial');
        })
        .add(() => ScrollTrigger.refresh())
        .add(() => {
          animateTextH(part(from, 'h'), 'hide', 0);
          animateTextP(part(from, 'p'), 'hide', 0);
          animateCtn(part(from, 'ctn'), 'hide', 0);
          animateSlide(part(from, 'img'), 'hide', 0);
          animateSlide(part(to, 'img'), 'reveal', 0);
        })
        .to({}, { duration: d(durM) })
        .add(() => {
          animateTextH(part(to, 'h'), 'reveal', 0);
          animateTextP(part(to, 'p'), 'reveal', 0);
          animateCtn(part(to, 'ctn'), 'reveal', d(durS));
        })
        .to({}, { duration: d(durS) })
        .set(from, { display: 'none' });
    };
    const updateLabels = () => {
      if (s.current) s.current.textContent = String(s.index + 1);
      if (s.total) s.total.textContent = String(count);
      if (s.nextNum) s.nextNum.textContent = String(s.index === count - 1 ? 1 : s.index + 2);
    };
    const goNext = () => {
      s.animating = true;
      s.prev = s.index;
      s.index = s.index === count - 1 ? 0 : s.index + 1;
      updateLabels();
      transition();
    };
    const startProgress = () => {
      if (s.progress)
        gsap.fromTo(s.progress, { width: '0%' }, { width: '100%', duration: s.autoDuration, ease: 'none' });
    };
    const resetProgress = () => {
      if (!s.progress) return;
      gsap.killTweensOf(s.progress);
      gsap.set(s.progress, { width: '0%' });
    };
    let timer: ReturnType<typeof setInterval> | undefined;
    const startAuto = () => {
      if (reducedMotion) return;
      startProgress();
      timer = setInterval(() => {
        goNext();
        startProgress();
      }, 1000 * s.autoDuration);
    };
    const stopAuto = () => {
      clearInterval(timer);
      resetProgress();
    };

    gsap.set(s.slides, { display: 'none', position: 'absolute' });
    gsap.set(s.slides[0], { display: 'block', position: 'relative' });
    updateLabels();

    let visible = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        stopAuto();
        if (visible) startAuto();
      },
      { threshold: 0.2 },
    );
    io.observe(root);
    listen(document, 'visibilitychange', () => {
      stopAuto();
      if (!document.hidden && visible) startAuto();
    });
    if (s.prevBtn) {
      listen(s.prevBtn, 'click', () => {
        if (s.animating) return;
        s.animating = true;
        s.prev = s.index;
        s.index = s.index === 0 ? count - 1 : s.index - 1;
        updateLabels();
        transition();
        stopAuto();
        startAuto();
      });
      keyboardActivate(s.prevBtn);
    }
    if (s.nextBtn) {
      listen(s.nextBtn, 'click', () => {
        if (s.animating) return;
        stopAuto();
        startAuto();
        goNext();
      });
      keyboardActivate(s.nextBtn);
    }
    onDispose(() => {
      io.disconnect();
      clearInterval(timer);
    });
  });
}

export function initTabs() {
  qsa('[data-tabs]').forEach((root) => {
    const triggers = qsa('[data-tab-trigger]', root);
    const contents = qsa('[data-tab-content]', root);
    if (!triggers.length || !contents.length) return;
    let active = 0;
    let busy = false;
    triggers[0].classList.add('is-active');
    contents[0].classList.add('is-active');
    triggers.forEach((t) => t.setAttribute('aria-selected', String(t === triggers[0])));
    triggers.forEach((trigger, i) => {
      listen(trigger, 'click', () => {
        if (i === active || busy) return;
        const prevTrigger = triggers[active];
        const from = qs(`[data-tab-content="${prevTrigger.getAttribute('data-tab-trigger')}"]`, root)!;
        const to = qs(`[data-tab-content="${trigger.getAttribute('data-tab-trigger')}"]`, root)!;
        const part = (el: HTMLElement, k: string) => qsa(`[data-tab="${k}"]`, el);
        gsap.killTweensOf([from, to]);
        busy = true;
        gsap
          .timeline({ onComplete: () => (busy = false) })
          .set(to, { display: 'block', position: 'relative', zIndex: 1 })
          .set(from, { display: 'block', position: 'absolute', zIndex: 0 })
          .add(() => {
            animateTextH(part(to, 'h'), 'initial');
            animateTextP(part(to, 'p'), 'initial');
            animateCtn(part(to, 'ctn'), 'initial');
            animateSlide(part(to, 'slide'), 'initial');
          })
          .add(() => ScrollTrigger.refresh())
          .add(() => {
            animateTextH(part(from, 'h'), 'hide', 0);
            animateTextP(part(from, 'p'), 'hide', 0);
            animateCtn(part(from, 'ctn'), 'hide', 0);
            animateSlide(part(from, 'slide'), 'hide', 0);
            animateSlide(part(to, 'slide'), 'reveal', 0);
          })
          .to({}, { duration: d(durM) })
          .add(() => {
            animateTextH(part(to, 'h'), 'reveal', 0);
            animateTextP(part(to, 'p'), 'reveal', 0);
            animateCtn(part(to, 'ctn'), 'reveal', d(durS));
          })
          .to({}, { duration: d(durS) })
          .set(from, { display: 'none' });
        prevTrigger.classList.remove('is-active');
        prevTrigger.setAttribute('aria-selected', 'false');
        trigger.classList.add('is-active');
        trigger.setAttribute('aria-selected', 'true');
        active = i;
      });
      keyboardActivate(trigger);
    });
  });
}

export function initTabsHilight() {
  qsa('[data-tabs-hilight]').forEach((root) => {
    const tabs = qsa('[data-tab]', root);
    const bar = qs('[data-tab-hilight]', root);
    if (!tabs.length || !bar) return;
    const horizontal = root.dataset.tabsHilight === 'hor';
    const move = () =>
      setTimeout(() => {
        const t = qs('[data-tab].is-active', root);
        if (!t) return;
        gsap.to(bar, {
          ...(horizontal ? { x: t.offsetLeft, width: t.offsetWidth } : { y: t.offsetTop, height: t.offsetHeight }),
          duration: d(durM),
          ease: 'InOut',
        });
      }, 40);
    move();
    tabs.forEach((t) => listen(t, 'click', move));
  });
}

export function initTabsHero() {
  const root = qs('[data-tabs-hero]');
  if (!root) return;
  const triggers = qsa('[data-tab-trigger]', root);
  const divider = qs('.hero-s_tabs_divider', root)!;
  let active = 0;
  let busy = false;
  const syncDivider = () => {
    const t = qs('[data-tab-trigger].is-active', root);
    if (!t) return;
    divider.className = divider.className.replace(/\bis-\S+/g, '').trim();
    divider.classList.add(`is-${t.getAttribute('data-tab-trigger')}`);
  };
  triggers[0].classList.add('is-active');
  triggers.forEach((t) => t.setAttribute('aria-pressed', String(t === triggers[0])));
  syncDivider();
  triggers.forEach((trigger, i) => {
    listen(trigger, 'click', () => {
      if (i === active || busy) return;
      const prevTrigger = triggers[active];
      const from = qs(`[data-tab-content="${prevTrigger.getAttribute('data-tab-trigger')}"]`, root)!;
      const to = qs(`[data-tab-content="${trigger.getAttribute('data-tab-trigger')}"]`, root)!;
      const img = qs('[data-tab="img"]', to);
      gsap.killTweensOf([from, to]);
      busy = true;
      gsap
        .timeline({ onComplete: () => (busy = false) })
        .set(to, { display: 'block', position: 'relative', zIndex: 1 })
        .set(from, { display: 'block', position: 'absolute', zIndex: 0 })
        .add(() => ScrollTrigger.refresh())
        .fromTo(img, { opacity: 0 }, { opacity: 1, duration: d(durM), ease: 'InOut', overwrite: true })
        .set(from, { display: 'none' });
      prevTrigger.classList.remove('is-active');
      prevTrigger.setAttribute('aria-pressed', 'false');
      trigger.classList.add('is-active');
      trigger.setAttribute('aria-pressed', 'true');
      active = i;
      syncDivider();
    });
  });
}

export function initModalCta() {
  qsa('[data-modal-cta-btn]').forEach((btn) => {
    const name = btn.getAttribute('data-modal-cta-btn');
    const modal = qs(`[data-modal-cta="${name}"]`);
    if (!modal) return;
    const card = qs('[data-modal-container]', modal)!;
    const overlay = qs('[data-modal-over]', modal)!;
    const closers = qsa('[data-modal-close]', modal);
    const open = () => {
      gsap.set([modal, overlay], { display: 'block' });
      gsap.fromTo(
        card,
        { scale: 0, rotateX: -90, yPercent: -100, rotate: -25 },
        { scale: 1, rotateX: 0, yPercent: 0, rotate: 0, duration: d(durL), ease: 'Out', overwrite: true },
      );
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: d(durL), ease: 'Out', overwrite: true });
      lockScroll();
      modalState.set(modal, true);
      lastFocus = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => qs('.btn-ico_link', modal)?.focus({ preventScroll: true }));
    };
    const close = () => {
      gsap.to(card, {
        scale: 1,
        rotateX: 90,
        yPercent: 200,
        rotate: 25,
        duration: d(durM),
        ease: 'In',
        onComplete: () => gsap.set([modal, overlay], { display: 'none' }),
        overwrite: true,
      });
      gsap.to(overlay, { opacity: 0, duration: d(durM), ease: 'In', overwrite: true });
      unlockScroll();
      modalState.set(modal, false);
      lastFocus?.focus({ preventScroll: true });
    };
    gsap.set(modal, { display: 'none' });
    gsap.set(card, { transformPerspective: 1000 });
    listen(btn, 'click', () => {
      if (!modalState.get(modal)) open();
    });
    closers.forEach((c) =>
      listen(c, 'click', () => {
        if (modalState.get(modal)) close();
      }),
    );
    listen(document, 'keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Escape' && modalState.get(modal)) close();
    });
  });
}
const modalState = new WeakMap<HTMLElement, boolean>();
let lastFocus: HTMLElement | null = null;

export function initModalMenu() {
  qsa('[data-modal-menu-btn]').forEach((btn) => {
    const name = btn.getAttribute('data-modal-menu-btn');
    const modal = qs(`[data-modal-menu="${name}"]`);
    if (!modal) return;
    const card = qs('[data-modal-container]', modal)!;
    const overlay = qs('[data-modal-over]', modal)!;
    const closers = qsa(`[data-modal-close="${name}"]`);
    const a = qsa('[data-part="a"]', modal);
    const h = qsa('[data-part="h"]', modal);
    const p = qsa('[data-part="p"]', modal);
    const ctn = qsa('[data-part="ctn"]', modal);
    const labels = qsa('.btn-menu_label', btn);
    const ico1 = qs('[data-ico-menu="is-1"]', btn);
    const ico2 = qs('[data-ico-menu="is-2"]', btn);
    const themed = qsa('[data-theme]');
    let isOpen = false;
    const open = () => {
      gsap.set([modal, overlay], { display: 'block' });
      themed.forEach((el) => {
        if (!el.classList.contains('theme_on-dark')) {
          el.classList.add('theme_on-dark');
          el.setAttribute('data-modal-themed', '');
        }
      });
      labels.forEach((l) => l.classList.toggle('is-active'));
      gsap.fromTo(card, { yPercent: 0 }, { yPercent: 0, duration: d(durL), ease: 'Out', overwrite: true });
      gsap.to(ico1, { rotate: -45, duration: d(durM), ease: 'InOut', overwrite: true });
      gsap.to(ico2, { rotate: 45, duration: d(durM), ease: 'InOut', overwrite: true });
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: d(durM), ease: 'Out', overwrite: true });
      animateTextA(a, 'reveal');
      animateTextH(h, 'reveal');
      animateTextP(p, 'reveal');
      animateCtn(ctn, 'reveal');
      lockScroll();
      btn.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      themed.forEach((el) => {
        if (el.hasAttribute('data-modal-themed')) {
          el.classList.remove('theme_on-dark');
          el.removeAttribute('data-modal-themed');
        }
      });
      labels.forEach((l) => l.classList.toggle('is-active'));
      gsap.to(card, {
        yPercent: 0,
        duration: d(durM),
        ease: 'In',
        onComplete: () => gsap.set([modal, overlay], { display: 'none' }),
        overwrite: true,
      });
      gsap.to(ico1, { rotate: 180, duration: d(durM), ease: 'InOut', overwrite: true });
      gsap.to(ico2, { rotate: 180, duration: d(durM), ease: 'InOut', overwrite: true });
      gsap.to(overlay, { opacity: 0, duration: d(durM), ease: 'In', overwrite: true });
      animateTextA(a, 'hide');
      animateTextH(h, 'hide');
      animateTextP(p, 'hide');
      animateCtn(ctn, 'hide');
      unlockScroll();
      btn.setAttribute('aria-expanded', 'false');
    };
    gsap.set(modal, { display: 'none' });
    gsap.set([ico1, ico2], { rotate: 180 });
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-expanded', 'false');
    listen(btn, 'click', () => {
      if (isOpen) close();
      else open();
      isOpen = !isOpen;
    });
    closers.forEach((c) =>
      listen(c, 'click', () => {
        if (isOpen) {
          close();
          isOpen = false;
        }
      }),
    );
    listen(document, 'keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Escape' && isOpen) {
        close();
        isOpen = false;
      }
    });
  });
}

export function initCookies() {
  const banner = qs('[data-cookies]');
  if (!banner) return;
  let saved: string | null = null;
  try {
    saved = localStorage.getItem('cookies');
  } catch {}
  if (saved) {
    banner.style.display = 'none';
    return;
  }
  const choose = (value: string) => {
    try {
      localStorage.setItem('cookies', value);
    } catch {}
    gsap.to(banner, {
      yPercent: 100,
      duration: d(durM),
      ease: 'In',
      onComplete: () => (banner.style.display = 'none'),
    });
  };
  gsap.fromTo(banner, { yPercent: 100 }, { yPercent: 0, duration: d(durM), delay: d(delayReveal), ease: 'Out' });
  const accept = qs('[data-cookies="accept"]');
  const decline = qs('[data-cookies="decline"]');
  if (accept) listen(accept, 'click', () => choose('accepted'));
  if (decline) listen(decline, 'click', () => choose('declined'));
}
