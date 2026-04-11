import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import {
  internshipOpportunities,
  involvementBenefits,
  sponsorOptions,
} from '../siteData';

function GetInvolvedPage() {
  usePageTitle('Get Involved');

  const showComingSoon = (message, payload) => {
    console.log(message, payload);
    window.alert(message);
  };

  return (
    <main>
      <PageHero
        eyebrow="Get Involved"
        title="Turn your support into active impact."
        subtitle="This page is designed to help visitors move from interest to action through volunteering, partnership, sponsorship, and internship opportunities."
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container">
          <SectionIntro
            eyebrow="Why Get Involved"
            title="There are meaningful ways to contribute at every level."
            text="Whether you are an individual, student, organization, or sponsor, getting involved helps expand the foundation's reach and strengthens support for young people."
            centered
            ctaLabel="Read more on Programs"
            ctaTo="/programs"
          />
          <div className="values-grid">
            {involvementBenefits.map((item) => (
              <article key={item} className="value-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-alt">
        <div className="container contact-page-grid">
          <div>
            <SectionIntro
              eyebrow="Volunteer"
              title="Volunteer signup form"
              text="Give your time, skills, and heart to support youth development, outreach activities, mentoring, and events."
              ctaLabel="Read more on Impact"
              ctaTo="/impact"
            />
            <form
              className="event-form-panel contact-form-panel"
              onSubmit={(event) => {
                event.preventDefault();
                showComingSoon('Volunteer signup integration coming soon.');
              }}
            >
              <input type="text" placeholder="Full name" aria-label="Full name" />
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <input type="tel" placeholder="Phone number" aria-label="Phone number" />
              <input type="text" placeholder="Area of interest" aria-label="Area of interest" />
              <textarea
                rows="5"
                placeholder="Tell us how you would like to help"
                aria-label="Tell us how you would like to help"
              />
              <button type="submit" className="button button-accent">
                Submit Volunteer Interest
              </button>
            </form>
          </div>

          <div className="contact-aside-stack">
            <article className="info-panel">
              <p className="program-tag">Volunteer Benefits</p>
              <h2>Why volunteer with us?</h2>
              <ul className="opportunity-list">
                <li>Support real programs that directly serve young people</li>
                <li>Use your skills in a meaningful, community-rooted setting</li>
                <li>Contribute to a mission centered on hope and opportunity</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container action-grid">
          <article className="action-card">
            <p className="program-tag">Partnership Opportunities</p>
            <h2>Partner with the foundation</h2>
            <p>
              We welcome partnerships with organizations, schools, institutions, and community
              groups that want to support youth development through sports, education, and
              mentoring.
            </p>
            <button
              type="button"
              className="button button-accent"
              onClick={() => showComingSoon('Partnership contact integration coming soon.')}
            >
              Explore Partnership
            </button>
          </article>

          <article className="action-card">
            <p className="program-tag">Sponsorship Options</p>
            <h2>Sponsor a program or initiative</h2>
            <ul className="opportunity-list">
              {sponsorOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="button button-ghost"
              onClick={() => showComingSoon('Sponsorship enquiry integration coming soon.')}
            >
              Become a Sponsor
            </button>
          </article>

          <article className="action-card">
            <p className="program-tag">Internship Opportunities</p>
            <h2>Learn while contributing</h2>
            <ul className="opportunity-list">
              {internshipOpportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="button button-accent"
              onClick={() => showComingSoon('Internship application integration coming soon.')}
            >
              Apply for Internship
            </button>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default GetInvolvedPage;
