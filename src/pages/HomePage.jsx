import { Link } from 'react-router-dom';
import { goals, objectives, programs, stats, storyFrames } from '../siteData';

function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Empowering Youth Through Sports, Education and Opportunity</p>
            <h1>Fear No Fear</h1>
            <p className="hero-lead">
              Using basketball and lived experience to help young people choose hope,
              courage, and a positive mindset over fear.
            </p>
            <p className="hero-body">
              The Kevin NanBam Ninmol Foundation exists to open doors through sports,
              education, mentorship, and practical support for the next generation.
            </p>
            <div className="hero-actions">
              <Link to="/get-involved" className="button button-accent">
                Join Our Mission
              </Link>
              <a href="#story" className="button button-ghost">
                Read Our Story
              </a>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-photo hero-photo-main">
              <img src="/media/founder-action.jpeg" alt="Kevin training with basketballs on an outdoor court" />
            </div>
            <div className="hero-photo hero-photo-secondary">
              <img src="/media/founder-portrait.jpeg" alt="Kevin in national basketball kit" />
            </div>
            <div className="hero-note">
              <span>Founder&apos;s Journey</span>
              <p>From national basketball platforms to grassroots youth mentorship and community impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-band">
        <div className="container impact-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="impact-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section section-space" id="story">
        <div className="container split-layout">
          <div className="section-copy">
            <p className="eyebrow">Founder&apos;s Story</p>
            <h2>Come from a struggling background, lifted by God&apos;s grace and opportunity.</h2>
            <p>
              Kevin NanBam Ninmol came from a struggling background and was privileged by
              God&apos;s grace to learn and play basketball to national and international
              levels.
            </p>
            <p>
              Basketball gave him an opportunity to further his education, and education
              gave him the opportunity to become a senior officer.
            </p>
            <p>Regardless of any negative family background or race, anyone can make it.</p>
          </div>

            <div className="story-stack">
              <div className="story-image-card">
                <img
                  src="/media/founder-portrait.jpeg"
                  alt="Kevin pictured in Nigeria national basketball uniforms"
                />
              </div>
            <div className="quote-card">
              <p>
                "The foundation exists to become the same guiding force for young people who
                only need one real opportunity to rise."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-story section-space">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">In Action</p>
            <h2>The images show the real work: coaching, encouragement, outreach, and recognition.</h2>
          </div>

          <div className="story-frame-grid">
            {storyFrames.map((frame) => (
              <figure key={frame.caption} className="story-frame">
                <img src={frame.src} alt={frame.alt} />
                <figcaption>{frame.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-space section-alt" id="mission">
        <div className="container">
          <div className="mission-header">
            <p className="eyebrow">Mission Statement</p>
            <h2>Using basketball and experience to help young people take control of their lives.</h2>
            <p>
              As an ex-national basketball player, Kevin uses basketball and his experiences
              to encourage youths to have hope and positive mindsets rather than letting fear
              hold them back. The mission is to help the young take control of their lives
              and make positive choices.
            </p>
          </div>

          <div className="goal-grid">
            {goals.map((goal, index) => (
              <article key={goal.title} className="goal-card">
                <span className="goal-index">0{index + 1}</span>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="programs-section section-space" id="programs">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Programs and Initiatives</p>
            <h2>Practical support shaped around education, sports, mentorship, and dignity.</h2>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                </div>
                <p className="program-tag">{program.subtitle}</p>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="objectives-section section-space section-dark">
        <div className="container objectives-layout">
          <div className="section-copy">
            <p className="eyebrow">Objectives</p>
            <h2>Building programs that are thoughtful, sustainable, and truly useful.</h2>
            <p>
              The foundation&apos;s objectives focus on building support systems that help
              young people grow in confidence, resilience, and purpose.
            </p>
          </div>

          <div className="objectives-list">
            {objectives.map((objective) => (
              <div key={objective} className="objective-card">
                <span className="objective-marker" />
                <p>{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-space home-cta-strip">
        <div className="container cta-panel partnership-panel">
          <div>
            <p className="eyebrow">Get Involved</p>
            <h2>Your impact starts here.</h2>
            <p>
              Support the mission through giving, volunteering, or partnership. Every act of
              generosity helps a young person find courage, discipline, and opportunity.
            </p>
          </div>

          <Link to="/get-involved" className="button button-accent">
            Visit Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
