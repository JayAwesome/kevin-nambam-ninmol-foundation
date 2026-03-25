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
        subtitle="This page outlines the foundation’s current policy commitments in a clear and reassuring format for donors, partners, institutions, and community stakeholders."
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Compliance Overview"
            title="Professional standards for responsible service"
            text="Kevin Nambam Ninmol Foundation is committed to operating with care, accountability, and respect for the dignity and safety of the young people and communities it serves."
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
            <h2>Built to meet donor and institutional expectations</h2>
            <p className="detail-copy">
              These policy summaries reflect the foundation’s commitment to safe engagement,
              ethical operations, transparent stewardship, and responsible handling of
              information as the organization continues to grow.
            </p>
          </article>
          <article className="info-panel">
            <p className="program-tag">Good Governance</p>
            <p className="detail-copy">
              The foundation intends to strengthen documentation, internal processes, and
              oversight practices so that programs remain compliant, community-centered, and
              accountable to supporters and beneficiaries alike.
            </p>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default PoliciesSafeguardingPage;
