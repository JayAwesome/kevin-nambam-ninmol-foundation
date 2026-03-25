import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import NewsletterSection from '../components/NewsletterSection';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
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
  const { t } = useLanguage();
  usePageTitle(t('donatePage.title'));

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
      `${t('donatePage.placeholderAlert')} ${billingMode === 'monthly' ? t('donatePage.monthly') : t('donatePage.oneTime')}: ${formatCurrency(
        convertedAmount || 0,
        selectedCurrency.code,
        selectedCurrency.locale,
      )} (${formatCurrency(effectiveBaseAmount || 0, 'NGN', 'en-NG')} base amount)`,
    );
  };

  return (
    <main>
      <PageHero
        eyebrow={t('donatePage.heroEyebrow')}
        title={t('donatePage.heroTitle')}
        subtitle={t('donatePage.heroSubtitle')}
        image="/media/program-certificate.jpeg"
      />

      <section className="section-space">
        <div className="container donate-page-layout">
          <div>
            <SectionIntro eyebrow={t('donatePage.giveEyebrow')} title={t('donatePage.giveTitle')} text={t('donatePage.giveText')} />

            <div className="billing-toggle" aria-label="Donation frequency">
              <button
                type="button"
                className={billingMode === 'one-time' ? 'billing-active' : ''}
                onClick={() => setBillingMode('one-time')}
              >
                {t('donatePage.oneTime')}
              </button>
              <button
                type="button"
                className={billingMode === 'monthly' ? 'billing-active' : ''}
                onClick={() => setBillingMode('monthly')}
              >
                {t('donatePage.monthly')}
              </button>
            </div>

            <div className="currency-panel">
              <div className="currency-panel-copy">
                <strong>{t('donatePage.chooseCurrency')}</strong>
                <p>{t('donatePage.currencyText')}</p>
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
                placeholder={t('donatePage.customPlaceholder')}
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                aria-label={t('donatePage.customLabel')}
              />
            </label>

            <button type="button" className="button button-accent donate-submit-button" onClick={handleDonate}>
              {effectiveBaseAmount
                ? `${t('donatePage.donateNow')} ${formatCurrency(convertedAmount, selectedCurrency.code, selectedCurrency.locale)}`
                : t('donatePage.donateNow')}
            </button>

            <p className="currency-conversion-note">
              {t('donatePage.conversionNote')} {formatCurrency(effectiveBaseAmount || 0, 'NGN', 'en-NG')} ={' '}
              {formatCurrency(convertedAmount || 0, selectedCurrency.code, selectedCurrency.locale)}
            </p>

            <div className="secure-payment-box">
              <strong>{t('donatePage.secureTitle')}</strong>
              <p>{t('donatePage.secureText')}</p>
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
              <p className="program-tag">{t('donatePage.transparencyEyebrow')}</p>
              <h2>{t('donatePage.transparencyTitle')}</h2>
              <p>{t('donatePage.transparencyBody')}</p>
              <p className="transparency-statement">{t('donatePage.transparencyStatement')}</p>
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
              <p className="program-tag">{t('donatePage.donorEyebrow')}</p>
              <h2>{t('donatePage.donorTitle')}</h2>
              <p>{t('donatePage.donorBody')}</p>
              <p className="donor-reassurance">{t('donatePage.donorReassurance')}</p>
              <p className="micro-note">{t('donatePage.paymentNote')}</p>
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
            <p className="eyebrow">{t('donatePage.ctaEyebrow')}</p>
            <h2>{t('donatePage.ctaTitle')}</h2>
            <p>{t('donatePage.ctaText')}</p>
          </div>
          <div className="cta-band-actions">
            <button type="button" className="button button-accent" onClick={handleDonate}>
              {t('donatePage.giveNow')}
            </button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

export default DonatePage;
