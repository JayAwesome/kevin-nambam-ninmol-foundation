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
        subtitle="This page highlights the foundation's reach, selected case stories, visual evidence, and reporting placeholders in a clear and accountable format."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Our Reach"
            title="Measurable indicators of reach and program delivery."
            text="These figures provide a count-based snapshot of how the foundation is showing up across youth engagement, community reach, education support, and structured program delivery."
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
            text="Beyond reach numbers, the foundation looks for visible shifts in confidence, decision-making, and practical life skills among participants."
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
            text="These examples show the kinds of changes the foundation works toward over time through sport, mentoring, and practical support."
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
            text="Real images and videos help partners and donors see how the foundation shows up in community spaces, sports settings, and encouragement-focused activities."
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
            text="These document placeholders show the reporting structure the foundation can use for annual communication, financial transparency, and program documentation."
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

      <NewsletterSection />
    </main>
  );
}

export default ImpactPage;
