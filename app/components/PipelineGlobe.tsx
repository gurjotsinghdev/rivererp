import React from 'react';

interface PipelineGlobeProps {
  steps: string[];
}

export default function PipelineGlobe({ steps }: PipelineGlobeProps) {
  return (
    <section className="section" id="cases">
      <h2>From config to global delivery</h2>
      <p>We run the same pipeline every time: sandbox, plugins, data, governance, cutover—with telemetry you can see.</p>
      <div className="grid" style={{ gridTemplateColumns: '1.1fr 1fr', alignItems: 'center' }}>
        <div className="card">
          <h4 style={{ margin: '0 0 8px' }}>Pipeline</h4>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', lineHeight: 1.5 }}>
            {steps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <div className="pill" style={{ marginTop: 12 }}>One CTA: Book Consultation</div>
        </div>
        <div className="card globe" style={{ position: 'relative' }}>
          <div className="globe-dots" />
          <div className="globe-dot" />
          <div className="globe-dot" />
          <div className="globe-dot" />
          <div className="globe-dot" />
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
            <div className="tag">Global rollouts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
