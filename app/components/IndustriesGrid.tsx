import React from 'react';

interface IndustryCard {
  title: string;
  description?: string;
}

interface IndustriesGridProps {
  title: string;
  copy: string;
  items: IndustryCard[];
  id?: string;
  panel?: boolean;
}

export default function IndustriesGrid({ title, copy, items, id, panel }: IndustriesGridProps) {
  return (
    <section className={`section industries-section${panel ? ' panel-section' : ''}`} id={id}>
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className="industries-grid">
        {items.map(item => (
          <article className="industry-card" key={item.title}>
            <h3 className="industry-title">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
