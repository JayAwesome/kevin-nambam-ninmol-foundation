const DEFAULT_RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export function getRecaptchaSiteKey() {
  return import.meta.env.VITE_RECAPTCHA_SITE_KEY || DEFAULT_RECAPTCHA_SITE_KEY;
}

export function loadRecaptchaScript(siteKey = getRecaptchaSiteKey()) {
  if (typeof window === 'undefined' || !siteKey) {
    return Promise.resolve(false);
  }

  if (window.grecaptcha) {
    return Promise.resolve(true);
  }

  const existingScript = document.querySelector('script[data-recaptcha]');
  if (existingScript) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-recaptcha', 'true');
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

export async function getRecaptchaToken(action, siteKey = getRecaptchaSiteKey()) {
  if (typeof window === 'undefined' || !siteKey) {
    return '';
  }

  const scriptLoaded = await loadRecaptchaScript(siteKey);
  if (!scriptLoaded || !window.grecaptcha?.ready || !window.grecaptcha?.execute) {
    return '';
  }

  await window.grecaptcha.ready();
  return window.grecaptcha.execute(siteKey, { action });
}
