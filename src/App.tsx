import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import KandidatDashboard from './pages/KandidatDashboard';
import PerusahaanDashboard from './pages/PerusahaanDashboard';
import ProfilKandidat from './pages/ProfilKandidat';
import Assessment from './pages/Assessment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kandidat/dashboard" element={<KandidatDashboard />} />
        <Route path="/perusahaan/dashboard" element={<PerusahaanDashboard />} />
        <Route path="/profil/:id" element={<ProfilKandidat />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Router>
  );
}

export default App;
