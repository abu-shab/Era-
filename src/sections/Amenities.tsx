import { BtnCircle } from '../components/primitives';
import { amenities } from '../data/content';

export function Amenities() {
  return (
    <div className="amen-scroll-area">
      <div className="scroll-area_screen">
        <section className="section clip theme_on-color">
          <div className="container">
            <div className="amen-w">
              <div className="amen-s">
                <div data-tabs-hilight="ver" data-tabs="" className="amen-s_cms">
                  <div className="amen-cms w-dyn-list">
                    <div role="list" className="amen-cms_list w-dyn-items">
                      {amenities.map((a) => (
                        <div
                          key={a.slug}
                          data-reveal-first=""
                          data-tab-content={a.slug}
                          role="listitem"
                          className="amen-cms_list_item w-dyn-item"
                        >
                          <div data-parallax="w" className="amen-slide">
                            <div className="amen-slide_b">
                              <div className="grid">
                                <div className="amen-slide_title">
                                  <h3 data-scroll-reveal="p" data-tab="p" className="l1">
                                    {a.title}
                                  </h3>
                                  <div className="u-32" />
                                </div>
                                <div className="amen-slide_desc w-clearfix">
                                  <div className="red-line" />
                                  <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                    {a.text}
                                  </h4>
                                </div>
                              </div>
                              <div className="u-48" />
                            </div>
                            <div className="amen-slide_img">
                              <div data-tab="slide" className="img-w">
                                <div className="img-w">
                                  <img
                                    {...a.image}
                                    data-parallax="img-in"
                                    loading="eager"
                                    alt=""
                                    sizes="100vw"
                                    className="img-p"
                                  />
                                </div>
                                <div className="img-over-grad from-top" />
                                <div className="img-over-grad from-bot _4x bot" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="amm-s_cms_tabs-w">
                    <div className="grid">
                      <div className="amm-s_cms_tabs">
                        <div className="amen-tabs-cms w-dyn-list">
                          <div role="list" className="amen-tabs-cms_list w-dyn-items">
                            {amenities.map((a) => (
                              <div key={a.slug} role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                                <div data-tab="" data-tab-trigger={a.slug} className="amen-tab" role="tab" tabIndex={0}>
                                  <div data-scroll-reveal="p" className="h5">
                                    {a.title}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div data-scroll-reveal="line" className="amm-s_cms_tabs_line">
                          <div data-tab-hilight="" className="amm-s_cms_tabs_line_hilight" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amm-s_cms_btn-w b-desk">
                    <div className="grid">
                      <div data-scroll-reveal="ctn" className="amm-s_cms_btn">
                        <BtnCircle label="Book a call now" href="#" modalCta="book-a-call" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hero_themes">
        <div data-bg="color" className="hero_themes_color" />
        <div data-bg="light" className="hero_themes_light" />
      </div>
    </div>
  );
}
