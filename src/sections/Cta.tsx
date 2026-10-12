import { BtnCircle } from '../components/primitives';
import { images } from '../data/images';
import { links } from '../data/content';

export function Cta() {
  return (
    <section data-bg="color" className="section theme_on-color">
      <div data-footer-clip="" className="container">
        <div className="cta-w">
          <div className="cta-s">
            <div className="u-48" />
            <div className="grid">
              <div className="cta-s_desc">
                <p data-scroll-reveal="p" className="l1 a-center">
                  A short conversation is enough to understand which apartment fits your use case — whether it is a
                  family second home, a longer stay, or a place to return to year after year.
                </p>
              </div>
            </div>
            <div className="u-272" />
            <div className="grid">
              <div className="cta-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  {'Perfect '}
                  <br />
                  sea views
                </h2>
                <div className="u-32" />
                <h3 data-scroll-reveal="h" className="c1 a-center">
                  From rooftop terraces
                </h3>
                <div className="u-160" />
                <div data-scroll-reveal="ctn" className="cta-s_title_btn">
                  <BtnCircle label="View available apartments" href={links.apartments} />
                </div>
              </div>
            </div>
          </div>
          <div className="w_bg">
            <div data-parallax="w" className="img-w">
              <img
                {...images.ctaSeaView}
                data-parallax="img"
                loading="eager"
                alt=""
                sizes="(max-width: 1920px) 100vw, 1920px"
                className="img-p"
              />
              <div className="img-over-grad from-top _4x" />
              <div className="img-over-grad" />
              <div className="img-over-grad" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
