import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { languageOptions, useLanguage } from '../context/LanguageContext';
import { navItems } from '../siteData';

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const primaryNavItems = navItems.filter((item) =>
    ['home', 'about', 'programs', 'impact', 'getInvolved', 'contact'].includes(item.labelKey),
  );
  const secondaryNavItems = navItems.filter(
    (item) => !['home', 'about', 'programs', 'impact', 'getInvolved', 'contact', 'donate'].includes(item.labelKey),
  );

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMoreOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container nav-row">
        <Link to="/" className="brand" onClick={handleNavClick}>
          <span className="brand-title">Kevin Nambam Ninmol Foundation</span>
          <span className="brand-subtitle">Fear No Fear</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {t('ui.menu')}
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${isMenuOpen ? 'site-nav-open' : ''}`}
          aria-label="Primary navigation"
        >
          {primaryNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={handleNavClick}
              className={({ isActive }) => (isActive ? 'nav-link-active' : undefined)}
            >
              {t(`nav.${item.labelKey}`)}
            </NavLink>
          ))}
          <div className={`more-nav ${isMoreOpen ? 'more-nav-open' : ''}`}>
            <button
              type="button"
              className="more-nav-trigger"
              aria-expanded={isMoreOpen}
              onClick={() => setIsMoreOpen((current) => !current)}
            >
              {t('ui.more')}
            </button>
            <div className="more-nav-menu">
              {secondaryNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) => (isActive ? 'nav-link-active' : undefined)}
                >
                  {t(`nav.${item.labelKey}`)}
                </NavLink>
              ))}
            </div>
          </div>
          <label className="language-toggle" aria-label="Language switcher">
            <span className="sr-only">{t('ui.language')}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value)}>
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {t(option.labelKey)}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? t('ui.switchToLight') : t('ui.switchToDark')}
            aria-pressed={theme === 'dark'}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb"></span>
            </span>
            <span className="theme-toggle-label">{theme === 'dark' ? t('ui.lightMode') : t('ui.darkMode')}</span>
          </button>
          <NavLink to="/donate" className="button button-accent header-donate" onClick={handleNavClick}>
            {t('ui.donate')}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
