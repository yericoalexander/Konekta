import React, { useState } from 'react';
import { Search, Filter, LayoutGrid, List, Target, Bookmark, Clock } from 'lucide-react';
import { MatchBadge } from '../../components/ui/MatchBadge';

const jobList = [
  { id: 1, posisi: "Staff Quality Control", perusahaan: "PT Astra International", industri: "Manufaktur", kota: "Jakarta", tipe: "Full-time", match: 87, gaji: "4.500.000 – 6.000.000", posted: "2 hari lalu" },
  { id: 2, posisi: "Operator Logistik", perusahaan: "PT JNE Express", industri: "Logistik", kota: "Surabaya", tipe: "Full-time", match: 82, gaji: "4.000.000 – 5.500.000", posted: "1 hari lalu" },
  { id: 3, posisi: "Teknisi Mesin Junior", perusahaan: "PT Toyota Astra Motor", industri: "Otomotif", kota: "Karawang", tipe: "Full-time", match: 76, gaji: "5.000.000 – 7.000.000", posted: "3 hari lalu" },
  { id: 4, posisi: "Admin Gudang", perusahaan: "PT Unilever Indonesia", industri: "FMCG", kota: "Bekasi", tipe: "Full-time", match: 74, gaji: "4.000.000 – 5.000.000", posted: "5 hari lalu" },
  { id: 5, posisi: "Pengawas Produksi", perusahaan: "PT Indofood", industri: "Manufaktur", kota: "Tangerang", tipe: "Full-time", match: 72, gaji: "4.500.000 – 6.000.000", posted: "1 minggu lalu" },
  { id: 6, posisi: "Warehouse Staff", perusahaan: "PT Shopee Logistics", industri: "Logistik", kota: "Jakarta", tipe: "Full-time", match: 71, gaji: "4.000.000 – 5.000.000", posted: "3 hari lalu" },
];

const LowonganUntukku: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="max-w-7xl mx-auto animate-fade-in-up">

      {/* [1] HEADER & STATS BAR */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-navy tracking-tight">Lowongan Untukku</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">24 lowongan ditemukan AI berdasarkan profil kompetensimu</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
          <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
            <LayoutGrid size={20} />
          </button>
          <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
            <List size={20} />
          </button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
          <Target size={20} />
        </div>
        <p className="text-sm text-blue-800 font-bold">
          AI telah mencocokkan profilmu • <span className="font-medium opacity-70 italic">Diperbarui 5 menit lalu</span>
        </p>
      </div>

      {/* [2] FILTER BAR */}
      <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-blue-500/10 outline-none"
            placeholder="Cari posisi atau perusahaan..."
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-700 outline-none">
            <option>Semua Industri</option>
            <option>Manufaktur</option>
            <option>Logistik</option>
            <option>Teknologi</option>
          </select>
          <select className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-700 outline-none">
            <option>Lokasi</option>
            <option>Jakarta</option>
            <option>Surabaya</option>
          </select>
          <button className="p-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-navy transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* [3] SORT & RESULTS COUNT */}
      <div className="flex justify-between items-center mb-6 px-2">
        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Menampilkan 24 Lowongan</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400">Urutkan:</span>
          <select className="bg-transparent text-xs font-black text-navy outline-none border-none cursor-pointer">
            <option>Match Score Tertinggi</option>
            <option>Terbaru</option>
            <option>Gaji Tertinggi</option>
          </select>
        </div>
      </div>

      {/* [4] GRID LOWONGAN */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {jobList.map((job) => (
          <div key={job.id} className="group card bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 hover:shadow-2xl hover:translate-y-[-8px] transition-all relative overflow-hidden">
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center font-black text-gray-300 text-[10px] uppercase group-hover:scale-110 transition-transform">
                  Logo
                </div>
                <div>
                  <h3 className="font-black text-navy text-lg leading-tight group-hover:text-blue-600 transition-colors">{job.posisi}</h3>
                  <p className="text-sm font-bold text-gray-400 mt-1">{job.perusahaan}</p>
                </div>
              </div>
              <MatchBadge score={job.match} />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {[job.industri, job.kota, job.tipe].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-black text-gray-500 uppercase rounded-xl border border-gray-100 tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm font-bold text-navy">
                <span className="opacity-40">💰</span> Rp {job.gaji}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Clock size={12} /> Dibuka {job.posted}
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-100/50 rounded-2xl px-4 py-3 text-[11px] font-bold text-teal-700 flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
              AI: Skill kamu sangat relevan untuk posisi ini
            </div>

            <div className="flex gap-3 relative z-10">
              <button className="flex-1 btn btn-solid-blue py-3 rounded-2xl font-black text-sm shadow-lg shadow-blue/20">Lamar Sekarang</button>
              <button className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-400 rounded-2xl border border-gray-100 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LowonganUntukku;
