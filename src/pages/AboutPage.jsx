import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  aboutStory,
  foundationGoals,
  foundationObjectives,
  founderMessage,
  leadershipTeam,
  visionMission,
} from '../siteData';

function AboutPage() {
  const { t } = useLanguage();
  usePageTitle(t('aboutPage.title'));

  return (
    <main>
      <PageHero
        eyebrow={t('aboutPage.heroEyebrow')}
        title={t('aboutPage.heroTitle')}
        subtitle={t('aboutPage.heroSubtitle')}
        image="/media/founder-national.jpeg"
      />

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow={t('aboutPage.storyEyebrow')}
              title={t('aboutPage.storyTitle')}
              text={aboutStory[0]}
            />
            <div className="stacked-copy">
              {aboutStory.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="about-story-quote">
              <p>"{t('aboutPage.quote')}"</p>
            </blockquote>
          </div>

          <div className="split-panel-media">
            <img
              src="/media/founder-action.jpeg"
              alt="Founder training on a basketball court"
              className="media-focus-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow={t('aboutPage.missionEyebrow')}
            title={t('aboutPage.missionTitle')}
            text={t('aboutPage.missionText')}
            centered
            ctaLabel={t('aboutPage.readPrograms')}
            ctaTo="/programs"
          />
          <article className="mission-highlight-panel">
            <p>{visionMission.mission}</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('aboutPage.goalsEyebrow')}
            title={t('aboutPage.goalsTitle')}
            text={t('aboutPage.goalsText')}
            centered
          />
          <div className="values-grid">
            {foundationGoals.map((goal, index) => (
              <article key={goal.title} className="value-card goal-card">
                <span className="goal-icon" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow={t('aboutPage.objectivesEyebrow')}
            title={t('aboutPage.objectivesTitle')}
            text={t('aboutPage.objectivesText')}
          />
          <div className="objectives-panel">
            <ol className="objectives-list">
              {foundationObjectives.map((objective, index) => (
                <li key={objective} className="objective-item">
                  <span className="objective-icon" aria-hidden="true">
                    {index + 1}
                  </span>
                  <p>{objective}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container dual-card-grid">
          <article className="info-panel">
            <p className="program-tag">{t('aboutPage.visionTag')}</p>
            <h2>{visionMission.vision}</h2>
          </article>
          <article className="info-panel">
            <p className="program-tag">{t('aboutPage.founderMessageTag')}</p>
            <p className="detail-copy">{founderMessage}</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('aboutPage.leadershipEyebrow')}
            title={t('aboutPage.leadershipTitle')}
            text={t('aboutPage.leadershipText')}
            centered
            ctaLabel={t('aboutPage.readLeadership')}
            ctaTo="/leadership-governance"
          />
          <div className="team-grid">
            {leadershipTeam.map((person) => (
              <article key={person.name} className="team-card">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
                <div className="team-card-body">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">{t('aboutPage.nextEyebrow')}</p>
            <h2>{t('aboutPage.nextTitle')}</h2>
            <p>{t('aboutPage.nextText')}</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/programs" className="button button-accent">
              {t('aboutPage.viewPrograms')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
