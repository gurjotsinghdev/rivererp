import React from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQListProps {
  items: FAQItem[];
}

export default function FAQList({ items }: FAQListProps) {
  return (
    <section className="section">
      <h2>FAQ</h2>
      <div className="grid">
        {items.map(item => (
          <details key={item.q} className="card">
            <summary>{item.q}</summary>
            <p style={{ marginTop: 8, color: 'var(--muted)' }}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
