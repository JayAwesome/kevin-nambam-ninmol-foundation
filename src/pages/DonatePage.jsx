import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import usePageTitle from '../hooks/usePageTitle';
import { foundationBankAccounts } from '../siteData';

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
  const localizedBankCopy = t('donatePage.foundationBankAccounts');
  const localizedBankBadges = t('donatePage.foundationBankBadges');

  const [selectedBankCode, setSelectedBankCode] = useState('NGN');
  const [copiedAccount, setCopiedAccount] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

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
      <section className="section-space foundation-bank-section foundation-bank-page-section" aria-labelledby="foundation-bank-title">
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
