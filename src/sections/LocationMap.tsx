import { Embed } from '../components/Embed';
import { svgs } from '../assets/svg';
import { images } from '../data/images';

export function LocationMap() {
  return (
    <section data-bg="color" className="section clip theme_on-color">
      <div className="container">
        <div data-parallax="w" className="loc-w">
          <div className="loc-w_over-grad" />
          <div className="loc-w_over-grad" />
          <div className="loc-w_clouds">
            <div data-marquee-css="" className="marquee">
              <div data-marquee-css="track" className="marquee_track">
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img
                      {...images.imgClouds33}
                      loading="eager"
                      sizes="(max-width: 2146px) 100vw, 2146px"
                      alt=""
                      className="clouds is-33"
                    />
                  </div>
                  <div className="marquee_list_item">
                    <img
                      {...images.imgClouds33}
                      loading="eager"
                      sizes="(max-width: 2146px) 100vw, 2146px"
                      alt=""
                      className="clouds is-33"
                    />
                  </div>
                </div>
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img
                      {...images.imgClouds33}
                      loading="eager"
                      sizes="(max-width: 2146px) 100vw, 2146px"
                      alt=""
                      className="clouds is-33"
                    />
                  </div>
                  <div className="marquee_list_item">
                    <img
                      {...images.imgClouds33}
                      loading="eager"
                      sizes="(max-width: 2146px) 100vw, 2146px"
                      alt=""
                      className="clouds is-33"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-w_clouds">
            <div data-marquee-css="" className="marquee">
              <div data-marquee-css="track" className="marquee_track">
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_47.92137a.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-47"
                    />
                  </div>
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_47.92137a.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-47"
                    />
                  </div>
                </div>
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_47.92137a.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-47"
                    />
                  </div>
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_47.92137a.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-47"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-w_clouds">
            <div data-marquee-css="" className="marquee">
              <div data-marquee-css="track" className="marquee_track">
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_02.d78d85.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-02"
                    />
                  </div>
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_02.d78d85.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-02"
                    />
                  </div>
                </div>
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_02.d78d85.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-02"
                    />
                  </div>
                  <div className="marquee_list_item">
                    <img
                      src="/assets/images/img_clouds_02.d78d85.avif"
                      loading="eager"
                      alt=""
                      className="clouds is-02"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-s">
            <div className="grid">
              <div className="loc-s_desc">
                <div className="b-desk">
                  <div className="loc-s_desc_line">
                    <div data-scroll-reveal="line" className="line-v" />
                  </div>
                  <h3 data-scroll-reveal="p" className="l1">
                    New Golden Mile, Estepona
                  </h3>
                  <div className="u-32" />
                  <h4 data-scroll-reveal="p" className="p1">
                    Costa del Sol
                  </h4>
                  <div className="u-32" />
                  <h5 data-scroll-reveal="p" className="p1">
                    Spain
                  </h5>
                </div>
                <div className="b-mob">
                  <div className="l1-list">
                    <div className="ico-16">
                      <Embed className="ico" svg={svgs.icoChevronLeft} />
                    </div>
                    <div className="l1">Drag to see more</div>
                    <div className="ico-16">
                      <Embed className="ico" svg={svgs.icoChevronRight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48" />
            <div className="loc-w_decor theme_on-brand">
              <div className="w-embed" />
            </div>
          </div>
          <div data-parallax="img" className="loc-w_bg">
            <div className="loc-w_bg_img">
              <div className="pins-cms w-dyn-list">
                <div className="cms_empty-none w-dyn-empty" />
              </div>
              <div className="img-w h-auto">
                <img
                  {...images.masterPlan}
                  loading="eager"
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  alt="Coastal residential complex with pools, beachfront, roads, and distant mountains under clear blue sky."
                  className="img h-auto"
                />
                <div className="img-over-grad from-bot bot _100vh" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
