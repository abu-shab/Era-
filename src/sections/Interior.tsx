import { BtnCircle, Flower, Pag } from '../components/primitives';
import { images } from '../data/images';
import { gallery, links } from '../data/content';

export function Interior() {
  return (
    <section className="section arch clip">
      <div className="container">
        <div className="interior-w">
          <div className="interior-s">
            <div className="u-272" />
            <div className="grid">
              <div className="interior-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  The
                  <br />
                  space
                  <br />
                  to
                </h2>
                <div className="interior-s_title_a">
                  <h3 data-scroll-reveal="a" className="a1 a-center">
                    Live in
                  </h3>
                </div>
              </div>
            </div>
            <div className="interior-s_imgs">
              <div data-mob="off" data-parallax="ctn-down" className="interior-s_l">
                <div className="u-272" />
                <div className="grid _5-columns">
                  <div data-video-playpause="" className="interior-s_l_img-w">
                    <div className="interior-s_l_img">
                      <div data-scroll-reveal="slide" className="img-w">
                        <img
                          {...images.garden2}
                          loading="eager"
                          sizes="(max-width: 1920px) 100vw, 1920px"
                          alt="Outdoor seating with modern chair, ottoman, table, and orange drink in a garden with pink flowers."
                          className="img"
                        />
                      </div>
                    </div>
                    <Flower
                      n={6}
                      className="interior"
                      parallax="ctn-up"
                      poster="/assets/video/posters/bougainvillea-flowers_06.f5fef2.avif"
                    />
                  </div>
                  <div className="interior-s_l_desc">
                    <div className="u-16" />
                    <h4 data-scroll-reveal="p" className="l1">
                      {'Optional upgrades are available: '}
                      <br />
                      {'• Private jacuzzi '}
                      <br />
                      {'• EV charging point installation '}
                      <br />• Photovoltaic panels
                    </h4>
                    <div className="u-160 b-mob" />
                  </div>
                </div>
              </div>
              <div data-mob="off" data-parallax="ctn-up" className="interior-s_r">
                <div className="grid _5-columns">
                  <div className="interior-s_r_img">
                    <div data-scroll-reveal="slide" className="img-w">
                      <img
                        {...images.terraceSeaViewInterior}
                        loading="eager"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                        alt="Sunlit terrace with cushioned seating, wooden tables, plants, flowering vine canopy, and ocean in the distance."
                        className="img"
                      />
                    </div>
                  </div>
                  <div className="interior-s_r_lead w-clearfix">
                    <div className="u-16" />
                    <div className="red-line" />
                    <h4 data-scroll-reveal="p" className="h5">
                      Every detail was selected to create homes that feel elegant, intuitive and effortless to live in
                    </h4>
                  </div>
                  <div className="interior-s_r_desc">
                    <div className="u-64" />
                    <p data-scroll-reveal="p" className="p1">
                      Underfloor heating throughout the property. Climate automation systems. Smart lock access systems.
                      Electrically adjustable aluminium shutters. Schneider Electric DLIFE switches and mechanisms .
                    </p>
                    <div className="u-96" />
                  </div>
                  <div data-scroll-reveal="ctn" className="interior-s_r_btn">
                    <BtnCircle label="View available apartments" href={links.apartments} />
                  </div>
                </div>
              </div>
            </div>
            <div className="u-272" />
            <div className="grid">
              <div data-slider="" className="interior-s_gallery-cms">
                <div className="gallery-cms w-dyn-list">
                  <div role="list" className="gallery-cms_list w-dyn-items">
                    {gallery.map((img) => (
                      <div
                        key={img.src}
                        data-reveal-first=""
                        data-slider="slide"
                        role="listitem"
                        className="gallery-cms_list_item w-dyn-item"
                      >
                        <div className="gallery-slide">
                          <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                            <img {...img} loading="eager" alt="" sizes="100vw" className="img" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="u-16" />
                <div className="interior-s_gallery-cms_pag">
                  <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                    <Pag />
                  </div>
                </div>
              </div>
            </div>
            <div className="u-96" />
          </div>
          <div className="interior_themes">
            <div data-bg="light" className="interior_themes_light-1" />
            <div className="themes_row">
              <div data-bg="dark" className="interior_themes_dark-2" />
              <div data-bg="light" className="interior_themes_light-2" />
            </div>
            <div data-bg="light" className="interior_themes_light-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
