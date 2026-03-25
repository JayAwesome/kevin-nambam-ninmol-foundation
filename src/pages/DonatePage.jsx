import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import usePageTitle from '../hooks/usePageTitle';
import {
  donationBreakdown,
  donationCurrencies,
  donationTrustSignals,
  donateOptions,
  internationalPaymentOptions,
} from '../siteData';

function formatCurrency(amount, currencyCode, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(amount);
}

function DonatePage() {
  usePageTitle('Donate');

  const [billingMode, setBillingMode] = useState('one-time');
  const [currencyCode, setCurrencyCode] = useState('NGN');
  const [selectedAmount, setSelectedAmount] = useState(donateOptions[1].amount);
  const [customAmount, setCustomAmount] = useState('');

  const selectedCurrency = useMemo(
    () => donationCurrencies.find((currency) => currency.code === currencyCode) || donationCurrencies[0],
    [currencyCode],
  );

  const effectiveBaseAmount = useMemo(() => {
    if (customAmount) {
      const parsed = Number(customAmount) || 0;
      return Math.round(parsed / selectedCurrency.rate);
    }
    return selectedAmount;
  }, [customAmount, selectedAmount, selectedCurrency.rate]);

  const convertedAmount = useMemo(
    () => Math.round((effectiveBaseAmount || 0) * selectedCurrency.rate),
    [effectiveBaseAmount, selectedCurrency.rate],
  );

  const handleDonate = () => {
    console.log('Payment integration placeholder', {
      provider: 'Paystack/Flutterwave',
      billingMode,
      baseAmountNgn: effectiveBaseAmount,
      currency: selectedCurrency.code,
      convertedAmount,
    });
    window.alert(
      `Secure payment integration placeholder. ${billingMode === 'monthly' ? 'Monthly' : 'One-time'} donation: ${formatCurrency(
        convertedAmount || 0,
        selectedCurrency.code,
        selectedCurrency.locale,
      )} (${formatCurrency(effectiveBaseAmount || 0, 'NGN', 'en-NG')} base amount)`,
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
              text="Your gift helps the foundation respond to practical needs through youth support, educational access, mentoring, and development initiatives across local and international giving options."
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

            <div className="currency-panel">
              <div className="currency-panel-copy">
                <strong>Choose your currency</strong>
                <p>Base donation amounts are set in NGN and displayed automatically in your selected currency.</p>
              </div>
              <div className="currency-toggle" aria-label="Donation currency">
                {donationCurrencies.map((currency) => (
                  <button
                    key={currency.code}
                    type="button"
                    className={currencyCode === currency.code ? 'currency-active' : ''}
                    onClick={() => setCurrencyCode(currency.code)}
                  >
                    {currency.code}
                  </button>
                ))}
              </div>
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
                  <strong>{formatCurrency(option.amount * selectedCurrency.rate, selectedCurrency.code, selectedCurrency.locale)}</strong>
                  <small>{formatCurrency(option.amount, 'NGN', 'en-NG')}</small>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>

            <label className="custom-amount-field donate-custom-field">
              <span className="custom-amount-prefix">{selectedCurrency.symbol}</span>
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
              Donate {effectiveBaseAmount ? formatCurrency(convertedAmount, selectedCurrency.code, selectedCurrency.locale) : 'Now'}
            </button>

            <p className="currency-conversion-note">
              Approximate conversion: {formatCurrency(effectiveBaseAmount || 0, 'NGN', 'en-NG')} ={' '}
              {formatCurrency(convertedAmount || 0, selectedCurrency.code, selectedCurrency.locale)}
            </p>

            <div className="secure-payment-box">
              <strong>Payment integration placeholder</strong>
              <p>
                Paystack or Flutterwave can be connected here for secure one-time and monthly
                donations.
              </p>
              <div className="trust-badge-row">
                {donationTrustSignals.map((item) => (
                  <span key={item} className="trust-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="donation-side-stack">
            <article className="info-panel">
              <p className="program-tag">Transparency</p>
              <h2>Where your money goes</h2>
              <p>
                Every contribution is used responsibly to create measurable impact. Donations help
                fund direct youth support, educational materials, mentoring activities, outreach
                delivery, and practical development programs.
              </p>
              <div className="donation-breakdown-list">
                {donationBreakdown.map((item) => (
                  <div key={item.title} className="donation-breakdown-item">
                    <div className="donation-breakdown-header">
                      <h3>{item.title}</h3>
                      <strong>{item.share}</strong>
                    </div>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="info-panel">
              <p className="program-tag">Donor Assurance</p>
              <h2>Giving should feel clear, secure, and trustworthy.</h2>
              <p>
                The foundation is committed to responsible stewardship, clear communication, and
                transparent use of resources so supporters can give with confidence.
              </p>
              <p className="donor-reassurance">
                Every contribution is used responsibly to create measurable impact.
              </p>
              <p className="micro-note">
                Payment gateway placeholder: Paystack / Flutterwave
              </p>
              <ul className="opportunity-list">
                {internationalPaymentOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
