import { Link } from 'react-router-dom';
import LiveCounter from '../components/LiveCounter';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  heroStats,
  homepageTrustSignals,
  latestActivityFeed,
  homepagePrograms,
  latestNews,
  mediaVideos,
  partnerSupporters,
  testimonials,
} from '../siteData';

function HomePage() {
  const { t } = useLanguage();
  const translatedTrustSignals = t('home.heroTrustSignals');
  usePageTitle(t('home.title'));

  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow">{t('home.heroEyebrow')}</p>
            <h1>{t('home.heroTitle')}</h1>
            <p className="home-hero-text">{t('home.heroText')}</p>
            <p className="home-hero-support">{t('home.heroSupport')}</p>
            <div className="hero-actions">
              <Link to="/donate" className="button button-accent">
                {t('home.donateNow')}
              </Link>
              <Link to="/get-involved" className="button button-ghost">
                {t('home.joinUs')}
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
              <strong>{t('home.trustAction')}</strong>
              <p>{t('home.trustBody')}</p>
              <div className="hero-trust-list">
                {(Array.isArray(translatedTrustSignals) ? translatedTrustSignals : homepageTrustSignals).map((item) => (
                  <span key={item} className="hero-trust-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro eyebrow={t('home.impactEyebrow')} title={t('home.impactTitle')} text={t('home.impactText')} />
          <div className="metric-grid">
            {heroStats.map((item) => (
              <article key={item.label} className="metric-card">
                <span className="metric-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <LiveCounter countTo={item.countTo} suffix={item.suffix} className="metric-counter" />
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
            <SectionIntro eyebrow={t('home.aboutEyebrow')} title={t('home.aboutTitle')} text="A brief introduction to who we are and why this work exists." />
            <p className="detail-copy">
              The foundation uses sport, education support, and mentoring to help young people
              build confidence, make positive choices, and access opportunity.
            </p>
            <Link to="/about" className="button button-accent">
              {t('home.aboutCta')}
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
          <SectionIntro eyebrow={t('home.programsEyebrow')} title={t('home.programsTitle')} text={t('home.programsText')} />
          <div className="program-preview-grid">
            {homepagePrograms.map((program) => (
              <article key={program.slug} className="feature-card">
                <img src={program.image} alt={program.title} loading="lazy" decoding="async" />
                <div className="feature-card-body">
                  <p className="program-tag">{program.subtitle}</p>
                  <h3>{program.title}</h3>
                  <p>{program.excerpt}</p>
                  <Link to={`/programs/${program.slug}`} className="text-link">
                    {t('home.programLearnMore')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta-center">
            <Link to="/programs" className="button button-ghost">
              {t('home.programsCta')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro eyebrow={t('home.featuredEyebrow')} title={t('home.featuredTitle')} text={t('home.featuredText')} />
          <div className="home-video-layout">
            <div className="video-card video-card-featured">
              <video controls preload="metadata" poster={mediaVideos[0].poster}>
                <source src={mediaVideos[0].src} type="video/mp4" />
              </video>
              <div className="video-card-body">
                <p className="program-tag">{t('home.videoStoryLabel')}</p>
                <strong>{mediaVideos[0].title}</strong>
              </div>
            </div>
            <div className="video-clip-stack">
              <div className="video-clip-intro">
                <h3>{t('home.videoClipsTitle')}</h3>
                <p>{t('home.videoClipsText')}</p>
              </div>
              <div className="video-clip-grid">
                {mediaVideos.slice(1).map((video) => (
                  <article key={video.src} className="video-card">
                    <video controls preload="metadata" poster={video.poster}>
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <div className="video-card-body">
                      <strong>{video.title}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-dark">
        <div className="container">
          <SectionIntro
            eyebrow={t('home.testimonialsEyebrow')}
            title={t('home.testimonialsTitle')}
            text={t('home.testimonialsText')}
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
            eyebrow={t('home.partnersEyebrow')}
            title={t('home.partnersTitle')}
            text={t('home.partnersText')}
            centered
          />
          <div className="partners-grid">
            {partnerSupporters.map((partner) => (
              <article key={partner.name} className="partner-card">
                <div className="partner-mark" aria-hidden="true">
                  {partner.mark}
                </div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">{t('home.actionEyebrow')}</p>
            <h2>{t('home.actionTitle')}</h2>
            <p>{t('home.actionText')}</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              {t('home.donateNow')}
            </Link>
            <Link to="/get-involved" className="button button-ghost">
              {t('home.joinUs')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('home.latestActivitiesEyebrow')}
            title={t('home.latestActivitiesTitle')}
            text={t('home.latestActivitiesText')}
          />
          <div className="activity-grid">
            {latestActivityFeed.map((item) => (
              <article key={item.slug} className="feature-card activity-card">
                <div className="activity-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  <span className="activity-date-badge">{item.date}</span>
                </div>
                <div className="feature-card-body">
                  <p className="program-tag">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.update}</p>
                  <p className="activity-caption">{item.caption}</p>
                  <span className="meta-line">{item.timestamp}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow={t('home.latestUpdatesEyebrow')}
            title={t('home.latestUpdatesTitle')}
            text={t('home.latestUpdatesText')}
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
              {t('home.newsCta')}
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default HomePage;
