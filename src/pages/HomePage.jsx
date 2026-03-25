import { Link } from 'react-router-dom';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { heroStats, homepagePrograms, latestNews, mediaVideos, testimonials } from '../siteData';

function HomePage() {
  usePageTitle('Home');

  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow">Kevin Nambam Ninmol Foundation</p>
            <h1>Fear No Fear. Helping young people choose hope, courage, and opportunity.</h1>
            <p className="home-hero-text">
              We use basketball, mentorship, education support, and community outreach to help
              children and young people rise above limitation, make positive choices, and build
              lives of purpose.
            </p>
            <p className="home-hero-support">
              Founded from lived experience and grounded in visible community action, the
              foundation exists to make opportunity more accessible for the next generation.
            </p>
            <div className="hero-actions">
              <Link to="/donate" className="button button-accent">
                Donate Now
              </Link>
              <Link to="/get-involved" className="button button-ghost">
                Volunteer
              </Link>
              <Link to="/about" className="button button-ghost button-inline-light">
                Read Our Story
              </Link>
            </div>
          </div>

          <div className="home-hero-visual">
            <img
              src="/media/founder-action.jpeg"
              alt="Founder Kevin training with basketballs"
              className="media-focus-center"
            />
            <div className="home-hero-badge">
              <strong>Trust through action</strong>
              <p>
                Rooted in lived experience, youth mentorship, and visible community engagement in
                Jos and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Impact Snapshot"
            title="Visible work. Practical support. A growing record of youth-centered impact."
            text="Our approach combines measurable action with personal presence, helping donors and partners quickly understand the scale and seriousness of the work."
          />
          <div className="metric-grid">
            {heroStats.map((item) => (
              <article key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Programs"
            title="Programs that meet urgent needs while building long-term growth."
            text="Our initiatives are designed to support learning, strengthen confidence, and create real pathways for young people to thrive."
          />
          <div className="program-preview-grid">
            {homepagePrograms.slice(0, 3).map((program) => (
              <article key={program.slug} className="feature-card">
                <img src={program.image} alt={program.title} loading="lazy" decoding="async" />
                <div className="feature-card-body">
                  <p className="program-tag">{program.subtitle}</p>
                  <h3>{program.title}</h3>
                  <p>{program.excerpt}</p>
                  <Link to={`/programs/${program.slug}`} className="text-link">
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta-center">
            <Link to="/programs" className="button button-ghost">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="About the Foundation"
              title="A personal journey transformed into a public mission of service."
              text="From a difficult beginning to national and international basketball opportunities, Kevin Nambam Ninmol's story is now being translated into a foundation that helps young people discover dignity, structure, and hope."
            />
            <p className="detail-copy">
              The foundation exists to show that background does not have to determine destiny.
              Through sport, mentoring, education support, and community outreach, it creates the
              kind of encouragement and access that can change a life.
            </p>
            <Link to="/about" className="button button-accent">
              Read Our Story
            </Link>
          </div>

          <div className="split-panel-media">
            <img
              src="/media/founder-portrait.jpeg"
              alt="Founder in Nigeria national basketball kit"
              className="media-focus-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container split-panel media-highlight-panel">
          <div>
            <SectionIntro
              eyebrow="Featured Video"
              title="See the mission in motion."
              text="Real footage from clinics and outreach helps supporters understand that the foundation's work is active, personal, and rooted in the community."
            />
          </div>
          <div className="video-card">
            <video controls preload="metadata" poster={mediaVideos[0].poster}>
              <source src={mediaVideos[0].src} type="video/mp4" />
            </video>
            <div className="video-card-body">
              <strong>{mediaVideos[0].title}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="Testimonials"
            title="Trust is built through real experiences and real relationships."
            text="These voices reflect how the foundation is experienced by participants, families, and local partners."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name + item.role} className="testimonial-card">
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Take Action</p>
            <h2>Stand with a foundation helping young people fear less and aim higher.</h2>
            <p>
              Whether you give, volunteer, or partner with us, your support helps create safer
              spaces, stronger mentoring, and more opportunity for children and youth.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              Donate
            </Link>
            <Link to="/get-involved" className="button button-ghost">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Latest Updates"
            title="Recent news and field updates from the foundation."
            text="Fresh updates help donors, partners, and communities see that the work is current, transparent, and active."
          />
          <div className="news-grid">
            {latestNews.map((item) => (
              <article key={item.slug} className="news-card">
                <p className="program-tag">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="meta-line">{item.date}</span>
              </article>
            ))}
          </div>
          <div className="section-cta-center">
            <Link to="/news" className="button button-ghost">
              Visit News Page
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default HomePage;
