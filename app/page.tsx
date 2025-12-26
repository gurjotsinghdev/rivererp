import Nav from './components/Nav';
import Hero from './components/Hero';
import IndustriesGrid from './components/IndustriesGrid';
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
  faqs,
  logos,
  switchReasons,
  riskPoints
} from './data/site';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          title={hero.title}
          copy={hero.copy}
          tagline={hero.tagline}
          ctaLabel={hero.ctaLabel}
          ctaHref={calendlyUrl}
        />

        <LogoSlider logos={logos} />

        <AboutSection
          title="ERPNext delivery for teams that need a careful switch"
          copy={aboutCopy}
          items={aboutFeatures}
          reasons={switchReasons}
        />

        <section className="section panel-section risk-section">
          <h2>Risk reduction, spelled out</h2>
          <p>
            We know switching ERPs is scary. Here is exactly how we lower risk before and after go-live.
          </p>
          <ul className="risk-list">
            {riskPoints.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a className="cta" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            See how we move your data safely
          </a>
        </section>

        <IndustriesGrid
          id="industries"
          title="Industries"
          copy="Plugin-ready accelerators for every domain."
          items={industriesList.map(title => ({ title, description: industriesCopy }))}
          panel
        />

        {/* <TestimonialsGrid quotes={testimonials} copy={testimonialsCopy} /> */}

        {/* <PricingCards plans={plans} /> */}

        <FAQList items={faqs} />

        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
