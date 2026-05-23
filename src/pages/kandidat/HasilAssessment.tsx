import React from 'react';
import { Brain, MessageSquare, Target, Star, Settings, Lightbulb, CheckCircle2, Download, Share2, QrCode, Sparkles } from 'lucide-react';

const assessmentCategories = [
   { id: 1, label: 'Logika & Analitik', score: 88, avg: 65, icon: <Brain size={20} />, color: '#3B82F6', level: 'Sangat Baik' },
   { id: 2, label: 'Komunikasi & Bahasa', score: 76, avg: 61, icon: <MessageSquare size={20} />, color: '#10B981', level: 'Baik' },
   { id: 3, label: 'Situasional & Keputusan', score: 83, avg: 64, icon: <Target size={20} />, color: '#F59E0B', level: 'Sangat Baik' },
   { id: 4, label: 'Kepribadian Kerja', score: 91, avg: 70, icon: <Star size={20} />, color: '#8B5CF6', level: 'Unggul' },
   { id: 5, label: 'Teknis Spesifik', score: 79, avg: 58, icon: <Settings size={20} />, color: '#64748B', level: 'Baik' },
];

const HasilAssessment: React.FC = () => {
   return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px 100px 40px' }} className="animate-fade-in-up pb-20">

         {/* [1] HERO SECTION — THE "CERTIFICATE" FEEL */}
         <div className="bg-navy rounded-[48px] p-12 text-white relative overflow-hidden shadow-premium border border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse-slow"></div>
            
            <div className="relative z-10">
               <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                  <div className="flex-1">
                     <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl text-[11px] font-black uppercase tracking-[2px] border border-white/10 shadow-2xl">
                        <CheckCircle2 size={16} className="text-blue-400" /> Assessment Certified
                     </div>
                     <h1 className="text-5xl font-black mt-8 tracking-tight text-white">Raka Dermawan</h1>
                     <p className="text-slate-400 font-bold mt-2 uppercase tracking-widest text-xs">Verified Candidate • Purwokerto, Indonesia</p>

                     <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
                        <div className="px-5 py-2.5 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center gap-3">
                           <Sparkles size={16} className="text-blue-400" />
                           <span className="text-[11px] font-black uppercase tracking-widest text-blue-100">Top 8% in Logic</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col items-center">
                     <div className="relative w-44 h-44 flex items-center justify-center scale-110">
                        <div className="absolute inset-0 border-4 border-white/5 rounded-full"></div>
                        <div className="absolute inset-0 border-t-4 border-blue-400 rounded-full animate-spin-slow"></div>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-5xl font-black text-white">84</span>
                           <span className="text-[10px] font-black text-slate-500 mt-1 uppercase tracking-widest">Score</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-5 mt-16 border-t border-white/5 pt-10">
                  <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white text-navy font-black rounded-2xl text-[11px] uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all">
                     <Download size={20} /> Unduh Sertifikat PDF
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white/5 text-white font-black rounded-2xl text-[11px] uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">
                     <Share2 size={20} /> Bagikan Profil AI
                  </button>
               </div>
            </div>
         </div>

         {/* [2] COMPETENCY GRID */}
         <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 p-12 mt-12">
            <div className="mb-12">
               <h2 className="text-3xl font-black text-navy tracking-tight">Analisis Kompetensi</h2>
               <p className="text-slate-400 font-bold mt-2 uppercase tracking-[2px] text-[10px]">Benchmark data terhadap 15,000+ kandidat industri</p>
            </div>

            <div className="grid gap-10">
               {assessmentCategories.map((cat) => (
                  <div key={cat.id}>
                     <div className="flex justify-between items-end mb-4">
                        <div className="flex items-center gap-5">
                           <div className="w-12 h-12 rounded-[18px] flex items-center justify-center shadow-sm" style={{ backgroundColor: `${cat.color}10`, color: cat.color }}>
                              {cat.icon}
                           </div>
                           <div>
                              <span className="text-sm font-black text-navy block">{cat.label}</span>
                              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Avg: {cat.avg}</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="flex items-center gap-4">
                              <span className="text-2xl font-black tracking-tight" style={{ color: cat.color }}>{cat.score}</span>
                              <span className="bg-slate-50 text-slate-500 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100">{cat.level}</span>
                           </div>
                        </div>
                     </div>
                     <div className="relative h-2.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                        <div className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000" style={{ width: `${cat.score}%`, backgroundColor: cat.color }}></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* [3] AI INSIGHT BANNER */}
         <div className="bg-navy rounded-[40px] p-10 mt-12 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden shadow-premium">
            <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center text-blue-400 border border-white/10 shrink-0">
               <Lightbulb size={40} className="animate-bounce" />
            </div>
            <div className="relative z-10 flex-1">
               <h4 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                  Hidden Talent Discovery <Sparkles size={20} className="text-amber-400" />
               </h4>
               <p className="text-slate-300 font-bold mt-4 leading-relaxed text-lg">
                  Berdasarkan profil kognitif kamu, <span className="text-white">Kemampuan Analitikal</span> kamu berada pada <span className="text-blue-400">Persentil 92</span>.
               </p>
            </div>
         </div>

         {/* [5] VERIFICATION PANEL */}
         <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 p-12 mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <h3 className="text-2xl font-black text-navy tracking-tight">Verifikasi Keaslian</h3>
               <p className="text-slate-500 font-bold mt-4 leading-relaxed">
                  Validasi skor ini secara langsung melalui sistem verifikasi Konekta AI.
               </p>

               <div className="mt-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] block mb-2">Unique Certificate ID</span>
                  <span className="text-lg font-black text-navy select-all tracking-tight">TB-2026-RD-88429</span>
               </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-12 bg-navy rounded-[40px] shadow-2xl relative overflow-hidden">
               <div className="w-40 h-40 bg-white rounded-3xl flex items-center justify-center text-navy shadow-premium p-6">
                  <QrCode size="100%" />
               </div>
               <span className="text-[11px] font-black text-blue-400 uppercase tracking-[4px] mt-8 animate-pulse">Scan to Verify</span>
            </div>
         </div>

      </div>
   );
};

export default HasilAssessment;
