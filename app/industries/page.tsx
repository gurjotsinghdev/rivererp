import Nav from '../components/Nav';
import Hero from '../components/Hero';
import IndustriesGrid from '../components/IndustriesGrid';
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
        <IndustriesGrid
          title="Pre-built industry accelerators"
          copy="Preview in a sandbox, adjust with us, then promote only after it fits your numbers."
          items={industryCards}
        />
        <CTA label="Book Demo" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
