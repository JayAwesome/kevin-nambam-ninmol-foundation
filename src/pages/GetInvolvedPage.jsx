import { useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import usePageTitle from '../hooks/usePageTitle';
import { donateOptions, sponsorOptions } from '../siteData';

function GetInvolvedPage() {
  usePageTitle('Get Involved');

  const [selectedAmount, setSelectedAmount] = useState(donateOptions[2].amount);
  const [customAmount, setCustomAmount] = useState('');

  const amount = customAmount ? Number(customAmount) || 0 : selectedAmount;

  const showComingSoon = (message, payload) => {
    console.log(message, payload);
    window.alert(message);
  };

  return (
    <main>
      <PageHero
        eyebrow="Get Involved"
        title="Your impact starts here."
        subtitle="Support the mission through giving, volunteering, partnerships, and sponsorship."
        image="/media/community-group.jpeg"
      />

      <section className="section-space">
        <div className="container action-grid">
          <article className="action-card">
            <p className="program-tag">Donate</p>
            <h2>Make a Donation</h2>
            <p className="action-copy">Every dollar directly funds our programs.</p>
            <div className="donation-preset-grid">
              {donateOptions.map((option) => (
                <button
                  key={option.amount}
                  type="button"
                  className={`donation-option ${selectedAmount === option.amount && !customAmount ? 'donation-option-selected' : ''}`}
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setCustomAmount('');
                  }}
                >
                  <strong>${option.amount}</strong>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
            <label className="custom-amount-field">
              <span className="custom-amount-prefix">$</span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
              />
            </label>
            <button
              type="button"
              className="button button-accent action-button"
              onClick={() =>
                showComingSoon(`Donation integration coming soon. Selected amount: $${amount || 0}`, {
                  amount,
                })
              }
            >
              Donate Now
            </button>
            <p className="micro-note">Paystack or Stripe integration placeholder for now.</p>
          </article>

          <article className="action-card">
            <p className="program-tag">Volunteer</p>
            <h2>Volunteer</h2>
            <p className="action-copy">Lend your time, skills, and heart.</p>
            <p>
              From coaching basketball clinics to mentoring youth, your time makes a lasting
              impact. We&apos;re looking for passionate individuals who believe every child
              deserves a shot at greatness.
            </p>
            <div className="action-media">
              <img
                src="/media/hero-court.jpeg"
                alt="Founder coaching young players"
                className="media-focus-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <button
              type="button"
              className="button button-ghost action-button"
              onClick={() => showComingSoon('Volunteer form integration coming soon.')}
            >
              Become a Volunteer
            </button>
          </article>

          <article className="action-card">
            <p className="program-tag">Partner With Us</p>
            <h2>Partner With Us</h2>
            <p className="action-copy">
              We partner with corporations, foundations, and organizations that share our
              vision. Together, we amplify impact.
            </p>
            <p>
              If your organization wants to support education, sports, or the girl child
              initiative, let&apos;s talk. We&apos;re open to sponsorships, in-kind donations, and
              collaborative programs.
            </p>
            <ul className="opportunity-list">
              {sponsorOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="button button-accent action-button"
              onClick={() => showComingSoon('Partnership contact integration coming soon.')}
            >
              Partner With Us
            </button>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default GetInvolvedPage;
