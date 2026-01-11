'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ArrowUpRight, ShieldCheck, Sparkles, Timer } from 'lucide-react';
import AnchorLink from '@/app/components/AnchorLink';

interface HeroProps {
  tag?: string;
  title: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  tagline?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  tag,
  title,
  copy,
  ctaLabel,
  ctaHref,
  tagline,
  secondaryCtaLabel,
  secondaryCtaHref
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-radial opacity-60" />
      <div className="container relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          {tagline && <Badge variant="outline" className="normal-case">{tagline}</Badge>}
          {tag && <p className="text-sm text-muted-foreground">{tag}</p>}
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">{copy}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" variant="glow" asChild>
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Button size="lg" variant="outline" asChild>
                {secondaryCtaHref.includes('#') ? (
                  <AnchorLink href={secondaryCtaHref}>{secondaryCtaLabel}</AnchorLink>
                ) : (
                  <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                )}
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-foreground" />
              Data validation
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
              <Timer className="h-4 w-4 text-foreground" />
              6-8 week runway
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
              <Sparkles className="h-4 w-4 text-foreground" />
              Premium enablement
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,#9ca3af,transparent_70%)] blur-2xl" />
          <Card className="relative overflow-hidden border-border/70 bg-card/80 p-8 shadow-depth">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Launch status</p>
                <h3 className="mt-2 text-xl font-semibold">Migration command view</h3>
              </div>
              <Badge variant="glow">On track</Badge>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Sandbox build', value: 'Complete', width: '100%' },
                { label: 'Data validation', value: '86%', width: '86%' },
                { label: 'Team enablement', value: '72%', width: '72%' }
              ].map(item => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/80 p-4">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>{item.label}</span>
                    <span className="text-muted-foreground">{item.value}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
