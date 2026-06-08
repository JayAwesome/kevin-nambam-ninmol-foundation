import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

const ACCOUNT_NUMBER_PATTERN = /^\d{10}$/;

const donationAccounts = Object.freeze([
  {
    code: 'NGN',
    title: 'Nigerian Naira Account',
    label: 'NGN Account',
    accountNumber: '3003292343',
    icon: '\u20A6',
  },
  {
    code: 'USD',
    title: 'United States Dollar Account',
    label: 'USD Account',
    accountNumber: '3003292446',
    icon: '$',
  },
  {
    code: 'EUR',
    title: 'Euro Account',
    label: 'EUR Account',
    accountNumber: '3003292642',
    icon: '\u20AC',
  },
  {
    code: 'GBP',
    title: 'British Pound Account',
    label: 'GBP Account',
    accountNumber: '3003292666',
    icon: '\u00A3',
  },
].map(Object.freeze));

const bankName = 'Guaranty Trust Bank (GTBank)';

async function copyAccountNumber(accountNumber) {
  if (!ACCOUNT_NUMBER_PATTERN.test(accountNumber)) {
    throw new Error('Invalid account number');
  }

  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(accountNumber);
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = accountNumber;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function DonatePage() {
  usePageTitle('Donate');
  const [copiedCode, setCopiedCode] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async (account) => {
    try {
      await copyAccountNumber(account.accountNumber);
      setCopiedCode(account.code);
      setShowToast(true);
      window.setTimeout(() => {
        setCopiedCode('');
        setShowToast(false);
      }, 2200);
    } catch (error) {
      console.error('Unable to copy account number', error);
      window.alert('Please copy the account number manually.');
    }
  };

  return (
    <main className="donate-info-page">
      <section className="section-space donation-accounts-section" aria-labelledby="donation-page-title">
        <div className="container donation-accounts-container">
          <header className="donation-accounts-header">
            <h1 id="donation-page-title">Donate to Kevin Nambam Ninmol Foundation</h1>
            <p>All donations are processed through Guaranty Trust Bank (GTBank).</p>
          </header>

          {showToast ? (
            <p className="donation-copy-toast" role="status" aria-live="polite">
              Copied successfully
            </p>
          ) : null}

          <div className="donation-account-grid">
            {donationAccounts.map((account) => (
              <article key={account.code} className="donation-account-card">
                <div className="donation-account-card-top">
                  <span className="donation-account-icon" aria-hidden="true">
                    {account.icon}
                  </span>
                  <span className="donation-account-label">{account.label}</span>
                </div>
                <div>
                  <h2>{account.title}</h2>
                  <p className="donation-account-bank">{bankName}</p>
                  <p className="donation-account-currency">Currency: {account.code}</p>
                </div>
                <div className="donation-account-number-box">
                  <span>Account Number</span>
                  <strong>{account.accountNumber}</strong>
                </div>
                <button
                  type="button"
                  className="button button-accent donation-account-copy"
                  onClick={() => handleCopy(account)}
                  aria-label={`Copy ${account.label} number`}
                >
                  {copiedCode === account.code ? 'Copied' : 'Copy Account Number'}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DonatePage;
