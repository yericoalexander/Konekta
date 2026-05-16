import React from 'react';
import { MatchBadge } from '../../components/ui/MatchBadge';
import { Brain, MessageSquare, Target, Star, Settings, Lightbulb, CheckCircle2, Download, Share2, QrCode } from 'lucide-react';

const assessmentCategories = [
   { id: 1, label: 'Logika & Analitik', score: 88, avg: 65, icon: <Brain size={20} />, color: '#2563EB', level: 'Sangat Baik', levelBg: 'bg-blue-100', levelText: 'text-blue-700' },
   { id: 2, label: 'Komunikasi & Bahasa', score: 76, avg: 61, icon: <MessageSquare size={20} />, color: '#10B981', level: 'Baik', levelBg: 'bg-teal-100', levelText: 'text-teal-700' },
   { id: 3, label: 'Situasional & Keputusan', score: 83, avg: 64, icon: <Target size={20} />, color: '#F59E0B', level: 'Sangat Baik', levelBg: 'bg-amber-100', levelText: 'text-amber-700' },
   { id: 4, label: 'Kepribadian Kerja', score: 91, avg: 70, icon: <Star size={20} />, color: '#7C3AED', level: 'Unggul', levelBg: 'bg-purple-100', levelText: 'text-purple-700' },
   { id: 5, label: 'Teknis Spesifik', score: 79, avg: 58, icon: <Settings size={20} />, color: '#64748B', level: 'Baik', levelBg: 'bg-gray-100', levelText: 'text-gray-600' },
];

const HasilAssessment: React.FC = () => {
   return (
      <div className="max-w-4xl mx-auto animate-fade-in-up">

         {/* [1] HEADER SECTION */}
         <div className="bg-gradient-to-br from-[#0F1B2D] to-[#2563EB] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 -translate-y-20"></div>
            <div className="relative z-10">
               <div className="flex justify-between items-start">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                        <CheckCircle2 size={12} /> Assessment Selesai • 10 Mei 2026
                     </div>
                     <h1 className="text-3xl font-black mt-6 tracking-tight">Raka Dermawan</h1>
                     <p className="text-white/70 font-medium mt-1">SMK Teknik Mesin • Purwokerto</p>

                     <div className="flex gap-3 mt-6">
                        <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-[10px] font-bold border border-teal-500/30">✓ Terverifikasi AI</span>
                        <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-[10px] font-bold border border-white/10">🔒 ID: TB-2026-RD-88429</span>
                     </div>
                  </div>

                  <div className="flex flex-col items-center">
                     <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                           <circle cx="64" cy="64" r="58" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                           <circle cx="64" cy="64" r="58" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="364.4" strokeDashoffset={364.4 * (1 - 0.84)} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-3xl font-black">84</span>
                           <span className="text-[10px] font-bold text-white/60">/ 100</span>
                        </div>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mt-4">Skor Keseluruhan</span>
                  </div>
               </div>

               <div className="flex gap-4 mt-10">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-black rounded-2xl text-sm shadow-xl hover:scale-105 transition-transform">
                     <Download size={18} /> Unduh Sertifikat PDF
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white font-black rounded-2xl text-sm border border-white/20 hover:bg-white/20 transition-all">
                     <Share2 size={18} /> Bagikan Profil
                  </button>
               </div>
            </div>
         </div>

         {/* [2] SKOR PER KATEGORI */}
         <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-10 mt-8">
            <div className="mb-8">
               <h2 className="text-2xl font-black text-navy tracking-tight">Profil Kompetensi Lengkap</h2>
               <p className="text-sm text-gray-500 font-medium mt-1">Dibandingkan dengan rata-rata 10.000+ kandidat Konekta</p>
            </div>

            <div className="space-y-8">
               {assessmentCategories.map((cat) => (
                  <div key={cat.id}>
                     <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                              {cat.icon}
                           </div>
                           <span className="font-extrabold text-navy">{cat.label}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-lg font-black" style={{ color: cat.color }}>{cat.score}<span className="text-[10px] text-gray-400 font-bold">/100</span></span>
                           <span className={`${cat.levelBg} ${cat.levelText} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter`}>{cat.level}</span>
                        </div>
                     </div>
                     <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
                        <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${cat.score}%`, backgroundColor: cat.color }}></div>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-[10px] font-bold text-gray-400">Rata-rata: {cat.avg}</span>
                        <span className="text-[10px] font-bold text-teal-500">Kamu {(cat.score - cat.avg)}% di atas rata-rata</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* [3] HIDDEN TALENT BANNER */}
         <div className="bg-purple-50 border border-purple-100 rounded-[32px] p-8 mt-8 flex gap-6 items-start">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm border border-purple-100 shrink-0">
               <Lightbulb size={32} />
            </div>
            <div>
               <h4 className="text-lg font-black text-purple-900 tracking-tight">Bakat Tersembunyi Terdeteksi ✨</h4>
               <p className="text-sm text-purple-800/70 font-medium mt-2 leading-relaxed">
                  Kemampuan problem-solving dan analisis detail kamu berada di atas 92% kandidat lain.
                  Potensi ini sangat cocok untuk posisi Quality Control, Data Analyst pemula, atau peran yang membutuhkan ketelitian tinggi.
               </p>
               <div className="flex flex-wrap gap-2 mt-4">
                  {['Quality Control', 'Data Analyst', 'Pengawas Produksi', 'Administrasi'].map((tag) => (
                     <span key={tag} className="px-3 py-1.5 bg-white text-purple-700 text-[10px] font-black uppercase rounded-xl border border-purple-100 shadow-sm">{tag}</span>
                  ))}
               </div>
            </div>
         </div>

         {/* [4] POSISI YANG COCOK */}
         <div className="mt-12">
            <h2 className="text-2xl font-black text-navy tracking-tight mb-6">Posisi yang AI Rekomendasikan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {[
                  { role: 'Staff QC', score: 87, co: 'Manufaktur' },
                  { role: 'Operator Logistik', score: 82, co: 'Logistik' },
                  { role: 'Admin Data', score: 79, co: 'Administrasi' },
                  { role: 'Teknisi Mesin', score: 75, co: 'Otomotif' },
                  { role: 'Warehouse Staff', score: 71, co: 'Logistik' },
                  { role: 'QC Junior', score: 68, co: 'Manufaktur' },
               ].map((pos, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                     <div className="flex justify-between items-start">
                        <div>
                           <h5 className="font-black text-navy leading-tight group-hover:text-blue-600 transition-colors">{pos.role}</h5>
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{pos.co}</p>
                        </div>
                        <MatchBadge score={pos.score} size="sm" />
                     </div>
                     <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-4 hover:underline">Lihat Lowongan →</button>
                  </div>
               ))}
            </div>
         </div>

         {/* [5] SECTION VERIFIKASI */}
         <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
               <h3 className="text-xl font-black text-navy tracking-tight">Verifikasi Sertifikat</h3>
               <p className="text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                  Sertifikat ini dapat diverifikasi secara independen oleh perusahaan mana pun menggunakan QR code atau mengunjungi link verifikasi di bawah.
               </p>

               <div className="mt-8 space-y-4">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Link Verifikasi:</span>
                     <span className="text-sm font-bold text-blue-600">konekta.id/verify/TB-2026-RD-88429</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ID Unik:</span>
                        <span className="text-sm font-bold text-navy">TB-2026-RD-88429</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Diterbitkan:</span>
                        <span className="text-sm font-bold text-navy">10 Mei 2026</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-[32px] border border-gray-100 border-dashed">
               <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center text-gray-200 shadow-inner">
                  <QrCode size={64} />
               </div>
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-4">Scan untuk verifikasi</span>
            </div>
         </div>

      </div>
   );
};

export default HasilAssessment;
