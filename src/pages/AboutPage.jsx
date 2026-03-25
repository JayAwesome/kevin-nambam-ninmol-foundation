import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { aboutStory, coreValues, founderMessage, leadershipTeam, visionMission } from '../siteData';

function AboutPage() {
  usePageTitle('About');

  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A foundation built on resilience, purpose, and opportunity."
        subtitle="A trustworthy NGO story should feel both personal and institutional."
        image="/media/founder-portrait.jpeg"
      />

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="Our Story"
              title="From lived experience to a wider mission of service."
              text={aboutStory[0]}
            />
            <div className="stacked-copy">
              {aboutStory.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="split-panel-media">
            <img src="/media/founder-action.jpeg" alt="Founder training on a basketball court" />
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
            title="The principles guiding our programs, partnerships, and presence."
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

      <section className="section-space section-dark">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="Founder&apos;s Message"
              title="A global-facing foundation still grounded in humanity."
              text={founderMessage}
            />
          </div>
          <div className="quote-panel">
            <p>
              “The right support at the right moment can redirect a young person’s entire
              future. That belief is at the heart of this foundation.”
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Leadership"
            title="A team committed to credibility, stewardship, and impact."
            centered
          />
          <div className="team-grid">
            {leadershipTeam.map((person) => (
              <article key={person.name} className="team-card">
                <img src={person.image} alt={person.name} />
                <div className="team-card-body">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default AboutPage;
