import React from 'react';

interface CTAProps {
  label: string;
  href: string;
}

export default function CTA({ label, href }: CTAProps) {
  return (
    <div className="cta-block">
      <div>
        <div className="tag" style={{ background: '#ffffff0f', borderColor: '#ffffff22', color: '#e5e7eb' }}>
          Single CTA
        </div>
        <h3 style={{ margin: '10px 0 6px' }}>Book a consultation. See the demo. Go live faster.</h3>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>
          One Calendly link. We prep your demo tenant, plugin layers, and go-live plan.
        </p>
      </div>
      <a className="cta" href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
}
