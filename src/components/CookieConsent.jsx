import { useEffect, useState } from 'react';

const STORAGE_KEY = 'knnf-cookie-consent';

function CookieConsent() {
  const [consentChoice, setConsentChoice] = useState('pending');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const storedChoice = window.localStorage.getItem(STORAGE_KEY);
    if (storedChoice === 'accepted' || storedChoice === 'declined') {
      setConsentChoice(storedChoice);
    }

    return undefined;
  }, []);

  const setChoice = (value) => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, value);
    setConsentChoice(value);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (consentChoice !== 'pending') {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="container cookie-banner-content">
        <p>
          This site uses essential cookies for the experience and may load Google Maps content when you accept optional cookies.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="button button-ghost" onClick={() => setChoice('declined')}>
            Decline optional cookies
          </button>
          <button type="button" className="button button-accent" onClick={() => setChoice('accepted')}>
            Accept optional cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
