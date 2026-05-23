import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Briefcase, Target, ChevronRight,
  Bell, Sparkles, Star, TrendingUp, BookOpen
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px 100px 40px' }} className="animate-fade-in-up">
      
      {/* 1. Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8 relative">
        <div>
           <h1 className="text-5xl font-extrabold text-navy tracking-tight mb-3">Selamat datang, Raka <span className="animate-wave inline-block">👋</span></h1>
           <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-blue-500/20 flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div> AI Updated 2m ago
              </span>
           </div>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-[24px] border border-slate-100 shadow-premium">
           <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all hover:bg-slate-50 rounded-2xl">
              <Bell size={24} />
           </button>
           <div className="h-10 w-[1px] bg-slate-100"></div>
           <div className="flex items-center gap-3 pr-4 pl-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg">RD</div>
              <div className="hidden sm:block">
                 <p className="text-[11px] font-black text-navy uppercase tracking-wider leading-none mb-1">Raka D.</p>
                 <p className="text-[9px] font-bold text-slate-400 uppercase">Kandidat Pro</p>
              </div>
           </div>
        </div>
      </div>

      {/* 2. Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Skor Kompetensi', val: '84', sub: '/100', icon: <Star />, color: '#3B82F6', bg: '#EFF6FF' },
          { label: 'Lamaran Aktif', val: '3', sub: 'Perusahaan', icon: <Briefcase />, color: '#10B981', bg: '#D1FAE5' },
          { label: 'Match Terbaik', val: '87%', sub: 'High Fidelity', icon: <Target />, color: '#8B5CF6', bg: '#F5F3FF' },
          { label: 'Profil Lengkap', val: '72%', sub: 'Level Up!', icon: <Award />, color: '#F59E0B', bg: '#FFF7ED' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-premium transition-all duration-500">
             <div className="flex justify-between items-start mb-6">
                <span className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm" style={{ backgroundColor: stat.bg, color: stat.color, borderColor: `${stat.color}20` }}>
                   {stat.icon}
                </span>
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2">{stat.label}</p>
             <div className="flex items-end gap-1.5">
                <h3 className="text-4xl font-black text-navy tracking-tight">{stat.val}</h3>
                <span className="text-[11px] font-bold text-slate-300 mb-1.5 uppercase tracking-wider">{stat.sub}</span>
             </div>
          </div>
        ))}
      </div>

      {/* 3. Middle Section: Jobs & Career Center */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
         
         {/* Lowongan Section */}
         <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-8 px-2">
               <h2 className="text-2xl font-black text-navy tracking-tight">Lowongan Untukku</h2>
               <Link to="/kandidat/lowongan" className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Lihat Semua <ChevronRight size={14} />
               </Link>
            </div>

             <div className="space-y-6">
                {[
                  { title: 'Staff Quality Control', co: 'PT Astra International', match: 87, logo: 'AS', loc: 'Cikarang' },
                  { title: 'Operator Logistik', co: 'PT JNE Express', match: 82, logo: 'JN', loc: 'Jakarta' },
                  { title: 'Admin Gudang', co: 'PT Shopee', match: 78, logo: 'SH', loc: 'Tangerang' },
                ].map((job, i) => (
                  <div key={i} className="group bg-white rounded-[32px] border border-slate-100 p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:shadow-premium transition-all duration-500 cursor-pointer">
                     <div className="flex items-center gap-8">
                        <div className="w-20 h-20 bg-slate-50 rounded-[24px] flex items-center justify-center font-black text-slate-300 text-2xl border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                           {job.logo}
                        </div>
                        <div>
                           <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h4 className="font-black text-navy text-2xl tracking-tight group-hover:text-blue-600 transition-colors">{job.title}</h4>
                              <span className="px-4 py-1.5 bg-teal-50 text-teal-600 text-[10px] font-black uppercase rounded-full border border-teal-100 shadow-sm">
                                 {job.match}% Match
                              </span>
                           </div>
                           <div className="flex items-center gap-4 text-slate-400 font-extrabold text-[10px] uppercase tracking-[2px]">
                              <span>{job.co}</span>
                              <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                              <span>{job.loc}</span>
                           </div>
                        </div>
                     </div>
                     <div className="mt-8 md:mt-0 w-full md:w-auto">
                        <button className="w-full md:w-auto px-10 py-5 bg-navy text-white rounded-[20px] font-black text-[11px] uppercase tracking-widest shadow-xl shadow-navy/10 hover:bg-blue-600 hover:-translate-y-1 transition-all">
                           Lamar Sekarang
                        </button>
                     </div>
                  </div>
                ))}
            </div>
         </div>

         {/* Career AI Center */}
         <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-navy tracking-tight mb-8 px-2">Career AI Center</h2>
            <div className="bg-navy rounded-[40px] p-10 text-white relative overflow-hidden shadow-premium h-full min-h-[500px] flex flex-col justify-between group">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -mr-40 -mt-40 animate-pulse-slow"></div>
               
               <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 text-blue-400 rounded-[20px] text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-2xl mb-12">
                       <TrendingUp size={16} className="animate-bounce" /> Smart Analysis
                    </div>

                    <div className="flex justify-center mb-12">
                       <div className="w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center relative p-2">
                          <div className="absolute inset-0 border-t-4 border-blue-400 rounded-full animate-spin-slow"></div>
                          <div className="flex flex-col items-center">
                             <span className="text-[10px] font-black uppercase tracking-[4px] text-white/30 mb-2">Score</span>
                             <span className="text-6xl font-black text-white tracking-tighter">84.2</span>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                     <Link to="/kandidat/profil" className="w-full py-6 bg-white text-navy rounded-[24px] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-2xl">
                        Lengkapi Profil <ChevronRight size={18} />
                     </Link>
                     <button className="w-full py-6 bg-white/5 border-2 border-white/10 rounded-[24px] font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                        Bagikan Portofolio AI
                     </button>
                  </div>

                  <div className="mt-12 p-6 bg-white/5 rounded-[24px] border border-white/10 italic text-[13px] text-slate-300 leading-relaxed">
                     <Sparkles size={20} className="text-blue-400 inline mr-3 animate-pulse" />
                     "Tingkatkan skor <span className="text-white font-black underline decoration-blue-500 underline-offset-8">Logika & Analitik</span> untuk peluang match <span className="text-blue-400 font-black">3x lebih tinggi</span>."
                  </div>
               </div>
            </div>
         </div>

      </div>

      {/* 4. Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-8 px-4">Lamaran Terkini</h2>
            <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
               <div className="p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center px-10">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Posisi & Status</span>
                  <Link to="/kandidat/lamaran" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Detail →</Link>
               </div>
               <div className="divide-y divide-slate-50">
                  {[
                    { pos: 'Staff Quality Control', co: 'PT Astra International', status: 'Diproses', progress: 65, icon: '🏭' },
                    { pos: 'Admin Data Entry', co: 'PT Bank BCA', status: 'Interview', progress: 85, icon: '🏦' },
                  ].map((app, i) => (
                    <div key={i} className="p-10 hover:bg-slate-50 transition-all group">
                       <div className="flex justify-between items-center mb-6">
                          <div className="flex gap-6">
                             <div className="text-4xl">{app.icon}</div>
                             <div>
                                <h4 className="font-black text-navy text-xl group-hover:text-blue-600 transition-colors mb-1">{app.pos}</h4>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{app.co}</p>
                             </div>
                          </div>
                          <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">{app.status}</span>
                       </div>
                       <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-navy rounded-full" style={{ width: `${app.progress}%` }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div>
            <h2 className="text-2xl font-black text-navy tracking-tight mb-8 px-4">Belajar & Kursus</h2>
            <div className="space-y-6">
               {[
                 { title: 'Excel Advanced Analysis', cat: 'Data Analytics', icon: '📊', time: '2h' },
                 { title: 'Professional Communication', cat: 'Soft Skill', icon: '💬', time: '3h' },
               ].map((course, i) => (
                 <div key={i} className="group bg-white rounded-[32px] border border-slate-100 p-8 flex items-center gap-8 hover:shadow-premium transition-all duration-500 cursor-pointer">
                    <div className="w-16 h-16 bg-slate-50 rounded-[20px] flex items-center justify-center text-3xl group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-inner">
                       {course.icon}
                    </div>
                    <div className="flex-1">
                       <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1 inline-block">{course.cat}</span>
                       <h4 className="font-black text-navy text-xl leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h4>
                    </div>
                    <ChevronRight size={24} className="text-slate-200 group-hover:text-blue-600 transition-colors" />
                 </div>
               ))}
               <Link to="/kandidat/kursus" className="w-full py-6 border-2 border-dashed border-slate-200 rounded-[32px] font-black text-[11px] text-slate-400 uppercase tracking-[3px] flex items-center justify-center gap-3 hover:bg-slate-50 transition-all mt-4">
                  Eksplor Katalog <BookOpen size={18} />
               </Link>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Dashboard;
