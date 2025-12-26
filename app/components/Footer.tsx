import React from 'react';
import Link from 'next/link';
import { footerColumns, footerNote } from '../data/site';

const socials = ['X', 'FB', 'IN', 'YT', 'IG'];

export default function Footer() {
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

        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/rivererp-logo.png"
            alt="RiverERP"
            width={500}
            height={200}
          />
        </div>

        <div className="footer-note">{footerNote}</div>
      </div>
    </footer>
  );
}
