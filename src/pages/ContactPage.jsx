import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { siteContact } from '../siteData';

function ContactPage() {
  const { t } = useLanguage();
  usePageTitle(t('contactPage.title'));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact form integration coming soon');
    window.alert(t('contactPage.thankYou'));
  };

  return (
    <main>
      <PageHero
        eyebrow={t('contactPage.heroEyebrow')}
        title={t('contactPage.heroTitle')}
        subtitle={t('contactPage.heroSubtitle')}
        image="/media/outreach-school.jpeg"
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
              <input type="text" placeholder={t('getInvolvedPage.fullName')} aria-label={t('getInvolvedPage.fullName')} />
              <input type="email" placeholder={t('getInvolvedPage.email')} aria-label={t('getInvolvedPage.email')} />
              <input type="tel" placeholder={t('getInvolvedPage.phone')} aria-label={t('getInvolvedPage.phone')} />
              <input type="text" placeholder={t('contactPage.subject')} aria-label={t('contactPage.subject')} />
              <textarea rows="6" placeholder={t('contactPage.yourMessage')} aria-label={t('contactPage.yourMessage')} />
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
