import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilKandidat from './pages/ProfilKandidat';
import Assessment from './pages/Assessment';
import Login from './pages/Login';

// Layouts
import KandidatLayout from './layouts/KandidatLayout';
import PerusahaanLayout from './layouts/PerusahaanLayout';

// Candidate Pages
import DashboardKandidat from './pages/kandidat/Dashboard';
import ProfilSaya from './pages/kandidat/ProfilSaya';
import HasilAssessment from './pages/kandidat/HasilAssessment';
import AIInterviewCoach from './pages/kandidat/AIInterviewCoach';
import LowonganUntukku from './pages/kandidat/LowonganUntukku';
import LamaranSaya from './pages/kandidat/LamaranSaya';
import RekomendasiKursus from './pages/kandidat/RekomendasiKursus';
import PengaturanKandidat from './pages/kandidat/Pengaturan';

// Perusahaan Pages
import DashboardPerusahaan from './pages/perusahaan/Dashboard';
import LowonganAktif from './pages/perusahaan/LowonganAktif';
import Kandidat from './pages/perusahaan/Kandidat';
import Interview from './pages/perusahaan/Interview';
import Laporan from './pages/perusahaan/Laporan';
import PengaturanPerusahaan from './pages/perusahaan/Pengaturan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Candidate Dashboard Routes */}
        <Route path="/kandidat" element={<KandidatLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardKandidat />} />
          <Route path="profil" element={<ProfilSaya />} />
          <Route path="assessment" element={<HasilAssessment />} />
          <Route path="interview-coach" element={<AIInterviewCoach />} />
          <Route path="lowongan" element={<LowonganUntukku />} />
          <Route path="lamaran" element={<LamaranSaya />} />
          <Route path="kursus" element={<RekomendasiKursus />} />
          <Route path="pengaturan" element={<PengaturanKandidat />} />
        </Route>

        {/* Perusahaan Dashboard Routes */}
        <Route path="/perusahaan" element={<PerusahaanLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPerusahaan />} />
          <Route path="lowongan" element={<LowonganAktif />} />
          <Route path="kandidat" element={<Kandidat />} />
          <Route path="interview" element={<Interview />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="pengaturan" element={<PengaturanPerusahaan />} />
        </Route>

        <Route path="/profil/:id" element={<ProfilKandidat />} />
        <Route path="/assessment" element={<Navigate to="/assessment/logika/1" replace />} />
        <Route path="/assessment/:section/:nomor" element={<Assessment />} />
        <Route path="/assessment/selesai" element={<Assessment />} />
      </Routes>
    </Router>
  );
}

export default App;
