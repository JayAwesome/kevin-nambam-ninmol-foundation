function NewsletterSection() {
  const handleSubscribe = (event) => {
    event.preventDefault();
    console.log('Newsletter subscription integration coming soon');
    window.alert('Newsletter integration coming soon.');
  };

  return (
    <section className="newsletter-band">
      <div className="container newsletter-layout">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2>Stay connected to the mission.</h2>
          <p>
            Receive stories, upcoming events, impact updates, and partnership opportunities
            from the foundation.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input type="email" placeholder="Enter your email address" aria-label="Email address" />
          <button type="submit" className="button button-accent">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
