import { privacyMeta, privacySections } from '../data/privacy';

function Block({ block }) {
  if (block.type === 'h') return <h3>{block.text}</h3>;
  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{block.text}</p>;
}

export default function PrivacyPolicy() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="legal">
      <div className="container">
        <header className="legal__head">
          <span className="eyebrow">Legal</span>
          <h1 className="h2">
            Privacy <em>Policy</em>
          </h1>
          <p className="legal__updated">Last updated: {privacyMeta.updated}</p>
          <p className="lead">{privacyMeta.intro}</p>
        </header>

        <div className="legal__grid">
          <aside className="legal__toc">
            <h4>On this page</h4>
            <ol>
              {privacySections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={(e) => scrollTo(e, s.id)}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal__body">
            {privacySections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal__section">
                <h2>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                {s.blocks.map((b, j) => (
                  <Block key={j} block={b} />
                ))}
              </section>
            ))}

            <div className="legal__contact">
              <p>Questions about your privacy?</p>
              <a href={`mailto:${privacyMeta.email}`} className="btn btn--dark btn--sm">
                {privacyMeta.email}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
