import React from 'react';
import { Users, Search, Filter, CheckCircle2, MoreHorizontal, MessageSquare, Video } from 'lucide-react';

export default function Kandidat() {
  const candidates = [
    { id: 1, name: 'Raka Dermawan', role: 'Staff Quality Control', match: 87, lgk: 88, bhs: 76, status: 'Shortlisted', initials: 'RD', bg: 'bg-blue-600' },
    { id: 2, name: 'Sari Wulandari', role: 'Staff Quality Control', match: 82, lgk: 79, bhs: 85, status: 'Interview', initials: 'SW', bg: 'bg-teal-500' },
    { id: 3, name: 'Budi Santoso', role: 'Admin Gudang', match: 91, lgk: 92, bhs: 88, status: 'Offered', initials: 'BS', bg: 'bg-amber-500' },
    { id: 4, name: 'Dina Amelia', role: 'Admin Gudang', match: 78, lgk: 75, bhs: 82, status: 'Shortlisted', initials: 'DA', bg: 'bg-purple-500' },
    { id: 5, name: 'Andi Pratama', role: 'Driver Distribusi', match: 85, lgk: 80, bhs: 90, status: 'Reviewed', initials: 'AP', bg: 'bg-rose-500' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
           <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">Kandidat AI</h1>
           <p className="text-slate-500 font-medium">Talent pool yang direkomendasikan oleh sistem Konekta AI.</p>
        </div>
        
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-slate-300 transition-all shadow-sm">
             <Filter size={16} /> Filter Match
           </button>
        </div>
      </div>

      <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm mb-8 flex items-center">
         <div className="pl-4 text-slate-400"><Search size={20} /></div>
         <input type="text" placeholder="Cari nama kandidat, skill, atau role..." className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-sm font-medium text-navy placeholder:text-slate-400" />
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
           <h2 className="text-lg font-black text-navy uppercase tracking-widest">Semua Kandidat</h2>
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total: 47 Shortlisted</span>
        </div>
        
        <div className="divide-y divide-slate-50">
           {candidates.map((cand) => (
             <div key={cand.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="flex items-center gap-6 w-1/3">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-md ${cand.bg}`}>
                      {cand.initials}
                   </div>
                   <div>
                      <h4 className="font-black text-navy text-lg group-hover:text-blue-600 transition-colors flex items-center gap-2">
                         {cand.name} <CheckCircle2 size={16} className="text-teal-500" />
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{cand.role}</p>
                   </div>
                </div>

                <div className="w-1/4 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest w-12">Logika</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 rounded-full" style={{ width: `${cand.lgk}%` }}></div>
                      </div>
                      <span className="text-[10px] font-black text-navy w-6">{cand.lgk}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest w-12">Bahasa</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-teal-500 rounded-full" style={{ width: `${cand.bhs}%` }}></div>
                      </div>
                      <span className="text-[10px] font-black text-navy w-6">{cand.bhs}</span>
                   </div>
                </div>

                <div className="w-1/6 text-center">
                   <div className="inline-flex items-center justify-center px-3 py-1.5 bg-teal-50 text-teal-600 rounded-xl border border-teal-100 text-[10px] font-black uppercase tracking-widest">
                      {cand.match}% Match
                   </div>
                </div>

                <div className="w-1/6 text-center">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                      {cand.status}
                   </span>
                </div>

                <div className="w-1/6 flex justify-end gap-2">
                   <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                      <MessageSquare size={16} />
                   </button>
                   <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-purple-600 hover:border-purple-200 transition-all shadow-sm">
                      <Video size={16} />
                   </button>
                   <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy hover:border-slate-300 transition-all shadow-sm">
                      <MoreHorizontal size={16} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
