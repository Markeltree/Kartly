import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';
import { stats } from '../data/content';

function CountUp({ to, decimals = 0, start }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1500, 1);
      setN(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, start]);
  return <>{decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString()}</>;
}

export default function Stats() {
  const [ref, visible] = useReveal(0.4);
  return (
    <section className="stats" ref={ref}>
      <div className="container stats__grid">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <strong>
              <CountUp to={s.value} decimals={s.decimals} start={visible} />
              <span>{s.suffix}</span>
            </strong>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
