import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import {
  aboutStory,
  credibilityHighlights,
  foundationGoals,
  foundationObjectives,
  founderMessage,
  leadershipTeam,
  legalCredibility,
  visionMission,
  whyItMatters,
} from '../siteData';

function AboutPage() {
  usePageTitle('About');

  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="About Us"
        subtitle="Our Story, Mission, and Commitment to Youth Development"
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
            centered
          />
          <article className="mission-highlight-panel">
            <p>{visionMission.mission}</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Why It Matters"
            title="Why this work matters"
            text="The foundation exists in response to real barriers that affect how young people see themselves, the choices available to them, and the futures they believe they can reach."
            centered
          />
          <div className="values-grid">
            {whyItMatters.map((item) => (
              <article key={item.title} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Our Goals"
            title="Our Goals"
            text="These priorities shape how the foundation supports young people in practical, long-term ways."
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
            text="Our objectives keep the work clear, measurable, and grounded in the real needs of young people and communities."
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
            eyebrow="Credibility"
            title="Legal and organizational credibility"
            text="We understand that trust matters. The foundation is being structured to meet the expectations of donors, institutions, and long-term partners."
          />
          <div className="dual-card-grid">
            {credibilityHighlights.map((item) => (
              <article key={item.title} className="info-panel">
                <p className="program-tag">{item.title}</p>
                <p className="detail-copy">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="section-spacer-sm" />
          <div className="values-grid">
            {legalCredibility.map((item) => (
              <article key={item} className="value-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Take Action</p>
            <h2>Partner with us to shape the future of young people</h2>
            <p>
              Your support helps the foundation expand mentoring, education support, youth
              development, and practical community-based opportunities with greater reach and
              long-term impact.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              Donate
            </Link>
            <Link to="/get-involved" className="button button-ghost">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default AboutPage;
