import { Link } from 'react-router-dom';
import { sitewideCredibility } from '../siteData';

function CredibilitySection() {
  return (
    <section className="site-credibility-band">
      <div className="container">
        <div className="site-credibility-header">
          <p className="eyebrow">Credibility and Transparency</p>
          <h2>Built to inspire confidence among donors, partners, and institutions.</h2>
          <p>
            The foundation is committed to transparency, accountability, ethical stewardship, and
            responsible safeguarding practices as its work continues to grow.
          </p>
        </div>

        <div className="values-grid">
          {sitewideCredibility.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="section-cta-center">
          <Link to="/about" className="button button-ghost">
            Learn More About Our Governance
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;
