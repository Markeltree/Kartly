import Reveal from './Reveal';
import { Gift } from './Icons';
import { rewards } from '../data/content';

export default function Rewards() {
  return (
    <section className="section section--flush-top">
      <div className="container">
        <Reveal className="rewards">
          <div className="rewards__copy">
            <span className="eyebrow eyebrow--light">{rewards.eyebrow}</span>
            <h2 className="h2">{rewards.title}</h2>
            <p>{rewards.text}</p>
          </div>
          <div className="rewards__tiers">
            {rewards.tiers.map((t, i) => (
              <div key={t.name} className={`tier tier--${i}`}>
                <Gift width="20" height="20" />
                <div>
                  <b>{t.name}</b>
                  <small>{t.points} points</small>
                </div>
                <span>{t.perk}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
