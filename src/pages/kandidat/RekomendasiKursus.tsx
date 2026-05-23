import React from 'react';
import { TrendingUp, Star, Clock, Users, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';

const courses = [
   { id: 1, judul: "Excel untuk Pemula — Data Entry & Analisis Dasar", kategori: "Data & Analitik", ikon: "📊", provider: "Konekta Academy", durasi: "2 jam", peserta: "1.234", rating: 4.8, harga: "Gratis", impact: "+15% peluang data entry", status: "belum", gradient: "from-blue-500/20 to-blue-600/5", iconColor: "text-blue-500" },
   { id: 2, judul: "Komunikasi Profesional di Tempat Kerja", kategori: "Komunikasi", ikon: "💬", provider: "Konekta Academy", durasi: "3 jam", peserta: "856", rating: 4.7, harga: "Gratis", impact: "+12 poin skor bahasa", status: "sedang", progress: 45, gradient: "from-teal-500/20 to-teal-600/5", iconColor: "text-teal-500" },
   { id: 3, judul: "Dasar Quality Control & Inspeksi Produk", kategori: "Teknis", ikon: "🔍", provider: "Konekta Academy", durasi: "4 jam", peserta: "2.105", rating: 4.9, harga: "Gratis", impact: "+18% match untuk posisi QC", status: "belum", gradient: "from-amber-500/20 to-amber-600/5", iconColor: "text-amber-500" },
   { id: 4, judul: "Microsoft Word & PowerPoint untuk Kerja", kategori: "Produktivitas", ikon: "📄", provider: "Konekta Academy", durasi: "1.5 jam", peserta: "3.421", rating: 4.6, harga: "Gratis", impact: "+8% peluang admin", status: "selesai", gradient: "from-purple-500/20 to-purple-600/5", iconColor: "text-purple-500" },
];

const RekomendasiKursus: React.FC = () => {
   return (
      <div className="max-w-7xl mx-auto animate-fade-in-up pb-20">

         {/* [1] PREMIUM ANALYSIS BANNER */}
         <div className="bg-[#0B1120] rounded-[48px] p-12 text-white relative overflow-hidden shadow-premium border border-white/5 mb-16">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse-slow"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10">
               <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-2xl text-[10px] font-extrabold uppercase tracking-[3px] text-blue-400 border border-white/10">
                     <Sparkles size={14} className="animate-pulse" /> AI Skill Analysis
                  </div>
                  <h1 className="text-4xl font-black mt-8 tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">
                     Optimalkan Karirmu dengan <br/> 3 Kompetensi Strategis
                  </h1>
                  <p className="text-slate-400 font-medium mt-4 leading-relaxed text-lg max-w-xl">
                     AI kami menganalisis bahwa menguasai skill di bawah akan meningkatkan peluang <span className="text-blue-400 font-extrabold italic">Interview Match</span> hingga <span className="text-white font-black underline decoration-blue-500 underline-offset-8">24%</span> di industri Manufaktur.
                  </p>
               </div>
               
               <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[48px] flex flex-col items-center justify-center text-center shrink-0 shadow-2xl group hover:border-blue-500/30 transition-colors">
                  <div className="text-6xl font-black bg-gradient-to-b from-white to-blue-400 bg-clip-text text-transparent">+24%</div>
                  <div className="text-[11px] font-extrabold uppercase tracking-[3px] text-slate-400 mt-2">Career Boost</div>
                  <div className="mt-6 flex items-center gap-2 text-blue-400 font-bold text-xs">
                     <TrendingUp size={16} /> Data Verified
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
               {[
                  { label: 'Excel & Analysis', gap: '+15 pts', val: 76, color: 'blue' },
                  { label: 'Professional Comms', gap: '+12 pts', val: 68, color: 'teal' },
                  { label: 'Quality Systems', gap: '+18 pts', val: 54, color: 'amber' },
               ].map((skill, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md rounded-[32px] p-6 border border-white/5 hover:bg-white/10 transition-colors group">
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-extrabold uppercase tracking-wider">{skill.label}</span>
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{skill.gap}</span>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-1000 delay-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${skill.val}%` }}></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* [2] FILTER NAVIGATION */}
         <div className="flex flex-wrap gap-3 mb-12">
            {['Semua Kursus', 'Direkomendasikan AI ✨', 'Dipelajari', 'Selesai'].map((tab) => (
               <button key={tab} className={`px-8 py-4 rounded-[20px] text-[11px] font-extrabold uppercase tracking-widest transition-all ${tab === 'Direkomendasikan AI ✨' ? 'bg-navy text-white shadow-xl shadow-navy/20' : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'}`}>
                  {tab}
               </button>
            ))}
         </div>

         {/* [3] COURSE GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
               <div key={course.id} className="group bg-white rounded-[48px] shadow-sm border border-slate-100 overflow-hidden hover:shadow-premium transition-all duration-500 cursor-pointer flex flex-col h-full relative">
                  <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-white/40 group-hover:bg-white/10 transition-colors duration-500"></div>
                     <span className="text-7xl group-hover:scale-125 transition-transform duration-700 relative z-10">{course.ikon}</span>
                     <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-xl text-[10px] font-extrabold text-navy uppercase tracking-widest border border-white shadow-sm">{course.kategori}</span>
                     </div>
                  </div>

                  <div className="p-10 flex-1 flex flex-col">
                     <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100/50">{course.harga}</span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-extrabold text-xs bg-amber-50 px-3 py-1 rounded-full"><Star size={14} fill="currentColor" /> {course.rating}</div>
                     </div>

                     <h3 className="text-xl font-extrabold text-navy leading-tight tracking-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 h-[3.5rem]">{course.judul}</h3>
                     <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8">{course.provider}</p>

                     <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 mb-8 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                        <TrendingUp size={18} className="text-blue-600" />
                        <span className="text-[11px] font-extrabold text-slate-500 group-hover:text-blue-700">{course.impact}</span>
                     </div>

                     <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-auto">
                        <div className="flex items-center gap-6">
                           <div className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                              <Clock size={16} /> {course.durasi}
                           </div>
                           <div className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                              <Users size={16} /> {course.peserta}
                           </div>
                        </div>
                     </div>

                     <div className="mt-8">
                        {course.status === 'sedang' ? (
                           <div className="space-y-4">
                              <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
                                 <span className="text-navy">Lanjutkan Modul</span>
                                 <span className="text-blue-600">{course.progress}%</span>
                              </div>
                              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                                 <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000" style={{ width: `${course.progress}%` }}></div>
                              </div>
                           </div>
                        ) : course.status === 'selesai' ? (
                           <button className="w-full flex items-center justify-center gap-3 py-5 bg-teal-50 text-teal-600 rounded-2xl font-extrabold text-[11px] uppercase tracking-widest border border-teal-100/50">
                              <CheckCircle size={20} /> Course Completed
                           </button>
                        ) : (
                           <button className="w-full py-5 bg-navy text-white rounded-2xl font-extrabold text-[11px] uppercase tracking-widest shadow-xl shadow-navy/10 hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                              Mulai Belajar <ChevronRight size={18} />
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* [4] ACTIVE COURSE BANNER */}
         <div className="mt-20">
            <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[4px] mb-8 px-4">⚡ Sedang Dipelajari</h2>
            <div className="bg-white rounded-[48px] shadow-premium border border-slate-100 p-8 flex flex-col md:flex-row items-center gap-10 group hover:border-blue-500/20 transition-all overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-teal-500/10 transition-colors"></div>
               
               <div className="w-28 h-28 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl flex items-center justify-center text-5xl shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500">💬</div>
               <div className="flex-1 text-center md:text-left relative z-10">
                  <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest mb-2 block">Kategori: Komunikasi</span>
                  <h4 className="text-2xl font-black text-navy tracking-tight">Komunikasi Profesional di Tempat Kerja</h4>
                  <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
                     <div className="flex-1 w-full max-w-sm">
                        <div className="flex justify-between mb-2">
                           <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Modul 3 dari 6</span>
                           <span className="text-xs font-black text-teal-600">45%</span>
                        </div>
                        <div className="h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                           <div className="h-full bg-teal-500 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                     </div>
                  </div>
               </div>
               <button className="w-full md:w-auto px-12 py-5 bg-navy text-white rounded-2xl font-extrabold text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:-translate-y-1 transition-all relative z-10 shadow-xl">
                  Lanjutkan <ChevronRight size={18} className="inline ml-2" />
               </button>
            </div>
         </div>

      </div>
   );
};

export default RekomendasiKursus;
