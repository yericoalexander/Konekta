import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Home, Briefcase, Users, Calendar, BarChart2, Settings, LogOut
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Overview', path: '/perusahaan/dashboard' },
  { icon: Briefcase, label: 'Lowongan Aktif', path: '/perusahaan/lowongan' },
  { icon: Users, label: 'Kandidat AI', path: '/perusahaan/kandidat' },
  { icon: Calendar, label: 'Jadwal Interview', path: '/perusahaan/interview' },
  { icon: BarChart2, label: 'Laporan Rekrutmen', path: '/perusahaan/laporan' },
  { icon: Settings, label: 'Pengaturan', path: '/perusahaan/pengaturan' },
];

const PerusahaanLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      {/* Sidebar - Matching KandidatLayout */}
      <aside className="w-[300px] min-w-[300px] bg-[#0B1120] flex flex-col h-screen sticky top-0 z-[100] shadow-2xl border-r border-white/5">
        
        {/* Logo Section */}
        <div className="p-10 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4 no-underline group">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 transform group-hover:rotate-6 transition-transform duration-300 font-black text-white text-xl">
               MB
             </div>
             <div className="flex flex-col">
               <span className="font-extrabold text-2xl text-white tracking-tighter leading-none">Maju Bersama</span>
               <span className="text-blue-400 text-[10px] font-black uppercase tracking-[3px] mt-1.5">HR Portal</span>
             </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-6 py-4 flex flex-col gap-2 overflow-y-auto">
          {sidebarItems.map(({ icon: Icon, label, path }) => {
            const active = isActive(path);
            return (
              <Link key={label} to={path} className={`
                flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-extrabold transition-all duration-300 relative group no-underline
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
               <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Paket Aktif</span>
                  <span className="text-sm font-black text-white">Enterprise AI</span>
               </div>
            </div>
            <button className="w-full py-2 bg-blue-600/20 text-blue-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Kelola Kuota</button>
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

export default PerusahaanLayout;
