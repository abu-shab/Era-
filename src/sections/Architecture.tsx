import { BtnCircle, Flower } from '../components/primitives';
import { images } from '../data/images';

export function Architecture() {
  return (
    <section className="section clip">
      <div className="container">
        <div data-video-playpause="" className="arch-scroll-area">
          <div className="arch-intro-s b-desk">
            <div className="w_bg">
              <div className="arch-intro-s_bg_l" />
              <div className="arch-intro-s_bg_r">
                <div className="w-embed" />
              </div>
              <Flower
                n={5}
                className="arch-intro-l"
                poster="/assets/video/posters/bougainvillea-flowers_05.5f295d.avif"
              />
              <Flower
                n={7}
                className="arch-intro-r"
                poster="/assets/video/posters/bougainvillea-flowers_07.b0caf0.avif"
              />
            </div>
          </div>
          <div className="arch-w theme_on-color">
            <div className="arch-s">
              <div className="arch-s_t">
                <div className="u-48" />
                <h2 data-text="h" data-fit-text="" className="h1 a-center">
                  Architecture
                </h2>
                <div className="u-32" />
                <div className="grid">
                  <div className="arch-s_desc">
                    <p data-text="p" className="l1 a-center" />
                  </div>
                </div>
              </div>
              <div className="arch-s_b">
                <div className="grid">
                  <div className="arch-s_quote w-clearfix">
                    <div className="red-line" />
                    <h3 data-part="p" className="h5">
                      The architecture of ERA Residences balances clean contemporary lines with Mediterranean warmth and
                      texture
                    </h3>
                    <div className="u-64" />
                    <div className="grid _4-columns">
                      <div className="arch-s_author">
                        <div data-part="p" className="l1">
                          By Schiemann Weyers
                        </div>
                        <div data-part="p" className="l1 reg">
                          Architects OCWA Architects
                        </div>
                      </div>
                    </div>
                    <div className="u-160 b-desk" />
                  </div>
                  <div data-part="ctn" className="arch-s_btn b-desk">
                    <BtnCircle label="Book a call now" href="#" modalCta="book-a-call" />
                  </div>
                </div>
                <div className="u-96" />
              </div>
            </div>
            <div className="w_bg">
              <div data-desk="off" data-parallax="w" className="img-w">
                <img
                  {...images.architectureTerraces}
                  className="img"
                  alt="Modern terrace apartments with green plants, flowering vines, and outdoor seating on a sunny day."
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  data-parallax="img"
                  loading="eager"
                />
                <div className="img-over-grad bot _100vh" />
                <div className="img-over-grad bot _100vh" />
              </div>
            </div>
          </div>
          <div className="_100vh b-desk" />
          <div className="_100vh b-desk" />
          <div className="arch_themes">
            <div data-bg="light" className="arch_themes_light b-desk" />
            <div data-bg="color" className="arch_themes_color" />
          </div>
        </div>
      </div>
    </section>
  );
}
