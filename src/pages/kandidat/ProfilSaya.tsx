import React, { useState } from 'react';
import { Camera, ShieldCheck, Pencil, User, GraduationCap, Briefcase } from 'lucide-react';

const profileData = {
  namaLengkap: "Raka Dermawan",
  tanggalLahir: "2004-08-15",
  jenisKelamin: "Laki-laki",
  nomorHP: "08123456789",
  email: "raka@email.com",
  kota: "Purwokerto, Jawa Tengah",
  pendidikan: "SMK",
  namaSekolah: "SMK Negeri 3 Purwokerto",
  jurusan: "Teknik Mesin",
  tahunLulus: "2024",
  bidangMinat: ["Manufaktur", "Quality Control", "Logistik"],
  kotaTujuan: ["Jakarta", "Surabaya", "Bandung"],
  tipeKerja: ["Full-time", "On-site"],
  gajiMin: 4000000,
  gajiMax: 6000000,
  bahasa: [
    { nama: "Bahasa Indonesia", level: "Sangat Fasih" },
    { nama: "Bahasa Inggris", level: "Menengah" }
  ]
};

const ProfilSaya: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData] = useState(profileData);

  const handleSave = () => {
    // Simulate API call
    setTimeout(() => {
      setIsEditing(false);
    }, 500);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px 100px 40px' }} className="animate-fade-in-up pb-20">
      <div className="grid grid-cols-12 gap-10">

        {/* LEFT COLUMN — PROFILE CARD */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 p-8 sticky top-8 overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-colors"></div>

            {/* AVATAR SECTION */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative">
                <div className="w-32 h-32 rounded-[32px] bg-blue-600 flex items-center justify-center text-white text-4xl font-extrabold border-4 border-white shadow-2xl transition-transform hover:scale-105 duration-500">
                  RD
                </div>
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-all border border-slate-100">
                  <Camera size={18} />
                </button>
              </div>

              <h2 className="text-3xl font-extrabold text-navy mt-8 tracking-tight">{formData.namaLengkap}</h2>
              <p className="text-sm text-slate-400 font-bold mt-2 uppercase tracking-wider">{formData.jurusan} • {formData.pendidikan}</p>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-2xl border border-teal-100/50 shadow-sm">
                <ShieldCheck size={16} className="text-teal-500" />
                <span className="text-[10px] text-teal-600 font-extrabold uppercase tracking-[2px]">Profil Terverifikasi</span>
              </div>
            </div>

            {/* COMPLETENESS BAR */}
            <div className="mt-12 bg-slate-50 p-8 rounded-[32px] border border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kelengkapan Profil</span>
                <span className="text-sm font-black text-blue-600">72%</span>
              </div>
              <div className="h-3 bg-white rounded-full overflow-hidden border border-slate-100">
                <div className="h-full bg-blue-600 rounded-full shadow-lg" style={{ width: '72%' }}></div>
              </div>
              <p className="text-[11px] text-slate-400 mt-6 leading-relaxed font-bold">Tingkatkan hingga <span className="text-blue-600">100%</span> untuk prioritas utama dalam pencarian HR.</p>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { val: '84', label: 'Skor' },
                { val: '87%', label: 'Match' },
                { val: '3', label: 'Lamaran' },
                { val: '2', label: 'Tawaran' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-[24px] p-5 text-center border border-slate-100 hover:border-blue-200 transition-all group/stat">
                  <div className="text-2xl font-black text-navy group-hover/stat:text-blue-600 transition-colors leading-none">{stat.val}</div>
                  <div className="text-[10px] text-slate-400 mt-3 font-extrabold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-12 flex flex-col gap-4">
              <button className="w-full py-5 bg-navy text-white rounded-[20px] font-black text-[11px] uppercase tracking-widest shadow-xl shadow-navy/10 hover:bg-blue-600 transition-all">Lihat Sertifikat AI</button>
              <button className="w-full py-5 bg-white border-2 border-slate-100 rounded-[20px] font-black text-[11px] uppercase tracking-widest text-slate-400 hover:text-navy hover:border-navy transition-all">Bagikan Profil</button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — CONTENT */}
        <div className="col-span-12 lg:col-span-8">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-navy tracking-tight">Informasi Pribadi</h1>
              <p className="text-slate-400 font-bold mt-1 uppercase tracking-[2px] text-[10px]">Atur data diri dan preferensi karirmu</p>
            </div>
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-[20px] text-[11px] font-black text-navy uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                <Pencil size={18} /> Edit Profil
              </button>
            ) : (
              <div className="flex items-center gap-6">
                <button onClick={() => setIsEditing(false)} className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">Batal</button>
                <button onClick={handleSave} className="px-10 py-4 bg-blue-600 text-white rounded-[20px] text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all">Simpan</button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {/* SECTION: DATA DIRI */}
            <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 p-12">
              <h3 className="text-2xl font-black text-navy mb-10 flex items-center gap-5">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <User size={24} />
                </div>
                Data Diri
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Nama Lengkap</label>
                  {isEditing ? (
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-bold focus:bg-white focus:border-blue-500 outline-none transition-all" defaultValue={formData.namaLengkap} />
                  ) : (
                    <div className="text-xl font-extrabold text-navy">{formData.namaLengkap}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Tanggal Lahir</label>
                  {isEditing ? (
                    <input type="date" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-bold focus:bg-white focus:border-blue-500 outline-none transition-all" defaultValue={formData.tanggalLahir} />
                  ) : (
                    <div className="text-sm font-bold text-navy">{formData.tanggalLahir}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Jenis Kelamin</label>
                  {isEditing ? (
                    <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-bold focus:bg-white focus:border-blue-500 outline-none transition-all">
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  ) : (
                    <div className="text-sm font-bold text-navy">{formData.jenisKelamin}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Nomor HP</label>
                  {isEditing ? (
                    <input type="tel" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-bold focus:bg-white focus:border-blue-500 outline-none transition-all" defaultValue={formData.nomorHP} />
                  ) : (
                    <div className="text-sm font-bold text-navy">{formData.nomorHP}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Email</label>
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                    {formData.email}
                    <span className="text-[9px] font-black text-teal-500 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION: PENDIDIKAN */}
            <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 p-12">
              <h3 className="text-2xl font-black text-navy mb-10 flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <GraduationCap size={24} />
                </div>
                Pendidikan Terakhir
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Nama Sekolah</label>
                  {isEditing ? (
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-bold focus:bg-white focus:border-blue-500 outline-none transition-all" defaultValue={formData.namaSekolah} />
                  ) : (
                    <div className="text-sm font-bold text-navy">{formData.namaSekolah}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Jurusan</label>
                  {isEditing ? (
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-5 text-sm font-bold focus:bg-white focus:border-blue-500 outline-none transition-all" defaultValue={formData.jurusan} />
                  ) : (
                    <div className="text-sm font-bold text-navy">{formData.jurusan}</div>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION: PREFERENSI KERJA */}
            <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 p-12">
              <h3 className="text-2xl font-black text-navy mb-10 flex items-center gap-5">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <Briefcase size={24} />
                </div>
                Preferensi Karir
              </h3>

              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-5">Bidang yang Diminati</label>
                  <div className="flex flex-wrap gap-3">
                    {formData.bidangMinat.map((bidang, i) => (
                      <span key={i} className="px-6 py-3 bg-slate-50 text-navy text-[11px] font-black uppercase tracking-widest rounded-[16px] border border-slate-100">{bidang}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Tipe Kerja</label>
                    <div className="flex gap-3">
                      {formData.tipeKerja.map((tipe, i) => (
                        <span key={i} className="px-5 py-2 bg-blue-50 text-blue-600 text-[11px] font-black uppercase tracking-widest rounded-xl border border-blue-100">{tipe}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3">Ekspektasi Gaji</label>
                    <div className="text-2xl font-black text-blue-600 tracking-tight">
                      Rp {formData.gajiMin.toLocaleString()} – {formData.gajiMax.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilSaya;
