import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Briefcase, Target, ChevronRight,
  Bell, Sparkles, Star, TrendingUp, BookOpen
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="bento-container animate-fade-in-up">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
        <div>
           <h1 className="text-4xl font-black text-navy tracking-tighter mb-2">Selamat datang, Raka 👋</h1>
           <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-600/10 flex items-center gap-1.5">
                <Sparkles size={12} className="animate-pulse" /> AI Updated 2m ago
              </span>
           </div>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-3xl border border-gray-100 shadow-sm">
           <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={24} />
           </button>
           <div className="h-8 w-px bg-gray-100"></div>
           <div className="flex items-center gap-4 pr-4 pl-2">
              <div className="text-right hidden md:block">
                 <p className="text-sm font-black text-navy leading-none">Raka Dermawan</p>
                 <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mt-1">Pro Member</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg border-2 border-white">
                 RD
              </div>
           </div>
        </div>
      </div>

      {/* 2. Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Skor Kompetensi', val: '84', sub: '/100', icon: <Award size={28} />, color: 'blue' },
          { label: 'Lamaran Aktif', val: '3', sub: 'Perusahaan', icon: <Briefcase size={28} />, color: 'navy' },
          { label: 'Match Terbaik', val: '87%', sub: 'High Fidelity', icon: <Target size={28} />, color: 'teal' },
          { label: 'Profil Lengkap', val: '72%', sub: 'Level Up!', icon: <Star size={28} />, color: 'amber' },
        ].map((stat, i) => (
          <div key={i} className="group bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
                   {stat.icon}
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] mb-2">{stat.label}</p>
                <div className="flex items-end gap-1">
                   <h3 className="text-4xl font-black text-navy tracking-tighter">{stat.val}</h3>
                   <span className="text-xs font-bold text-gray-300 mb-1.5">{stat.sub}</span>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* 3. Middle Section: Jobs & Career Center */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
         
         {/* Lowongan Section */}
         <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-8">
               <h2 className="text-2xl font-black text-navy tracking-tight">Lowongan Untukmu</h2>
               <Link to="/kandidat/lowongan" className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  Lihat Semua <ChevronRight size={14} />
               </Link>
            </div>

            <div className="space-y-5">
               {[
                 { title: 'Staff Quality Control', co: 'PT Astra International', match: 87, logo: 'AS' },
                 { title: 'Operator Logistik', co: 'PT JNE Express', match: 82, logo: 'JN' },
                 { title: 'Admin Gudang', co: 'PT Shopee', match: 78, logo: 'SH' },
               ].map((job, i) => (
                 <div key={i} className="group bg-white rounded-[32px] border border-gray-100 p-6 flex items-center justify-between hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-gray-300 text-lg border border-gray-100">
                          {job.logo}
                       </div>
                       <div>
                          <div className="flex items-center gap-3 mb-1">
                             <h4 className="font-black text-navy text-xl leading-tight group-hover:text-blue-600 transition-colors">{job.title}</h4>
                             <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 text-[9px] font-black uppercase rounded-lg border border-teal-500/10">
                                {job.match}% Match
                             </span>
                          </div>
                          <p className="text-sm font-bold text-gray-400">{job.co}</p>
                       </div>
                    </div>
                    <button className="px-6 py-3 bg-navy text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-navy/10 hover:bg-blue-600 transition-colors">
                       Lamar
                    </button>
                 </div>
               ))}
            </div>
         </div>

         {/* Career Center */}
         <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-navy tracking-tight mb-8">Career Center</h2>
            <div className="bg-[#0A111A] rounded-[48px] p-8 text-white relative overflow-hidden shadow-2xl border border-white/5 h-full flex flex-col justify-between">
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md text-teal-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                        <TrendingUp size={14} /> AI Verified
                     </div>
                  </div>

                  <div className="relative mb-10 flex justify-center">
                     <div className="w-40 h-40 flex items-center justify-center relative">
                        <svg className="w-full h-full -rotate-90">
                           <path d="M 80,10 L 140,80 L 80,150 L 20,80 Z" fill="rgba(37,99,235,0.1)" stroke="#2563EB" strokeWidth="2" className="animate-pulse" />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                           <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Score</span>
                           <span className="text-2xl font-black">84.2</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3">
                     <Link to="/kandidat/profil" className="w-full py-4 bg-white text-navy rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                        Lengkapi Profil <ChevronRight size={14} />
                     </Link>
                     <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                        Bagikan Portofolio
                     </button>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/5 italic text-[11px] text-white/50 leading-relaxed relative z-10">
                  <Sparkles size={14} className="text-teal-400 inline mr-2" />
                  "Tingkatkan skor <span className="text-white font-bold">Logika</span> untuk match yang lebih baik."
               </div>
            </div>
         </div>

      </div>

      {/* 4. Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-8 px-2">Lamaran Terkini</h2>
            <div className="bg-white rounded-[48px] border border-gray-100 overflow-hidden shadow-sm">
               <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center px-8">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Posisi & Status</span>
                  <Link to="/kandidat/lamaran" className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Detail →</Link>
               </div>
               <div className="divide-y divide-gray-50">
                  {[
                    { pos: 'Staff QC', co: 'PT Astra', status: 'Diproses', progress: 65, icon: '🏭' },
                    { pos: 'Admin Data', co: 'PT BCA', status: 'Interview', progress: 85, icon: '🏦' },
                  ].map((app, i) => (
                    <div key={i} className="p-8 hover:bg-gray-50/30 transition-colors group cursor-pointer">
                       <div className="flex justify-between items-center mb-4">
                          <div className="flex gap-4">
                             <div className="text-2xl">{app.icon}</div>
                             <div>
                                <h4 className="font-black text-navy text-lg group-hover:text-blue-600 transition-colors">{app.pos}</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">{app.co}</p>
                             </div>
                          </div>
                          <span className="text-[10px] font-black uppercase text-navy bg-gray-100 px-3 py-1 rounded-full">{app.status}</span>
                       </div>
                       <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-navy rounded-full" style={{ width: `${app.progress}%` }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-8 px-2">Belajar & Kursus</h2>
            <div className="space-y-4">
               {[
                 { title: 'Excel Advanced', cat: 'Data', icon: '📊', time: '2j' },
                 { title: 'Communication', cat: 'Soft Skill', icon: '💬', time: '3j' },
               ].map((course, i) => (
                 <div key={i} className="group bg-white rounded-[32px] border border-gray-100 p-6 flex items-center gap-6 hover:shadow-xl transition-all cursor-pointer">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{course.icon}</div>
                    <div className="flex-1">
                       <span className="text-[9px] font-black text-blue-600 uppercase">{course.cat}</span>
                       <h4 className="font-black text-navy text-md leading-tight mt-1">{course.title}</h4>
                    </div>
                    <ChevronRight size={20} className="text-gray-200" />
                 </div>
               ))}
               <Link to="/kandidat/kursus" className="w-full py-4 border-2 border-dashed border-gray-100 rounded-[32px] font-black text-[10px] text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mt-4">
                  Lihat Katalog <BookOpen size={14} />
               </Link>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Dashboard;
