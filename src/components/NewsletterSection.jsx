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
          <h2>Stay connected to the mission.</h2>
          <p>
            Receive stories, program updates, partnership opportunities, and upcoming events from
            the foundation.
          </p>
          <p className="micro-note">
            Subscribe to hear how the work is growing and where support is making a difference.
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
            Thank you. Newsletter integration placeholder confirmed and your subscription flow is
            ready to be connected.
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default NewsletterSection;
