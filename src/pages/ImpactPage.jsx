import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  caseStudies,
  impactGalleryHighlights,
  impactMetrics,
  impactOutcomes,
  mediaVideos,
  reports,
  transformationStories,
} from '../siteData';

function ImpactPage() {
  const { t } = useLanguage();
  usePageTitle(t('impactPage.title'));

  return (
    <main>
      <PageHero
        eyebrow={t('impactPage.heroEyebrow')}
        title={t('impactPage.heroTitle')}
        subtitle={t('impactPage.heroSubtitle')}
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('impactPage.reachEyebrow')}
            title={t('impactPage.reachTitle')}
            text={t('impactPage.reachText')}
            centered
            ctaLabel={t('impactPage.supportImpact')}
            ctaTo="/donate"
          />
          <div className="impact-data-layout">
            <div className="metric-grid impact-metric-grid">
              {impactMetrics.map((item) => (
                <article key={item.label} className="metric-card">
                  <strong>{item.value}</strong>
                  <span className="metric-label">{item.label}</span>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <article className="impact-chart-panel">
              <p className="program-tag">{t('impactPage.evidenceTag')}</p>
              <h3>{t('impactPage.evidenceTitle')}</h3>
              <div className="impact-chart-list">
                {impactMetrics.map((item) => (
                  <div key={item.label} className="impact-chart-row">
                    <div className="impact-chart-copy">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                    <div className="impact-chart-track" aria-hidden="true">
                      <span style={{ width: `${item.chartValue}%` }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow={t('impactPage.outcomesEyebrow')}
            title={t('impactPage.outcomesTitle')}
            text={t('impactPage.outcomesText')}
            centered
          />
          <div className="impact-outcomes-grid">
            {impactOutcomes.map((item) => (
              <article key={item.title} className="impact-outcome-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('impactPage.caseEyebrow')}
            title={t('impactPage.caseTitle')}
            text={t('impactPage.caseText')}
            centered
          />
          <div className="case-study-grid">
            {caseStudies.map((item) => (
              <article key={item.title} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow={t('impactPage.changedEyebrow')}
            title={t('impactPage.changedTitle')}
            text={t('impactPage.changedText')}
            centered
          />
          <div className="transformation-grid">
            {transformationStories.map((item) => (
              <article key={item.title} className="transformation-card">
                <h3>{item.title}</h3>
                <div className="transformation-columns">
                  <div>
                    <p className="program-tag">{t('impactPage.before')}</p>
                    <p>{item.before}</p>
                  </div>
                  <div>
                    <p className="program-tag">{t('impactPage.after')}</p>
                    <p>{item.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow={t('impactPage.galleryEyebrow')}
            title={t('impactPage.galleryTitle')}
            text={t('impactPage.galleryText')}
            centered
            ctaLabel={t('impactPage.readDonate')}
            ctaTo="/donate"
          />
          <div className="gallery-grid">
            {impactGalleryHighlights.map((item) => (
              <article key={item.image + item.title} className="gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                <div className="feature-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="video-gallery-grid">
            {mediaVideos.map((video) => (
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
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow={t('impactPage.reportsEyebrow')}
            title={t('impactPage.reportsTitle')}
            text={t('impactPage.reportsText')}
            centered
          />
          <div className="reports-grid">
            {reports.map((report) => (
              <article key={report.title} className="report-card">
                <div className="report-card-top">
                  <span className="report-format-badge">{report.format}</span>
                  <span className="meta-line">{report.date}</span>
                </div>
                <p className="program-tag">{report.type}</p>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <button
                  type="button"
                  className="button button-ghost report-button"
                  onClick={() => {
                    console.log('Report download placeholder', report.title);
                    window.alert(`Download placeholder for "${report.title}"`);
                  }}
                >
                  {t('impactPage.downloadPlaceholder')}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">{t('impactPage.nextEyebrow')}</p>
            <h2>{t('impactPage.nextTitle')}</h2>
            <p>{t('impactPage.nextText')}</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              {t('impactPage.donate')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ImpactPage;
