import React from 'react';

interface LogoItem {
  name: string;
  href: string;
  city: string;
  country: string;
  industry: string;
}

interface LogoSliderProps {
  logos: LogoItem[];
}

export default function LogoSlider({ logos }: LogoSliderProps) {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {[...logos, ...logos].map((item, idx) => (
          <div className="logo-pill" key={`${item.name}-${idx}`}>
            <div className="logo-pill-name">{item.name}</div>
            <div className="logo-pill-meta subtle">{item.city}, {item.country}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
