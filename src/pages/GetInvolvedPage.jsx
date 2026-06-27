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
        image="/media/idp-mangu-service.jpeg"
        imageAlt="Community members gathered during a foundation service moment"
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
              text="Volunteers help the foundation show up consistently for young people through mentoring, basketball clinics, outreach support, event coordination, media, and community engagement."
            />
            <div className="volunteer-note-card">
              <h3>Your time can strengthen a child&apos;s confidence.</h3>
              <p>
                Tell us the skills, experience, or availability you would like to offer. The foundation team will review your interest and follow up with the best way to get involved.
              </p>
            </div>
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
                  formKey: 'volunteer',
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
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  maxLength="100"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  maxLength="120"
                  required
                />
              </label>
              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength="30"
                />
              </label>
              <label>
                Area of interest
                <input
                  type="text"
                  name="interest"
                  maxLength="140"
                />
              </label>
              <label>
                How would you like to help?
                <textarea
                  name="message"
                  rows="5"
                  maxLength="1000"
                  required
                />
              </label>
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
