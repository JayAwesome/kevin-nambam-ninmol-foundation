import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { caseStudies, impactMetrics, mediaGallery, mediaVideos, reports } from '../siteData';

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
            eyebrow="Impact Statistics"
            title="Key indicators of the foundation's work."
            text="These figures provide a simple snapshot of the foundation's growing reach and delivery across youth development, mentoring, and community engagement."
            centered
          />
          <div className="metric-grid impact-metric-grid">
            {impactMetrics.map((item) => (
              <article key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span className="metric-label">{item.label}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Case Studies"
            title="Stories that help explain the change behind the numbers."
            text="These examples are written in a real-life style to show the kind of transformation the foundation is working to make possible."
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

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Photo and Video Gallery"
            title="Visual documentation from programs, outreach, and participation."
            text="Real images and videos help partners and donors see how the foundation shows up in community spaces and youth-centered activities."
            centered
          />
          <div className="gallery-grid">
            {mediaGallery.map((item) => (
              <div key={item} className="gallery-card">
                <img src={item} alt="Foundation impact gallery" loading="lazy" decoding="async" />
              </div>
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

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Reports"
            title="Annual reporting placeholder"
            text="A formal annual report can be made available here for donors, partners, and institutions that require a consolidated overview of activities and results."
            centered
          />
          <div className="reports-grid">
            {reports.map((report) => (
              <article key={report.title} className="news-card">
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
