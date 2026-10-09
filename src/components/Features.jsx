import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { iconMap } from './Icons';
import { features } from '../data/content';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHead
          eyebrow="Features"
          title={
            <>
              Everything you need to shop <em>smarter</em>
            </>
          }
          text="From the first search to the last delivery update, every step is designed to be quick and effortless."
        />
        <div className="features">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal key={f.title} className={`feature ${f.highlight ? 'feature--highlight' : ''}`} delay={(i % 4) * 70}>
                <span className="icon-box">
                  <Icon />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
