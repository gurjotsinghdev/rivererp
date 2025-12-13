import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { aboutHero, aboutFeatures, aboutCopy, calendlyUrl } from '../data/site';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={aboutHero.tag}
          title={aboutHero.title}
          copy={aboutHero.copy}
          ctaLabel={aboutHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <FeatureGrid title="What we handle" copy={aboutCopy} items={aboutFeatures} />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
