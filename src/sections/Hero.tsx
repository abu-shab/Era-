import { Embed } from '../components/Embed';
import { BtnCircle, NavItem } from '../components/primitives';
import { svgs } from '../assets/svg';
import { images } from '../data/images';
import { links, tips } from '../data/content';

export function Hero() {
  return (
    <section id="hero" className="section clip theme_on-color">
      <div className="container">
        <div className="hero-scroll-area">
          <div data-tabs-hero="" className="hero-w">
            <div className="hero-s">
              <div className="u-48" />
              <div className="u-272 b-mob" />
              <div className="grid">
                <div className="hero-s_logo">
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center">
                    {'Era '}
                    <br />
                    Residence
                  </h1>
                  <div className="hero-s_logo_a">
                    <h2 data-prevent-flicker="" data-scroll-reveal="a" className="a2">
                      Estepona
                    </h2>
                  </div>
                </div>
              </div>
              <div className="u-48" />
              <div className="grid">
                <h3 className="hero-s_title h5">
                  <span data-scroll-reveal="h" data-prevent-flicker="" className="a-left">
                    <div className="span">{'A place '}</div>
                  </span>
                  <div data-prevent-flicker="" data-scroll-reveal="ctn" className="hero-s_tabs">
                    <NavItem
                      label="by day"
                      href="#"
                      text="l2"
                      variant="l2"
                      attrs={{ 'hover-tab': '', 'data-tab-trigger': 'day' }}
                    />
                    <div className="hero-s_tabs_divider" />
                    <NavItem
                      label="by night"
                      href="#"
                      text="l2"
                      variant="l2"
                      attrs={{ 'hover-tab': '', 'data-tab-trigger': 'night' }}
                    />
                  </div>
                  <span data-scroll-reveal="h" data-prevent-flicker="" className="a-right">
                    <div className="span">to return to</div>
                  </span>
                </h3>
              </div>
            </div>
            <div className="hero-w_bg">
              <div className="hero-w_bg_master">
                <div className="hero-w_bg_master_img">
                  <div className="pins-cms b-desk w-dyn-list">
                    <div role="list" className="pins-cms_list w-dyn-items">
                      {tips.map((tip) => (
                        <div
                          key={tip.slug}
                          data-modal-tip-btn={tip.slug}
                          data-pin={tip.slug}
                          floating-tip-trigger={tip.slug}
                          role="listitem"
                          className="pins-cms_list_item w-dyn-item"
                          style={{ top: tip.top, left: tip.left }}
                        >
                          <div hover-pin="" className="pin">
                            <div hover="bg" className="pin_dot">
                              <div hover="ico" className="ico-16 theme_on-light">
                                <Embed className="ico" svg={svgs.icoPlus} />
                              </div>
                            </div>
                            <div className="pin_bg">
                              <div data-pin-pulse="" className="pin_bg_pulse" />
                              <div data-pin-pulse="" className="pin_bg_pulse" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div data-tab-content="day" className="hero-w_bg_master_img_day">
                    <div data-tab="img" className="img-w h-auto">
                      <img
                        {...images.gatedCommunityDay}
                        loading="eager"
                        alt=""
                        sizes="(max-width: 1920px) 100vw, 1920px"
                        className="img h-auto hero-img"
                      />
                    </div>
                  </div>
                  <div data-tab-content="night" className="hero-w_bg_master_img_night">
                    <div data-tab="img" className="img-w h-auto">
                      <img
                        {...images.gatedCommunityNight}
                        loading="eager"
                        alt=""
                        sizes="(max-width: 1920px) 100vw, 1920px"
                        className="img h-auto hero-img"
                      />
                    </div>
                  </div>
                  <div className="img-over-grad from-top _100vh" />
                  <div className="img-over-grad from-bot bot _6x" />
                  <div className="img-over-grad from-bot bot _6x" />
                </div>
                <div className="hero-s_b">
                  <div data-prevent-flicker="" data-scroll-reveal="ctn" className="hero-s_btn">
                    <div className="e-auto">
                      <BtnCircle label="View available apartments" href={links.apartments} />
                    </div>
                  </div>
                  <div className="u-32" />
                  <div className="grid">
                    <div className="hero-s_desc">
                      <p className="l1 a-center" />
                    </div>
                  </div>
                  <div className="u-48" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero_themes">
            <div data-bg="color" className="hero_themes_color" />
            <div data-bg="light" className="hero_themes_light" />
          </div>
        </div>
      </div>
    </section>
  );
}
