import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import RecaptchaField from './RecaptchaField';
import { isValidEmail, sanitizeEmail, sanitizePlainText, validatePublicForm } from '../utils/formSecurity';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const { t } = useLanguage();

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const cleanEmail = sanitizeEmail(email);
    const validation = validatePublicForm({
      values: { email: cleanEmail },
      honeypot: sanitizePlainText(formData.get('website'), 100),
      startedAt: formStartedAt,
      formKey: 'newsletter',
    });

    if (!validation.ok) {
      window.alert(validation.reason);
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      window.alert(t('newsletter.empty'));
      return;
    }

    if (!captchaToken) {
      window.alert('Please complete the security verification before subscribing.');
      return;
    }

    const responseField = form.elements.namedItem('g-recaptcha-response');
    if (responseField) {
      responseField.value = captchaToken;
    }

    console.log('Newsletter subscription validated');
    setIsSubscribed(true);
    setEmail('');
    setCaptchaToken('');
    setFormStartedAt(Date.now());
    form.reset();
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
            aria-label={t('newsletter.emailLabel')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength="120"
            required
          />
          <RecaptchaField action="newsletter_signup" onToken={setCaptchaToken} />
          <input type="hidden" name="g-recaptcha-response" value={captchaToken} />
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
