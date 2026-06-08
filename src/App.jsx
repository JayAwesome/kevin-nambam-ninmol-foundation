import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FloatingActions from './components/FloatingActions';
import SeoManager from './components/SeoManager';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import ScrollManager from './components/ScrollManager';
import { LanguageProvider } from './context/LanguageContext';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import EventsPage from './pages/EventsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import HomePage from './pages/HomePage';
import ImpactPage from './pages/ImpactPage';
import LeadershipGovernancePage from './pages/LeadershipGovernancePage';
import PoliciesSafeguardingPage from './pages/PoliciesSafeguardingPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import ProgramsPage from './pages/ProgramsPage';
import ResourcesPage from './pages/ResourcesPage';

export function AppShell() {
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
          <Route path="/leadership-governance" element={<LeadershipGovernancePage />} />
          <Route path="/policies-safeguarding" element={<PoliciesSafeguardingPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/news" element={<BlogPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <SiteFooter />
      <FloatingActions />
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
