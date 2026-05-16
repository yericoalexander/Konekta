import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PerusahaanDashboard from './pages/PerusahaanDashboard';
import ProfilKandidat from './pages/ProfilKandidat';
import Assessment from './pages/Assessment';
import Login from './pages/Login';

// Layouts
import KandidatLayout from './layouts/KandidatLayout';

// Candidate Pages
import Dashboard from './pages/kandidat/Dashboard';
import ProfilSaya from './pages/kandidat/ProfilSaya';
import HasilAssessment from './pages/kandidat/HasilAssessment';
import AIInterviewCoach from './pages/kandidat/AIInterviewCoach';
import LowonganUntukku from './pages/kandidat/LowonganUntukku';
import LamaranSaya from './pages/kandidat/LamaranSaya';
import RekomendasiKursus from './pages/kandidat/RekomendasiKursus';
import Pengaturan from './pages/kandidat/Pengaturan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Candidate Dashboard Routes */}
        <Route path="/kandidat" element={<KandidatLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profil" element={<ProfilSaya />} />
          <Route path="assessment" element={<HasilAssessment />} />
          <Route path="interview-coach" element={<AIInterviewCoach />} />
          <Route path="lowongan" element={<LowonganUntukku />} />
          <Route path="lamaran" element={<LamaranSaya />} />
          <Route path="kursus" element={<RekomendasiKursus />} />
          <Route path="pengaturan" element={<Pengaturan />} />
        </Route>

        <Route path="/perusahaan/dashboard" element={<PerusahaanDashboard />} />
        <Route path="/profil/:id" element={<ProfilKandidat />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Router>
  );
}

export default App;
