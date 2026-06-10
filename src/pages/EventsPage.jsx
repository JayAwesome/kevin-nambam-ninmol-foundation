import { useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { upcomingEvents } from '../siteData';
import {
  isValidEmail,
  sanitizeEmail,
  sanitizePlainText,
  validatePublicForm,
} from '../utils/formSecurity';

function EventsPage() {
  const { t } = useLanguage();
  const localizedEvents = t('content.upcomingEvents');
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  usePageTitle(t('nav.events'));

  const handleRegister = (title) => {
    console.log('Event registration interest', { title });
    window.alert(`Thank you. Please contact the foundation team to complete registration for "${title}".`);
  };

  return (
    <main>
      <PageHero
        eyebrow={t('nav.events')}
        title={t('eventsPage.heroTitle')}
        subtitle={t('eventsPage.heroSubtitle')}
        image="/media/youth-court-training-wide.jpeg"
        imageAlt="Young athletes participating in an outdoor basketball clinic"
      />

      <section className="section-space">
        <div className="container events-grid">
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <article key={event.title} className="event-card">
                <p className="program-tag">{localizedEvents[index]?.location ?? event.location}</p>
                <h3>{localizedEvents[index]?.title ?? event.title}</h3>
                <p>{localizedEvents[index]?.description ?? event.description}</p>
                <span className="meta-line">{event.date}</span>
                <button type="button" className="button button-ghost" onClick={() => handleRegister(localizedEvents[index]?.title ?? event.title)}>
                  {t('eventsPage.registerInterest')}
                </button>
              </article>
            ))}
          </div>

          <form
            className="event-form-panel"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const formData = new FormData(form);
              const payload = {
                name: sanitizePlainText(formData.get('name'), 100),
                email: sanitizeEmail(formData.get('email')),
                organization: sanitizePlainText(formData.get('organization'), 140),
                selectedEvent: sanitizePlainText(formData.get('selectedEvent'), 160),
                notes: sanitizePlainText(formData.get('notes'), 800),
              };
              const validation = validatePublicForm({
                values: payload,
                honeypot: sanitizePlainText(formData.get('website'), 100),
                startedAt: formStartedAt,
                formKey: 'events',
              });

              if (!validation.ok) {
                window.alert(validation.reason);
                return;
              }

              if (!payload.name || !isValidEmail(payload.email) || !payload.selectedEvent) {
                window.alert('Please enter your name, a valid email address, and select an event.');
                return;
              }

              handleRegister(payload.selectedEvent || t('eventsPage.generalRegistration'));
              form.reset();
              setFormStartedAt(Date.now());
            }}
          >
            <label className="form-honeypot">
              Website
              <input type="text" name="website" tabIndex="-1" autoComplete="off" />
            </label>
            <p className="program-tag">{t('eventsPage.formTag')}</p>
            <h2>{t('eventsPage.formTitle')}</h2>
            <input
              type="text"
              name="name"
              placeholder={t('getInvolvedPage.fullName')}
              aria-label={t('getInvolvedPage.fullName')}
              autoComplete="name"
              maxLength="100"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('getInvolvedPage.email')}
              aria-label={t('getInvolvedPage.email')}
              autoComplete="email"
              maxLength="120"
              required
            />
            <input
              type="text"
              name="organization"
              placeholder={t('eventsPage.organization')}
              aria-label={t('eventsPage.organization')}
              maxLength="140"
            />
            <select name="selectedEvent" defaultValue="" required aria-label={t('eventsPage.selectEvent')}>
              <option value="" disabled>
                {t('eventsPage.selectEvent')}
              </option>
              {upcomingEvents.map((event, index) => (
                <option key={event.title} value={localizedEvents[index]?.title ?? event.title}>
                  {localizedEvents[index]?.title ?? event.title}
                </option>
              ))}
            </select>
            <textarea
              name="notes"
              rows="4"
              placeholder={t('eventsPage.notes')}
              aria-label={t('eventsPage.notes')}
              maxLength="800"
            />
            <button type="submit" className="button button-accent">
              {t('eventsPage.submit')}
            </button>
          </form>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default EventsPage;
