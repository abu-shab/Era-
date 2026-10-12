import { Decor } from '../components/primitives';
import { tips } from '../data/content';

export function FloatingTips() {
  return (
    <div className="floating-tips w-dyn-list">
      <div role="list" className="floating-tips_list w-dyn-items">
        {tips.map((tip) => (
          <div key={tip.slug} floating-tip={tip.slug} role="listitem" className="floating-tip w-dyn-item">
            <div className="floating-tip-card">
              <div className="floating-tip-card_t">
                <h1 className="h5">{tip.title}</h1>
              </div>
              <div className="floating-tip-card_b">
                <p className="p1">{tip.text}</p>
              </div>
              <div className="card_decor">
                <Decor variant="med" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
