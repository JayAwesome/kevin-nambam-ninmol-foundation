import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
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
  usePageTitle('About');

  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="About Us"
        subtitle="Our story, identity, and commitment to youth development."
        image="/media/founder-national.jpeg"
      />

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="Founder&apos;s Story"
              title="Founder&apos;s Story"
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
            eyebrow="Our Mission"
            title="Our Mission"
            text="The mission defines why the foundation exists and how it serves young people."
            centered
            ctaLabel="Read More on Programs"
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
            eyebrow="Our Goals"
            title="Our Goals"
            text="These priorities shape the kind of change the foundation is working toward."
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
            eyebrow="Our Objectives"
            title="Our Objectives"
            text="These objectives keep the work focused, practical, and measurable."
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
            <p className="program-tag">Vision</p>
            <h2>{visionMission.vision}</h2>
          </article>
          <article className="info-panel">
            <p className="program-tag">Founder&apos;s Message</p>
            <p className="detail-copy">{founderMessage}</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Leadership"
            title="Leadership and stewardship"
            text="The foundation is led with a commitment to service, credibility, and responsible community impact."
            centered
            ctaLabel="Read More on Leadership"
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
            <p className="eyebrow">Next Step</p>
            <h2>See how the foundation turns its mission into practical programs</h2>
            <p>
              Explore the program areas to understand what the foundation does on the ground and
              how support translates into real opportunities for young people.
            </p>
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
