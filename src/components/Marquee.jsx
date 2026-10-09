import { Sparkle } from './Icons';
import { categories } from '../data/content';

export default function Marquee() {
  const row = [...categories, ...categories];
  return (
    <div className="marquee" aria-label="Shop categories">
      <div className="marquee__track">
        {row.map((c, i) => (
          <span key={i} aria-hidden={i >= categories.length}>
            {c}
            <Sparkle width="18" height="18" />
          </span>
        ))}
      </div>
    </div>
  );
}
