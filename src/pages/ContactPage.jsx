import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import usePageTitle from '../hooks/usePageTitle';
import { siteContact } from '../siteData';

function ContactPage() {
  usePageTitle('Contact');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact form integration coming soon');
    window.alert('Contact form integration coming soon.');
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s connect."
        subtitle="Make it easy for supporters, partners, media, and institutions to reach the foundation."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container contact-grid">
          <div className="contact-details">
            <h2>Get in touch</h2>
            <p>Email: {siteContact.email}</p>
            <p>Phone: {siteContact.phone}</p>
            <p>Office: {siteContact.address}</p>
            <a href={siteContact.whatsapp} className="button button-accent" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>

          <form className="event-form-panel" onSubmit={handleSubmit}>
            <p className="program-tag">Contact Form</p>
            <h2>Send a message</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your message" />
            <button type="submit" className="button button-accent">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <div className="map-panel">
            <iframe
              src={siteContact.mapEmbed}
              title="Foundation office location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ContactPage;
