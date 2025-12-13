import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { calendlyUrl, industriesHero, industriesList, industriesCopy } from '../data/site';

const industryCards = industriesList.map(title => ({ title, description: industriesCopy }));

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={industriesHero.tag}
          title={industriesHero.title}
          copy={industriesHero.copy}
          ctaLabel={industriesHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <FeatureGrid
          title="Pre-built industry accelerators"
          copy="Switch on, preview in demo, then promote."
          items={industryCards}
        />
        <CTA label="Book Consultation" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
