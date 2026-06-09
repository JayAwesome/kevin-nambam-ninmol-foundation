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

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="What Changed"
            title="Outcomes we look for in every activity."
            text="The foundation tracks practical changes in confidence, decision-making, and life skills as programs grow."
            centered
          />
          <div className="values-grid">
            {impactOutcomes.map((item) => (
              <article key={item.title} className="value-card">
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
            eyebrow="Case Summaries"
            title="Short stories behind the numbers."
            text="Names are representative until beneficiary stories are approved for public use."
          />
          <div className="testimonial-grid">
            {caseStudies.map((story) => (
              <article key={story.title} className="testimonial-card">
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
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

      <section className="section-space">
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
