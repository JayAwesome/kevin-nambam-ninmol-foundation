import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { sponsorOptions } from '../siteData';

function GetInvolvedPage() {
  const { t } = useLanguage();
  usePageTitle(t('getInvolvedPage.title'));

  const showComingSoon = (message) => {
    console.log(message);
    window.alert(message);
  };

  return (
    <main>
      <PageHero
        eyebrow="Get Involved"
        title="Turn support into action."
        subtitle="Choose the clearest way to support the foundation: donate, volunteer, partner, or sponsor a project."
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container action-grid">
          <article className="action-card">
            <p className="program-tag">Donate</p>
            <h2>Give financially.</h2>
            <p>Support direct outreach, education, relief, and youth empowerment through foundation accounts.</p>
            <Link to="/donate" className="button button-accent">
              Donate
            </Link>
          </article>

          <article className="action-card">
            <p className="program-tag">Volunteer</p>
            <h2>Lend your time.</h2>
            <p>Help with clinics, mentoring, outreach, communications, logistics, and community engagement.</p>
            <a href="#volunteer-form" className="button button-ghost">
              Volunteer
            </a>
          </article>

          <article className="action-card">
            <p className="program-tag">Partner</p>
            <h2>Collaborate with us.</h2>
            <p>Schools, organizations, churches, businesses, and institutions can help extend responsible impact.</p>
            <button
              type="button"
              className="button button-accent"
              onClick={() => showComingSoon('Partnership contact integration coming soon.')}
            >
              Partner
            </button>
          </article>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container contact-page-grid">
          <div>
            <SectionIntro
              eyebrow="Volunteer"
              title="Tell us how you want to help."
              text="This form is ready to connect to a backend or email workflow when you are ready."
            />
            <form
              id="volunteer-form"
              className="event-form-panel contact-form-panel"
              onSubmit={(event) => {
                event.preventDefault();
                showComingSoon('Volunteer form integration coming soon.');
              }}
            >
              <input type="text" placeholder="Full name" aria-label="Full name" />
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <input type="tel" placeholder="Phone number" aria-label="Phone number" />
              <input type="text" placeholder="Area of interest" aria-label="Area of interest" />
              <textarea rows="5" placeholder="How would you like to help?" aria-label="How would you like to help?" />
              <button type="submit" className="button button-accent">
                Submit Volunteer Interest
              </button>
            </form>
          </div>

          <aside className="contact-aside-stack">
            <article className="info-panel">
              <p className="program-tag">Sponsor a Project</p>
              <h2>Fund a specific area of work.</h2>
              <ul className="opportunity-list">
                {sponsorOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                type="button"
                className="button button-ghost"
                onClick={() => showComingSoon('Sponsorship request integration coming soon.')}
              >
                Sponsor a Project
              </button>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default GetInvolvedPage;
