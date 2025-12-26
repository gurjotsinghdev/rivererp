import Link from 'next/link';
import { calendlyUrl, navPhone } from '../data/site';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <Link href="/" className="logo" aria-label="RiverERP home">
          <img
            className="logo-img"
            src="/rivererp-logo.png"
            alt="RiverERP"
            width={500}
            height={200}
          />
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
