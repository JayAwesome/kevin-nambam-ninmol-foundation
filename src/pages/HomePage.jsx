import { Link } from 'react-router-dom';
import LiveCounter from '../components/LiveCounter';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  heroStats,
  homepagePrograms,
} from '../siteData';

function HomePage() {
  const { t } = useLanguage();
  usePageTitle(t('home.title'));

  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-layout">
          <div className="home-hero-copy">
            <p className="eyebrow">{t('home.heroEyebrow')}</p>
            <h1>{t('home.heroTitle')}</h1>
            <p className="home-hero-text">{t('home.heroText')}</p>
            <p className="home-hero-support">
              {t('home.heroSupport')}
            </p>
            <div className="hero-actions">
              <Link to="/about" className="button button-accent">
                {t('home.aboutCta')}
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
              <strong>Fear No Fear</strong>
              <p>{t('home.trustBody')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('home.impactEyebrow')}
            title={t('home.impactTitle')}
            text={t('home.impactText')}
            ctaLabel={t('ui.seeImpact')}
            ctaTo="/impact"
          />
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
            <SectionIntro
              eyebrow={t('home.aboutEyebrow')}
              title={t('home.aboutTitle')}
              text={t('home.aboutText')}
              ctaLabel={t('ui.readMore')}
              ctaTo="/about"
            />
            <p className="detail-copy">{t('home.aboutCopy')}</p>
            <Link to="/about" className="text-link">
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
            <SectionIntro
              eyebrow={t('home.programsEyebrow')}
              title={t('home.programsTitle')}
              text={t('home.programsText')}
              ctaLabel={t('ui.readMore')}
              ctaTo="/programs"
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
                    {t('home.programLearnMore')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta-center">
            <Link to="/programs" className="text-link">
              {t('home.programsCta')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
