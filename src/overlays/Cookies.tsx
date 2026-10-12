import { Decor, TextLink } from '../components/primitives';

export function Cookies() {
  return (
    <div data-cookies="" className="cookies">
      <div className="cookies_c">
        <div className="grid">
          <div id="w-node-a93c3093-e77a-7926-27af-e0a2d9898e16-d9898e13" className="cookies_card">
            <div className="cookies_card_t">
              <div className="l1 reg b-mob">Cookies</div>
              <div className="cookies_card_title b-desk">
                <div className="a1 a-center">Cookies</div>
              </div>
            </div>
            <div className="cookies_card_b">
              <div className="l1 a-center mob_a-left">
                This website uses cookies to ensure you get the best experience on website.
              </div>
              <div className="u-24" />
              <div className="cookies_card_btn-list">
                <TextLink label="Accept" href="#" attrs={{ 'data-cookies': 'accept' }} />
                <div className="h6">/</div>
                <TextLink label="Decline" href="#" attrs={{ 'data-cookies': 'decline' }} />
              </div>
            </div>
            <div className="card_decor">
              <Decor variant="med" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
