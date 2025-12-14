import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { calendlyUrl, casesHero, cases, casesCopy } from '../data/site';

const caseCards = cases.map(item => ({ title: item.title, description: item.detail }));

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero
          tag={casesHero.tag}
          title={casesHero.title}
          copy={casesHero.copy}
          ctaLabel={casesHero.ctaLabel}
          ctaHref={calendlyUrl}
        />
        <FeatureGrid title="Recent work" copy={casesCopy} items={caseCards} />
        <CTA label="Review a similar migration" href={calendlyUrl} />
      </main>
      <Footer />
    </>
  );
}
