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
          Next step
        </div>
        <h3 style={{ margin: '10px 0 6px' }}>Talk with the delivery lead about your migration risk.</h3>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>
          30 minutes to review your current ERP issues, data concerns, and go-live timing. You leave with a draft migration plan.
        </p>
      </div>
      <a className="cta" href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
}
