import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import {
  donationBreakdown,
  donationCurrencies,
  donationTrustSignals,
  donateOptions,
  foundationBankAccounts,
  internationalPaymentOptions,
} from '../siteData';

function formatCurrency(amount, currencyCode, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(amount);
}

async function copyTextToClipboard(text) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function FoundationBankCard({ account, labels, isFeatured = false, onCopy, copiedAccount }) {
  return (
    <article
      className={`bank-account-card bank-account-${account.tone} ${isFeatured ? 'bank-account-card-featured' : ''}`}
      style={{ '--card-index': account.index }}
    >
      <div className="bank-account-top">
        <span className="bank-account-icon" aria-hidden="true">
          {account.flag}
        </span>
        <span className="bank-account-code">{account.code}</span>
      </div>
      <h3>{account.title}</h3>
      <p className="bank-account-description">{account.description}</p>
      <div className="bank-account-meta">
        <span>{labels.currency}</span>
        <strong>
          {account.code} ({account.symbol})
        </strong>
      </div>
      <div className="bank-account-number-panel">
        <span>{labels.accountNumber}</span>
        <strong className="bank-account-number">{account.accountNumber}</strong>
      </div>
      <button
        type="button"
        className="bank-copy-button"
        onClick={() => onCopy(account)}
        aria-label={`${labels.copy} ${account.code}`}
      >
        {copiedAccount === account.code ? labels.copied : labels.copy}
      </button>
    </article>
  );
}

function DonatePage() {
  const { t } = useLanguage();
  usePageTitle(t('donatePage.title'));
  const localizedBreakdown = t('content.donationBreakdown');
  const localizedTrustSignals = t('content.donationTrustSignals');
  const localizedPaymentOptions = t('content.internationalPaymentOptions');
  const localizedBankCopy = t('donatePage.foundationBankAccounts');
  const localizedBankBadges = t('donatePage.foundationBankBadges');

  const [billingMode, setBillingMode] = useState('one-time');
  const [currencyCode, setCurrencyCode] = useState('NGN');
  const [selectedAmount, setSelectedAmount] = useState(donateOptions[1].amount);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedBankCode, setSelectedBankCode] = useState('NGN');
  const [copiedAccount, setCopiedAccount] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

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

  const bankAccounts = useMemo(
    () =>
      foundationBankAccounts.map((account, index) => ({
        ...account,
        ...(Array.isArray(localizedBankCopy) ? localizedBankCopy[index] : {}),
        index,
      })),
    [localizedBankCopy],
  );

  const selectedBankAccount =
    bankAccounts.find((account) => account.code === selectedBankCode) || bankAccounts[0];

  const bankLabels = {
    currency: t('donatePage.bankCurrencyLabel'),
    accountNumber: t('donatePage.bankAccountNumberLabel'),
    copy: t('donatePage.copyAccountNumber'),
    copied: t('donatePage.copiedButton'),
  };

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

  const handleCopyAccount = async (account) => {
    try {
      await copyTextToClipboard(account.accountNumber);
      setCopiedAccount(account.code);
      setCopyMessage(t('donatePage.copySuccess'));
      window.setTimeout(() => {
        setCopiedAccount('');
        setCopyMessage('');
      }, 2400);
    } catch (error) {
      console.error('Copy account number failed', error);
      window.alert(t('donatePage.copyUnavailable'));
    }
  };

  return (
    <main>
      <PageHero
        eyebrow={t('donatePage.heroEyebrow')}
        title={t('donatePage.heroTitle')}
        subtitle={t('donatePage.subtitle')}
        image="/media/program-certificate.jpeg"
      />

      <section className="section-space">
        <div className="container donate-page-layout">
          <div>
            <SectionIntro
              eyebrow={t('donatePage.giveEyebrow')}
              title={t('donatePage.giveTitle')}
              text={t('donatePage.chooseText')}
              ctaLabel={t('ui.seeImpact')}
              ctaTo="/impact"
            />

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

            <div className="donation-tier-intro">
              <p className="program-tag">{t('donatePage.impactIntroTag')}</p>
              <p>{t('donatePage.impactIntroText')}</p>
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
                  <p className="donation-option-impact">{option.impact}</p>
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

            <p className="donation-cta-copy">
              {t('donatePage.ctaCopy')}
            </p>

            <p className="currency-conversion-note">
              {t('donatePage.conversionNote')} {formatCurrency(effectiveBaseAmount || 0, 'NGN', 'en-NG')} ={' '}
              {formatCurrency(convertedAmount || 0, selectedCurrency.code, selectedCurrency.locale)}
            </p>

            <div className="secure-payment-box">
              <strong>{t('donatePage.secureTitle')}</strong>
              <p>{t('donatePage.secureText')}</p>
              <p className="micro-note">{t('donatePage.secureNote')}</p>
              <div className="trust-badge-row">
                {localizedTrustSignals.map((item) => (
                  <span key={item} className="trust-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="donation-side-stack">
            <article className="info-panel">
              <p className="program-tag">{t('donatePage.fundUseTag')}</p>
              <h2>{t('donatePage.fundUseTitle')}</h2>
              <p>{t('donatePage.fundUseText')}</p>
              <p className="donation-fund-note">
                {t('donatePage.fundUseNote')}
              </p>
              <p className="micro-note">{t('donatePage.fundUseMicro')}</p>
              <div className="donation-breakdown-list">
                {donationBreakdown.map((item, index) => (
                  <div key={item.title} className="donation-breakdown-item">
                    <div className="donation-breakdown-header">
                      <h3>{localizedBreakdown[index]?.title ?? item.title}</h3>
                      <strong>{item.share}</strong>
                    </div>
                    <p>{localizedBreakdown[index]?.detail ?? item.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="info-panel">
              <p className="program-tag">{t('donatePage.donorEyebrow')}</p>
              <h2>{t('donatePage.donorTitle')}</h2>
              <p>{t('donatePage.donorIntro')}</p>
              <p className="donor-reassurance">{t('donatePage.donorReassurance')}</p>
              <p className="donation-assurance">{t('donatePage.donorAssurance')}</p>
              <p className="micro-note">{t('donatePage.paymentNote')}</p>
              <ul className="opportunity-list">
                {localizedPaymentOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space foundation-bank-section" aria-labelledby="foundation-bank-title">
        <div className="container">
          <div className="foundation-bank-shell">
            <div className="foundation-bank-heading">
              <p className="program-tag">{t('donatePage.secureBankEyebrow')}</p>
              <h2 id="foundation-bank-title">{t('donatePage.bankHeading')}</h2>
              <p>{t('donatePage.bankIntro')}</p>
              <strong>{t('donatePage.bankChoice')}</strong>
            </div>

            <div className="bank-tab-row" role="tablist" aria-label={t('donatePage.bankTabLabel')}>
              {bankAccounts.map((account) => (
                <button
                  key={account.code}
                  type="button"
                  role="tab"
                  aria-selected={selectedBankCode === account.code}
                  className={selectedBankCode === account.code ? 'bank-tab-active' : ''}
                  onClick={() => setSelectedBankCode(account.code)}
                >
                  <span aria-hidden="true">{account.flag}</span>
                  {account.code}
                </button>
              ))}
            </div>

            {copyMessage ? (
              <p className="bank-copy-toast" role="status" aria-live="polite">
                {copyMessage}
              </p>
            ) : null}

            <div className="bank-account-feature-area">
              <div className="bank-selected-copy">
                <p className="program-tag">{t('donatePage.bankSelectedLabel')}</p>
                <h3>{selectedBankAccount?.title}</h3>
                <p>{selectedBankAccount?.description}</p>
                <span>{selectedBankAccount?.donorStyle}</span>
              </div>
              {selectedBankAccount ? (
                <FoundationBankCard
                  account={selectedBankAccount}
                  labels={bankLabels}
                  isFeatured
                  onCopy={handleCopyAccount}
                  copiedAccount={copiedAccount}
                />
              ) : null}
            </div>

            <div>
              <div className="bank-grid-heading">
                <h3>{t('donatePage.bankAllAccounts')}</h3>
              </div>
              <div className="bank-account-grid">
                {bankAccounts.map((account) => (
                  <FoundationBankCard
                    key={account.code}
                    account={account}
                    labels={bankLabels}
                    onCopy={handleCopyAccount}
                    copiedAccount={copiedAccount}
                  />
                ))}
              </div>
            </div>

            <blockquote className="bank-donation-notice">{t('donatePage.bankNotice')}</blockquote>

            <div className="bank-trust-grid" aria-label={t('donatePage.bankTrustLabel')}>
              {(Array.isArray(localizedBankBadges) ? localizedBankBadges : []).map((badge) => (
                <span key={badge} className="bank-trust-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default DonatePage;
