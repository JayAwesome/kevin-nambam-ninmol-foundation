const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/g;
const TAG_OR_SCRIPT_PATTERN = /<[^>]*>|javascript:|data:text\/html|onerror=|onload=/i;
const URL_PATTERN = /(https?:\/\/|www\.)/gi;
const MIN_SUBMIT_TIME_MS = 1200;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const SECURITY_LOG_KEY = 'knnf-security-events';
const RATE_LIMIT_KEY_PREFIX = 'knnf-form-rate:';
const MAX_SECURITY_LOG_EVENTS = 25;

export function sanitizePlainText(value, maxLength = 500) {
  return String(value || '')
    .replace(CONTROL_CHARACTER_PATTERN, ' ')
    .replace(/[<>`{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

export function sanitizeEmail(value) {
  return sanitizePlainText(value, 120).toLowerCase();
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function hasSpamPattern(value) {
  const text = String(value || '');
  const urlMatches = text.match(URL_PATTERN) || [];
  return TAG_OR_SCRIPT_PATTERN.test(text) || urlMatches.length > 2;
}

function getStorage() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function logSecurityEvent(type, details = {}) {
  const storage = getStorage();
  const event = {
    type: sanitizePlainText(type, 80),
    at: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    details,
  };

  if (!storage) {
    return;
  }

  try {
    const existingEvents = JSON.parse(storage.getItem(SECURITY_LOG_KEY) || '[]');
    const safeEvents = Array.isArray(existingEvents) ? existingEvents : [];
    safeEvents.unshift(event);
    storage.setItem(SECURITY_LOG_KEY, JSON.stringify(safeEvents.slice(0, MAX_SECURITY_LOG_EVENTS)));
  } catch {
    storage.removeItem(SECURITY_LOG_KEY);
  }
}

export function validatePublicForm({
  values,
  honeypot = '',
  startedAt = Date.now(),
  formKey = 'public-form',
}) {
  const cleanFormKey = sanitizePlainText(formKey, 80) || 'public-form';

  if (honeypot.trim()) {
    logSecurityEvent('bot-honeypot-blocked', { formKey: cleanFormKey });
    return { ok: false, reason: 'Bot submission blocked.' };
  }

  if (Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    logSecurityEvent('rapid-submit-blocked', { formKey: cleanFormKey });
    return { ok: false, reason: 'Please review the form before submitting.' };
  }

  const submittedText = Object.values(values).join(' ');
  if (hasSpamPattern(submittedText)) {
    logSecurityEvent('spam-pattern-blocked', { formKey: cleanFormKey });
    return { ok: false, reason: 'Please remove links or unsupported markup before submitting.' };
  }

  const storage = getStorage();
  if (storage) {
    const rateKey = `${RATE_LIMIT_KEY_PREFIX}${cleanFormKey}`;
    const now = Date.now();

    try {
      const previousSubmissions = JSON.parse(storage.getItem(rateKey) || '[]');
      const recentSubmissions = Array.isArray(previousSubmissions)
        ? previousSubmissions.filter((timestamp) => now - Number(timestamp) < RATE_LIMIT_WINDOW_MS)
        : [];

      if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
        logSecurityEvent('rate-limit-blocked', { formKey: cleanFormKey });
        return {
          ok: false,
          reason: 'Too many submissions. Please wait a few minutes before trying again.',
        };
      }

      recentSubmissions.push(now);
      storage.setItem(rateKey, JSON.stringify(recentSubmissions));
    } catch {
      storage.removeItem(rateKey);
    }
  }

  return { ok: true, reason: '' };
}
