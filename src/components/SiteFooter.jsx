import { Link } from 'react-router-dom';
import { navItems, siteContact } from '../siteData';

function IconLink({ href, label, children }) {
  return (
    <a href={href} aria-label={label} className="social-link">
      {children}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-title">Kevin Nambam Ninmol Foundation</span>
            <span className="brand-subtitle">Fear No Fear</span>
          </Link>
          <p className="footer-text">
            A youth-focused foundation using sports, education, mentorship, and community
            support to build courageous futures.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="footer-text">Email: {siteContact.email}</p>
          <p className="footer-text">Phone: {siteContact.phone}</p>
          <p className="footer-text">Address: {siteContact.address}</p>
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
        <p className="footer-text">
          Copyright (c) 2026 Kevin Nambam Ninmol Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
