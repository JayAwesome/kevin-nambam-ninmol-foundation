import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { donorProgramCategories } from '../siteData';

function ProgramsPage() {
  usePageTitle('Programs');

  return (
    <main>
      <PageHero
        eyebrow="Programs"
        title="Programs designed to create clear, practical impact for young people."
        subtitle="This page explains what the foundation does, how each program works, and what support makes possible."
        image="/media/hero-court.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Program Areas"
            title="Our work is structured around three clear areas of support."
            description="Each program below shows its purpose, key activities, expected impact, and how donors can support it."
            centered
            ctaLabel="Read more on Impact"
            ctaTo="/impact"
          />
          <div className="program-category-stack">
            {donorProgramCategories.map((program) => (
              <section key={program.slug} className="program-category-panel">
                <div className="program-category-heading">
                  <p className="program-tag">Program Category</p>
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
                      <h4>Purpose</h4>
                      <p>{program.purpose}</p>
                    </div>

                    <div className="program-detail-block">
                      <h4>Key Activities</h4>
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

                    <div className="program-support-panel">
                      <h4>How You Can Support This Program</h4>
                      <ul className="program-bullet-list">
                        {program.support.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="program-support-actions">
                        <Link to="/donate" className="button button-accent">
                          Support This Program
                        </Link>
                        <Link to="/get-involved" className="button button-ghost">
                          Partner or Volunteer
                        </Link>
                      </div>
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
            <h2>See the evidence behind the work</h2>
            <p>
              Visit the Impact page to see measurable reach, case stories, activity visuals, and
              reporting placeholders that show how the work is being delivered.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/impact" className="button button-accent">
              View Impact
            </Link>
            <Link to="/donate" className="button button-ghost">
              Support the Work
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ProgramsPage;
