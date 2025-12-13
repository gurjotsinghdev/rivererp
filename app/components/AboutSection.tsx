import React from 'react';
import { calendlyUrl } from '../data/site';

interface Item {
  title: string;
  description: string;
}

interface AboutSectionProps {
  title: string;
  copy: string;
  items: Item[];
}

export default function AboutSection({ title, copy, items }: AboutSectionProps) {
  return (
    <section className="section panel-section about-alt" id="about">
      <div className="about-alt-header">
        <div>
          <div className="tag">About River ERP</div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="about-alt-cta">
          <div className="pill" style={{ width: 'fit-content' }}>One CTA: Book Consultation</div>
          <a className="cta" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book Consultation
          </a>
        </div>
      </div>
      <div className="about-alt-timeline">
        {items.map((item, idx) => (
          <div className="about-step" key={item.title}>
            <div className="about-step-icon">{idx + 1}</div>
            <div>
              <h3 style={{ margin: '0 0 4px' }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'var(--muted)' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
