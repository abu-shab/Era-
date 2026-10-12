import { BtnCircle, Flower, LogoSymbol } from '../components/primitives';
import { images } from '../data/images';
import { links } from '../data/content';

export function LocationScroll() {
  return (
    <section data-bg="light" data-slow-scroll="" className="section clip">
      <div className="container loc">
        <div data-video-playpause="" data-scroll-horizontal="" className="loc-scroll-area">
          <div className="loc-scroll-area_screen">
            <div className="loc-scroll-area_track">
              <div data-parallax="w" className="loc-info-w">
                <div data-parallax="img-in" className="loc-info-s">
                  <div className="loc-info-s_t">
                    <div className="u-48" />
                    <div className="u-160 b-mob" />
                  </div>
                  <div className="loc-info-s_c">
                    <div className="grid">
                      <div className="s_title">
                        <h2 data-part="p" className="l1 a-center">
                          The concept
                        </h2>
                      </div>
                    </div>
                    <div className="u-32 b-desk" />
                    <div className="u-160 b-mob" />
                    <div className="grid">
                      <div className="info-s_lead">
                        <h3 data-part="p" className="h4 a-center">
                          ERA Residences is a boutique gated community of only 25 residences, designed around privacy,
                          wellbeing and timeless Mediterranean living
                        </h3>
                      </div>
                    </div>
                    <div className="u-96 b-mob" />
                  </div>
                  <div className="loc-info-s_b">
                    <div className="grid">
                      <div className="info-s_desc">
                        <p data-part="p" className="p1 a-center">
                          Inspired by the atmosphere of Marbella’s golden era, the project combines contemporary
                          architecture with warm materials, natural landscaping and carefully curated spaces.
                        </p>
                        <div className="u-32" />
                        <div className="s_logo">
                          <LogoSymbol className="ico-48" attrs={{ 'data-part': 'ctn' }} />
                        </div>
                      </div>
                    </div>
                    <div className="u-48" />
                  </div>
                </div>
                <Flower
                  n={1}
                  className="loc-info"
                  parallax="ctn-down"
                  poster="/assets/video/posters/bougainvillea-flowers_01.b0caed.avif"
                />
              </div>
              <div className="loc-intro-w">
                <div className="loc-intro-s">
                  <div className="u-48 b-desk" />
                  <div className="u-160 b-mob" />
                  <div className="grid _13-columns fill">
                    <div className="loc-intro-s_cap">
                      <h4 data-scroll-reveal="h" className="c1 a-center">
                        Spain
                      </h4>
                    </div>
                    <div className="loc-intro-s_title">
                      <h3 data-scroll-reveal="h" className="h1">
                        <span className="loc-intro-s_title_line is-1">{'New '}</span>
                        <span className="loc-intro-s_title_line is-2 mob_a-right">{'Golden '}</span>
                        <span className="loc-intro-s_title_line">Mile</span>
                      </h3>
                    </div>
                    <div className="loc-intro-s_img">
                      <div className="u-32 b-mob" />
                      <div data-scroll-reveal="slide" className="img-w">
                        <img
                          {...images.terraceSeaView}
                          loading="eager"
                          alt="Sunlit modern terrace with cushioned sofas, wooden tables, climbing plants, and ocean view under clear sky."
                          sizes="(max-width: 1920px) 100vw, 1920px"
                          className="img"
                        />
                      </div>
                    </div>
                    <div className="loc-intro-s_desc">
                      <div className="u-32 b-mob" />
                      <h3 data-scroll-reveal="p" className="h5">
                        Between Marbella and Estepona
                      </h3>
                      <div className="u-16" />
                      <p data-scroll-reveal="p" className="p1">
                        Surrounded by beaches, golf courses, wellness clubs and established lifestyle destinations, the
                        project combines privacy with effortless connectivity to everything essential for Mediterranean
                        living. A location designed not around movement — but around returning.
                      </p>
                      <div className="u-96 b-mob" />
                    </div>
                    <div data-scroll-reveal="ctn" className="loc-intro-s_btn">
                      <BtnCircle label="View available apartments" href={links.apartments} />
                    </div>
                  </div>
                  <div className="u-48" />
                </div>
                <Flower
                  n={2}
                  className="loc-intro"
                  poster="/assets/video/posters/bougainvillea-flowers_02.f84c4a.avif"
                />
              </div>
              <div className="loc-path-w">
                <div className="loc-path-s">
                  <div className="loc-path-s_t">
                    <div className="u-48 b-desk" />
                    <div className="u-160 b-mob" />
                  </div>
                  <div className="loc-path-s_c">
                    <div className="grid">
                      <div className="loc-path-s_title">
                        <h2 className="h3 a-center">
                          <span data-scroll-reveal="h" className="loc-path-s_title_line">
                            {'The coast you wanted '}
                          </span>
                          <span data-scroll-reveal="a" className="loc-path-s_title_a a2">
                            {'yours '}
                          </span>
                          <span data-scroll-reveal="h" className="loc-path-s_title_line">
                            this year
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="loc-path-s_b">
                    <div className="u-48 b-mob" />
                    <div className="grid">
                      <div className="loc-path-s_path scrollbar-none">
                        <div className="loc-path-s_path_c">
                          <img src="/assets/svg/loc_path.9e2406.svg" loading="eager" alt="" className="img loc-path" />
                          <img
                            src="/assets/svg/loc_path_labels.045b0e.svg"
                            data-scroll-reveal="ctn"
                            loading="eager"
                            alt=""
                            className="img h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="u-48" />
                  </div>
                </div>
                <div className="loc-path-w_flower">
                  <Flower
                    n={3}
                    className="loc-path"
                    poster="/assets/video/posters/bougainvillea-flowers_03.b1647a.avif"
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-slow-scroll="" className="slow-scroll-trigger" />
        </div>
      </div>
    </section>
  );
}
