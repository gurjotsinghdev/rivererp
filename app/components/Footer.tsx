import React from 'react';
import Link from 'next/link';
import { footerColumns } from '../data/site';

const socials = ['X', 'FB', 'IN', 'YT', 'IG'];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bar">
      <div className="footer-inner">
        <div className="footer-columns">
          {footerColumns.map(col => (
            <div key={col.heading} className="footer-col">
              <div className="footer-heading">{col.heading}</div>
              <div className="footer-links">
                {col.links.map(link => (
                  <Link href="#" key={link} className="footer-link">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-cta">
          <div>
            <span>How can we help? </span>
            <span className="footer-cta-accent">Contact us.</span>
          </div>
          <div className="footer-socials">
            {socials.map(s => (
              <Link key={s} href="#" className="footer-social">
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-powered">
          Copyright {currentYear} Powered by{' '}
          <a href="https://somydigital.com" target="_blank" rel="noopener noreferrer">
            Somy Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
