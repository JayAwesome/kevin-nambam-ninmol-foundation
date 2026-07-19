import { Link } from 'react-router-dom';
import LiveCounter from '../components/LiveCounter';
import ResponsiveImage from '../components/ResponsiveImage';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  donorProgramCategories,
  heroStats,
  heroVideo,
  mediaVideos,
  partnerSupporters,
  programs,
  testimonials,
} from '../siteData';

function HomePage() {
  const { t } = useLanguage();
  usePageTitle(t('home.title'));
  const localizedStats = t('content.heroStats');

  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow">Fear No Fear</p>
            <h1>Empowering young people through sports, education, and opportunity.</h1>
            <p className="home-hero-text">
              Kevin Nambam Ninmol Foundation helps children and youth build confidence,
              access support, and move toward stronger futures.
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
            <video
              className="home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroVideo.poster}
              aria-label={heroVideo.title}
            >
              <source src={heroVideo.src} type="video/mp4" />
            </video>
            <ResponsiveImage
              src={heroVideo.poster}
              alt="Boys participating in a foundation basketball development activity"
              pictureClassName="home-hero-poster"
              className="home-hero-poster-image"
              widths={[640, 960, 1280]}
              sizes="(max-width: 1080px) 100vw, 48vw"
              loading="eager"
              fetchPriority="high"
            />
            <div className="home-hero-badge">
              <strong>Sports. Education. Opportunity.</strong>
              <p>Practical support for youth and communities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Impact"
            title="Visible work. Measurable progress."
            text="A quick snapshot of current reach and program delivery."
            ctaLabel="See Impact"
            ctaTo="/impact"
          />
          <div className="metric-grid">
            {heroStats.map((item, index) => (
              <article key={item.label} className="metric-card">
                <span className="metric-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <LiveCounter countTo={item.countTo} suffix={item.suffix} className="metric-counter" />
                <span className="metric-label">{localizedStats[index]?.label ?? item.label}</span>
                <p>{localizedStats[index]?.detail ?? item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Focus Areas"
            title="Five clear areas of service."
            text="The foundation keeps its work organized around practical needs donors and partners can understand quickly."
            ctaLabel="Explore Programs"
            ctaTo="/programs"
          />
          <div className="values-grid">
            {donorProgramCategories.map((area) => (
              <article key={area.slug} className="value-card">
                <h3>{area.title}</h3>
                <p>{area.purpose}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Featured Projects"
            title="Practical initiatives already shaping young lives."
            text="Short previews only. Detailed descriptions live on the Programs page."
            ctaLabel="View All Programs"
            ctaTo="/programs"
          />
          <div className="program-preview-grid">
            {programs.slice(0, 3).map((program) => (
              <article key={program.slug} className="feature-card">
                <ResponsiveImage src={program.image} alt={program.alt ?? program.title} />
                <div className="feature-card-body">
                  <p className="program-tag">{program.category}</p>
                  <h3>{program.title}</h3>
                  <p>{program.summary}</p>
                  <Link to={`/programs/${program.slug}`} className="text-link">
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Video Stories"
            title="See the work in motion."
            text="Short activity clips help visitors understand the energy, care, and discipline behind the foundation's work."
          />
          <div className="home-video-layout">
            <article className="video-card video-card-featured">
              <video
                controls
                preload="none"
                poster={mediaVideos[0].poster}
                playsInline
                aria-label={mediaVideos[0].title}
              >
                <source src={mediaVideos[0].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-card-body">
                <strong>{mediaVideos[0].title}</strong>
                <p>{mediaVideos[0].description}</p>
              </div>
            </article>

            <div className="video-clip-stack">
              <article className="video-clip-intro">
                <h3>Moments from the field.</h3>
                <p>
                  Watch short highlights from outreach, mentoring, and basketball activities that show the mission in action.
                </p>
              </article>
              <div className="video-clip-grid">
                {mediaVideos.slice(1).map((video) => (
                  <article key={video.src} className="video-card">
                    <video controls preload="none" poster={video.poster} playsInline aria-label={video.title}>
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-card-body">
                      <strong>{video.title}</strong>
                      <p>{video.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Success Stories"
            title="What people experience through the work."
            text="Short voices from participants, families, and community partners."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card testimonial-card-no-image">
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                {item.location ? <span className="testimonial-location">{item.location}</span> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container dual-card-grid">
          <article className="action-card">
            <p className="program-tag">Donate</p>
            <h2>Fund practical support that reaches young people directly.</h2>
            <p>Use foundation bank accounts to support education, relief, outreach, and youth empowerment.</p>
            <Link to="/donate" className="button button-accent">
              Donate Now
            </Link>
          </article>
          <article className="action-card">
            <p className="program-tag">Volunteer</p>
            <h2>Give time, skills, or institutional support.</h2>
            <p>Join clinics, mentoring, outreach, sponsorship, and partnership work in a structured way.</p>
            <Link to="/get-involved" className="button button-ghost">
              Get Involved
            </Link>
          </article>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Partners and Supporters"
            title="Working together to expand impact."
            text="Schools, community leaders, youth organizations, and supporters help the foundation reach more people responsibly."
          />
          <div className="partners-grid">
            {partnerSupporters.map((partner) => (
              <article key={partner.name} className="partner-card">
                <span className="partner-mark" aria-hidden="true">✦</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
