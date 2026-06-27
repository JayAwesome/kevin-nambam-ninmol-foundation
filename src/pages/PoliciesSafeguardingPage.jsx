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
        eyebrow="Policies"
        title="Policies and safeguarding."
        subtitle="The foundation is committed to safe, ethical, and accountable service with children and communities."
        image="/media/humanitarian-relief-supplies.jpeg"
        imageAlt="Relief supplies arranged during a community outreach visit"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Safeguarding"
            title="Practical standards for responsible service."
            text="These summaries help donors, partners, volunteers, and families understand the foundation's operating commitments."
            centered
          />
          <div className="values-grid">
            {policySections.map((section) => (
              <article key={section.title} className="value-card">
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