import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import RecaptchaField from '../components/RecaptchaField';
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

const volunteerPathways = [
  {
    title: 'Mentor young people',
    text: 'Share guidance, encouragement, and life skills with children and youth who need positive role models.',
  },
  {
    title: 'Support sports clinics',
    text: 'Assist with basketball sessions, registration, equipment, safety, and team activities during foundation programs.',
  },
  {
    title: 'Serve communities',
    text: 'Help with outreach visits, school engagement, humanitarian support, media, logistics, and follow-up communication.',
  },
];

function GetInvolvedPage() {
  const { t } = useLanguage();
  usePageTitle(t('getInvolvedPage.title'));
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [captchaToken, setCaptchaToken] = useState('');

  const showStatusMessage = (message) => {
    console.log(message);
    window.alert(message);
  };

  const handleSubmit = (event) => {
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

    if (!captchaToken) {
      window.alert('Please complete the security verification before submitting your volunteer interest.');
      return;
    }

    const responseField = form.elements.namedItem('g-recaptcha-response');
    if (responseField) {
      responseField.value = captchaToken;
    }

    form.reset();
    setCaptchaToken('');
    setFormStartedAt(Date.now());
    showStatusMessage('Thank you. Please contact the foundation team to complete your volunteer interest.');
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
              title="Volunteer your time, skills, and heart."
              text="Every program becomes stronger when committed people stand with the foundation. Whether you can mentor, coach, organize, document activities, or support outreach, your service helps young people feel seen, guided, and encouraged."
            />
            <p className="registration-info" style={{ marginTop: '0.6rem', color: 'var(--muted)', fontSize: '0.95rem' }}>
              Registered: Kevin NanBam Ninmol Foundation — IT No. 8856240 — Registered 24 September 2025 — Status: Active (Incorporated Trustee, Nigeria)
            </p>
            <div className="volunteer-note-card">
              <h3>Your presence can strengthen a child&apos;s confidence.</h3>
              <p>
                Tell us the skills, experience, or availability you would like to offer. The foundation team will review your interest and connect you to a role that fits the work on the ground.
              </p>
            </div>
            <div className="volunteer-pathway-grid" aria-label="Ways to volunteer">
              {volunteerPathways.map((item) => (
                <article className="volunteer-pathway-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <form
              id="volunteer-form"
              className="event-form-panel contact-form-panel"
              onSubmit={handleSubmit}
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
              <RecaptchaField action="volunteer_form" onToken={setCaptchaToken} />
              <input type="hidden" name="g-recaptcha-response" value={captchaToken} />
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
