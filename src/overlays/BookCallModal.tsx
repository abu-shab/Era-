import { Embed } from '../components/Embed';
import { Btn, LogoSymbol } from '../components/primitives';
import { svgs } from '../assets/svg';
import { links, social } from '../data/content';

export function BookCallModal() {
  return (
    <div data-modal-cta="book-a-call" className="modal">
      <div className="modal_c">
        <div className="modal_cta theme_on-brand">
          <div className="grid">
            <div data-lenis-scroll="" data-modal-container="" className="modal_cta_c">
              <div className="modal_cta_close">
                <div data-modal-close="" hover-btn="" className="btn-ico">
                  <a aria-label="Close" href="#" className="btn-ico_link w-inline-block" />
                  <div hover="ico" className="btn_ico">
                    <div className="ico-16">
                      <Embed className="ico" svg={svgs.icoClose} />
                    </div>
                  </div>
                  <div className="btn_bg">
                    <div hover="bg" className="btn_bg_fill" />
                  </div>
                </div>
              </div>
              <div id="book-a-call" className="modal_cta_form w-form">
                <form
                  id="wf-form-Book-a-call"
                  name="wf-form-Book-a-call"
                  data-name="Book a call"
                  method="post"
                  className="form_block"
                >
                  <div className="modal_cta_l">
                    <div className="modal_cta_l_t">
                      <div className="modal_cta_a">
                        <h1 className="a2 b-desk">Book a call</h1>
                        <div className="a1 b-mob">Book a call</div>
                      </div>
                      <div className="u-24" />
                    </div>
                    <div className="modal_cta_l_b">
                      <div className="modal_cta_desc">
                        <LogoSymbol
                          className="ico-48 b-mob"
                          attrs={{ 'data-modal-close': 'menu', 'aria-label': 'logo envy maison' }}
                        />
                        <div className="u-32 b-mob" />
                        <p className="l1 mob_a-center">
                          Leave your details and we will get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal_cta_c_c">
                    <div className="modal_cta_c_line">
                      <div data-scroll-reveal="line" className="line-v" />
                    </div>
                    <div className="modal_cta_c_logo">
                      <LogoSymbol
                        className="header"
                        attrs={{ 'data-modal-close': 'menu', 'aria-label': 'logo envy maison' }}
                      />
                      <Embed className="header-logo_bg b-mob" svg={svgs.headerLogoRingMob} />
                      <Embed className="header-logo_bg b-desk" svg={svgs.headerLogoRingDesk} />
                    </div>
                    <div className="modal_cta_c_line">
                      <div data-scroll-reveal="line" className="line-v" />
                    </div>
                  </div>
                  <div className="modal_cta_r">
                    <div className="modal_cta_form_c">
                      <div className="form_block_t">
                        <div className="u-32 b-desk" />
                        <div className="u-96 b-mob" />
                      </div>
                      <div className="form_block_list">
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="title"
                          data-name="title"
                          placeholder=""
                          type="text"
                          id="title"
                        />
                        <div className="input">
                          <div className="input_label">
                            <label htmlFor="name" className="l1 reg">
                              Name:
                            </label>
                          </div>
                          <input
                            className="input_field l1 w-input"
                            autoComplete="name"
                            maxLength={256}
                            name="name"
                            data-name="name"
                            placeholder=""
                            type="text"
                            id="name"
                            required
                          />
                        </div>
                        <div className="input">
                          <div className="input_label">
                            <label htmlFor="email" className="l1 reg">
                              Email:
                            </label>
                          </div>
                          <input
                            className="input_field l1 w-input"
                            autoComplete="email"
                            maxLength={256}
                            name="email"
                            data-name="email"
                            placeholder=""
                            type="email"
                            id="email"
                            required
                          />
                        </div>
                        <div className="input">
                          <div className="input_label">
                            <label htmlFor="phone" className="l1 reg">
                              Phone:
                            </label>
                          </div>
                          <input
                            className="input_field l1 w-input"
                            autoComplete="phone"
                            maxLength={256}
                            name="phone"
                            data-name="phone"
                            placeholder=""
                            type="tel"
                            id="phone"
                            required
                          />
                        </div>
                        <div className="input">
                          <div className="input_label">
                            <label htmlFor="message" className="l1 reg">
                              Message:
                            </label>
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            maxLength={5000}
                            data-name="message"
                            placeholder=""
                            className="input_field area l1 w-input"
                          />
                        </div>
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_source"
                          data-name="utm_source"
                          placeholder=""
                          type="text"
                          id="utm_source"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_medium"
                          data-name="utm_medium"
                          placeholder=""
                          type="text"
                          id="utm_medium"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_campaign"
                          data-name="utm_campaign"
                          placeholder=""
                          type="text"
                          id="utm_campaign"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_content"
                          data-name="utm_content"
                          placeholder=""
                          type="text"
                          id="utm_content"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_url"
                          data-name="utm_url"
                          placeholder=""
                          type="text"
                          id="utm_url"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="page_url"
                          data-name="page_url"
                          placeholder=""
                          type="text"
                          id="page_url"
                        />
                        <div className="u-160 b-mob" />
                      </div>
                      <div className="form_block_b">
                        <div className="form_block_legal">
                          <div className="p2 inline">{'By submitting, you agree to our '}</div>
                          <div data-text="p" className="legal-cms inline w-dyn-list">
                            <div data-comma-list="" role="list" className="legal-cms_list inline w-dyn-items">
                              <div role="listitem" className="legal-cms_list_item inline w-dyn-item">
                                <a
                                  href={links.privacy}
                                  target="_blank"
                                  rel="noopener"
                                  className="text-link inline w-inline-block"
                                >
                                  <div className="p2 inline">Privacy policy</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Btn label="Submit" href="#" attrs={{ 'data-form-btn': '' }} />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form_success w-form-done">
                  <div className="form_success_c">
                    <div className="form_success_title">
                      <p className="l1 a-center">We’ve received your request</p>
                      <div className="u-160 b-mob" />
                    </div>
                    <div className="form_success_a">
                      <p className="a2 a-center">Thank you</p>
                    </div>
                    <div className="form_success_social">
                      <div className="u-96 b-mob" />
                      <div className="social-cms w-dyn-list">
                        <div data-comma-list="" role="list" className="social-cms_list w-dyn-items">
                          {social.map((item, i) => (
                            <div key={item.label} role="listitem" className="social-cms_list_item w-dyn-item">
                              <a
                                aria-label={item.label}
                                hover-social=""
                                href={item.href}
                                target="_blank"
                                rel="noopener"
                                className="social-btn w-inline-block"
                              >
                                <div hover="ico" className="ico-16">
                                  <Embed className="ico" svg={svgs[item.icon]} />
                                </div>
                                {i < social.length - 1 && (
                                  <div data-comma="" className="social-btn_line">
                                    <div className="line-h" />
                                  </div>
                                )}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="form_success_desc">
                      <div className="u-48 b-mob" />
                      <p className="p1 a-center">
                        Our sales manager will review your message and respond personally. We typically reply within one
                        business day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form_error theme_on-dark w-form-fail">
                  <div className="l1 a-center">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-modal-close="" data-modal-over="" className="modal_over" />
    </div>
  );
}
