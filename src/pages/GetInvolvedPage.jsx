import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { sponsorOptions } from '../siteData';
import {
  isValidEmail,
  sanitizeEmail,
  sanitizePlainText,
  validatePublicForm,
} from '../utils/formSecurity';

function GetInvolvedPage() {
  const { t } = useLanguage();
  usePageTitle(t('getInvolvedPage.title'));
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const showStatusMessage = (message) => {
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
              onClick={() => showStatusMessage('Thank you. Please contact the foundation team to discuss partnership opportunities.')}
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
                const form = event.currentTarget;
                const formData = new FormData(form);
                const payload = {
                  name: sanitizePlainText(formData.get('name'), 100),
                  email: sanitizeEmail(formData.get('email')),
                  phone: sanitizePlainText(formData.get('phone'), 30),
                  interest: sanitizePlainText(formData.get('interest'), 140),
                  message: sanitizePlainText(formData.get('message'), 1000),
                };
                const validation = validatePublicForm({
                  values: payload,
                  honeypot: sanitizePlainText(formData.get('website'), 100),
                  startedAt: formStartedAt,
                });

                if (!validation.ok) {
                  window.alert(validation.reason);
                  return;
                }

                if (!payload.name || !isValidEmail(payload.email) || !payload.message) {
                  window.alert('Please enter your name, a valid email address, and how you would like to help.');
                  return;
                }

                form.reset();
                setFormStartedAt(Date.now());
                showStatusMessage('Thank you. Please contact the foundation team to complete your volunteer interest.');
              }}
            >
              <label className="form-honeypot">
                Website
                <input type="text" name="website" tabIndex="-1" autoComplete="off" />
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                aria-label="Full name"
                autoComplete="name"
                maxLength="100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                maxLength="120"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                aria-label="Phone number"
                autoComplete="tel"
                inputMode="tel"
                maxLength="30"
              />
              <input
                type="text"
                name="interest"
                placeholder="Area of interest"
                aria-label="Area of interest"
                maxLength="140"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="How would you like to help?"
                aria-label="How would you like to help?"
                maxLength="1000"
                required
              />
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
                onClick={() => showStatusMessage('Thank you. Please contact the foundation team to discuss sponsorship opportunities.')}
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
