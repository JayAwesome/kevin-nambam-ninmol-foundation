import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  aboutStory,
  coreValues,
  governanceStatement,
  leadershipTeam,
  visionMission,
} from '../siteData';

function AboutPage() {
  const { t } = useLanguage();
  usePageTitle(t('aboutPage.title'));

  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Our story, identity, and commitment."
        subtitle="A focused look at why the foundation exists and how it is led."
        image="/media/founder-national.jpeg"
      />

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="Story"
              title="A personal journey transformed into public service."
              text={aboutStory[0]}
            />
            <div className="stacked-copy">
              {aboutStory.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="about-story-quote">
              <p>"Your beginning does not determine your end."</p>
            </blockquote>
          </div>

          <div className="split-panel-media">
            <img
              src="/media/founder-action.jpeg"
              alt="Founder Kevin training on a basketball court"
              className="media-focus-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container dual-card-grid">
          <article className="info-panel">
            <p className="program-tag">Vision</p>
            <h2>{visionMission.vision}</h2>
          </article>
          <article className="info-panel">
            <p className="program-tag">Mission</p>
            <h2>{visionMission.mission}</h2>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Core Values"
            title="The standards that guide the work."
            text="These values shape how the foundation serves communities, partners, donors, and young people."
            centered
          />
          <div className="values-grid">
            {coreValues.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Leadership"
            title="Led by lived experience and supported by a growing team."
            text="The foundation is structured around program delivery, partnership building, and responsible stewardship."
            centered
            ctaLabel="View Governance"
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

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Governance"
            title="Accountability is part of the foundation’s growth."
            text="The organization continues to strengthen oversight, documentation, reporting, and safeguarding practices."
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

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>See how this mission becomes practical work.</h2>
            <p>Explore the program areas that translate the foundation’s identity into action.</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/programs" className="button button-accent">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
