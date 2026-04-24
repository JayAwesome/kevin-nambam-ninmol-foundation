import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { boardOfTrustees, governanceStatement, managementProfiles } from '../siteData';

function LeadershipGovernancePage() {
  const { t } = useLanguage();
  usePageTitle(t('leadershipPage.title'));
  const localizedBoard = t('content.boardOfTrustees');
  const localizedManagement = t('content.managementProfiles');
  const localizedGovernance = t('content.governanceStatement');

  return (
    <main>
      <PageHero
        eyebrow={t('leadershipPage.heroEyebrow')}
        title={t('leadershipPage.heroTitle')}
        subtitle={t('leadershipPage.heroSubtitle')}
        image="/media/founder-national.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('leadershipPage.boardEyebrow')}
            title={t('leadershipPage.boardTitle')}
            text={t('leadershipPage.boardText')}
            centered
          />
          <div className="team-grid">
            {boardOfTrustees.map((person, index) => (
              <article key={person.name} className="team-card governance-card">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
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
            eyebrow={t('leadershipPage.managementEyebrow')}
            title={t('leadershipPage.managementTitle')}
            text={t('leadershipPage.managementText')}
            centered
          />
          <div className="team-grid">
            {managementProfiles.map((person, index) => (
              <article key={person.name} className="team-card governance-card">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
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
            eyebrow={t('leadershipPage.governanceEyebrow')}
            title={t('leadershipPage.governanceTitle')}
            text={t('leadershipPage.governanceText')}
          />
          <div className="objectives-panel">
            <ol className="objectives-list">
              {localizedGovernance.map((item, index) => (
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
