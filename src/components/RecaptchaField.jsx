import { useEffect, useRef } from 'react';
import { getRecaptchaSiteKey, loadRecaptchaScript } from '../utils/recaptcha';

function RecaptchaField({ action = 'form_submission', onToken }) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const renderWidget = async () => {
      const siteKey = getRecaptchaSiteKey();
      if (!siteKey || !containerRef.current) {
        return;
      }

      const ready = await loadRecaptchaScript(siteKey);
      if (cancelled || !ready || !window.grecaptcha?.render) {
        return;
      }

      widgetRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        theme: 'light',
        size: 'normal',
        callback: (token) => onToken?.(token),
        'expired-callback': () => onToken?.(''),
        'error-callback': () => onToken?.(''),
      });
    };

    renderWidget();

    return () => {
      cancelled = true;
      if (widgetRef.current && window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetRef.current);
      }
    };
  }, [action, onToken]);

  return <div className="recaptcha-wrapper" aria-label="reCAPTCHA widget" ref={containerRef} />;
}

export default RecaptchaField;
