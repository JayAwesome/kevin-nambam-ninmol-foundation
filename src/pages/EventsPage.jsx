import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import usePageTitle from '../hooks/usePageTitle';
import { upcomingEvents } from '../siteData';

function EventsPage() {
  usePageTitle('Events');

  const handleRegister = (title) => {
    console.log('Event registration placeholder', { title });
    window.alert(`Event registration integration coming soon for "${title}".`);
  };

  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Upcoming events that bring community, partners, and youth together."
        subtitle="A globally credible NGO website should make participation easy."
        image="/media/hero-court.jpeg"
      />

      <section className="section-space">
        <div className="container events-grid">
          <div className="events-list">
            {upcomingEvents.map((event) => (
              <article key={event.title} className="event-card">
                <p className="program-tag">{event.location}</p>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <span className="meta-line">{event.date}</span>
                <button type="button" className="button button-ghost" onClick={() => handleRegister(event.title)}>
                  Register Interest
                </button>
              </article>
            ))}
          </div>

          <form
            className="event-form-panel"
            onSubmit={(event) => {
              event.preventDefault();
              handleRegister('General Event Registration');
            }}
          >
            <p className="program-tag">Registration Form</p>
            <h2>Register for upcoming events.</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Organization (optional)" />
            <select defaultValue="">
              <option value="" disabled>
                Select an event
              </option>
              {upcomingEvents.map((event) => (
                <option key={event.title}>{event.title}</option>
              ))}
            </select>
            <textarea rows="4" placeholder="Any questions or notes?" />
            <button type="submit" className="button button-accent">
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default EventsPage;
