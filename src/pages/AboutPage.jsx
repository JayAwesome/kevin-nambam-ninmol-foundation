import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ResponsiveImage from '../components/ResponsiveImage';
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

  const getLeadershipImageClass = (person) =>
    person.name === 'Kevin Nambam Ninmol'
      ? 'team-card-image team-card-image-founder'
      : 'team-card-image';

  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Our story, identity, and commitment."
        subtitle="A focused look at why the foundation exists and how it is led."
        image="/media/founder-national.jpeg"
        imageAlt="Kevin Nambam Ninmol represented in national basketball kit"
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
            <Link to="/inspiration" className="text-link">
              Read the inspiration behind the foundation
            </Link>
          </div>

          <div className="split-panel-media">
            <ResponsiveImage
              src="/media/founder-speaking.jpeg"
              alt="Founder Kevin speaking during a youth development session"
              className="media-focus-center"
              widths={[640, 960, 1280]}
              sizes="(max-width: 1080px) 100vw, 48vw"
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
          />
          <div className="team-grid">
            {leadershipTeam.map((person) => (
              <article key={person.name} className="team-card">
                <ResponsiveImage
                  src={person.image}
                  alt={person.alt ?? person.name}
                  className={getLeadershipImageClass(person)}
                />
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
