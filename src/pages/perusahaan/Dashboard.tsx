import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Briefcase, TrendingUp, CheckCircle2,
  Video, MoreVertical, Search, Bell, Sparkles, X, MapPin
} from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-20">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
        <div>
           <h1 className="text-5xl font-extrabold text-navy tracking-tight mb-3">Dashboard Rekrutmen</h1>
           <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-teal-100 flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div> Sistem Aktif
              </span>
           </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-white p-2 rounded-[24px] border border-slate-100 shadow-premium">
             <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all hover:bg-slate-50 rounded-2xl">
                <Search size={20} />
             </button>
             <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all hover:bg-slate-50 rounded-2xl relative">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="h-10 w-[1px] bg-slate-100"></div>
             <div className="flex items-center gap-3 pr-4 pl-2 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white font-bold shadow-lg">HR</div>
                <div className="hidden sm:block">
                   <p className="text-[11px] font-black text-navy uppercase tracking-wider leading-none mb-1">Siti R.</p>
                   <p className="text-[9px] font-bold text-slate-400 uppercase">HR Manager</p>
                </div>
             </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-navy text-white rounded-[20px] text-[11px] font-black shadow-xl shadow-navy/20 hover:bg-blue-600 hover:-translate-y-1 transition-all uppercase tracking-widest whitespace-nowrap"
          >
            + Buka Posisi Baru
          </button>
        </div>
      </div>

      {/* Row 1: Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Kandidat Diterima', val: '12', sub: 'Bulan ini', icon: <Users />, color: '#10B981', bg: '#D1FAE5' },
          { label: 'Shortlist Aktif', val: '47', sub: 'Menunggu Review', icon: <CheckCircle2 />, color: '#3B82F6', bg: '#EFF6FF' },
          { label: 'Posisi Terbuka', val: '3', sub: 'Dari limit 5', icon: <Briefcase />, color: '#8B5CF6', bg: '#F5F3FF' },
          { label: 'Akurasi AI', val: '89%', sub: 'Global Matching', icon: <TrendingUp />, color: '#F59E0B', bg: '#FFF7ED' },
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

      {/* Row 2: Table Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden mb-12">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-2xl font-black text-navy tracking-tight">Status Lowongan Aktif</h2>
          <Link to="/perusahaan/laporan" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Lihat Semua Laporan →</Link>
        </div>
        <div className="overflow-x-auto">
           <table className="w-full text-left border-collapse">
             <thead>
               <tr className="bg-white border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400 font-black">
                 <th className="p-6">Posisi & Departemen</th>
                 <th className="p-6 text-center">Talent Pool</th>
                 <th className="p-6 text-center">AI Shortlist</th>
                 <th className="p-6">Status</th>
                 <th className="p-6 text-right">Tindakan</th>
               </tr>
             </thead>
             <tbody className="text-sm">
               {[
                 { pos: 'Staff Quality Control', dept: 'Produksi', pool: 234, short: 12, status: 'Aktif', color: 'teal' },
                 { pos: 'Admin Gudang', dept: 'Logistik', pool: 187, short: 8, status: 'Aktif', color: 'teal' },
                 { pos: 'Driver Distribusi', dept: 'Logistik', pool: 98, short: 5, status: 'Review', color: 'amber' },
               ].map((job, i) => (
                 <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                   <td className="p-6">
                      <p className="font-black text-navy text-base group-hover:text-blue-600 transition-colors">{job.pos}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{job.dept}</p>
                   </td>
                   <td className="p-6 text-center font-bold text-slate-500">{job.pool}</td>
                   <td className="p-6 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-black border border-blue-100">
                         {job.short}
                      </span>
                   </td>
                   <td className="p-6">
                      <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${job.color === 'teal' ? 'bg-teal-50 text-teal-600 border-teal-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                         {job.status}
                      </span>
                   </td>
                   <td className="p-6 text-right">
                      <Link to="/perusahaan/kandidat" className="inline-block px-6 py-2.5 bg-white border-2 border-slate-100 text-navy rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
                         Lihat Shortlist
                      </Link>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>

      {/* Row 3: Splits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Shortlist AI */}
        <div>
          <div className="flex justify-between items-center mb-8 px-2">
            <h2 className="text-2xl font-black text-navy tracking-tight">AI Shortlist: Staff QC</h2>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">Top 5%</span>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Raka Dermawan', school: 'SMK Teknik Mesin', match: 87, lgk: 88, bhs: 76, initials: 'RD', bg: 'bg-blue-600', color: 'text-white' },
              { name: 'Sari Wulandari', school: 'SMK Analis Kimia', match: 82, lgk: 79, bhs: 85, initials: 'SW', bg: 'bg-teal-500', color: 'text-white' }
            ].map((k, i) => (
              <div key={i} className="bg-white p-6 rounded-[24px] border border-slate-100 hover:shadow-premium transition-all duration-500 group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-md ${k.bg} ${k.color}`}>
                       {k.initials}
                    </div>
                    <div>
                      <h4 className="font-black text-navy text-lg group-hover:text-blue-600 transition-colors flex items-center gap-2">
                         {k.name} <CheckCircle2 size={16} className="text-teal-500" />
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{k.school}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-teal-50 text-teal-600 rounded-xl border border-teal-100 text-[10px] font-black uppercase tracking-widest">
                     {k.match}% Match
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">
                       <span>Logika & Analitik</span>
                       <span className="text-navy">{k.lgk}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${k.lgk}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">
                       <span>Komunikasi</span>
                       <span className="text-navy">{k.bhs}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: `${k.bhs}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link to="/profil/raka-dermawan" className="flex-1 py-3 bg-white border-2 border-slate-100 text-navy rounded-xl text-[10px] font-black uppercase tracking-widest text-center hover:border-navy transition-all">
                     Profil Lengkap
                  </Link>
                  <button className="flex-1 py-3 bg-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest text-center shadow-lg hover:bg-blue-600 transition-all">
                     Jadwalkan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interviews & AI Insight */}
        <div className="flex flex-col gap-8">
          <div>
             <h2 className="text-2xl font-black text-navy tracking-tight mb-8 px-2">Jadwal Interview</h2>
             <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
                {[
                  { date: '13', month: 'MEI', name: 'Raka Dermawan', pos: 'Staff QC', time: '10.00 WIB' },
                  { date: '14', month: 'MEI', name: 'Sari Wulandari', pos: 'Staff QC', time: '14.00 WIB' }
                ].map((iv, i) => (
                  <div key={i} className="p-6 border-b border-slate-50 flex items-center gap-6 hover:bg-slate-50 transition-colors group cursor-pointer">
                     <div className="w-16 h-16 bg-purple-50 rounded-2xl flex flex-col items-center justify-center text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <span className="text-[10px] font-black uppercase tracking-widest">{iv.month}</span>
                        <span className="text-2xl font-black leading-none mt-1">{iv.date}</span>
                     </div>
                     <div className="flex-1">
                        <h4 className="font-black text-navy text-lg group-hover:text-blue-600 transition-colors">{iv.name}</h4>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 flex items-center gap-2">
                           <Video size={14} className="text-slate-300" /> {iv.time} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {iv.pos}
                        </p>
                     </div>
                     <MoreVertical className="text-slate-300 hover:text-navy" />
                  </div>
                ))}
                <div className="p-6 bg-slate-50 flex gap-4">
                   <button className="flex-1 py-4 bg-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-blue-600 transition-all flex justify-center items-center gap-2">
                      <Video size={16} /> Buka Ruang G-Meet
                   </button>
                </div>
             </div>
          </div>

          {/* Smart Insight */}
          <div className="bg-navy rounded-[32px] p-8 text-white relative overflow-hidden shadow-premium group cursor-pointer">
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[40px] group-hover:bg-blue-500/40 transition-colors"></div>
             <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-blue-500/20">
                      <Sparkles size={12} /> AI Insight
                   </div>
                </div>
                <h4 className="font-black text-xl mb-3">Model Matching Semakin Presisi</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">Akurasi rekomendasi meningkat 7% bulan ini setelah sistem mempelajari 3 feedback hiring terakhir dari tim Anda.</p>
                
                {/* Visualizer */}
                <div className="flex items-end gap-1.5 h-16">
                   <div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-md" style={{ height: '40%' }}></div>
                   <div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-md" style={{ height: '55%' }}></div>
                   <div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-md" style={{ height: '65%' }}></div>
                   <div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-md" style={{ height: '80%' }}></div>
                   <div className="w-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-t-md relative" style={{ height: '100%' }}>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-blue-400">89%</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Modal Buka Posisi Baru */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl animate-fade-in-up flex flex-col max-h-[90vh]">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
               <div>
                  <h2 className="text-2xl font-black text-navy tracking-tight">Buka Posisi Baru</h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">Buat lowongan pekerjaan dan atur preferensi pencocokan AI.</p>
               </div>
               <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all border border-slate-100 shadow-sm">
                  <X size={20} />
               </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="md:col-span-2">
                     <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Judul Posisi</label>
                     <input type="text" placeholder="Misal: Senior Quality Control" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all" />
                  </div>
                  <div>
                     <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Departemen</label>
                     <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer">
                        <option>Produksi</option>
                        <option>Logistik & Supply Chain</option>
                        <option>Teknologi Informasi</option>
                        <option>Sumber Daya Manusia</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Tipe Pekerjaan</label>
                     <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer">
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Kontrak</option>
                        <option>Magang</option>
                     </select>
                  </div>
                  <div className="md:col-span-2">
                     <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Lokasi</label>
                     <div className="relative">
                        <MapPin className="absolute left-5 top-4 text-slate-400" size={20} />
                        <input type="text" defaultValue="Kawasan Industri Cikarang, Bekasi" className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all" />
                     </div>
                  </div>
                  <div className="md:col-span-2">
                     <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Deskripsi Pekerjaan & Persyaratan</label>
                     <textarea rows={5} placeholder="Tuliskan tanggung jawab utama dan kualifikasi yang dibutuhkan..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"></textarea>
                  </div>
                  
                  {/* AI Match Settings */}
                  <div className="md:col-span-2 bg-blue-50/50 rounded-[24px] p-6 border border-blue-100">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                           <Sparkles size={20} />
                        </div>
                        <div>
                           <h3 className="font-black text-navy text-sm">Konfigurasi AI Screening</h3>
                           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Atur sensitivitas pencocokan kandidat</p>
                        </div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                           <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                              <span>Minimal AI Match</span>
                              <span className="text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100">80%</span>
                           </div>
                           <input type="range" min="50" max="100" defaultValue="80" className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        </div>
                        <div>
                           <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                              <span>Minimal Skor Logika</span>
                              <span className="text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100">75%</span>
                           </div>
                           <input type="range" min="50" max="100" defaultValue="75" className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-white flex justify-end gap-4 shrink-0">
               <button onClick={() => setIsModalOpen(false)} className="px-8 py-4 bg-white border border-slate-200 text-slate-500 rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-slate-300 hover:text-navy transition-all shadow-sm">
                  Batal
               </button>
               <button onClick={() => setIsModalOpen(false)} className="px-8 py-4 bg-blue-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 transition-all">
                  Publikasikan Lowongan
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
