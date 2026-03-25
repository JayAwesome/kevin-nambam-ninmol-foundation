import { useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import usePageTitle from '../hooks/usePageTitle';
import { donateOptions } from '../siteData';

function DonatePage() {
  usePageTitle('Donate');

  const [billingMode, setBillingMode] = useState('one-time');

  const handleDonate = (amount) => {
    console.log('Payment integration placeholder', { amount, billingMode });
    window.alert(`Payment integration placeholder. ${billingMode} donation: $${amount}`);
  };

  return (
    <main>
      <PageHero
        eyebrow="Donate"
        title="Give with confidence."
        subtitle="A trustworthy donation experience should feel clear, secure, and transparent."
        image="/media/program-certificate.jpeg"
      />

      <section className="section-space">
        <div className="container donate-layout">
          <article className="action-card">
            <p className="program-tag">Support the Mission</p>
            <h2>Choose how you want to give.</h2>
            <div className="billing-toggle">
              <button
                type="button"
                className={billingMode === 'one-time' ? 'billing-active' : ''}
                onClick={() => setBillingMode('one-time')}
              >
                One-time
              </button>
              <button
                type="button"
                className={billingMode === 'recurring' ? 'billing-active' : ''}
                onClick={() => setBillingMode('recurring')}
              >
                Recurring
              </button>
            </div>
            <div className="donation-preset-grid">
              {donateOptions.map((option) => (
                <button
                  key={option.amount}
                  type="button"
                  className="donation-option"
                  onClick={() => handleDonate(option.amount)}
                >
                  <strong>${option.amount}</strong>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
            <button type="button" className="button button-accent action-button" onClick={() => handleDonate(100)}>
              Paystack / Stripe Placeholder
            </button>
          </article>

          <article className="info-panel transparency-panel">
            <p className="program-tag">Transparency</p>
            <h2>Your support goes directly toward real youth-centered work.</h2>
            <p>
              We are committed to responsible stewardship, transparent communication, and
              practical use of funds across sports access, education support, mentoring, and
              community outreach.
            </p>
            <ul className="opportunity-list">
              <li>Clear mission alignment for every contribution</li>
              <li>Donor-ready presentation for partners and institutions</li>
              <li>Scalable payment integration ready for later connection</li>
            </ul>
          </article>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default DonatePage;
