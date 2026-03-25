import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { boardOfTrustees, governanceStatement, managementProfiles } from '../siteData';

function LeadershipGovernancePage() {
  usePageTitle('Leadership & Governance');

  return (
    <main>
      <PageHero
        eyebrow="Leadership & Governance"
        title="Leadership and governance structured for trust and accountability."
        subtitle="This page presents the foundation's oversight and management structure in a clear, professional format for donors, partners, and institutions."
        image="/media/founder-national.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Board of Trustees"
            title="Board of Trustees"
            text="The Board of Trustees provides oversight, stewardship, and high-level guidance to help ensure the foundation remains mission-aligned and responsibly governed."
            centered
          />
          <div className="team-grid">
            {boardOfTrustees.map((person) => (
              <article key={person.name} className="team-card governance-card">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
                <div className="team-card-body">
                  <p className="program-tag">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Management Team"
            title="Management team"
            text="The management structure supports implementation, field coordination, communications, and program delivery across the foundation's work."
            centered
          />
          <div className="team-grid">
            {managementProfiles.map((person) => (
              <article key={person.name} className="team-card governance-card">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
                <div className="team-card-body">
                  <p className="program-tag">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Governance Statement"
            title="How decisions are made"
            text="The foundation is committed to decision-making that reflects mission alignment, accountability, and transparent stewardship."
          />
          <div className="objectives-panel">
            <ol className="objectives-list">
              {governanceStatement.map((item, index) => (
                <li key={item} className="objective-item">
                  <span className="objective-icon" aria-hidden="true">
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default LeadershipGovernancePage;
