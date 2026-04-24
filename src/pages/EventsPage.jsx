import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { upcomingEvents } from '../siteData';

function EventsPage() {
  const { t } = useLanguage();
  const localizedEvents = t('content.upcomingEvents');
  usePageTitle(t('nav.events'));

  const handleRegister = (title) => {
    console.log('Event registration placeholder', { title });
    window.alert(`Event registration integration coming soon for "${title}".`);
  };

  return (
    <main>
      <PageHero
        eyebrow={t('nav.events')}
        title={t('eventsPage.heroTitle')}
        subtitle={t('eventsPage.heroSubtitle')}
        image="/media/hero-court.jpeg"
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
              handleRegister(t('eventsPage.generalRegistration'));
            }}
          >
            <p className="program-tag">{t('eventsPage.formTag')}</p>
            <h2>{t('eventsPage.formTitle')}</h2>
            <input type="text" placeholder={t('getInvolvedPage.fullName')} />
            <input type="email" placeholder={t('getInvolvedPage.email')} />
            <input type="text" placeholder={t('eventsPage.organization')} />
            <select defaultValue="">
              <option value="" disabled>
                {t('eventsPage.selectEvent')}
              </option>
              {upcomingEvents.map((event, index) => (
                <option key={event.title}>{localizedEvents[index]?.title ?? event.title}</option>
              ))}
            </select>
            <textarea rows="4" placeholder={t('eventsPage.notes')} />
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
