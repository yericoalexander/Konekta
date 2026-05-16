import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Home, User, BarChart2, Briefcase, Mail, BookOpen, Settings, LogOut,
  BrainCircuit, TrendingUp
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/kandidat/dashboard' },
  { icon: User, label: 'Profil Saya', path: '/kandidat/profil' },
  { icon: BarChart2, label: 'Hasil Assessment', path: '/kandidat/assessment' },
  { icon: MicCustom, label: 'AI Interview Coach', path: '/kandidat/interview-coach' },
  { icon: Briefcase, label: 'Lowongan Untukku', path: '/kandidat/lowongan' },
  { icon: Mail, label: 'Lamaran Saya', path: '/kandidat/lamaran' },
  { icon: BookOpen, label: 'Rekomendasi Kursus', path: '/kandidat/kursus' },
  { icon: Settings, label: 'Pengaturan', path: '/kandidat/pengaturan' },
];

function MicCustom(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

const KandidatLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex bg-[#F9FAFB] min-h-screen font-sans">
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        minWidth: '280px',
        background: 'linear-gradient(180deg, var(--navy) 0%, #0a111a 100%)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
        zIndex: 100,
        boxShadow: '4px 0 24px rgba(0,0,0,0.1)'
      }}>
        {/* Logo Section */}
        <div style={{ padding: '40px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, var(--blue) 0%, #3B82F6 100%)',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(37,99,235,0.4)',
              transform: 'rotate(-5deg)'
            }}>
              <BrainCircuit size={26} color="#fff" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '900', fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.8px', lineHeight: '1' }}>Konekta</span>
              <span style={{ color: 'var(--blue)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '4px' }}>Kandidat AI</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav style={{ flex: 1, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {sidebarItems.map(({ icon: Icon, label, path }) => (
            <Link key={label} to={path} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 18px',
              borderRadius: '16px',
              fontSize: '0.95rem',
              fontWeight: isActive(path) ? '700' : '500',
              color: isActive(path) ? '#fff' : 'rgba(255,255,255,0.45)',
              background: isActive(path) ? 'rgba(255,255,255,0.08)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }} className="sidebar-item">
              {isActive(path) && <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px', background: 'var(--blue)', borderRadius: '0 4px 4px 0' }}></div>}
              <span style={{ display: 'flex', color: isActive(path) ? 'var(--blue)' : 'inherit', transition: 'color 0.3s' }}><Icon size={20} /></span>
              {label}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div style={{ padding: '24px 16px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            padding: '16px',
            border: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '16px'
          }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal"><TrendingUp size={16} /></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Peluang Kerja: Tinggi</span>
            </div>
            <div className="progress-wrap h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="progress-bar bg-teal h-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '16px',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.95rem',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }} className="hover:bg-white/5 hover:text-red">
            <LogOut size={20} /> Keluar
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8" style={{ overflowY: 'auto', height: '100vh' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default KandidatLayout;
