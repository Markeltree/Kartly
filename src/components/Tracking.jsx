import Reveal from './Reveal';
import { Check } from './Icons';
import { tracking } from '../data/content';

const timeline = [
  { label: 'Order placed', time: 'Mon, 10:24 AM', done: true },
  { label: 'Packed & shipped', time: 'Mon, 6:10 PM', done: true },
  { label: 'Out for delivery', time: 'Today, 9:02 AM', active: true },
  { label: 'Delivered', time: 'Expected 2–5 PM' },
];

export default function Tracking() {
  return (
    <section className="section tracking">
      <div className="container tracking__grid">
        <Reveal className="tracking__visual">
          <img src="/images/lifestyle.jpg" alt="Shopper using the Kartly app" loading="lazy" />
          <div className="order-card">
            <div className="order-card__head">
              <b>Order #KT-20481</b>
              <span className="chip">On the way</span>
            </div>
            <ul>
              {timeline.map((t) => (
                <li key={t.label} className={`${t.done ? 'is-done' : ''} ${t.active ? 'is-active' : ''}`}>
                  <span className="dot">{t.done && <Check width="11" height="11" strokeWidth="3" />}</span>
                  <div>
                    <b>{t.label}</b>
                    <small>{t.time}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div>
          <Reveal className="eyebrow">{tracking.eyebrow}</Reveal>
          <Reveal as="h2" className="h2" delay={60}>
            {tracking.title[0]} <em>{tracking.title[1]}</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            {tracking.text}
          </Reveal>
          <ul className="checklist">
            {tracking.points.map((p, i) => (
              <Reveal as="li" key={p} delay={160 + i * 60}>
                <span className="check">
                  <Check width="14" height="14" strokeWidth="3" />
                </span>
                {p}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
