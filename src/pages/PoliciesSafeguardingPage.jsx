import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { policySections } from '../siteData';

function PoliciesSafeguardingPage() {
  const { t } = useLanguage();
  usePageTitle(t('policiesPage.title'));

  return (
    <main>
      <PageHero
        eyebrow={t('policiesPage.heroEyebrow')}
        title={t('policiesPage.heroTitle')}
        subtitle={t('policiesPage.heroSubtitle')}
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('policiesPage.introEyebrow')}
            title={t('policiesPage.introTitle')}
            text={t('policiesPage.introText')}
            centered
          />
          <div className="values-grid">
            {policySections.map((section) => (
              <article key={section.title} className="value-card policy-card">
                <h3>{section.title}</h3>
                <p>{section.summary}</p>
                <ul className="program-bullet-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container dual-card-grid">
          <article className="info-panel">
            <p className="program-tag">{t('policiesPage.assuranceTag')}</p>
            <h2>{t('policiesPage.assuranceTitle')}</h2>
            <p className="detail-copy">{t('policiesPage.assuranceText')}</p>
          </article>
          <article className="info-panel">
            <p className="program-tag">{t('policiesPage.governanceTag')}</p>
            <p className="detail-copy">{t('policiesPage.governanceText')}</p>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default PoliciesSafeguardingPage;
