import { useState } from 'react';
import { donateOptions } from '../siteData';

function GetInvolvedPage() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');

  const effectiveAmount = customAmount ? Number(customAmount) || 0 : selectedAmount;

  const handleDonation = () => {
    console.log('Donation integration coming soon', { amount: effectiveAmount });
    window.alert(`Donation integration coming soon. Selected amount: $${effectiveAmount || 0}`);
  };

  const handleVolunteer = () => {
    console.log('Volunteer form integration coming soon');
    window.alert('Volunteer signup integration coming soon.');
  };

  const handlePartner = () => {
    console.log('Partnership contact integration coming soon');
    window.alert('Partnership contact integration coming soon.');
  };

  return (
    <main>
      <section className="route-hero route-hero-involved">
        <div className="container route-hero-inner">
          <p className="eyebrow">Get Involved</p>
          <h1>Get Involved</h1>
          <p className="route-hero-subtitle">Your impact starts here.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="action-grid">
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
                  min="0"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                />
              </label>

              <button type="button" className="button button-accent action-button" onClick={handleDonation}>
                Donate Now
              </button>
            </article>

            <article className="action-card">
              <p className="program-tag">Volunteer</p>
              <h2>Volunteer</h2>
              <p className="action-copy">Lend your time, skills, and heart.</p>
              <p>
                From coaching basketball clinics to mentoring youth, your time makes a
                lasting impact. We&apos;re looking for passionate individuals who believe every
                child deserves a shot at greatness.
              </p>
              <div className="action-media">
                <img src="/media/founder-action.jpeg" alt="Kevin training with basketballs on a court" />
              </div>
              <button type="button" className="button button-ghost action-button" onClick={handleVolunteer}>
                Become a Volunteer
              </button>
            </article>

            <article className="action-card">
              <p className="program-tag">Partnerships</p>
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
              <div className="action-media">
                <img src="/media/outreach-school.jpeg" alt="Children and volunteers gathered during an outreach program" />
              </div>
              <button type="button" className="button button-accent action-button" onClick={handlePartner}>
                Partner With Us
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetInvolvedPage;
