import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, Search, Plus, Filter, MoreVertical, MapPin, Users,
  X, ChevronDown, Building2, DollarSign, FileText, Layers, Clock, Sparkles
} from 'lucide-react';

interface JobForm {
  title: string;
  department: string;
  location: string;
  type: string;
  salaryMin: string;
  salaryMax: string;
  description: string;
  requirements: string;
}

const DEPARTMENTS = ['Produksi', 'Logistik', 'HRD', 'Keuangan', 'IT & Teknologi', 'Pemasaran', 'Operasional'];
const LOCATIONS = ['Jakarta', 'Tangerang', 'Bekasi', 'Cikarang', 'Bogor', 'Bandung', 'Surabaya'];
const JOB_TYPES = ['Full-time', 'Part-time', 'Kontrak', 'Magang', 'Freelance'];

export default function LowonganAktif() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<JobForm>({
    title: '', department: '', location: '', type: '',
    salaryMin: '', salaryMax: '', description: '', requirements: ''
  });
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    { title: 'Staff Quality Control', dept: 'Produksi', loc: 'Cikarang', type: 'Full-time', pool: 234, short: 12, status: 'Aktif', color: 'teal' },
    { title: 'Admin Gudang', dept: 'Logistik', loc: 'Tangerang', type: 'Full-time', pool: 187, short: 8, status: 'Aktif', color: 'teal' },
    { title: 'Driver Distribusi', dept: 'Logistik', loc: 'Jakarta', type: 'Kontrak', pool: 98, short: 5, status: 'Review', color: 'amber' },
    { title: 'Operator Mesin CNC', dept: 'Produksi', loc: 'Cikarang', type: 'Full-time', pool: 312, short: 15, status: 'Draft', color: 'slate' },
  ];

  const openModal = () => {
    setForm({ title: '', department: '', location: '', type: '', salaryMin: '', salaryMax: '', description: '', requirements: '' });
    setStep(1);
    setSubmitted(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => { setStep(1); setSubmitted(false); }, 300);
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const isStep1Valid = form.title.trim() && form.department && form.location && form.type;

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-20">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
        <div>
           <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">Lowongan Aktif</h1>
           <p className="text-slate-500 font-medium">Kelola dan pantau semua posisi yang sedang dibuka.</p>
        </div>
        
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-slate-300 transition-all shadow-sm">
             <Filter size={16} /> Filter
           </button>
           <button
             onClick={openModal}
             className="flex items-center gap-2 px-8 py-3 bg-navy text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-blue-600 hover:-translate-y-0.5 transition-all"
           >
             <Plus size={16} /> Posisi Baru
           </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm mb-8 flex items-center">
         <div className="pl-4 text-slate-400"><Search size={20} /></div>
         <input type="text" placeholder="Cari posisi, departemen, atau lokasi..." className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-sm font-medium text-navy placeholder:text-slate-400" />
         <button className="px-8 py-3 bg-blue-50 text-blue-600 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-100 transition-colors">
            Cari
         </button>
      </div>

      {/* Grid of Jobs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {jobs.map((job, i) => (
            <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-8 hover:shadow-premium transition-all duration-500 group relative overflow-hidden">
               {/* Status Badge */}
               <div className="absolute top-8 right-8">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                    job.color === 'teal' ? 'bg-teal-50 text-teal-600 border-teal-100' :
                    job.color === 'amber' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                    'bg-slate-50 text-slate-500 border-slate-200'
                  }`}>
                     {job.status}
                  </span>
               </div>

               <div className="flex items-start gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     <Briefcase size={24} />
                  </div>
                  <div>
                     <h3 className="text-xl font-black text-navy tracking-tight mb-1 group-hover:text-blue-600 transition-colors pr-20">{job.title}</h3>
                     <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        {job.dept} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> <MapPin size={12} /> {job.loc}
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex flex-col">
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Talent Pool</span>
                     <span className="text-2xl font-black text-navy flex items-center gap-2"><Users size={16} className="text-slate-400" /> {job.pool}</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">AI Shortlist</span>
                     <span className="text-2xl font-black text-blue-600">{job.short}</span>
                  </div>
               </div>

               <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-white border-2 border-slate-100 text-navy rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-slate-200 transition-all">
                     Edit Details
                  </button>
                  <Link to="/perusahaan/kandidat" className="flex-1 py-3 bg-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest text-center shadow-lg hover:bg-blue-600 transition-all">
                     Lihat Kandidat
                  </Link>
                  <button className="w-12 h-12 bg-white border-2 border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-navy hover:border-slate-200 transition-all">
                     <MoreVertical size={18} />
                  </button>
               </div>
            </div>
         ))}
      </div>

      {/* ───────────── MODAL BUKA POSISI BARU ───────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ animation: 'fadeIn 0.2s ease' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Card */}
          <div
            className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden"
            style={{ animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-10 pt-10 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center shadow-lg">
                  <Briefcase size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-navy tracking-tight">Buka Posisi Baru</h2>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    {submitted ? 'Selesai' : `Langkah ${step} dari 2`}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-navy transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Step Indicator */}
            {!submitted && (
              <div className="px-10 pt-6 flex items-center gap-3">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${step === 1 ? 'bg-navy text-white' : 'bg-teal-50 text-teal-600 border border-teal-100'}`}>
                  <Layers size={12} /> Info Posisi
                </div>
                <div className="flex-1 h-px bg-slate-100" />
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${step === 2 ? 'bg-navy text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <FileText size={12} /> Deskripsi
                </div>
              </div>
            )}

            {/* Modal Body */}
            <div className="px-10 py-8 max-h-[60vh] overflow-y-auto">

              {/* ─ SUCCESS STATE ─ */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-teal-50 flex items-center justify-center mb-6" style={{ animation: 'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}>
                    <Sparkles size={40} className="text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-black text-navy tracking-tight mb-2">Posisi Berhasil Dibuka!</h3>
                  <p className="text-slate-500 font-medium mb-1">
                    <span className="font-black text-navy">{form.title || 'Posisi Baru'}</span> di departemen <span className="font-black text-navy">{form.department}</span>
                  </p>
                  <p className="text-slate-400 text-sm mb-8">Konekta AI akan segera memulai proses matching kandidat.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={closeModal}
                      className="px-8 py-3 bg-white border-2 border-slate-100 text-navy rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-slate-200 transition-all"
                    >
                      Tutup
                    </button>
                    <button
                      onClick={openModal}
                      className="px-8 py-3 bg-navy text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg hover:bg-blue-600 transition-all"
                    >
                      Buka Posisi Lain
                    </button>
                  </div>
                </div>
              ) : step === 1 ? (
                /* ─ STEP 1: Info Posisi ─ */
                <div className="space-y-6">
                  {/* Judul Posisi */}
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-2">
                      <Briefcase size={12} /> Judul Posisi <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Staff Quality Control"
                      value={form.title}
                      onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all placeholder:text-slate-300"
                    />
                  </div>

                  {/* Departemen & Lokasi */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-2">
                        <Building2 size={12} /> Departemen <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.department}
                          onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
                          className="w-full appearance-none px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="">Pilih Departemen</option>
                          {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-2">
                        <MapPin size={12} /> Lokasi <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.location}
                          onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                          className="w-full appearance-none px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="">Pilih Lokasi</option>
                          {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Tipe Pekerjaan */}
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-3">
                      <Clock size={12} /> Tipe Pekerjaan <span className="text-red-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {JOB_TYPES.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, type: t }))}
                          className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                            form.type === t
                              ? 'bg-navy text-white border-navy shadow-lg'
                              : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Range Gaji */}
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-2">
                      <DollarSign size={12} /> Rentang Gaji (Rp)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Min. Contoh: 4.000.000"
                        value={form.salaryMin}
                        onChange={e => setForm(f => ({ ...f, salaryMin: e.target.value }))}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all placeholder:text-slate-300"
                      />
                      <input
                        type="text"
                        placeholder="Maks. Contoh: 7.000.000"
                        value={form.salaryMax}
                        onChange={e => setForm(f => ({ ...f, salaryMax: e.target.value }))}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* ─ STEP 2: Deskripsi ─ */
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-2">
                      <FileText size={12} /> Deskripsi Pekerjaan
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Jelaskan tanggung jawab dan tugas utama posisi ini..."
                      value={form.description}
                      onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all placeholder:text-slate-300 resize-none"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-navy uppercase tracking-widest mb-2">
                      <Sparkles size={12} /> Kualifikasi & Persyaratan
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tuliskan kualifikasi minimum, pengalaman, skill yang dibutuhkan..."
                      value={form.requirements}
                      onChange={e => setForm(f => ({ ...f, requirements: e.target.value }))}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-navy font-semibold text-sm outline-none focus:border-blue-300 focus:bg-white transition-all placeholder:text-slate-300 resize-none"
                    />
                  </div>

                  {/* Summary Preview */}
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                    <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-3">Ringkasan Posisi</p>
                    <div className="flex flex-wrap gap-2">
                      {form.title && <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-navy border border-blue-100">{form.title}</span>}
                      {form.department && <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-navy border border-blue-100">{form.department}</span>}
                      {form.location && <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-navy border border-blue-100 flex items-center gap-1"><MapPin size={10}/>{form.location}</span>}
                      {form.type && <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-navy border border-blue-100">{form.type}</span>}
                      {(form.salaryMin || form.salaryMax) && (
                        <span className="px-3 py-1.5 bg-white rounded-lg text-xs font-bold text-navy border border-blue-100">
                          Rp {form.salaryMin || '?'} – {form.salaryMax || '?'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {!submitted && (
              <div className="px-10 pb-10 pt-2 flex justify-between items-center border-t border-slate-100">
                <button
                  onClick={() => step === 1 ? closeModal() : setStep(1)}
                  className="px-6 py-3 bg-white border-2 border-slate-100 text-navy rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-slate-200 transition-all"
                >
                  {step === 1 ? 'Batal' : '← Kembali'}
                </button>

                {step === 1 ? (
                  <button
                    disabled={!isStep1Valid}
                    onClick={() => setStep(2)}
                    className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                      isStep1Valid
                        ? 'bg-navy text-white shadow-lg shadow-navy/20 hover:bg-blue-600 hover:-translate-y-0.5'
                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                  >
                    Lanjutkan →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex items-center gap-2 px-8 py-3 bg-teal-500 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-teal-500/20 hover:bg-teal-600 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-wait"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      <><Sparkles size={14} /> Buka Posisi</>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}
