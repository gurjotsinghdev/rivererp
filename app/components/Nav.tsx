import Link from 'next/link';
import { calendlyUrl, navPhone } from '../data/site';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <div className="logo">
          <div className="logo-mark" aria-hidden>
            <div className="river" />
            <div className="river" />
            <div className="river" />
          </div>
          <div>River ERP</div>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/cases">Case Studies</Link>
          <Link href="/testimonials">Testimonials</Link>
        </div>
        <div className="nav-right">
          <span className="phone">{navPhone}</span>
          <a className="cta" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
