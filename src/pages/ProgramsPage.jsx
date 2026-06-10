import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ResponsiveImage from '../components/ResponsiveImage';
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
        image="/media/youth-court-training-wide.jpeg"
        imageAlt="Young basketball players receiving coaching on an outdoor court"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Programs"
            title="What the foundation does."
            description="Each program area has a clear purpose, practical activities, and measurable expected outcomes."
            centered
            ctaLabel="See Impact"
            ctaTo="/impact"
          />
          <div className="program-category-stack">
            {donorProgramCategories.map((program, index) => (
              <section key={program.slug} className="program-category-panel">
                <div className="program-category-heading">
                  <p className="program-tag">Program Area {index + 1}</p>
                  <h2>{program.title}</h2>
                </div>

                <article className="program-portfolio-card program-portfolio-card-wide">
                  <div className="program-portfolio-media">
                    <ResponsiveImage
                      src={program.image}
                      alt={program.alt ?? program.title}
                      widths={[640, 960, 1280]}
                      sizes="(max-width: 1080px) 100vw, 50vw"
                    />
                  </div>

                  <div className="program-portfolio-body">
                    <div className="program-detail-block">
                      <h4>Purpose</h4>
                      <p>{program.purpose}</p>
                    </div>

                    <div className="program-detail-block">
                      <h4>Activities</h4>
                      <ul className="program-bullet-list">
                        {program.activities.map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="program-detail-block">
                      <h4>Expected Impact</h4>
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
            <p className="eyebrow">Next Step</p>
            <h2>See the evidence behind the work.</h2>
            <p>Visit the Impact page for statistics, reports, testimonials, and gallery highlights.</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/impact" className="button button-accent">
              View Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProgramsPage;
