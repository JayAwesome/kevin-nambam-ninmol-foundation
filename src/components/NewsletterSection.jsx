import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { isValidEmail, sanitizeEmail, sanitizePlainText, validatePublicForm } from '../utils/formSecurity';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const { t } = useLanguage();

  const handleSubscribe = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cleanEmail = sanitizeEmail(email);
    const validation = validatePublicForm({
      values: { email: cleanEmail },
      honeypot: sanitizePlainText(formData.get('website'), 100),
      startedAt: formStartedAt,
    });

    if (!validation.ok) {
      window.alert(validation.reason);
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      window.alert(t('newsletter.empty'));
      return;
    }

    console.log('Newsletter subscription placeholder validated');
    setIsSubscribed(true);
    setEmail('');
    setFormStartedAt(Date.now());
    event.currentTarget.reset();
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
          <label className="form-honeypot">
            Website
            <input type="text" name="website" tabIndex="-1" autoComplete="off" />
          </label>
          <input
            type="email"
            placeholder={t('newsletter.placeholder')}
            aria-label={t('newsletter.emailLabel')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength="120"
            required
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
