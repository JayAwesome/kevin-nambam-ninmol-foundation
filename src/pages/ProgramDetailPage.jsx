import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import usePageTitle from '../hooks/usePageTitle';
import { programs } from '../siteData';

function ProgramDetailPage() {
  const { slug } = useParams();
  const program = programs.find((item) => item.slug === slug);

  usePageTitle(program ? program.title : 'Program');

  if (!program) {
    return (
      <main>
        <section className="section-space">
          <div className="container empty-state">
            <h1>Program not found</h1>
            <Link to="/programs" className="button button-accent">
              Back to Programs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Program Detail"
        title={program.title}
        subtitle={program.category}
        image={program.image}
      />

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <p className="program-tag">Overview</p>
            <h2>{program.summary}</h2>
            <p className="detail-copy">{program.description}</p>
            <Link to="/get-involved" className="button button-accent">
              Support This Program
            </Link>
          </div>
          <div className="split-panel-media">
            <img src={program.image} alt={program.title} />
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <h2 className="section-title-simple">Program impact</h2>
          <div className="impact-points-grid">
            {program.impact.map((point) => (
              <article key={point} className="impact-point-card">
                <span className="objective-marker" />
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ProgramDetailPage;
