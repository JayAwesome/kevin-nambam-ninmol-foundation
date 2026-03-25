import { useState } from 'react';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      window.alert('Please enter your email address.');
      return;
    }

    console.log('Newsletter subscription integration coming soon', { email });
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="newsletter-band">
      <div className="container newsletter-layout">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2>Stay updated on our impact.</h2>
          <p>
            Join our email list to receive stories, program updates, recent activities, and
            opportunities to support the foundation’s work.
          </p>
          <p className="micro-note">
            Build with us over the long term through updates that show where support is making a
            difference.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit" className="button button-accent">
            Subscribe
          </button>
        </form>

        {isSubscribed ? (
          <p className="newsletter-success">
            Thank you. Your newsletter signup has been captured in this placeholder flow and is
            ready to be connected to a live mailing system.
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default NewsletterSection;
