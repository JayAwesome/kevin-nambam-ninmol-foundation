import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import {
  caseStudies,
  impactMetrics,
  mediaGallery,
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
        title="Proof of work that is clear, human, and accountable."
        subtitle="This page is designed to help donors, partners, and institutions understand both the scale and the sincerity of the foundation’s work."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Statistics"
            title="Key indicators of reach, program activity, and direct support."
            text="These figures are presented to show the direction and scale of the foundation’s work in a clear and accessible way."
            centered
          />
          <div className="metric-grid">
            {impactMetrics.map((item) => (
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
            eyebrow="Case Studies"
            title="Short stories that show what the work looks like in real life."
            text="Evidence matters, but impact becomes more meaningful when it is connected to human experience."
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
            eyebrow="Before and After"
            title="Transformation is often visible in confidence, access, and participation."
            text="These examples describe the kind of change the foundation seeks to make through sustained support."
            centered
          />
          <div className="transformation-grid">
            {transformationStories.map((story) => (
              <article key={story.title} className="transformation-card">
                <h3>{story.title}</h3>
                <div className="transformation-columns">
                  <div>
                    <p className="program-tag">Before</p>
                    <p>{story.before}</p>
                  </div>
                  <div>
                    <p className="program-tag">After</p>
                    <p>{story.after}</p>
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
            eyebrow="Reports"
            title="Downloadable reports and accountability materials."
            text="Formal reports can be added here for partners, grantmakers, and institutional review."
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
                  Download Placeholder
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Gallery"
            title="Photo and video documentation of programs, outreach, and participation."
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

      <NewsletterSection />
    </main>
  );
}

export default ImpactPage;
