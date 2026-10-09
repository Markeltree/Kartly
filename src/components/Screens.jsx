import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { screens } from '../data/content';

export default function Screens() {
  return (
    <section className="section dark screens" id="screens">
      <div className="container">
        <SectionHead
          eyebrow="Inside the app"
          title={
            <>
              Built for your <em>phone</em>, not shrunk from a website
            </>
          }
          text="Clean, image-led screens that load fast on any device, even on weak connections."
        />
        <div className="screens__row">
          {screens.map((s, i) => (
            <Reveal key={s.title} className={`screen screen--${i}`} delay={i * 120}>
              <div className="screen__phone">
                <img src={s.src} alt={`${s.title} screen`} loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
