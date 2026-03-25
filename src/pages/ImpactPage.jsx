import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { caseStudies, impactMetrics, mediaGallery, mediaVideos } from '../siteData';

function ImpactPage() {
  usePageTitle('Impact');

  return (
    <main>
      <PageHero
        eyebrow="Impact"
        title="Transparent impact builds confidence with communities and donors."
        subtitle="A modern NGO site should make achievements visible, human, and credible."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Statistics and Achievements"
            title="Clear indicators of progress and institutional seriousness."
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
            title="Stories that show what the numbers mean."
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
            eyebrow="Gallery"
            title="Photo and video-style storytelling for credibility and visibility."
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
