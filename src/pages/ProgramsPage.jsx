import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { programCategories } from '../siteData';

function ProgramsPage() {
  usePageTitle('Programs');

  return (
    <main>
      <PageHero
        eyebrow="Programs"
        title="Programs designed for growth, courage, and long-term opportunity."
        subtitle="Each initiative responds to a real need and is built for practical, measurable impact."
        image="/media/hero-court.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Program Areas"
            title="Our programs are designed to meet practical needs while building confidence, opportunity, and long-term resilience."
            description="Each initiative is structured around a clear purpose, hands-on activities, and visible impact so that supporters can understand exactly how the foundation serves young people and communities."
            centered
          />
          <div className="program-category-stack">
            {programCategories.map((category) => (
              <section key={category.title} className="program-category-panel">
                <div className="program-category-heading">
                  <p className="program-tag">{category.title}</p>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                <div className="program-list-grid">
                  {category.programs.map((program) => (
                    <article key={program.slug} className="program-portfolio-card">
                      <div className="program-portfolio-media">
                        <img
                          src={program.image}
                          alt={program.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="program-portfolio-body">
                        <h3>{program.title}</h3>
                        <p className="program-summary">{program.summary}</p>

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
                          <h4>Impact</h4>
                          <ul className="program-bullet-list">
                            {program.impact.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <Link to={`/programs/${program.slug}`} className="text-link">
                          View program page
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ProgramsPage;
