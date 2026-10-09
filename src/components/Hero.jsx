import Reveal from './Reveal';
import StoreButtons from './StoreButtons';
import { Package, Star, Tag } from './Icons';
import { hero } from '../data/content';

const avatars = ['SK', 'DR', 'AM', 'JL'];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal className="pill">
            <span className="pill__tag">NEW</span>
            {hero.badge}
          </Reveal>
          <Reveal as="h1" className="hero__title" delay={80}>
            {hero.title[0]} <br />
            <em>{hero.title[1]}</em>
          </Reveal>
          <Reveal as="p" className="hero__text" delay={160}>
            {hero.text}
          </Reveal>
          <Reveal delay={240}>
            <StoreButtons />
          </Reveal>
          <Reveal className="hero__proof" delay={320}>
            <div className="avatars">
              {avatars.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            <div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p>
                <b>{hero.rating}</b> {hero.ratingNote}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={150}>
          <div className="hero__image">
            <img src="/images/hero.jpg" alt="Kartly app welcome screen on a phone" />
          </div>
          <div className="float-card float-card--top">
            <span className="float-card__icon float-card__icon--accent">
              <Tag width="18" height="18" />
            </span>
            <div>
              <b>Price drop -20%</b>
              <small>Regular Fit Polo is on sale</small>
            </div>
          </div>
          <div className="float-card float-card--bottom">
            <span className="float-card__icon">
              <Package width="18" height="18" />
            </span>
            <div>
              <b>Order shipped</b>
              <small>Arriving tomorrow, 2–5 PM</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
