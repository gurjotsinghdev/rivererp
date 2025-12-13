import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  tag?: string;
}

interface FeatureGridProps {
  title: string;
  copy: string;
  items: FeatureCard[];
  id?: string;
  panel?: boolean;
}

export default function FeatureGrid({ title, copy, items, id, panel }: FeatureGridProps) {
  return (
    <section className={`section${panel ? ' panel-section' : ''}`} id={id}>
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className="feature-grid">
        {items.map(card => (
          <div className="card" key={card.title}>
            {card.tag && <div className="tag">{card.tag}</div>}
            <h3 style={{ margin: '10px 0 6px' }}>{card.title}</h3>
            <p style={{ margin: 0, color: 'var(--muted)' }}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
