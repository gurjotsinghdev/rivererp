import React from 'react';

interface HeroProps {
  tag?: string;
  title: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  tagline?: string;
}

export default function Hero({ tag, title, copy, ctaLabel, ctaHref, tagline }: HeroProps) {
  return (
    <section className="hero" id="top">
      {tag && (
        <div className="tag" style={{ marginBottom: 10, justifyContent: 'center' }}>
          {tag}
        </div>
      )}
      <h1>{title}</h1>
      <p>{copy}</p>
      {tagline && <div className="hero-tagline">{tagline}</div>}
      <div className="hero-actions">
        <a className="cta" href={ctaHref} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
