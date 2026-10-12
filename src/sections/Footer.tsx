import { Embed } from '../components/Embed';
import { LogoSymbol, NavItem } from '../components/primitives';
import { svgs } from '../assets/svg';
import { legal, links } from '../data/content';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <section data-bg="dark" className="section theme_on-dark">
      <div className="container">
        <div className="footer-w">
          <a href="#hero" className="footer-s_s-top w-inline-block">
            <div className="l2">To top</div>
            <Embed className="s-down_arrow" svg={svgs.arrowToTop} />
          </a>
          <div className="footer-s">
            <div className="footer-s_t" />
            <div className="footer-s_c">
              <div className="grid">
                <div className="footer-s_contact">
                  <div className="s_logo">
                    <LogoSymbol className="ico-64" attrs={{ 'data-text': 'ctn' }} />
                  </div>
                  <div className="u-32" />
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a href={links.phone} target="_blank" className="nav-item w-inline-block">
                          <div data-text="h" className="h2 a-center">
                            +34 (655) 408-648
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-48" />
                </div>
                <div className="footer-s_address">
                  <div className="loc-cms w-dyn-list">
                    <div role="list" className="loc-cms_list w-dyn-items">
                      <div data-text="ctn" role="listitem" className="loc-cms_list_item w-dyn-item">
                        <h3 className="l1 reg a-center">Sales Office</h3>
                        <div className="u-4" />
                        <NavItem
                          label="Avenida Litoral, 29680 Estepona, Málaga, Spain"
                          href={links.maps}
                          text="l1"
                          variant="item"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-s_b">
              <div className="grid">
                <div className="footer-s_info">
                  <div data-text="p" className="l1">
                    Era Residence.
                  </div>
                  <div data-text="p" className="l1 reg no-wrap">
                    ©<span className="year">{YEAR}</span>
                    {' All rights reserved'}
                  </div>
                  <div className="u-12" />
                  <div data-text="p" className="legal-cms w-dyn-list">
                    <div data-comma-list="" role="list" className="legal-cms_list w-dyn-items">
                      {legal.map((l, i) => (
                        <div key={l.label} role="listitem" className="legal-cms_list_item w-dyn-item">
                          <NavItem label={l.label} href={l.href} text="l1" variant="item" />
                          {i < legal.length - 1 && (
                            <div data-comma="" className="l1">
                              ,
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="footer-s_credits">
                  <div hover-nav-item-trigger="" className="credits">
                    <a
                      aria-label="The First The Last"
                      href={links.credits}
                      target="_blank"
                      rel="noopener"
                      className="credits_link w-inline-block"
                    />
                    <div data-text="ctn" data-scrub-reveal="ctn" className="credits_logo-w">
                      <div data-json="/assets/lottie/tftl-logo_white.json" className="credits_logo" />
                    </div>
                    <div className="u-12" />
                    <div data-text="p" className="l1 reg a-right">
                      Made by
                    </div>
                    <div data-text="p">
                      <NavItem label="Thefirstthelast" href="#" text="l1" variant="item" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-48" />
            </div>
          </div>
          <div className="footer-w_bg" />
        </div>
      </div>
    </section>
  );
}
