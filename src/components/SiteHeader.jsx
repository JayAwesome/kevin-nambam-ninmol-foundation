import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const homeNavItems = [
  { label: 'Home', href: '/#home', match: '/' },
  { label: 'Story', href: '/#story', match: '/' },
  { label: 'Mission', href: '/#mission', match: '/' },
  { label: 'Programs', href: '/#programs', match: '/' },
  { label: 'Get Involved', href: '/get-involved', match: '/get-involved' },
];

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container nav-row">
        <Link to="/" className="brand">
          <span className="brand-title">Kevin NanBam Ninmol Foundation</span>
          <span className="brand-subtitle">Fear No Fear</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          Menu
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${isMenuOpen ? 'site-nav-open' : ''}`}
          aria-label="Primary navigation"
        >
          {homeNavItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                isActive || (item.match === '/' && location.pathname === '/')
                  ? 'nav-link-active'
                  : undefined
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
