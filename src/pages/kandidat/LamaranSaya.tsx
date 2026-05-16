import React, { useState } from 'react';
import { Send, Clock, CalendarCheck, Trophy, Search, ChevronRight, Check } from 'lucide-react';
import { StatusBadge } from '../../components/ui/StatusBadge';

const applicationSummary = [
  { label: 'Total Lamaran', val: '8', icon: <Send size={20} />, color: 'blue' },
  { label: 'Sedang Diproses', val: '3', icon: <Clock size={20} />, color: 'amber' },
  { label: 'Jadwal Interview', val: '2', icon: <CalendarCheck size={20} />, color: 'green' },
  { label: 'Tawaran Diterima', val: '1', icon: <Trophy size={20} />, color: 'purple' },
];

const applications = [
  { id: 1, posisi: "Staff QC", perusahaan: "PT Astra International", kota: "Jakarta", match: 87, tipe: "Full-time", tanggal: "8 Mei 2026", status: "Diproses" as const, step: 3 },
  { id: 2, posisi: "Admin Data", perusahaan: "PT BCA", kota: "Jakarta", match: 79, tipe: "Full-time", tanggal: "5 Mei 2026", status: "Interview" as const, step: 4, jadwal: "Selasa, 14 Mei • 14.00 WIB" },
  { id: 3, posisi: "Operator Logistik", perusahaan: "PT JNE", kota: "Surabaya", match: 82, tipe: "Full-time", tanggal: "3 Mei 2026", status: "Dikirim" as const, step: 1 },
  { id: 4, posisi: "Teknisi Junior", perusahaan: "PT Toyota Astra", kota: "Karawang", match: 76, tipe: "Full-time", tanggal: "28 Apr 2026", status: "Ditolak" as const, step: 4 },
  { id: 5, posisi: "Warehouse Staff", perusahaan: "PT Shopee Logistics", kota: "Jakarta", match: 71, tipe: "Full-time", tanggal: "20 Apr 2026", status: "Tawaran" as const, step: 4 },
];

const LamaranSaya: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">

      {/* [1] SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {applicationSummary.map((stat, i) => (
          <div key={i} className={`bg-white rounded-[28px] p-6 shadow-sm border-l-4 border-${stat.color}-500 flex flex-col gap-4`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600 shadow-inner`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-3xl font-black text-navy leading-none">{stat.val}</h3>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* [2] FILTER TABS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div className="flex bg-gray-100 p-1.5 rounded-[20px] shadow-inner">
          {['Semua', 'Diproses', 'Interview', 'Ditolak', 'Diterima'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all ${activeTab === tab ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" className="w-full bg-white border border-gray-100 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500/10 outline-none shadow-sm" placeholder="Cari lamaran..." />
        </div>
      </div>

      {/* [3] DAFTAR LAMARAN */}
      <div className="space-y-6">
        {applications.map((app) => (
          <div key={app.id} className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center font-black text-gray-300 text-[10px] uppercase group-hover:scale-105 transition-transform">
                  Logo
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy tracking-tight group-hover:text-blue-600 transition-colors">{app.posisi}</h3>
                  <p className="text-sm font-bold text-gray-500 mt-1">{app.perusahaan} • {app.kota}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase rounded-lg border border-teal-100">{app.match}% Match</span>
                    <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-black uppercase rounded-lg border border-gray-100">{app.tipe}</span>
                    <span className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dilamar {app.tanggal}</span>
                  </div>
                </div>
              </div>
              <StatusBadge status={app.status} />
            </div>

            {/* PROGRESS STEPS */}
            <div className="mt-10 mb-8 px-4">
              <div className="relative flex justify-between">
                {/* Background Line */}
                <div className="absolute top-4 left-0 right-0 h-1 bg-gray-100 rounded-full"></div>
                {/* Active Line */}
                <div className="absolute top-4 left-0 h-1 bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${((app.step - 1) / 3) * 100}%` }}></div>

                {['Dikirim', 'Dibaca', 'Diproses', 'Keputusan'].map((stepName, i) => {
                  const currentStep = i + 1;
                  const isCompleted = currentStep < app.step;
                  const isActive = currentStep === app.step;

                  return (
                    <div key={stepName} className="flex flex-col items-center relative z-10">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-all duration-500 ${isCompleted ? 'bg-green-500 text-white' :
                        isActive ? 'bg-blue-600 text-white scale-125' : 'bg-white text-gray-300 border-gray-100'
                        }`}>
                        {isCompleted ? <Check size={16} strokeWidth={4} /> : <span className="text-xs font-black">{currentStep}</span>}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest mt-4 ${isActive ? 'text-navy' : isCompleted ? 'text-green-600' : 'text-gray-300'
                        }`}>{stepName}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="pt-6 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
              {app.status === 'Interview' ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-2xl text-green-700">
                    <span className="text-sm font-black">📅 Jadwal: {app.jadwal}</span>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="btn btn-solid-blue px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2">Persiapan Interview <ChevronRight size={16} /></button>
                  </div>
                </>
              ) : app.status === 'Tawaran' ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-2xl text-purple-700">
                    <span className="text-sm font-black">✨ Selamat! Kamu mendapat tawaran kerja</span>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-purple-200">Lihat Offering Letter</button>
                    <button className="px-6 py-3 border-2 border-purple-100 text-purple-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-50">Hubungi HR</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                    {app.status === 'Diproses' ? 'Estimasi respons: 3-5 hari kerja' : 'AI memonitor status lamaranmu secara real-time'}
                  </div>
                  <button className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">Lihat Detail Lamaran →</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LamaranSaya;
