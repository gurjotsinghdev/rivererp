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
          <a className="logo-pill" key={`${item.name}-${idx}`} href={item.href} target="_blank" rel="noopener noreferrer">
            <div className="logo-pill-name">{item.name}</div>
            <div className="logo-pill-meta subtle">{item.city}, {item.country}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
