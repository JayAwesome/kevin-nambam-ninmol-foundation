import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  internshipOpportunities,
  involvementBenefits,
  sponsorOptions,
} from '../siteData';

function GetInvolvedPage() {
  const { t } = useLanguage();
  usePageTitle(t('getInvolvedPage.title'));

  const showComingSoon = (message, payload) => {
    console.log(message, payload);
    window.alert(message);
  };

  return (
    <main>
      <PageHero
        eyebrow={t('getInvolvedPage.heroEyebrow')}
        title={t('getInvolvedPage.heroTitle')}
        subtitle={t('getInvolvedPage.heroSubtitle')}
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('getInvolvedPage.whyEyebrow')}
            title={t('getInvolvedPage.whyTitle')}
            text={t('getInvolvedPage.whyText')}
            centered
            ctaLabel={t('getInvolvedPage.readPrograms')}
            ctaTo="/programs"
          />
          <div className="values-grid">
            {involvementBenefits.map((item) => (
              <article key={item} className="value-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container contact-page-grid">
          <div>
            <SectionIntro
              eyebrow={t('getInvolvedPage.volunteerEyebrow')}
              title={t('getInvolvedPage.volunteerTitle')}
              text={t('getInvolvedPage.volunteerText')}
              ctaLabel={t('getInvolvedPage.readImpact')}
              ctaTo="/impact"
            />
            <form
              className="event-form-panel contact-form-panel"
              onSubmit={(event) => {
                event.preventDefault();
                showComingSoon(t('getInvolvedPage.volunteerAlert'));
              }}
            >
              <input type="text" placeholder={t('getInvolvedPage.fullName')} aria-label={t('getInvolvedPage.fullName')} />
              <input type="email" placeholder={t('getInvolvedPage.email')} aria-label={t('getInvolvedPage.email')} />
              <input type="tel" placeholder={t('getInvolvedPage.phone')} aria-label={t('getInvolvedPage.phone')} />
              <input type="text" placeholder={t('getInvolvedPage.interest')} aria-label={t('getInvolvedPage.interest')} />
              <textarea
                rows="5"
                placeholder={t('getInvolvedPage.helpMessage')}
                aria-label={t('getInvolvedPage.helpMessage')}
              />
              <button type="submit" className="button button-accent">
                {t('getInvolvedPage.submitVolunteer')}
              </button>
            </form>
          </div>

          <div className="contact-aside-stack">
            <article className="info-panel">
              <p className="program-tag">{t('getInvolvedPage.benefitsTag')}</p>
              <h2>{t('getInvolvedPage.benefitsTitle')}</h2>
              <ul className="opportunity-list">
                <li>{t('getInvolvedPage.benefit1')}</li>
                <li>{t('getInvolvedPage.benefit2')}</li>
                <li>{t('getInvolvedPage.benefit3')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container action-grid">
          <article className="action-card">
            <p className="program-tag">{t('getInvolvedPage.partnerTag')}</p>
            <h2>{t('getInvolvedPage.partnerTitle')}</h2>
            <p>{t('getInvolvedPage.partnerText')}</p>
            <button
              type="button"
              className="button button-accent"
              onClick={() => showComingSoon(t('getInvolvedPage.partnershipAlert'))}
            >
              {t('getInvolvedPage.explorePartnership')}
            </button>
          </article>

          <article className="action-card">
            <p className="program-tag">{t('getInvolvedPage.sponsorTag')}</p>
            <h2>{t('getInvolvedPage.sponsorTitle')}</h2>
            <ul className="opportunity-list">
              {sponsorOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="button button-ghost"
              onClick={() => showComingSoon(t('getInvolvedPage.sponsorAlert'))}
            >
              {t('getInvolvedPage.becomeSponsor')}
            </button>
          </article>

          <article className="action-card">
            <p className="program-tag">{t('getInvolvedPage.internshipTag')}</p>
            <h2>{t('getInvolvedPage.internshipTitle')}</h2>
            <ul className="opportunity-list">
              {internshipOpportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="button button-accent"
              onClick={() => showComingSoon(t('getInvolvedPage.internshipAlert'))}
            >
              {t('getInvolvedPage.applyInternship')}
            </button>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default GetInvolvedPage;
