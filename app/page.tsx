import Nav from './components/Nav';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import PricingCards from './components/PricingCards';
import TestimonialsGrid from './components/TestimonialsGrid';
import FAQList from './components/FAQList';
import CTA from './components/CTA';
import LogoSlider from './components/LogoSlider';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import {
  calendlyUrl,
  hero,
  aboutFeatures,
  aboutCopy,
  industriesList,
  industriesCopy,
  plans,
  testimonials,
  testimonialsCopy,
  faqs,
  logos
} from './data/site';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={hero.tag}
          title={hero.title}
          copy={hero.copy}
          tagline={hero.tagline}
          ctaLabel={hero.ctaLabel}
          ctaHref={calendlyUrl}
        />

        <LogoSlider logos={logos} />

        <AboutSection title="End-to-end ERP delivery" copy={aboutCopy} items={aboutFeatures} />

        <FeatureGrid
          id="industries"
          title="Industries"
          copy="Plugin-ready accelerators for every domain."
          items={industriesList.map(title => ({ title, description: industriesCopy }))}
          panel
        />

        <TestimonialsGrid quotes={testimonials} copy={testimonialsCopy} />

        <PricingCards plans={plans} />

        <FAQList items={faqs} />

        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
