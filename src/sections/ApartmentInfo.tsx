import { Flower, LogoSymbol } from '../components/primitives';

export function ApartmentInfo() {
  return (
    <section data-bg="light" className="section clip theme_on-brand">
      <div className="container">
        <div data-video-playpause="" className="apart-info-w">
          <div className="apart-info-s">
            <div className="u-48" />
            <div className="divider">
              <div data-scroll-reveal="line" className="line-v" />
            </div>
            <div className="u-48" />
            <div className="grid">
              <div className="s_title">
                <p data-scroll-reveal="p" className="l1 a-center">
                  A place to live — to return year after year
                </p>
              </div>
            </div>
            <div className="u-160" />
            <div className="grid">
              <div className="info-s_lead">
                <h3 data-scroll-reveal="p" className="h4 a-center">
                  Residences range from 104 to 244 sq.m., offering spacious single level and duplex layouts with
                  generous terraces and rooftop solariums.
                </h3>
              </div>
            </div>
            <div className="u-160" />
            <div className="grid">
              <div className="info-s_desc">
                <p data-scroll-reveal="p" className="p1 a-center" />
                <div className="u-32" />
                <div className="s_logo">
                  <LogoSymbol className="ico-48" attrs={{ 'data-scroll-reveal': 'ctn' }} />
                </div>
              </div>
            </div>
            <div className="u-48" />
          </div>
          <Flower
            n={4}
            className="apart-info"
            parallax="ctn-down"
            poster="/assets/video/posters/bougainvillea-flowers_04.b07e84.avif"
          />
        </div>
      </div>
    </section>
  );
}
