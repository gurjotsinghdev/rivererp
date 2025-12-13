import React from 'react';

interface Plan {
  name: string;
  price: string;
  setup: string;
  bullets: string[];
  accent?: boolean;
}

interface PricingCardsProps {
  plans: Plan[];
}

export default function PricingCards({ plans }: PricingCardsProps) {
  return (
    <section className="section">
      <h2>A compute model for every workload</h2>
      <p>Usage-based plans with one-time setup fees. Pick the lane that matches your usage and governance needs.</p>
      <div className="pricing">
        {plans.map(plan => (
          <div className="card" key={plan.name} style={plan.accent ? { borderColor: '#dcdde2' } : undefined}>
            <div className="tag">{plan.name}</div>
            <div className="price">{plan.price}</div>
            <div style={{ color: 'var(--muted)', marginBottom: 8 }}>{plan.setup}</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)', lineHeight: 1.5 }}>
              {plan.bullets.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
