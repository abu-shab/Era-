import { Embed } from '../components/Embed';
import { Flower } from '../components/primitives';
import { svgs } from '../assets/svg';
import { details } from '../data/content';

export function Details() {
  return (
    <section data-bg="light" className="section clip">
      <div className="container">
        <div data-video-playpause="" className="other-w">
          <div className="other-s">
            <div className="u-48" />
            <div className="grid">
              <div className="s_title">
                <p data-scroll-reveal="p" className="l1 a-center">
                  A place to live — to return year after year
                </p>
              </div>
            </div>
            <div className="u-48" />
            <div className="divider">
              <div data-scroll-reveal="line" className="line-v" />
            </div>
            <div className="u-64" />
            <div className="grid">
              <div className="other-s_cms">
                <div className="other-cms w-dyn-list">
                  <div role="list" className="other-cms_list w-dyn-items">
                    {details.map((d) => (
                      <div key={d.title} role="listitem" className="other-cms_list_item w-dyn-item">
                        <div data-accordion-card="" className="other-card" role="button" tabIndex={0}>
                          <div className="other-card_name">
                            <div className="other-card_name_label">
                              <h4 data-scroll-reveal="h" className="h3 a-center">
                                {d.title}
                              </h4>
                              <div data-scroll-reveal="ctn" data-ico-plus="" className="other-card_ico">
                                <div className="ico-16">
                                  <Embed className="ico" svg={svgs.icoPlus} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-accordion-card="content" className="other-card_info">
                            <div className="u-32" />
                            <div className="grid _6-columns">
                              <div className="other-card_info_desc">
                                {d.logo && (
                                  <>
                                    <div data-accordion-card="ctn" className="other-card_info_logo">
                                      <img src={d.logo} loading="eager" alt="" className="logo b" />
                                    </div>
                                    <div className="u-32" />
                                  </>
                                )}
                                <p data-accordion-card="p" className="p1 a-center">
                                  {d.text}
                                </p>
                                <div className="u-32" />
                                <div data-accordion-card="ctn" className="info_divider">
                                  <div className="line-h" />
                                </div>
                                <div className="u-48" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="u-160" />
          </div>
          <Flower
            n={7}
            className="other"
            parallax="ctn-down"
            poster="/assets/video/posters/bougainvillea-flowers_07.b0caf0.avif"
          />
        </div>
      </div>
    </section>
  );
}
