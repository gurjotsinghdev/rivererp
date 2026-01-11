import { logos } from '@/app/data/site';

export default function LogoMarquee() {
  const items = logos;

  return (
    <section className="py-8 sm:py-10">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams modernizing ERP operations
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max">
          {[0, 1].map(dupIndex => (
            <div
              key={`logo-marquee-${dupIndex}`}
              className="flex w-max animate-marquee gap-4 motion-reduce:animate-none hover:[animation-play-state:paused]"
              aria-hidden={dupIndex === 1}
            >
              {items.map((item, index) => (
                <div
                  key={`${item.name}-${dupIndex}-${index}`}
                  className="flex min-w-[220px] flex-col items-start justify-center gap-1 rounded-2xl border border-border bg-card/80 px-5 py-4 shadow-soft"
                >
                  <span className="text-sm font-semibold">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.city}, {item.country}</span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {item.industry}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
