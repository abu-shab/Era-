import { Embed } from '../components/Embed';
import { LogoSymbol, NavItem, TextLink } from '../components/primitives';
import { svgs } from '../assets/svg';
import { links } from '../data/content';

export function Header() {
  return (
    <div className="theme_on-color">
      <a aria-label="Back to top" data-theme="" href="#hero" className="header-logo w-inline-block">
        <LogoSymbol className="header" attrs={{ 'data-modal-close': 'menu', 'aria-label': 'logo envy maison' }} />
        <Embed className="header-logo_bg b-desk" svg={svgs.headerLogoRingDesk} />
        <Embed className="header-logo_bg b-mob" svg={svgs.headerLogoRingMob} />
      </a>
      <div data-theme="" className="header-nav">
        <div className="header-nav_list f-mob">
          <div hover-nav-item-l2-trigger="" data-modal-menu-btn="mob" className="btn-menu">
            <div className="btn-menu_label is-active">
              <NavItem label="Menu" href="#" text="l2" variant="l2" />
            </div>
            <div className="btn-menu_label">
              <NavItem label="Close" href="#" text="l2" variant="l2" />
            </div>
            <div className="ico-24">
              <div className="ico">
                <Embed className="ico" svg={svgs.icoMenuDots} data-ico-menu="is-1" />
                <Embed className="ico ia-2" svg={svgs.icoMenuDots} data-ico-menu="is-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav_list f-desk">
          <TextLink label={'Select \nan Apartment'} ariaLabel="Select  an Apartment" href={links.apartments} />
          <div className="u-24" />
          <NavItem
            label="Book a call"
            href="#"
            text="l2"
            variant="l2"
            attrs={{ 'data-modal-cta-btn': 'book-a-call' }}
          />
          <div className="u-4" />
          <NavItem label="Contact" href={links.contact} text="l2" variant="l2" />
        </div>
      </div>
      <div data-theme="" className="s-bar-w">
        <div data-s-bar="" className="s-bar">
          <div data-s-bar-thumb="" className="s-bar_thumb">
            <div data-s-bar-label="" className="l1 a-center">
              00
            </div>
          </div>
          <div data-s-bar-fill="" className="s-bar_fill" />
          <div data-s-bar-track="" className="s-bar_track" />
        </div>
      </div>
      <div data-theme="" className="s-down">
        <Embed className="s-down_arrow" svg={svgs.arrowScrollDown} />
        <div className="l2">Scroll</div>
      </div>
    </div>
  );
}
