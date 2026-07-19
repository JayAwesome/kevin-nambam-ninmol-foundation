import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import FloatingActions from './components/FloatingActions';
import SeoManager from './components/SeoManager';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import ScrollManager from './components/ScrollManager';
import { LanguageProvider } from './context/LanguageContext';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import HomePage from './pages/HomePage';
import ImpactPage from './pages/ImpactPage';
import InspirationPage from './pages/InspirationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import ProgramsPage from './pages/ProgramsPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

export function AppShell() {
  const location = useLocation();
  const isDonatePage = location.pathname === '/donate';

  return (
    <div className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SeoManager />
      <ScrollManager />
      <SiteHeader />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Routes>
      </div>
      <CookieConsent />
      {!isDonatePage ? <SiteFooter /> : null}
      {!isDonatePage ? <FloatingActions /> : null}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
