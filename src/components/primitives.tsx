import { Fragment, type ReactNode } from 'react';
import { Embed } from './Embed';
import { svgs } from '../assets/svg';

export type Attrs = Record<string, string | undefined>;

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function Lines({ text }: { text: string }) {
  const parts = text.split('\n');
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {p}
        </Fragment>
      ))}
    </>
  );
}

export function NavItem({
  label,
  href = '#',
  text = 'l1',
  variant = 'item',
  className,
  attrs,
  ariaLabel,
  target,
  tabIndex,
}: {
  label: string;
  href?: string;
  tabIndex?: number;
  text?: 'l1' | 'l2';
  variant?: 'item' | 'l2' | 'plain';
  className?: string;
  attrs?: Attrs;
  ariaLabel?: string;
  target?: string;
}) {
  const hook = variant === 'item' ? { 'hover-nav-item': '' } : variant === 'l2' ? { 'hover-nav-item-l2': '' } : {};
  const wrapHover = variant === 'l2';
  return (
    <a
      {...hook}
      aria-label={ariaLabel ?? label}
      href={href}
      target={target}
      tabIndex={tabIndex}
      rel={target === '_blank' ? 'noopener' : undefined}
      className={cx('nav-item w-inline-block', className)}
      {...attrs}
    >
      <div className="nav-item_label">
        <div {...(wrapHover ? { hover: 'text' } : {})} className="nav-item_label_text">
          <div {...(!wrapHover ? { hover: 'text' } : {})} className={text}>
            {label}
          </div>
        </div>
        <div {...(wrapHover ? { hover: 'text' } : {})} className="nav-item_label_text is-2">
          <div {...(!wrapHover ? { hover: 'text' } : {})} className={text}>
            {label}
          </div>
        </div>
      </div>
    </a>
  );
}

export function TextLink({
  label,
  href = '#',
  attrs,
  className,
  ariaLabel,
}: {
  label: string;
  href?: string;
  attrs?: Attrs;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      aria-label={ariaLabel ?? label.replace('\n', ' ')}
      hover-link=""
      href={href}
      className={cx('link w-inline-block', className)}
      {...attrs}
    >
      <div className="link_label">
        <div className="link_label_text">
          <div hover="text" className="h6">
            <Lines text={label} />
          </div>
        </div>
        <div className="link_label_text is-2">
          <div hover="text" className="h6">
            <Lines text={label} />
          </div>
        </div>
      </div>
    </a>
  );
}

export function Btn({ label, href = '#', attrs }: { label: string; href?: string; attrs?: Attrs }) {
  return (
    <a aria-label={label} hover-btn="" hover-nav-item="" href={href} className="btn w-inline-block" {...attrs}>
      <div className="btn_label">
        <div className="btn_label_text">
          <div hover="text" className="l1">
            {label}
          </div>
        </div>
        <div className="btn_label_text is-2">
          <div hover="text" className="l1">
            {label}
          </div>
        </div>
      </div>
      <div className="btn_bg">
        <div hover="bg" className="btn_bg_fill" />
      </div>
    </a>
  );
}

export function BtnCircle({ label, href = '#', modalCta }: { label: string; href?: string; modalCta?: string }) {
  const hooks = modalCta
    ? { 'data-modal-cta-btn': modalCta, 'data-magnetic-btn': '', 'hover-nav-item-trigger': '', 'hover-btn-circle': '' }
    : { 'hover-btn-circle': '', 'data-magnetic-btn': '', 'hover-nav-item-trigger': '' };
  return (
    <div {...hooks} className="btn-circle">
      <div data-magnetic-inner="" className="btn-circle_label">
        <NavItem label={label} href={href} tabIndex={-1} />
      </div>
      <Embed className="btn-circle_bg" svg={svgs.btnCircle} />
      <a aria-label={label} href={href} className="btn-circle_link w-inline-block" />
    </div>
  );
}

export function Pag() {
  return (
    <>
      <div data-slider="prev" className="pag_prev" role="button" tabIndex={0} aria-label="Previous slide">
        <div className="ico-16">
          <Embed className="ico" svg={svgs.icoChevronLeft} />
        </div>
        <div className="pag_prev_label">
          <div data-slider="current" className="l1">
            00
          </div>
        </div>
      </div>
      <div className="pag_progress">
        <div data-slider="progress" className="pag_progress_fill" />
      </div>
      <div data-slider="next" className="pag_next" role="button" tabIndex={0} aria-label="Next slide">
        <div className="pag_prev_label">
          <div data-slider="next-num" className="l1">
            00
          </div>
        </div>
        <div className="ico-16">
          <Embed className="ico" svg={svgs.icoChevronRight} />
        </div>
      </div>
    </>
  );
}

export function LogoSymbol({ className = 'ico-48', attrs }: { className?: string; attrs?: Attrs }) {
  return (
    <div className={cx('logo_symbol', className)} {...attrs}>
      <Embed className="logo" svg={svgs.logoSymbol} />
    </div>
  );
}

export function Decor({ variant }: { variant: 'large' | 'med' }) {
  const v = variant === 'med' ? ' decor-med' : '';
  const frames: [string, string][] = [
    ['frame_l-tb', svgs.frameVertical],
    ['frame_lt', svgs.frameDiagUp],
    ['frame_t-lr', svgs.frameHorizontal],
    ['frame_rt', svgs.frameDiagDown],
    ['frame_r-tb', svgs.frameVertical],
    ['frame_rb', svgs.frameDiagUp],
    ['frame_b-lr', svgs.frameHorizontal],
    ['frame_lb', svgs.frameDiagDown],
  ];
  return (
    <div className="decor">
      {frames.map(([cls, svg]) => (
        <Embed key={cls} className={cls + v} svg={svg} />
      ))}
    </div>
  );
}

export function Flower({
  n,
  className,
  parallax,
  poster,
}: {
  n: number;
  className: string;
  parallax?: string;
  poster: string;
}) {
  const id = String(n).padStart(2, '0');
  return (
    <div {...(parallax ? { 'data-parallax': parallax } : {})} className={cx('flower', className)}>
      <video
        muted
        playsInline
        loop
        disablePictureInPicture
        webkit-playsinline="webkit-playsinline"
        poster={poster}
        className="video"
        aria-hidden="true"
      >
        <source src={`/assets/video/bougainvillea-flowers_${id}.webm`} type="video/webm" />
        <source src={`/assets/video/bougainvillea-flowers_${id}.mov`} type="video/mp4" />
      </video>
    </div>
  );
}

export function Spacer({ size, className }: { size: number | string; className?: string }) {
  return <div className={cx(`u-${size}`, className)} />;
}

export type { ReactNode };
