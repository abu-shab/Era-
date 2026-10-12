import { Embed } from '../components/Embed';
import { LogoSymbol } from '../components/primitives';
import { svgs } from '../assets/svg';

export function BenefitsIntro() {
  return (
    <section className="section arch clip theme_on-brand">
      <div className="container">
        <div className="benefits-intro-w">
          <div className="benefits-intro-s">
            <div className="u-48 b-mob" />
            <div className="u-272 b-mob" />
            <div className="s_logo">
              <div className="info-s_logo_l">
                <div data-scroll-reveal="p" className="l1 a-center">
                  Costa
                </div>
              </div>
              <LogoSymbol className="ico-48" attrs={{ 'data-scroll-reveal': 'ctn' }} />
              <div className="info-s_logo_r">
                <div data-scroll-reveal="p" className="l1 a-center">
                  del Sol
                </div>
              </div>
            </div>
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
            <div className="u-96" />
            <div className="benefits-intro-s_title">
              <Embed className="benefits-intro-s_title_svg b-desk" svg={svgs.benefitsCircleTextDesk} />
              <Embed className="benefits-intro-s_title_svg b-mob" svg={svgs.benefitsCircleTextMob} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
