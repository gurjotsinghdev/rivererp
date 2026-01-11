import Link from 'next/link';
import AnchorLink from '@/app/components/AnchorLink';
import { footerColumns, footerNote } from '@/app/data/site';

const socials = [
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-border/70 bg-white">
      <div className="container space-y-12 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <img
              src="/rivererp-logo.png"
              alt="RiverERP"
              className="h-16 w-auto bg-transparent object-contain sm:h-18"
            />
            <p className="mt-4 text-sm text-muted-foreground">{footerNote}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map(column => (
              <div key={column.heading} className="space-y-3 text-sm">
                <div className="font-semibold text-foreground">{column.heading}</div>
                <div className="flex flex-col gap-2 text-muted-foreground">
                  {column.links.map(link =>
                    link.href.includes('#') ? (
                      <AnchorLink key={link.label} href={link.href} className="transition hover:text-foreground">
                        {link.label}
                      </AnchorLink>
                    ) : (
                      <Link key={link.label} href={link.href} className="transition hover:text-foreground">
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {currentYear} RiverERP. All rights reserved.</span>
          <div className="flex gap-3">
            {socials.map(item => (
              <Link key={item.label} href={item.href} className="rounded-full border border-border px-3 py-1 text-xs">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
