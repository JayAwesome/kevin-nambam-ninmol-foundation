import { Link } from 'react-router-dom';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { heroStats, homepagePrograms, latestNews, testimonials } from '../siteData';

function HomePage() {
  usePageTitle('Home');

  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow">Global-standard youth development and humanitarian impact</p>
            <h1>Fear No Fear. Building futures through sports, education, and opportunity.</h1>
            <p className="home-hero-text">
              Kevin Nambam Ninmol Foundation equips young people with hope, structure,
              confidence, and practical support so they can rise above limitation and pursue
              their full potential.
            </p>
            <div className="hero-actions">
              <Link to="/donate" className="button button-accent">
                Donate
              </Link>
              <Link to="/get-involved" className="button button-ghost">
                Volunteer
              </Link>
            </div>
          </div>

          <div className="home-hero-visual">
            <img src="/media/founder-action.jpeg" alt="Founder Kevin training with basketballs" />
            <div className="home-hero-badge">
              <strong>Trust through action</strong>
              <p>Rooted in lived experience, youth mentorship, and visible community engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Impact Snapshot"
            title="Credibility, care, and measurable youth-centered action."
            text="The foundation is designed to look and operate like a serious mission-driven institution that can speak to communities, partners, and international donors alike."
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
            title="Focused initiatives that meet young people where they are."
            text="Our work is practical, personal, and rooted in long-term development."
          />
          <div className="program-preview-grid">
            {homepagePrograms.map((program) => (
              <article key={program.slug} className="feature-card">
                <img src={program.image} alt={program.title} />
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
        </div>
      </section>

      <section className="section-space">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="About the Foundation"
              title="A personal story transformed into a public mission."
              text="From a struggling background to national and international basketball levels, Kevin’s journey now fuels a foundation committed to courage, dignity, and access for the next generation."
            />
            <Link to="/about" className="button button-accent">
              Read Our Story
            </Link>
          </div>

          <div className="split-panel-media">
            <img src="/media/founder-portrait.jpeg" alt="Founder in Nigeria national basketball kit" />
          </div>
        </div>
      </section>

      <section className="section-space section-dark">
        <div className="container">
          <SectionIntro
            eyebrow="Testimonials"
            title="Voices from the people and communities we serve."
            text="The most trusted organizations are remembered for the change they create in real lives."
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

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Latest News"
            title="Updates, announcements, and stories from the field."
            text="A clean news section gives donors and partners confidence that the work is active, current, and transparent."
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
