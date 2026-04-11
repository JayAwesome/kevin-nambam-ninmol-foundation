import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { policySections } from '../siteData';

function PoliciesSafeguardingPage() {
  usePageTitle('Policies & Safeguarding');

  return (
    <main>
      <PageHero
        eyebrow="Policies & Safeguarding"
        title="Policies and safeguarding standards that support trust."
        subtitle="A simple overview of the standards that guide safe and responsible work."
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Compliance Overview"
            title="Professional standards for responsible service"
            text="The foundation is committed to safe, respectful, and accountable practice."
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
            <p className="program-tag">Professional Assurance</p>
            <h2>Built to support trust</h2>
            <p className="detail-copy">
              These summaries reflect the foundation&apos;s commitment to safe engagement, ethical
              operations, and transparent stewardship.
            </p>
          </article>
          <article className="info-panel">
            <p className="program-tag">Good Governance</p>
            <p className="detail-copy">
              Documentation, internal processes, and oversight practices will continue to be
              strengthened as the organization grows.
            </p>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default PoliciesSafeguardingPage;
