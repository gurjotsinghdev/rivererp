import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  href?: string;
}

interface TestimonialsGridProps {
  quotes: Testimonial[];
  copy?: string;
}

export default function TestimonialsGrid({ quotes, copy }: TestimonialsGridProps) {
  return (
    <section className="section" id="testimonials">
      <h2>Testimonials</h2>
      {copy && <p>{copy}</p>}
      <div className="testimonial-grid">
        {quotes.map((item, idx) => (
          <div
            className={`testimonial-card static${idx === 1 ? ' offset' : ''}`}
            key={item.quote}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="accent-line" />
            <div style={{ color: 'var(--muted)', fontWeight: 700 }}>
              {item.name} · {item.title}
            </div>
            <p style={{ margin: '10px 0 0', color: 'var(--muted)', fontWeight: 600 }}>{item.quote}</p>
            {item.href ? (
              <a
                className="pill"
                style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.company} · View case
              </a>
            ) : (
          <div className="pill" style={{ marginTop: 12 }}>{item.company}</div>
        )}
      </div>
    ))}
  </div>
    </section>
  );
}
