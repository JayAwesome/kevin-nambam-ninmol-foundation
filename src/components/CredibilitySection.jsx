import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { managementProfiles, policySections, sitewideCredibility } from '../siteData';

function CredibilitySection() {
  const { t } = useLanguage();
  const registrationItems = sitewideCredibility.slice(0, 3);
  const transparencyItems = sitewideCredibility.slice(3, 6);
  const safeguardingSummary = policySections.find((section) => section.title === 'Child Protection Policy');

  return (
    <section className="site-credibility-band">
      <div className="container">
        <div className="site-credibility-header">
          <p className="eyebrow">{t('credibility.eyebrow')}</p>
          <h2>{t('credibility.title')}</h2>
          <p>{t('credibility.body')}</p>
          <p className="credibility-trust-line">{t('credibility.trust')}</p>
        </div>

        <div className="credibility-layout">
          <div className="credibility-main">
            <div className="team-grid">
              {managementProfiles.map((member) => (
                <article key={member.name + member.role} className="team-card governance-card">
                  <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
                  <div className="team-card-body">
                    <p className="program-tag">Leadership</p>
                    <h3>{member.name}</h3>
                    <strong>{member.role}</strong>
                    <p>{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="values-grid credibility-card-grid">
              {registrationItems.map((item) => (
                <article key={item.title} className="value-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="credibility-aside">
            <article className="info-panel credibility-panel">
              <p className="program-tag">Transparency</p>
              <h3>How accountability is practiced</h3>
              <p>
                The foundation is building the kind of governance, reporting, and stewardship
                structures that international donors and institutional partners expect.
              </p>
              <ul className="opportunity-list">
                {transparencyItems.map((item) => (
                  <li key={item.title}>{item.text}</li>
                ))}
              </ul>
            </article>

            <article className="info-panel credibility-panel">
              <p className="program-tag">Safeguarding</p>
              <h3>Child protection is part of responsible delivery</h3>
              <p>{safeguardingSummary?.summary}</p>
              <p className="micro-note">
                Safeguarding expectations cover respectful conduct, safe engagement, and prompt
                response to concerns involving children and young people.
              </p>
            </article>
          </aside>
        </div>

        <div className="credibility-actions">
          <Link to="/leadership-governance" className="button button-ghost">
            View Leadership and Governance
          </Link>
          <Link to="/policies-safeguarding" className="button button-ghost">
            View Policies and Safeguarding
          </Link>
          <Link to="/about" className="button button-accent">
            {t('credibility.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;
