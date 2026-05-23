import React, { useState } from 'react';
import {
  BarChart2, TrendingUp, TrendingDown, Users, Target, Clock,
  Download, Calendar, Briefcase, CheckCircle2, Zap, Star
} from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
const applicants = [120, 190, 145, 310, 280, 390];
const hired = [3, 5, 4, 8, 7, 12];
const maxApplicants = Math.max(...applicants);

const topPositions = [
  { title: 'Staff Quality Control', dept: 'Produksi', applicants: 234, shortlist: 12, hired: 3, rate: 87 },
  { title: 'Admin Gudang', dept: 'Logistik', applicants: 187, shortlist: 8, hired: 2, rate: 82 },
  { title: 'Operator Mesin CNC', dept: 'Produksi', applicants: 312, shortlist: 15, hired: 5, rate: 91 },
  { title: 'Driver Distribusi', dept: 'Logistik', applicants: 98, shortlist: 5, hired: 2, rate: 78 },
];

export default function Laporan() {
  const [activePeriod, setActivePeriod] = useState('Bulanan');
  const periods = ['Mingguan', 'Bulanan', 'Tahunan'];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-20">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">Laporan Rekrutmen</h1>
          <p className="text-slate-500 font-medium">Analisis mendalam performa rekrutmen dan efektivitas AI Konekta.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white border border-slate-100 rounded-2xl p-1 shadow-sm">
            {periods.map(p => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activePeriod === p ? 'bg-navy text-white shadow-md' : 'text-slate-400 hover:text-navy'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-slate-300 transition-all shadow-sm">
            <Download size={16} /> Export PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: 'Akurasi AI Match', value: '89%', delta: '+7%', up: true,
            sub: 'dari bulan lalu', icon: Target, color: 'blue',
            bg: 'from-blue-600 to-blue-400',
          },
          {
            label: 'Waktu Rekrutmen', value: '14 Hari', delta: '−30%', up: true,
            sub: 'lebih cepat', icon: Clock, color: 'teal',
            bg: 'from-teal-500 to-teal-400',
          },
          {
            label: 'Kandidat Diterima', value: '12', delta: '+5', up: true,
            sub: 'bulan ini', icon: CheckCircle2, color: 'purple',
            bg: 'from-purple-600 to-purple-400',
          },
          {
            label: 'Total Pelamar', value: '1,245', delta: '+18%', up: true,
            sub: 'dari bulan lalu', icon: Users, color: 'amber',
            bg: 'from-amber-500 to-orange-400',
          },
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-[28px] border border-slate-100 p-7 shadow-sm relative overflow-hidden group hover:shadow-premium transition-all duration-500">
            <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${kpi.bg} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity`} />
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${kpi.bg} flex items-center justify-center shadow-lg mb-5`}>
              <kpi.icon size={18} className="text-white" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</p>
            <h3 className="text-3xl font-black text-navy tracking-tight mb-2">{kpi.value}</h3>
            <div className={`flex items-center gap-1.5 text-[11px] font-bold ${kpi.up ? 'text-teal-500' : 'text-red-400'}`}>
              {kpi.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
              <span>{kpi.delta} {kpi.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Monthly Trend Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-black text-navy tracking-tight">Tren Pelamar per Bulan</h2>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Jan – Jun 2026</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="w-3 h-3 rounded-full bg-blue-500 block" /> Pelamar
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="w-3 h-3 rounded-full bg-teal-400 block" /> Diterima
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-3 h-44">
            {months.map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full flex flex-col items-center gap-1.5">
                  {/* Applicants bar */}
                  <div className="w-full relative flex flex-col-reverse">
                    <div
                      className="w-full bg-blue-100 rounded-xl overflow-hidden relative group-hover:bg-blue-200 transition-colors"
                      style={{ height: `${(applicants[i] / maxApplicants) * 140}px` }}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl"
                        style={{ height: '100%' }}
                      />
                    </div>
                  </div>
                  {/* Hired bar overlay indicator */}
                  <div className="w-3 h-3 rounded-full bg-teal-400 border-2 border-white shadow-sm mt-1" />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m}</span>
                <span className="text-[10px] font-black text-navy">{applicants[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Accuracy Breakdown */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
          <h2 className="text-xl font-black text-navy tracking-tight mb-1">Akurasi AI</h2>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8">Breakdown per Kategori</p>

          <div className="space-y-5">
            {[
              { label: 'Kecocokan Skills', value: 92, color: 'bg-blue-500' },
              { label: 'Kecocokan Pengalaman', value: 86, color: 'bg-purple-500' },
              { label: 'Kecocokan Lokasi', value: 95, color: 'bg-teal-500' },
              { label: 'Nilai Tes Logika', value: 79, color: 'bg-amber-500' },
              { label: 'Nilai Tes Bahasa', value: 83, color: 'bg-rose-400' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-black text-navy">{item.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Rata-rata Keseluruhan</p>
              <p className="text-2xl font-black text-navy">89% <span className="text-xs font-bold text-teal-500">Sangat Baik</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Funnel */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 mb-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-black text-navy tracking-tight">Funnel Rekrutmen</h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Konversi Pelamar → Karyawan</p>
          </div>
          <BarChart2 className="text-slate-300" size={28} />
        </div>

        <div className="space-y-5">
          {[
            { label: 'Total Pelamar', count: 1245, pct: 100, color: 'from-slate-400 to-slate-300', text: 'text-slate-500' },
            { label: 'Lolos Screening AI', count: 487, pct: 39, color: 'from-blue-500 to-blue-400', text: 'text-blue-600' },
            { label: 'AI Shortlist', count: 312, pct: 25, color: 'from-purple-500 to-purple-400', text: 'text-purple-600' },
            { label: 'Terjadwal Interview', count: 124, pct: 10, color: 'from-amber-500 to-amber-400', text: 'text-amber-600' },
            { label: 'Kandidat Diterima', count: 12, pct: 1, color: 'from-teal-500 to-teal-400', text: 'text-teal-600' },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-6 group">
              <div className={`w-40 text-[10px] font-black uppercase tracking-widest ${row.text}`}>{row.label}</div>
              <div className="flex-1 bg-slate-50 rounded-full h-10 overflow-hidden border border-slate-100">
                <div
                  className={`h-full bg-gradient-to-r ${row.color} rounded-full flex items-center px-5 min-w-[60px] shadow-sm transition-all duration-700 group-hover:shadow-md`}
                  style={{ width: `${Math.max(row.pct, 5)}%` }}
                >
                  <span className="text-[10px] font-black text-white whitespace-nowrap">{row.count.toLocaleString()}</span>
                </div>
              </div>
              <div className="w-12 text-right text-[10px] font-black text-slate-400">{row.pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Positions Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-navy tracking-tight">Performa Per Posisi</h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Lowongan aktif bulan ini</p>
          </div>
          <Star className="text-amber-400" size={22} />
        </div>

        <div className="divide-y divide-slate-50">
          {/* Table Header */}
          <div className="px-8 py-4 grid grid-cols-6 text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
            <div className="col-span-2">Posisi</div>
            <div className="text-center">Pelamar</div>
            <div className="text-center">Shortlist</div>
            <div className="text-center">Diterima</div>
            <div className="text-center">AI Match</div>
          </div>

          {topPositions.map((pos, i) => (
            <div key={i} className="px-8 py-5 grid grid-cols-6 items-center hover:bg-slate-50 transition-colors group">
              <div className="col-span-2 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Briefcase size={16} />
                </div>
                <div>
                  <p className="font-black text-navy text-sm group-hover:text-blue-600 transition-colors">{pos.title}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{pos.dept}</p>
                </div>
              </div>
              <div className="text-center font-black text-navy">{pos.applicants}</div>
              <div className="text-center font-black text-blue-600">{pos.shortlist}</div>
              <div className="text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-teal-50 text-teal-600 font-black text-sm border border-teal-100">{pos.hired}</span>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-16 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pos.rate}%` }} />
                  </div>
                  <span className="text-[10px] font-black text-blue-600">{pos.rate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
