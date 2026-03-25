import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import { donateOptions } from '../siteData';

function formatNaira(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}

function DonatePage() {
  usePageTitle('Donate');

  const [billingMode, setBillingMode] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(donateOptions[1].amount);
  const [customAmount, setCustomAmount] = useState('');

  const effectiveAmount = useMemo(() => {
    if (customAmount) {
      return Number(customAmount) || 0;
    }
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const handleDonate = () => {
    console.log('Payment integration placeholder', {
      provider: 'Paystack/Flutterwave',
      billingMode,
      amount: effectiveAmount,
    });
    window.alert(
      `Secure payment integration placeholder. ${billingMode === 'recurring' ? 'Monthly' : 'One-time'} gift: ${formatNaira(
        effectiveAmount || 0,
      )}`,
    );
  };

  return (
    <main>
      <PageHero
        eyebrow="Donate"
        title="Give with confidence and help expand real opportunity."
        subtitle="A strong donation page should make generosity feel safe, clear, and meaningful."
        image="/media/program-certificate.jpeg"
      />

      <section className="section-space">
        <div className="container donate-page-layout">
          <div>
            <SectionIntro
              eyebrow="Support the Mission"
              title="Choose an amount and see what your giving can make possible."
              text="Your donation helps fund sports access, education support, mentorship, and practical community-based outreach."
            />

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
                Monthly
              </button>
            </div>

            <div className="donation-preset-grid donation-preset-grid-large">
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
                  <strong>{formatNaira(option.amount)}</strong>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>

            <label className="custom-amount-field donate-custom-field">
              <span className="custom-amount-prefix">₦</span>
              <input
                type="number"
                min="0"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
              />
            </label>

            <button type="button" className="button button-accent donate-submit-button" onClick={handleDonate}>
              Give {effectiveAmount ? formatNaira(effectiveAmount) : 'Now'}
            </button>

            <div className="secure-payment-box">
              <strong>Secure payment integration placeholder</strong>
              <p>
                Paystack or Flutterwave can be connected here for secure one-time and
                recurring giving.
              </p>
            </div>
          </div>

          <div className="donation-side-stack">
            <article className="info-panel">
              <p className="program-tag">Transparency</p>
              <h2>How funds are used</h2>
              <p>
                Donations help the foundation deliver basketball clinics, education support,
                mentorship, outreach initiatives, and focused opportunities for the girl
                child. We are committed to using resources responsibly and in line with the
                mission.
              </p>
              <ul className="opportunity-list">
                <li>Sports access and youth development activities</li>
                <li>Learning materials and scholarship-related support</li>
                <li>Mentorship, outreach, and community engagement</li>
                <li>Program delivery with accountability and stewardship</li>
              </ul>
            </article>

            <article className="info-panel">
              <p className="program-tag">Donor Reassurance</p>
              <h2>Clear, secure, and trustworthy giving.</h2>
              <p>
                We want every supporter to feel confident in their decision to give. This
                donation flow is being designed for clarity, transparency, and future secure
                payment integration.
              </p>
              <p className="micro-note">
                Payment gateway placeholder: Paystack / Flutterwave
              </p>
            </article>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default DonatePage;
