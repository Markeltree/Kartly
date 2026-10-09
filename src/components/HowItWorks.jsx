import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { iconMap } from './Icons';
import { steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              From scroll to <em>doorstep</em> in three steps
            </>
          }
          text="We kept shopping simple, so you spend less time searching and more time wearing what you love."
        />
        <div className="steps">
          {steps.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} className="step" delay={i * 100}>
                <span className="step__num">0{i + 1}</span>
                <span className="icon-box">
                  <Icon />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
