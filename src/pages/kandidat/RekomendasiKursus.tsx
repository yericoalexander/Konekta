import React from 'react';
import { TrendingUp, Star, Clock, Users, Play, CheckCircle } from 'lucide-react';

const courses = [
   { id: 1, judul: "Excel untuk Pemula — Data Entry & Analisis Dasar", kategori: "Data & Analitik", ikon: "📊", provider: "Konekta Academy", durasi: "2 jam", peserta: "1.234", rating: 4.8, harga: "Gratis", impact: "+15% peluang data entry", status: "belum", gradient: "from-blue-400 to-blue-600" },
   { id: 2, judul: "Komunikasi Profesional di Tempat Kerja", kategori: "Komunikasi", ikon: "💬", provider: "Konekta Academy", durasi: "3 jam", peserta: "856", rating: 4.7, harga: "Gratis", impact: "+12 poin skor bahasa", status: "sedang", progress: 45, gradient: "from-teal-400 to-teal-600" },
   { id: 3, judul: "Dasar Quality Control & Inspeksi Produk", kategori: "Teknis", ikon: "🔍", provider: "Konekta Academy", durasi: "4 jam", peserta: "2.105", rating: 4.9, harga: "Gratis", impact: "+18% match untuk posisi QC", status: "belum", gradient: "from-amber-400 to-amber-600" },
   { id: 4, judul: "Microsoft Word & PowerPoint untuk Kerja", kategori: "Produktivitas", ikon: "📄", provider: "Konekta Academy", durasi: "1.5 jam", peserta: "3.421", rating: 4.6, harga: "Gratis", impact: "+8% peluang admin", status: "selesai", gradient: "from-purple-400 to-purple-600" },
];

const RekomendasiKursus: React.FC = () => {
   return (
      <div className="max-w-6xl mx-auto animate-fade-in-up">

         {/* [1] SKILL GAP ANALYSIS */}
         <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl mb-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 -translate-y-20"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
               <div className="max-w-xl">
                  <span className="text-[10px] font-black uppercase tracking-[3px] text-white/60">Analisis AI untuk Raka</span>
                  <h1 className="text-3xl font-black mt-4 tracking-tight">3 Skill yang Bisa Tingkatkan Peluangmu ✨</h1>
                  <p className="text-white/70 font-medium mt-3 leading-relaxed">
                     Berdasarkan lowongan yang cocok denganmu dan profil kompetensi saat ini,
                     mempelajari skill ini akan meningkatkan peluang dipanggil interview hingga <span className="text-white font-black underline decoration-teal-400 decoration-2">24%</span>.
                  </p>
               </div>
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[32px] flex flex-col items-center justify-center text-center shrink-0">
                  <div className="text-4xl font-black">+24%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mt-1">Peluang Kerja</div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative z-10">
               {[
                  { label: 'Excel & Data Entry', gap: '+15 poin', val: 76 },
                  { label: 'Komunikasi Kerja', gap: '+12 poin', val: 68 },
                  { label: 'Dasar QC', gap: '+18 poin', val: 54 },
               ].map((skill, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold">{skill.label}</span>
                        <span className="text-[10px] font-black text-teal-300 uppercase tracking-widest">{skill.gap}</span>
                     </div>
                     <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-1000 delay-300" style={{ width: `${skill.val}%` }}></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* [2] FILTER TABS KURSUS */}
         <div className="flex gap-2 bg-gray-100 p-1.5 rounded-[20px] shadow-inner w-fit mb-10">
            {['Semua', 'Direkomendasikan AI ✨', 'Sedang Dipelajari', 'Selesai'].map((tab) => (
               <button key={tab} className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all ${tab === 'Direkomendasikan AI ✨' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                  {tab}
               </button>
            ))}
         </div>

         {/* [3] KURSUS DIREKOMENDASIKAN */}
         <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-6">⭐ DIREKOMENDASIKAN AI UNTUK KAMU</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
               <div key={course.id} className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                  <div className={`h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                     <span className="text-6xl transform group-hover:scale-125 transition-transform duration-500">{course.ikon}</span>
                     <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-tighter border border-white/20">{course.kategori}</span>
                     </div>
                  </div>

                  <div className="p-8">
                     <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest bg-teal-50 px-2 py-0.5 rounded border border-teal-100">{course.harga}</span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-xs"><Star size={14} fill="currentColor" /> {course.rating}</div>
                     </div>

                     <h3 className="text-lg font-black text-navy leading-tight tracking-tight h-14 group-hover:text-blue-600 transition-colors line-clamp-2">{course.judul}</h3>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{course.provider}</p>

                     <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 text-[11px] font-bold text-blue-700 flex items-center gap-3 mt-6">
                        <TrendingUp size={16} />
                        <span>{course.impact}</span>
                     </div>

                     <div className="flex items-center gap-6 mt-6 pb-6 border-b border-gray-50">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                           <Clock size={14} /> {course.durasi}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                           <Users size={14} /> {course.peserta}
                        </div>
                     </div>

                     <div className="mt-6">
                        {course.status === 'sedang' ? (
                           <div className="space-y-3">
                              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                 <span className="text-navy">Lanjutkan Belajar</span>
                                 <span className="text-blue-600">{course.progress}%</span>
                              </div>
                              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-blue-600" style={{ width: `${course.progress}%` }}></div>
                              </div>
                           </div>
                        ) : course.status === 'selesai' ? (
                           <button className="w-full flex items-center justify-center gap-2 py-4 bg-teal-50 text-teal-600 rounded-2xl font-black text-xs uppercase tracking-widest border border-teal-100">
                              <CheckCircle size={18} /> Selesai
                           </button>
                        ) : (
                           <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                              Mulai Belajar <Play size={16} fill="currentColor" />
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* [4] KURSUS SEDANG DIPELAJARI */}
         <div className="mt-16 mb-10">
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-6">📖 SEDANG DIPELAJARI</h2>
            <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-xl transition-all">
               <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform">💬</div>
               <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-black text-navy tracking-tight">Komunikasi Profesional di Tempat Kerja</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Modul 3 dari 6 • 45% selesai</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mt-4 max-w-md mx-auto md:mx-0">
                     <div className="h-full bg-teal-500" style={{ width: '45%' }}></div>
                  </div>
               </div>
               <button className="btn btn-solid-blue px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Lanjutkan →</button>
            </div>
         </div>

      </div>
   );
};

export default RekomendasiKursus;
