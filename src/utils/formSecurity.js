const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/g;
const TAG_OR_SCRIPT_PATTERN = /<[^>]*>|javascript:|data:text\/html|onerror=|onload=/i;
const URL_PATTERN = /(https?:\/\/|www\.)/gi;
const MIN_SUBMIT_TIME_MS = 1200;

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

export function validatePublicForm({ values, honeypot = '', startedAt = Date.now() }) {
  if (honeypot.trim()) {
    return { ok: false, reason: 'Bot submission blocked.' };
  }

  if (Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    return { ok: false, reason: 'Please review the form before submitting.' };
  }

  const submittedText = Object.values(values).join(' ');
  if (hasSpamPattern(submittedText)) {
    return { ok: false, reason: 'Please remove links or unsupported markup before submitting.' };
  }

  return { ok: true, reason: '' };
}
