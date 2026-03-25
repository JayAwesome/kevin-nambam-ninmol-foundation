import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CredibilitySection from './components/CredibilitySection';
import FloatingActions from './components/FloatingActions';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import ScrollManager from './components/ScrollManager';
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

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <ScrollManager />
        <SiteHeader />
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
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <CredibilitySection />
        <SiteFooter />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

export default App;
