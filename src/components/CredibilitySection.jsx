import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { sitewideCredibility } from '../siteData';

function CredibilitySection() {
  const { t } = useLanguage();

  return (
    <section className="site-credibility-band">
      <div className="container">
        <div className="site-credibility-header">
          <p className="eyebrow">{t('credibility.eyebrow')}</p>
          <h2>{t('credibility.title')}</h2>
          <p>{t('credibility.body')}</p>
          <p className="credibility-trust-line">{t('credibility.trust')}</p>
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
            {t('credibility.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;
