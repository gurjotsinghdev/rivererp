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
  reasons: string[];
  ctaLabel?: string;
}

export default function AboutSection({ title, copy, items, reasons, ctaLabel = 'Get Migration Plan' }: AboutSectionProps) {
  return (
    <section className="section panel-section about-alt" id="about">
      <div className="about-alt-header">
        <div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="about-alt-cta top-align">
          <a className="cta" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
          <div className="about-cta-note">30 minutes with a delivery lead. Leave with next steps and risks identified.</div>
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
      <div className="about-reasons">
        <div>
          <h3 style={{ margin: '0 0 6px' }}>Why teams consider switching to River ERP</h3>
          <p style={{ margin: '0 0 10px', color: 'var(--muted)' }}>
            Themes we hear from finance, ops, and IT leaders who want a calmer ERP experience.
          </p>
        </div>
        <ul className="about-reasons-list">
          {reasons.map(reason => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
