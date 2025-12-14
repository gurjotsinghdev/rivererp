import Nav from '../components/Nav';
import Hero from '../components/Hero';
import TestimonialsGrid from '../components/TestimonialsGrid';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { calendlyUrl, testimonialsHero, testimonialsPage, testimonialsCopy } from '../data/site';

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={testimonialsHero.tag}
          title={testimonialsHero.title}
          copy={testimonialsHero.copy}
          ctaLabel={testimonialsHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <TestimonialsGrid quotes={testimonialsPage} copy={testimonialsCopy} />
        <CTA label="Talk through your migration risks" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
