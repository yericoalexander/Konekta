import { Calendar as CalendarIcon, Clock, Video, MoreVertical, CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';

export default function Interview() {
  const interviews = [
    { id: 1, name: 'Raka Dermawan', role: 'Staff Quality Control', date: '13', month: 'MEI', time: '10:00 - 11:00 WIB', type: 'Video Call', status: 'Mendatang', statusColor: 'text-blue-600 bg-blue-50 border-blue-100', link: 'meet.google.com/abc-defg-hij', initials: 'RD', bg: 'bg-purple-100', color: 'text-purple-600' },
    { id: 2, name: 'Sari Wulandari', role: 'Staff Quality Control', date: '14', month: 'MEI', time: '14:00 - 15:00 WIB', type: 'Video Call', status: 'Mendatang', statusColor: 'text-blue-600 bg-blue-50 border-blue-100', link: 'meet.google.com/xyz-uvw-rst', initials: 'SW', bg: 'bg-teal-100', color: 'text-teal-600' },
    { id: 3, name: 'Budi Santoso', role: 'Admin Gudang', date: '10', month: 'MEI', time: '09:00 - 10:00 WIB', type: 'On-site', status: 'Selesai', statusColor: 'text-teal-600 bg-teal-50 border-teal-100', link: '-', initials: 'BS', bg: 'bg-amber-100', color: 'text-amber-600' },
    { id: 4, name: 'Dina Amelia', role: 'Admin Gudang', date: '15', month: 'MEI', time: '13:00 - 14:00 WIB', type: 'Video Call', status: 'Menunggu Konfirmasi', statusColor: 'text-amber-600 bg-amber-50 border-amber-100', link: '-', initials: 'DA', bg: 'bg-rose-100', color: 'text-rose-600' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
           <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">Jadwal Interview</h1>
           <p className="text-slate-500 font-medium">Kelola jadwal wawancara dengan kandidat terpilih.</p>
        </div>
        
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-blue-600 hover:-translate-y-0.5 transition-all">
             <CalendarIcon size={16} /> Jadwalkan Baru
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
           <div className="flex items-center gap-4">
              <CalendarIcon className="text-blue-600" size={24} />
              <h2 className="text-xl font-black text-navy tracking-tight">Agenda Mei 2026</h2>
           </div>
           <div className="flex bg-white rounded-xl border border-slate-200 p-1">
              <button className="px-4 py-1.5 bg-slate-100 text-navy rounded-lg text-[10px] font-black uppercase tracking-widest">Semua</button>
              <button className="px-4 py-1.5 text-slate-400 hover:text-navy rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors">Mendatang</button>
              <button className="px-4 py-1.5 text-slate-400 hover:text-navy rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors">Selesai</button>
           </div>
        </div>

        <div className="divide-y divide-slate-50">
           {interviews.map((iv) => (
             <div key={iv.id} className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="flex items-start md:items-center gap-6 mb-6 md:mb-0 w-full md:w-2/5">
                   <div className={`w-20 h-20 rounded-[24px] flex flex-col items-center justify-center border shadow-sm ${iv.bg} border-${iv.color.split('-')[1]}-200`}>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${iv.color}`}>{iv.month}</span>
                      <span className={`text-3xl font-black leading-none mt-1 ${iv.color}`}>{iv.date}</span>
                   </div>
                   <div>
                      <h4 className="font-black text-navy text-xl group-hover:text-blue-600 transition-colors">{iv.name}</h4>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 flex items-center gap-2">
                         <Briefcase size={14} className="text-slate-300" /> {iv.role}
                      </p>
                   </div>
                </div>

                <div className="w-full md:w-1/4 flex flex-col gap-3 mb-6 md:mb-0">
                   <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      <Clock size={14} className="text-slate-400" /> {iv.time}
                   </div>
                   <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                      <Video size={14} className="text-slate-400" /> {iv.type}
                   </div>
                </div>

                <div className="w-full md:w-1/4 text-left md:text-center mb-6 md:mb-0">
                   <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border shadow-sm ${iv.statusColor}`}>
                      {iv.status === 'Selesai' && <CheckCircle2 size={12} />}
                      {iv.status === 'Menunggu Konfirmasi' && <AlertCircle size={12} />}
                      {iv.status}
                   </span>
                </div>

                <div className="w-full md:w-auto flex justify-end gap-3">
                   {iv.type === 'Video Call' && iv.status !== 'Selesai' && (
                     <button className="px-6 py-3 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm flex items-center gap-2">
                        <Video size={14} /> Join
                     </button>
                   )}
                   <button className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy hover:border-slate-300 transition-all shadow-sm">
                      <MoreVertical size={16} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
