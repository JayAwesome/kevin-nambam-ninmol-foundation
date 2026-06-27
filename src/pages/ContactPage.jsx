import { useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { siteContact } from '../siteData';
import {
  isValidEmail,
  sanitizeEmail,
  sanitizePlainText,
  validatePublicForm,
} from '../utils/formSecurity';

function ContactPage() {
  const { t } = useLanguage();
  usePageTitle(t('contactPage.title'));
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: sanitizePlainText(formData.get('name'), 120),
      email: sanitizeEmail(formData.get('email')),
      phone: sanitizePlainText(formData.get('phone'), 40),
      subject: sanitizePlainText(formData.get('subject'), 140),
      message: sanitizePlainText(formData.get('message'), 1200),
    };

    if (!values.name || !isValidEmail(values.email) || !values.subject || !values.message) {
      window.alert('Please enter your name, a valid email address, a subject, and your message.');
      return;
    }

    const validation = validatePublicForm({
      values,
      honeypot: sanitizePlainText(formData.get('website'), 80),
      startedAt: formStartedAt,
      formKey: 'contact-form',
    });

    if (!validation.ok) {
      window.alert(validation.reason);
      return;
    }

    console.log('Contact form submission prepared', values);
    window.alert('Thank you. Please send your message to the foundation email while online form delivery is being connected.');
    form.reset();
    setFormStartedAt(Date.now());
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Reach the foundation."
        subtitle="Use the contact details below to connect with the Kevin Nambam Ninmol Foundation team."
        image="/media/founder-speaking-highlight.jpeg"
        imageAlt="Kevin Nambam Ninmol speaking during a foundation activity"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Contact Information"
            title="The organization is reachable and accountable."
            text="For donations, partnerships, volunteering, or program enquiries, contact the foundation directly."
          />
          <div className="contact-card-grid">
            <article className="info-panel">
              <p className="program-tag">Office</p>
              <h3>Physical Address</h3>
              <p>{siteContact.address}</p>
            </article>
            <article className="info-panel">
              <p className="program-tag">Phone and Email</p>
              <h3>Direct Contact</h3>
              <p>
                Phone: <a href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}>{siteContact.phone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </p>
            </article>
            <article className="info-panel">
              <p className="program-tag">WhatsApp</p>
              <h3>Instant Message</h3>
              <p>Use WhatsApp for quick enquiries and follow-up conversations.</p>
              <a href={siteContact.whatsapp} className="button button-accent" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container contact-grid">
          <div className="form-panel">
            <p className="program-tag">Send a Message</p>
            <h2>Contact form</h2>
            <form onSubmit={handleSubmit} className="event-form-panel">
              <label className="visually-hidden">
                Leave this field empty
                <input type="text" name="website" tabIndex="-1" autoComplete="off" />
              </label>
              <label>
                Full name
                <input name="name" type="text" autoComplete="name" required aria-label="Full name" />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" required aria-label="Email address" />
              </label>
              <label>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" aria-label="Phone number" />
              </label>
              <label>
                Subject
                <input name="subject" type="text" required aria-label="Subject" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" required aria-label="How can we help?" />
              </label>
              <button type="submit" className="button button-accent">
                Send Message
              </button>
              <p className="micro-note">For urgent enquiries, use the email or WhatsApp contact above.</p>
            </form>
          </div>

          <aside className="map-panel" aria-label="Office location map">
            <iframe
              title="Kevin Nambam Ninmol Foundation office location"
              src={siteContact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ContactPage;
