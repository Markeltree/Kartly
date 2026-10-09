import { useState } from 'react';
import SectionHead from './SectionHead';
import { Plus } from './Icons';
import { faqs } from '../data/content';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <SectionHead
          eyebrow="FAQ"
          title={
            <>
              Questions? We've got <em>answers.</em>
            </>
          }
        />
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  {f.q}
                  <span className="faq__icon">
                    <Plus width="16" height="16" />
                  </span>
                </button>
                <div className="faq__answer">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
