import { LogoSymbol, TextLink } from '../components/primitives';
import { links } from '../data/content';

export function MenuModal() {
  return (
    <div data-modal-menu="mob" className="modal menu theme_on-dark">
      <div className="modal_c">
        <div data-modal-container="" className="modal_menu">
          <div className="modal_menu_t">
            <div className="u-48 b-desk" />
            <div className="u-272 b-mob" />
            <div className="grid">
              <div className="modal_menu_title">
                <div className="modal_menu_a">
                  <div data-part="a" className="a1 a-center">
                    The
                  </div>
                </div>
                <div data-part="h" className="h1 a-center">
                  Menu
                </div>
              </div>
            </div>
          </div>
          <div className="modal_menu_c">
            <div className="grid">
              <div className="modal_menu_list">
                <TextLink
                  label="Home"
                  href="/"
                  className="w--current"
                  attrs={{ 'data-part': 'ctn', 'data-modal-close': 'mob', 'aria-current': 'page' }}
                />
                <TextLink
                  label="Select an Apartment"
                  href={links.apartments}
                  attrs={{ 'data-part': 'ctn', 'data-modal-close': 'mob' }}
                />
                <TextLink
                  label="Book a call"
                  href="#"
                  attrs={{ 'data-part': 'ctn', 'data-modal-cta-btn': 'book-a-call', 'data-modal-close': 'mob' }}
                />
                <TextLink
                  label="Contact"
                  href={links.contact}
                  attrs={{ 'data-part': 'ctn', 'data-modal-close': 'mob' }}
                />
              </div>
            </div>
          </div>
          <div className="modal_menu_b">
            <div className="s_logo">
              <LogoSymbol className="ico-48" attrs={{ 'data-part': 'ctn' }} />
            </div>
            <div className="u-48" />
          </div>
        </div>
      </div>
      <div data-modal-close="" data-modal-over="" className="modal_bg" />
    </div>
  );
}
