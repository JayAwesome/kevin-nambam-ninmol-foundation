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
      `Secure payment integration placeholder. ${billingMode === 'monthly' ? 'Monthly' : 'One-time'} donation: ${formatNaira(
        effectiveAmount || 0,
      )}`,
    );
  };

  return (
    <main>
      <PageHero
        eyebrow="Donate"
        title="Your support creates real change"
        subtitle="This giving page is designed to make donating simple, clear, and trustworthy for every supporter."
        image="/media/program-certificate.jpeg"
      />

      <section className="section-space">
        <div className="container donate-page-layout">
          <div>
            <SectionIntro
              eyebrow="Give Today"
              title="Choose how you want to support the mission."
              text="Your gift helps the foundation respond to practical needs through youth support, educational access, mentoring, and development initiatives."
            />

            <div className="billing-toggle" aria-label="Donation frequency">
              <button
                type="button"
                className={billingMode === 'one-time' ? 'billing-active' : ''}
                onClick={() => setBillingMode('one-time')}
              >
                One-time donation
              </button>
              <button
                type="button"
                className={billingMode === 'monthly' ? 'billing-active' : ''}
                onClick={() => setBillingMode('monthly')}
              >
                Monthly donation
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
              <span className="custom-amount-prefix">N</span>
              <input
                type="number"
                min="0"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                aria-label="Custom donation amount"
              />
            </label>

            <button
              type="button"
              className="button button-accent donate-submit-button"
              onClick={handleDonate}
            >
              Donate {effectiveAmount ? formatNaira(effectiveAmount) : 'Now'}
            </button>

            <div className="secure-payment-box">
              <strong>Payment integration placeholder</strong>
              <p>
                Paystack or Flutterwave can be connected here for secure one-time and monthly
                donations.
              </p>
            </div>
          </div>

          <div className="donation-side-stack">
            <article className="info-panel">
              <p className="program-tag">Transparency</p>
              <h2>Where your money goes</h2>
              <p>
                Donations help fund direct youth support, educational materials, mentoring
                activities, outreach delivery, and practical development programs.
              </p>
              <ul className="opportunity-list">
                <li>Basic needs and direct support for children and youth</li>
                <li>Educational materials and learning resources</li>
                <li>Mentorship sessions and life-skills engagement</li>
                <li>Youth development initiatives and program delivery</li>
              </ul>
            </article>

            <article className="info-panel">
              <p className="program-tag">Accountability</p>
              <h2>Giving should feel clear and trustworthy.</h2>
              <p>
                The foundation is committed to responsible stewardship, clear communication, and
                transparent use of resources so supporters can give with confidence.
              </p>
              <p className="micro-note">
                Payment gateway placeholder: Paystack / Flutterwave
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-accent-band">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Donate</p>
            <h2>Your support creates real change</h2>
            <p>
              Every donation helps extend opportunity, guidance, and practical support to young
              people who need it most.
            </p>
          </div>
          <div className="cta-band-actions">
            <button type="button" className="button button-accent" onClick={handleDonate}>
              Give Now
            </button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default DonatePage;
