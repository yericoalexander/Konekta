import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Home, User, BarChart2, Briefcase, Mail, BookOpen, Settings, LogOut,
  TrendingUp, Mic
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', path: '/kandidat/dashboard' },
  { icon: User, label: 'Profil Saya', path: '/kandidat/profil' },
  { icon: BarChart2, label: 'Hasil Assessment', path: '/kandidat/assessment' },
  { icon: Mic, label: 'AI Interview Coach', path: '/kandidat/interview-coach' },
  { icon: Briefcase, label: 'Lowongan Untukku', path: '/kandidat/lowongan' },
  { icon: Mail, label: 'Lamaran Saya', path: '/kandidat/lamaran' },
  { icon: BookOpen, label: 'Rekomendasi Kursus', path: '/kandidat/kursus' },
  { icon: Settings, label: 'Pengaturan', path: '/kandidat/pengaturan' },
];

const KandidatLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      {/* Sidebar */}
      <aside className="w-[300px] min-w-[300px] bg-[#0B1120] flex flex-col h-screen sticky top-0 z-[100] shadow-2xl border-r border-white/5">
        
        {/* Logo Section */}
        <div className="p-10 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4 no-underline group">
            <img src="/logo-konekta.png" alt="Konekta Logo" className="h-16 w-auto object-contain drop-shadow-xl scale-[1.3] transform group-hover:rotate-2 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-white tracking-tighter leading-none">Konekta</span>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[3px] mt-1.5">Kandidat AI</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-6 py-4 flex flex-col gap-2 overflow-y-auto">
          {sidebarItems.map(({ icon: Icon, label, path }) => {
            const active = isActive(path);
            return (
              <Link key={label} to={path} className={`
                flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-extrabold transition-all duration-300 relative group
                ${active ? 'text-white bg-white/10 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}
              `}>
                {active && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                )}
                <span className={`${active ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400'} transition-colors duration-300`}>
                  <Icon size={22} />
                </span>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-white/5 bg-black/20">
          <div className="bg-white/5 rounded-3xl p-5 border border-white/5 mb-6 group hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner">
                  <TrendingUp size={16} />
                </div>
                <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-widest">Job Pulse</span>
              </div>
              <span className="text-[10px] font-black text-blue-400 uppercase">Tinggi</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
              <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(37,99,235,0.3)]" style={{ width: '85%' }}></div>
            </div>
          </div>

          <Link to="/" className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-400 text-sm font-extrabold uppercase tracking-widest hover:bg-red-500/10 hover:text-red-400 transition-all no-underline">
            <LogOut size={22} /> Keluar
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto p-10 lg:p-12 scroll-smooth">
        <Outlet />
      </main>
    </div>
  );
};

export default KandidatLayout;
