import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { siteContact } from '../siteData';

function ContactPage() {
  usePageTitle('Contact');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact form integration coming soon');
    window.alert('Thank you for reaching out. Contact form integration is coming soon.');
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="We would love to hear from you."
        subtitle="Whether you want to partner, volunteer, donate, or learn more about the foundation, this page makes it easy to reach a real team."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Get In Touch"
            title="Simple, direct ways to reach the foundation."
            text="We welcome messages from supporters, partners, schools, media, and community members."
            ctaLabel="Read more About Us"
            ctaTo="/about"
          />

          <div className="contact-channel-grid">
            <article className="info-panel contact-channel-card">
              <p className="program-tag">Office Address</p>
              <h3>Visit or write to us</h3>
              <p>{siteContact.address}</p>
              <p className="micro-note">Office visits can be coordinated through phone, email, or WhatsApp.</p>
            </article>

            <article className="info-panel contact-channel-card">
              <p className="program-tag">Phone and Email</p>
              <h3>Speak with the team</h3>
              <p>
                <a href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}>{siteContact.phone}</a>
              </p>
              <p>
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </p>
              <p className="micro-note">For partnerships, sponsorships, and media enquiries, email is recommended.</p>
            </article>

            <article className="info-panel contact-channel-card contact-whatsapp-card">
              <p className="program-tag">WhatsApp</p>
              <h3>Chat with us directly</h3>
              <p>
                If WhatsApp is easier for you, send us a message and we will respond as soon as
                possible.
              </p>
              <a
                href={siteContact.whatsapp}
                className="button button-accent"
                target="_blank"
                rel="noreferrer"
              >
                Start WhatsApp Chat
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container contact-page-grid">
          <div className="contact-details-panel">
            <SectionIntro
              eyebrow="Contact Form"
              title="Send us a message."
              text="Use the form for enquiries, partnership requests, media questions, or general messages."
              ctaLabel="Read more on Get Involved"
              ctaTo="/get-involved"
            />

            <form className="event-form-panel contact-form-panel" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full name" aria-label="Full name" />
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <input type="tel" placeholder="Phone number" aria-label="Phone number" />
              <input type="text" placeholder="Subject" aria-label="Subject" />
              <textarea rows="6" placeholder="Your message" aria-label="Your message" />
              <button type="submit" className="button button-accent">
                Send Message
              </button>
              <p className="micro-note">
                This form is currently a placeholder and will be connected to the foundation&apos;s
                email workflow soon.
              </p>
            </form>
          </div>

          <div className="contact-aside-stack">
            <article className="info-panel">
              <p className="program-tag">Office Information</p>
              <h2>Contact details</h2>
              <p>{siteContact.address}</p>
              <p>
                Phone: <a href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}>{siteContact.phone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </p>
            </article>

            <article className="info-panel">
              <p className="program-tag">Response</p>
              <h2>We aim to respond clearly and promptly.</h2>
              <p>
                For partnership, sponsorship, and program-related enquiries, please include as much
                detail as possible so we can direct your message appropriately.
              </p>
              <a
                href={siteContact.whatsapp}
                className="button button-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Find Us"
            title="Location map"
            text="Use the map below as a placeholder reference for the foundation office."
          />
          <div className="map-panel contact-map-panel">
            <iframe
              src={siteContact.mapEmbed}
              title="Kevin Nambam Ninmol Foundation office location"
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
