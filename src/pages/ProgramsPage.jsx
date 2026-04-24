import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { donorProgramCategories } from '../siteData';

function ProgramsPage() {
  const { t } = useLanguage();
  usePageTitle(t('programsPage.title'));

  return (
    <main>
      <PageHero
        eyebrow={t('programsPage.heroEyebrow')}
        title={t('programsPage.heroTitle')}
        subtitle={t('programsPage.heroSubtitle')}
        image="/media/hero-court.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('programsPage.introEyebrow')}
            title={t('programsPage.introTitle')}
            description={t('programsPage.introText')}
            centered
            ctaLabel={t('programsPage.seeImpact')}
            ctaTo="/impact"
          />
          <div className="program-category-stack">
            {donorProgramCategories.map((program) => (
              <section key={program.slug} className="program-category-panel">
                <div className="program-category-heading">
                  <p className="program-tag">{t('programsPage.categoryTag')}</p>
                  <h2>{program.title}</h2>
                </div>

                <article className="program-portfolio-card program-portfolio-card-wide">
                  <div className="program-portfolio-media">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="program-portfolio-body">
                    <div className="program-detail-block">
                      <h4>{t('programsPage.purpose')}</h4>
                      <p>{program.purpose}</p>
                    </div>

                    <div className="program-detail-block">
                      <h4>{t('programsPage.activities')}</h4>
                      <ul className="program-bullet-list">
                        {program.activities.map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="program-detail-block">
                      <h4>{t('programsPage.expectedImpact')}</h4>
                      <ul className="program-bullet-list">
                        {program.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">{t('programsPage.nextEyebrow')}</p>
            <h2>{t('programsPage.nextTitle')}</h2>
            <p>{t('programsPage.nextText')}</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/impact" className="button button-accent">
              {t('programsPage.viewImpact')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProgramsPage;
