import React from 'react';

interface PoweredProps {
  items: string[];
}

export default function Powered({ items }: PoweredProps) {
  return (
    <section className="section" id="about">
      <h2>Powered by ERPNext</h2>
      <p>Stable, open foundation with River ERP implementation speed and opinionated playbooks.</p>
      <div className="card" style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {items.map(item => (
          <div className="pill" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
