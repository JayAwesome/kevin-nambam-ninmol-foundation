import { useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { upcomingEvents } from '../siteData';
import { sanitizeEmail, sanitizePlainText, validatePublicForm } from '../utils/formSecurity';

function EventsPage() {
  const { t } = useLanguage();
  usePageTitle('Events');
  const localizedEvents = t('content.upcomingEvents') || [];
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: sanitizePlainText(formData.get('name'), 120),
      email: sanitizeEmail(formData.get('email')),
      organization: sanitizePlainText(formData.get('organization'), 160),
      event: sanitizePlainText(formData.get('event'), 160),
      notes: sanitizePlainText(formData.get('notes'), 600),
    };
    const validation = validatePublicForm({
      values,
      honeypot: sanitizePlainText(formData.get('website'), 80),
      startedAt: formStartedAt,
      formKey: 'events-form',
    });

    if (!validation.ok) {
      window.alert(validation.reason);
      return;
    }

    console.log('Event registration prepared', values);
    window.alert('Thank you. The foundation team will follow up with event details.');
    form.reset();
    setFormStartedAt(Date.now());
  };

  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Upcoming foundation activities."
        subtitle="Clinics, outreach visits, mentoring sessions, and partner activities will be shared here."
        image="/media/boys-shooting-camp.jpeg"
        imageAlt="Boys participating in a foundation shooting camp"
      />

      <section className="section-space">
        <div className="container events-grid">
          {upcomingEvents.map((event, index) => (
            <article key={event.title} className="event-card">
              <p className="program-tag">{localizedEvents[index]?.location ?? event.location}</p>
              <h3>{localizedEvents[index]?.title ?? event.title}</h3>
              <p>{localizedEvents[index]?.description ?? event.description}</p>
              <span className="meta-line">{event.date}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container form-panel">
          <p className="program-tag">Event Interest</p>
          <h2>Register your interest</h2>
          <form onSubmit={handleSubmit} className="event-form-panel">
            <label className="visually-hidden">
              Leave this field empty
              <input type="text" name="website" tabIndex="-1" autoComplete="off" />
            </label>
            <label>
              Full name
              <input name="name" type="text" required aria-label="Full name" />
            </label>
            <label>
              Email address
              <input name="email" type="email" required aria-label="Email address" />
            </label>
            <label>
              Organization
              <input name="organization" type="text" aria-label="Organization" />
            </label>
            <label>
              Event of interest
              <select name="event" required>
                <option value="">Select an event</option>
                {upcomingEvents.map((event) => (
                  <option key={event.title} value={event.title}>{event.title}</option>
                ))}
              </select>
            </label>
            <label>
              Notes
              <textarea name="notes" rows="4" aria-label="Tell us how you would like to participate" />
            </label>
            <button type="submit" className="button button-accent">Register Interest</button>
          </form>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default EventsPage;
