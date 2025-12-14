import Link from 'next/link';
import { calendlyUrl, navPhone } from '../data/site';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <Link href="/" className="logo">
          <div className="logo-mark" aria-hidden>
            <div className="river" />
            <div className="river" />
            <div className="river" />
          </div>
          <div>River ERP</div>
        </Link>
        <div className="nav-right">
          <a className="cta" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
