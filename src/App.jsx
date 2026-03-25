import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import ScrollManager from './components/ScrollManager';
import GetInvolvedPage from './pages/GetInvolvedPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <ScrollManager />
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
