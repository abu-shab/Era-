import { Embed } from '../components/Embed';
import { svgs } from '../assets/svg';
import { images } from '../data/images';

export function Quote() {
  return (
    <section className="section z-2 theme_on-brand">
      <div className="container">
        <div className="quote-w">
          <div className="quote-s b-desk theme_on-color">
            <div className="grid">
              <div className="quote-s_c w-clearfix">
                <div className="grid _4-columns">
                  <div className="quote-s_ico">
                    <div data-scroll-reveal="ctn" className="ico-48">
                      <Embed className="ico" svg={svgs.icoQuote} />
                    </div>
                    <div className="u-32" />
                  </div>
                </div>
                <div className="red-line" />
                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                  Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a
                  group of private homes than a standard
                </h4>
                <div className="u-64" />
                <div className="grid _4-columns">
                  <div className="quote-s_author">
                    <div data-scroll-reveal="p" className="l1">
                      Architecture Team
                    </div>
                    <div data-scroll-reveal="p" className="l1 reg">
                      Era Residence
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48" />
          </div>
          <div data-parallax="w" className="quote-w_bg">
            <div className="img-w h-auto quote-w_bg_img">
              <div className="img-over-grad from-bot bot _4x b-desk" />
              <div className="img-over-grad from-bot bot _4x b-desk" />
              <img
                {...images.quoteBuilding}
                className="img h-auto quote-w_bg_img"
                alt="Modern building with flowering vines beside a rectangular swimming pool and palm trees."
                sizes="(max-width: 1920px) 100vw, 1920px"
                data-parallax="img-out"
                loading="eager"
              />
            </div>
          </div>
          <div className="w_themes">
            <div className="w_themes_row fill">
              <div data-bg="color" className="quote-w_themes_color-1" />
              <div data-bg="light" className="quote-w_themes_light-1" />
            </div>
            <div className="w_themes_row">
              <div data-bg="color" className="quote-w_themes_color-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
