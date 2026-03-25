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
            <h1>Empowering Youth Through Basketball, Education, and Mentorship</h1>
            <p className="home-hero-text">
              We help young people choose hope over fear by opening pathways to growth,
              confidence, and opportunity through sport, learning, and guidance.
            </p>
            <p className="home-hero-support">
              Founded from lived experience and grounded in practical service, the foundation
              exists to help children and youth rise above limitation and pursue brighter futures.
            </p>
            <div className="hero-actions">
              <Link to="/donate" className="button button-accent">
                Donate Now
              </Link>
              <Link to="/get-involved" className="button button-ghost">
                Join Us
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
            title="A growing record of visible, community-rooted impact."
            text="We believe trust is built through measurable work, clear purpose, and consistent presence in the lives of young people."
          />
          <div className="metric-grid">
            {heroStats.map((item) => (
              <article key={item.label} className="metric-card">
                <span className="metric-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <strong>{item.value}</strong>
                <span className="metric-label">{item.label}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="About Preview"
              title="A personal story transformed into a public mission."
              text="Kevin Nambam Ninmol Foundation grew from a journey marked by hardship, resilience, and the life-changing power of opportunity."
            />
            <p className="detail-copy">
              From a difficult beginning to national and international basketball opportunities,
              Kevin's experience now fuels a foundation committed to helping young people find
              hope, structure, and support for the future.
            </p>
            <Link to="/about" className="button button-accent">
              Learn More About Us
            </Link>
          </div>

          <div className="split-panel-media">
            <img
              src="/media/founder-national.jpeg"
              alt="Founder in Nigeria national basketball kit"
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
            eyebrow="Programs"
            title="Focused programs that support learning, guidance, and youth development."
            text="Each program area is designed to respond to real needs with practical support and long-term encouragement."
          />
          <div className="program-preview-grid">
            {homepagePrograms.map((program) => (
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
            title="Stories that reflect hope, growth, and real support."
            text="These short beneficiary-style stories help visitors understand how the foundation is experienced on the ground."
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
            <h2>Partner with us to expand hope, opportunity, and youth development.</h2>
            <p>
              Your donations, partnerships, and support help strengthen education access,
              mentoring, and practical development opportunities for young people.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              Donate Now
            </Link>
            <Link to="/get-involved" className="button button-ghost">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Latest Updates"
            title="Recent activities and updates from the field."
            text="Current updates help donors, partners, and visitors see that the work is active, transparent, and ongoing."
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
