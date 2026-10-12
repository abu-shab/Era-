import { Pag } from '../components/primitives';
import { benefits } from '../data/content';

export function Benefits() {
  return (
    <section data-bg="light" data-snap="" className="section z-2 theme_on-brand">
      <div className="container">
        <div className="benefits-w">
          <div className="benefits-s">
            <div className="grid fill">
              <div data-slider="" className="benefits-s_cms">
                <div className="benefits-s_cms_pag">
                  <div className="u-48" />
                  <div className="u-16" />
                  <div className="benefit-slide_img" />
                  <div className="u-16" />
                  <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                    <Pag />
                  </div>
                </div>
                <div className="benefits-cms w-dyn-list">
                  <div role="list" className="benefits-cms_list w-dyn-items">
                    {benefits.map((b) => (
                      <div
                        key={b.title}
                        data-reveal-first=""
                        data-slider="slide"
                        role="listitem"
                        className="benefits-cms_list_item w-dyn-item"
                      >
                        <div className="benefit-slide">
                          <div className="benefit-slide_t">
                            <div className="u-48 b-desk" />
                            <div className="u-272 b-mob" />
                            <h3 data-scroll-reveal="h" data-slider="h" className="h1 a-center b-desk">
                              {b.title}
                            </h3>
                            <div data-scroll-reveal="h" data-slider="h" className="h2 a-center b-mob">
                              {b.title}
                            </div>
                            <div className="u-48" />
                          </div>
                          <div className="benefit-slide_c">
                            <div className="u-16" />
                            <div className="benefit-slide_img">
                              <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                                <img {...b.image} loading="eager" alt="" sizes="100vw" className="img" />
                              </div>
                            </div>
                            <div className="u-16" />
                          </div>
                          <div className="benefit-slide_b">
                            <div className="u-48" />
                            <div className="grid _8-columns">
                              <div className="benefit-slide_desc">
                                <p data-scroll-reveal="p" data-slider="p" className="p1 a-center">
                                  {b.text}
                                </p>
                              </div>
                            </div>
                            <div className="u-48" />
                            <div className="grid _8-columns">
                              <div className="benefit-slide_cap">
                                <p data-scroll-reveal="p" data-slider="p" className="l1 a-center">
                                  {b.caption}
                                </p>
                              </div>
                            </div>
                            <div className="u-48" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
