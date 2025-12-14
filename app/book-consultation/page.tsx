import Script from 'next/script';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function BookConsultationPage() {
  return (
    <>
      <Nav />
      <main>
       

        <section id="calendly-inline" className="calendly-section">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/rivererp/30min"
            style={{ minWidth: '320px', height: '800px' }}
          />
        </section>

        <CTA label="Book Consultation" href="#calendly-inline" />
      </main>
      <Footer />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
