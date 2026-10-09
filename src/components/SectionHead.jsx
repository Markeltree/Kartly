import Reveal from './Reveal';

export default function SectionHead({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      {eyebrow && <Reveal className="eyebrow">{eyebrow}</Reveal>}
      <Reveal as="h2" className="h2" delay={60}>
        {title}
      </Reveal>
      {text && (
        <Reveal as="p" className="section-head__text" delay={120}>
          {text}
        </Reveal>
      )}
    </div>
  );
}
