import { useEffect, useState } from 'react';

const stats = [
  { value: '0+', label: 'Youth Impacted' },
  { value: '0', label: 'Scholarships Awarded' },
  { value: '0', label: 'Communities Served' },
  { value: '$0M+', label: 'Funds Raised' },
];

const goals = [
  {
    title: 'Growth Mindset',
    text: 'Encourage young people to view challenges as opportunities for growth and development.',
  },
  {
    title: 'Life Skills',
    text: 'Develop life skills such as problem-solving, communication, and teamwork.',
  },
  {
    title: 'Mentorship',
    text: 'Provide guidance and support from positive role models who inspire and motivate young people.',
  },
  {
    title: 'Emotional Well-being',
    text: 'Promote healthy coping mechanisms to help young people manage their emotions effectively.',
  },
];

const programs = [
  {
    title: 'Scholars of Tomorrow',
    subtitle: 'Education & Scholarships',
    text: 'Full scholarships, mentorship, and academic support to underserved youth. Building the leaders of tomorrow.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fear No Fear Basketball Clinics',
    subtitle: 'Sports & Discipline',
    text: 'Free camps, equipment, and coaching that teach discipline, teamwork, and a resilient mindset.',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'The Girl Child Initiative',
    subtitle: 'Mentorship & Advocacy',
    text: 'Helping the girl child realize her sex is not a disadvantage. Through mentorship and support, she can make a powerful difference in the world.',
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Game Plan for Life',
    subtitle: 'Mentorship & Life Skills',
    text: "Workshops on problem-solving, communication, and emotional management to prepare youth for life's challenges.",
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
  },
];

const objectives = [
  'Establish programs that promote emotional well-being, resilience, and life skills development.',
  'Build partnerships with schools, communities, organizations, and businesses to reach the young and provide resources.',
  'Train staff and volunteers to ensure they are equipped to support young people effectively.',
  'Evaluate and improve programs to meet the needs of young people, balancing gender issues in all initiatives.',
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Mission', href: '#mission' },
  { label: 'Programs', href: '#programs' },
  { label: 'Get Involved', href: '#involved' },
];

function IconLink({ href, label, children }) {
  return (
    <a href={href} aria-label={label} className="social-link">
      {children}
    </a>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
        <div className="container nav-wrap">
          <a href="#home" className="brand-mark">
            <span className="brand-name">Kevin NanBam Ninmol Foundation</span>
            <span className="brand-tag">Fear No Fear</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            Menu
          </button>

          <nav
            id="primary-navigation"
            className={`site-nav ${isMenuOpen ? 'site-nav-open' : ''}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-backdrop" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Empowering Youth Through Sports, Education & Opportunity</p>
              <h1>FEAR NO FEAR</h1>
              <p className="hero-text">
                Using basketball and my experiences to encourage youths to have hope and
                positive mindsets rather than letting fear hold them back.
              </p>
              <div className="hero-actions">
                <a href="#involved" className="button button-primary">
                  Join Our Mission
                </a>
                <a href="#story" className="button button-secondary">
                  Read Our Story
                </a>
              </div>
            </div>

            <aside className="hero-panel">
              <p className="panel-kicker">Community. Hope. Purpose.</p>
              <h2>One story can become a platform for thousands.</h2>
              <p>
                The foundation turns lived experience into mentorship, scholarships, clinics,
                and safe spaces where young people can imagine a bigger future.
              </p>
            </aside>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section section-pad" id="story">
          <div className="container story-grid">
            <div className="section-heading">
              <p className="eyebrow eyebrow-accent">Our Story</p>
              <h2>From a struggling background to national and international courts.</h2>
              <p>
                Kevin NanBam Ninmol came from a challenging family background. Basketball
                gave him an opportunity to further his education, and education gave him the
                opportunity to become a senior officer. Regardless of negative family
                background or race, anyone can make it. The foundation exists to be that same
                guiding force for thousands of young people.
              </p>
            </div>

            <div className="story-media">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
                alt="Young people in a community program smiling together"
              />
            </div>
          </div>
        </section>

        <section className="mission-section section-pad" id="mission">
          <div className="container mission-layout">
            <div className="mission-intro">
              <p className="eyebrow eyebrow-accent">Our Mission</p>
              <h2>Hope, confidence, and positive choices for the next generation.</h2>
              <p>
                As an ex-national basketball player, we use basketball and our experiences to
                encourage youths to have hope and positive mindsets rather than letting fear
                hold them back. We help the young take control of their lives and make
                positive choices.
              </p>
            </div>

            <div className="goals-grid">
              {goals.map((goal, index) => (
                <article key={goal.title} className="info-card">
                  <span className="card-number">0{index + 1}</span>
                  <h3>{goal.title}</h3>
                  <p>{goal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="programs-section section-pad" id="programs">
          <div className="container">
            <div className="section-heading section-heading-centered">
              <p className="eyebrow eyebrow-accent">Programs & Initiatives</p>
              <h2>Practical support that helps young people rise.</h2>
              <p>
                Each initiative is designed to build confidence, create access, and turn
                potential into long-term opportunity.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article key={program.title} className="program-card">
                  <img src={program.image} alt={program.title} />
                  <div className="program-body">
                    <p className="program-subtitle">{program.subtitle}</p>
                    <h3>{program.title}</h3>
                    <p>{program.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="objectives-section section-pad">
          <div className="container objectives-layout">
            <div className="section-heading">
              <p className="eyebrow eyebrow-accent">Our Objectives</p>
              <h2>Building impact with intention, partnership, and care.</h2>
            </div>

            <div className="objectives-list">
              {objectives.map((objective) => (
                <div key={objective} className="objective-item">
                  <span className="objective-dot" />
                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section section-pad" id="involved">
          <div className="container cta-banner">
            <div>
              <p className="eyebrow">Get Involved</p>
              <h2>Your generosity changes lives.</h2>
              <p>
                Every dollar fuels a program, a scholarship, or a safe space for a child to
                dream bigger. Join us in building a future where every young person has the
                strength to stand tall and fear no fear.
              </p>
            </div>

            <a href="mailto:info@kevinnanbamfoundation.org" className="button button-primary">
              Donate Now
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" className="brand-mark footer-brand">
              <span className="brand-name">Kevin NanBam Ninmol Foundation</span>
              <span className="brand-tag">Fear No Fear</span>
            </a>
            <p className="footer-copy">
              Empowering young people with courage, education, mentorship, and opportunity.
            </p>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: info@kevinnanbamfoundation.org</p>
            <p>Phone: +234 000 000 0000</p>
            <p>Address: Jos, Plateau State, Nigeria</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-row">
              <IconLink href="https://facebook.com" label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-3.31 0-6 2.69-6 6v2H5v4h3v4h4v-4h4l1-4h-5v-2c0-1.1.9-2 2-2Z" />
                </svg>
              </IconLink>
              <IconLink href="https://instagram.com" label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.35a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                </svg>
              </IconLink>
              <IconLink href="https://x.com" label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.35l7.24-8.28L1 2h6.4l4.42 5.84L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.61L17.8 20Z" />
                </svg>
              </IconLink>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>Copyright (c) 2026 Kevin NanBam Ninmol Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
