import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      window.alert(t('newsletter.empty'));
      return;
    }

    console.log('Newsletter subscription integration coming soon', { email });
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="newsletter-band">
      <div className="container newsletter-layout">
        <div>
          <p className="eyebrow">{t('newsletter.eyebrow')}</p>
          <h2>{t('newsletter.title')}</h2>
          <p>{t('newsletter.body')}</p>
          <p className="micro-note">{t('newsletter.note')}</p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder={t('newsletter.placeholder')}
            aria-label={t('newsletter.emailLabel')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit" className="button button-accent">
            {t('newsletter.subscribe')}
          </button>
        </form>

        {isSubscribed ? <p className="newsletter-success">{t('newsletter.success')}</p> : null}
      </div>
    </section>
  );
}

export default NewsletterSection;
