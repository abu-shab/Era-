import { Decor, LogoSymbol } from '../components/primitives';

export function Preloader() {
  return (
    <>
      <div data-master-preloader="" className="master-preloader theme_on-dark" />
      <div data-preloader="" className="preloader theme_on-dark">
        <div className="preloader_ctn">
          <div className="preloader_t">
            <div className="u-48" />
            <div className="s_logo">
              <LogoSymbol className="ico-48" attrs={{ 'data-part': 'ctn' }} />
            </div>
          </div>
          <div className="preloader_c">
            <div className="grid">
              <div className="preloader_title-l">
                <div data-part="h" className="c1 a-center">
                  Costa
                </div>
              </div>
              <div className="preloader_logo">
                <div data-part="h" className="h3 a-center">
                  Era
                  <br />
                  Residence
                </div>
                <div className="preloader_logo_a">
                  <div data-part="a" className="a2 preloader_a a-center">
                    Estepona
                  </div>
                </div>
              </div>
              <div className="preloader_title-r">
                <div data-part="h" className="c1 a-center">
                  del Sol
                </div>
              </div>
            </div>
          </div>
          <div className="preloader_b">
            <div className="grid">
              <div className="s_title">
                <div data-part="line" className="preloader_progress">
                  <div className="preloader_progress_fill">
                    <div className="preloader_progress_track" />
                  </div>
                </div>
                <div className="u-32" />
                <p data-part="p" className="l1 a-center">
                  Era Residence
                  <br />A place to return to.
                </p>
              </div>
            </div>
            <div className="u-48" />
          </div>
        </div>
        <div className="preloader_bg_arch">
          <div className="preloader_bg_arch_is-1" />
          <div className="preloader_bg_arch_is-2" />
        </div>
        <div className="preloader_bg">
          <div className="preloader_bg_a">
            <img
              src="/assets/svg/e22485744735d6f17214f25b6157e9b5_preloader_bg.1c9c03.svg"
              loading="eager"
              alt=""
              className="img"
            />
          </div>
          <div className="preloader_bg_decor">
            <Decor variant="large" />
          </div>
        </div>
      </div>
    </>
  );
}
