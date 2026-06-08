import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  impactGalleryHighlights,
  impactMetrics,
  reports,
  testimonials,
} from '../siteData';

function ImpactPage() {
  const { t } = useLanguage();
  usePageTitle(t('impactPage.title'));

  return (
    <main>
      <PageHero
        eyebrow="Impact"
        title="Evidence of work, reach, and accountability."
        subtitle="A concise view of the foundation’s results, reporting, stories, and activity proof."
        image="/media/outreach-school.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Statistics"
            title="Our current reach."
            text="These numbers are intentionally conservative and should be updated as verified reporting grows."
            centered
            ctaLabel="Donate"
            ctaTo="/donate"
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
            eyebrow="Reports"
            title="Documents that support transparency."
            text="Downloadable report placeholders are ready for annual reports, financial summaries, and program reports."
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
            eyebrow="Testimonials"
            title="Human proof behind the numbers."
            text="Short statements showing how participants and community partners experience the work."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container">
          <SectionIntro
            eyebrow="Gallery"
            title="Activity photos from the field."
            text="Real visuals help donors and partners see the foundation’s presence in communities."
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
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Help turn visible impact into sustained support.</h2>
            <p>Your contribution helps the foundation keep showing up for young people and communities.</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/donate" className="button button-accent">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ImpactPage;
