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
    const payload = {
      name: sanitizePlainText(formData.get('name'), 100),
      email: sanitizeEmail(formData.get('email')),
      phone: sanitizePlainText(formData.get('phone'), 30),
      subject: sanitizePlainText(formData.get('subject'), 140),
      message: sanitizePlainText(formData.get('message'), 1000),
    };
    const validation = validatePublicForm({
      values: payload,
      honeypot: sanitizePlainText(formData.get('website'), 100),
      startedAt: formStartedAt,
      formKey: 'contact',
    });

    if (!validation.ok) {
      window.alert(validation.reason);
      return;
    }

    if (!payload.name || !isValidEmail(payload.email) || !payload.message) {
      window.alert('Please enter your name, a valid email address, and a message.');
      return;
    }

    console.log('Contact form validated');
    form.reset();
    setFormStartedAt(Date.now());
    window.alert(t('contactPage.thankYou'));
  };

  return (
    <main>
      <PageHero
        eyebrow={t('contactPage.heroEyebrow')}
        title={t('contactPage.heroTitle')}
        subtitle={t('contactPage.heroSubtitle')}
        image="/media/founder-speaking.jpeg"
        imageAlt="Founder Kevin speaking with young people during a development session"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('contactPage.introEyebrow')}
            title={t('contactPage.introTitle')}
            text={t('contactPage.introText')}
            ctaLabel={t('contactPage.readAbout')}
            ctaTo="/about"
          />

          <div className="contact-channel-grid">
            <article className="info-panel contact-channel-card">
              <p className="program-tag">{t('contactPage.officeTag')}</p>
              <h3>{t('contactPage.officeTitle')}</h3>
              <p>{siteContact.address}</p>
              <p className="micro-note">{t('contactPage.officeNote')}</p>
            </article>

            <article className="info-panel contact-channel-card">
              <p className="program-tag">{t('contactPage.phoneTag')}</p>
              <h3>{t('contactPage.phoneTitle')}</h3>
              <p>
                <a href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}>{siteContact.phone}</a>
              </p>
              <p>
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </p>
              <p className="micro-note">{t('contactPage.phoneNote')}</p>
            </article>

            <article className="info-panel contact-channel-card contact-whatsapp-card">
              <p className="program-tag">{t('contactPage.whatsappTag')}</p>
              <h3>{t('contactPage.whatsappTitle')}</h3>
              <p>{t('contactPage.whatsappText')}</p>
              <a
                href={siteContact.whatsapp}
                className="button button-accent"
                target="_blank"
                rel="noreferrer"
              >
                {t('contactPage.startWhatsapp')}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container contact-page-grid">
          <div className="contact-details-panel">
            <SectionIntro
              eyebrow={t('contactPage.formEyebrow')}
              title={t('contactPage.formTitle')}
              text={t('contactPage.formText')}
              ctaLabel={t('contactPage.readInvolved')}
              ctaTo="/get-involved"
            />

            <form className="event-form-panel contact-form-panel" onSubmit={handleSubmit}>
              <label className="form-honeypot">
                Website
                <input type="text" name="website" tabIndex="-1" autoComplete="off" />
              </label>
              <input
                type="text"
                name="name"
                placeholder={t('getInvolvedPage.fullName')}
                aria-label={t('getInvolvedPage.fullName')}
                autoComplete="name"
                maxLength="100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('getInvolvedPage.email')}
                aria-label={t('getInvolvedPage.email')}
                autoComplete="email"
                maxLength="120"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('getInvolvedPage.phone')}
                aria-label={t('getInvolvedPage.phone')}
                autoComplete="tel"
                inputMode="tel"
                maxLength="30"
              />
              <input
                type="text"
                name="subject"
                placeholder={t('contactPage.subject')}
                aria-label={t('contactPage.subject')}
                maxLength="140"
              />
              <textarea
                name="message"
                rows="6"
                placeholder={t('contactPage.yourMessage')}
                aria-label={t('contactPage.yourMessage')}
                maxLength="1000"
                required
              />
              <button type="submit" className="button button-accent">
                {t('contactPage.sendMessage')}
              </button>
              <p className="micro-note">{t('contactPage.formNote')}</p>
            </form>
          </div>

          <div className="contact-aside-stack">
            <article className="info-panel">
              <p className="program-tag">{t('contactPage.officeInfoTag')}</p>
              <h2>{t('contactPage.officeInfoTitle')}</h2>
              <p>{siteContact.address}</p>
              <p>
                Phone: <a href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}>{siteContact.phone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </p>
            </article>

            <article className="info-panel">
              <p className="program-tag">{t('contactPage.responseTag')}</p>
              <h2>{t('contactPage.responseTitle')}</h2>
              <p>{t('contactPage.responseText')}</p>
              <a
                href={siteContact.whatsapp}
                className="button button-ghost"
                target="_blank"
                rel="noreferrer"
              >
                {t('contactPage.chatWhatsapp')}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('contactPage.findUsEyebrow')}
            title={t('contactPage.findUsTitle')}
            text={t('contactPage.findUsText')}
          />
          <div className="map-panel contact-map-panel">
            <iframe
              src={siteContact.mapEmbed}
              title={t('contactPage.mapTitle')}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ContactPage;
