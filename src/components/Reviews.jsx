import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { Star } from './Icons';
import { reviews } from '../data/content';

const initials = (name) => name.replace(/[^A-Z]/g, '').slice(0, 2);

export default function Reviews() {
  return (
    <section className="section soft" id="reviews">
      <div className="container">
        <SectionHead
          eyebrow="Loved by shoppers"
          title={
            <>
              Real people. Real <em>hauls.</em>
            </>
          }
          text="Thousands of shoppers switched from the website to the app. Here's what a few of them say."
        />
        <div className="reviews">
          {reviews.map((r, i) => (
            <Reveal key={r.name} className={`review ${r.featured ? 'review--featured' : ''}`} delay={i * 100}>
              <div className="stars">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} />
                ))}
              </div>
              <p>“{r.text}”</p>
              <footer>
                <span className="review__avatar">{initials(r.name)}</span>
                <div>
                  <b>{r.name}</b>
                  <small>{r.meta}</small>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
