import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { programs } from '../siteData';

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
            eyebrow="Initiatives"
            title="A clear portfolio of programs helps partners and donors understand the mission."
            centered
          />
          <div className="program-list-grid">
            {programs.map((program) => (
              <article key={program.slug} className="feature-card">
                <img src={program.image} alt={program.title} loading="lazy" decoding="async" />
                <div className="feature-card-body">
                  <p className="program-tag">{program.category}</p>
                  <h3>{program.title}</h3>
                  <p>{program.summary}</p>
                  <Link to={`/programs/${program.slug}`} className="text-link">
                    View program page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ProgramsPage;
