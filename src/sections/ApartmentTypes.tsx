import { Btn, Pag } from '../components/primitives';
import { apartmentTypes, links } from '../data/content';

export function ApartmentTypes() {
  return (
    <section data-bg="light" data-snap="" className="section theme_on-brand">
      <div className="container">
        <div className="apart-type-w">
          <div className="apart-type-s">
            <div className="u-48 b-desk" />
            <div className="u-96 b-mob" />
            <div className="grid fill">
              <div data-slider="" className="apart-type-s_cms">
                <div className="apart-type-cms w-dyn-list">
                  <div role="list" className="apart-type-cms_list w-dyn-items">
                    {apartmentTypes.map((t) => (
                      <div
                        key={t.type}
                        data-reveal-first=""
                        data-slider="slide"
                        role="listitem"
                        className="apart-type-cms_list_item w-dyn-item"
                      >
                        <div className="apart-type-slide">
                          <div className="apart-type-slide_t b-desk" />
                          <div className="apart-type-slide_c">
                            <div className="grid _8-columns">
                              <div className="apart-type-slide_data">
                                <div className="data-list">
                                  <div className="data-item">
                                    <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">
                                      Bedrooms
                                    </h4>
                                    <div className="u-8" />
                                    <h5 data-scroll-reveal="p" data-slider="p" className="h5">
                                      {t.bedrooms}
                                    </h5>
                                  </div>
                                  <div className="data-item">
                                    <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">
                                      Area up to
                                    </h4>
                                    <div className="u-8" />
                                    <h5 data-scroll-reveal="p" data-slider="p" className="h5">
                                      {t.area}
                                    </h5>
                                  </div>
                                </div>
                                <div className="u-48 b-mob" />
                              </div>
                              <div className="apart-type-slide_desc">
                                <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                  {t.text}
                                </p>
                                <div className="u-24" />
                                <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                  <Btn label={t.cta} href={links.apartmentsOfType(t.type)} />
                                </div>
                                <div className="u-16 b-mob" />
                              </div>
                            </div>
                          </div>
                          <div className="apart-type-slide_b">
                            <div className="u-48 b-desk" />
                            <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">
                              {t.title}
                            </h3>
                            <div className="u-32 b-mob" />
                          </div>
                          <div className="apart-type-slide_img-w">
                            <div className="apart-type-slide_img">
                              <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                                <img {...t.image} loading="eager" alt="" sizes="100vw" className="img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="u-16" />
                <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                  <Pag />
                </div>
              </div>
            </div>
            <div className="u-48" />
          </div>
        </div>
      </div>
    </section>
  );
}
