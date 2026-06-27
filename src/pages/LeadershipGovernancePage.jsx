import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import ResponsiveImage from '../components/ResponsiveImage';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { boardOfTrustees, governanceStatement, managementProfiles } from '../siteData';

function LeadershipGovernancePage() {
  const { t } = useLanguage();
  usePageTitle(t('leadershipPage.title'));
  const localizedBoard = t('content.boardOfTrustees') || [];
  const localizedManagement = t('content.managementProfiles') || [];

  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title="Leadership and governance."
        subtitle="A professional view of the people and accountability structures supporting the foundation."
        image="/media/founder-giving-speech.jpeg"
        imageAlt="Foundation leadership moment during a public speaking engagement"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Board of Trustees"
            title="Oversight for responsible growth."
            text="The board provides guidance, accountability, and stewardship as the foundation grows."
            centered
          />
          <div className="team-grid">
            {boardOfTrustees.map((person, index) => (
              <article key={person.name} className="team-card">
                <ResponsiveImage src={person.image} alt={person.alt ?? person.name} className="team-card-image" />
                <div className="team-card-body">
                  <p className="program-tag">{localizedBoard[index]?.role ?? person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{localizedBoard[index]?.bio ?? person.bio}</p>
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
            title="Program leadership and implementation."
            text="The management and volunteer structure supports daily coordination, delivery, and community engagement."
            centered
          />
          <div className="team-grid">
            {managementProfiles.map((person, index) => (
              <article key={person.name} className="team-card">
                <ResponsiveImage src={person.image} alt={person.alt ?? person.name} className="team-card-image" />
                <div className="team-card-body">
                  <p className="program-tag">{localizedManagement[index]?.role ?? person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{localizedManagement[index]?.bio ?? person.bio}</p>
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
            title="Decisions are guided by accountability and mission alignment."
            text="The foundation continues to strengthen governance, documentation, and responsible reporting practices."
          />
          <div className="objectives-panel">
            <ol className="objectives-list">
              {governanceStatement.map((item, index) => (
                <li key={item} className="objective-item">
                  <span className="objective-icon" aria-hidden="true">{index + 1}</span>
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