import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
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
  usePageTitle('Impact');

  return (
    <main>
      <PageHero
        eyebrow="Impact"
        title="Impact that is visible, honest, and community-rooted."
        subtitle="This page focuses on results, evidence, and the visible outcomes of the foundation's work."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Our Reach"
            title="Measurable indicators of reach and program delivery."
            text="These figures provide a simple snapshot of current reach, delivery, and engagement."
            centered
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
              <p className="program-tag">Evidence Snapshot</p>
              <h3>Visual overview of current reach and delivery</h3>
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
            eyebrow="What Changed"
            title="Outcome areas that show how participation is translating into change."
            text="Beyond the numbers, the foundation looks for visible shifts in confidence, decisions, and life skills."
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
            eyebrow="Case Studies"
            title="Simple real-life stories that help explain the change behind the numbers."
            text="These stories are presented in a grounded, realistic way to show how support, encouragement, and structure can shift a young person’s outlook."
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
            eyebrow="What Has Changed"
            title="Before-and-after patterns that the work is designed to influence."
            text="These examples show the kinds of changes the foundation works toward through sport, mentoring, and practical support."
            centered
          />
          <div className="transformation-grid">
            {transformationStories.map((item) => (
              <article key={item.title} className="transformation-card">
                <h3>{item.title}</h3>
                <div className="transformation-columns">
                  <div>
                    <p className="program-tag">Before</p>
                    <p>{item.before}</p>
                  </div>
                  <div>
                    <p className="program-tag">What changed</p>
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
            eyebrow="Photo and Video Gallery"
            title="Visual proof from programs, outreach, and youth participation."
            text="Real images and videos help donors and partners see the work in action."
            centered
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
            eyebrow="Reports & Documents"
            title="Reporting materials that support transparency and professionalism."
            text="These placeholders show the reporting structure used for annual communication, financial transparency, and program documentation."
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
                  Download Report Placeholder
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Help turn measurable impact into sustained support</h2>
            <p>
              If this work aligns with your values, the Donate page shows giving options, fund-use
              priorities, and clear ways to support the foundation responsibly.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              Donate
            </Link>
            <Link to="/get-involved" className="button button-ghost">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default ImpactPage;
