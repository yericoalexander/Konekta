import React, { useState } from 'react';
import { Camera, ShieldCheck, Pencil, Phone, User, GraduationCap, Briefcase } from 'lucide-react';

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
      // In a real app, we'd show a toast here
    }, 500);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      <div className="grid grid-cols-12 gap-8">

        {/* KOLOM KIRI — KARTU PROFIL */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">

            {/* AVATAR SECTION */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold border-4 border-white shadow-sm">
                  RD
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-md hover:bg-blue-700 transition-colors">
                  <Camera size={14} />
                </button>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mt-4">{formData.namaLengkap}</h2>
              <p className="text-sm text-gray-500 mt-1">{formData.namaSekolah} • {formData.jurusan}</p>

              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 rounded-full border border-teal-100">
                <ShieldCheck size={14} className="text-teal-500" />
                <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider">Profil Terverifikasi</span>
              </div>
            </div>

            {/* COMPLETENESS BAR */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">Kelengkapan Profil</span>
                <span className="text-sm font-bold text-amber-500">72%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">Lengkapi profil untuk tingkatkan peluang 3× lebih besar dilirik perusahaan.</p>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { val: '84', label: 'Skor Kompetensi' },
                { val: '87%', label: 'Match Terbaik' },
                { val: '3', label: 'Lamaran Aktif' },
                { val: '2', label: 'Tawaran Kerja' },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                  <div className="text-lg font-bold text-blue-600 leading-none">{stat.val}</div>
                  <div className="text-[10px] text-gray-500 mt-1.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="btn btn-solid-blue w-full py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue/20">Lihat Sertifikat</button>
              <button className="btn btn-outline-blue w-full py-3 rounded-xl font-bold text-sm">Bagikan Profil</button>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN — FORM EDIT */}
        <div className="col-span-12 lg:col-span-8">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Informasi Pribadi</h1>
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                <Pencil size={16} /> Edit Profil
              </button>
            ) : (
              <div className="flex gap-3">
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700">Batal</button>
                <button onClick={handleSave} className="btn btn-solid-blue px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue/20">Simpan Perubahan</button>
              </div>
            )}
          </div>

          {/* SECTION: DATA DIRI */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User size={20} className="text-blue-500" /> Data Diri
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Nama Lengkap</label>
                {isEditing ? (
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue={formData.namaLengkap} />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-900 border border-gray-50">{formData.namaLengkap}</div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tanggal Lahir</label>
                {isEditing ? (
                  <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue={formData.tanggalLahir} />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-900 border border-gray-50">{formData.tanggalLahir}</div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Jenis Kelamin</label>
                {isEditing ? (
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                ) : (
                  <div className="p-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-900 border border-gray-50">{formData.jenisKelamin}</div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Nomor HP</label>
                {isEditing ? (
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue={formData.nomorHP} />
                ) : (
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-900 border border-gray-50">
                    {formData.nomorHP}
                    <Phone size={16} className="text-green-500" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl text-sm font-semibold text-gray-400 border border-gray-100">
                  {formData.email}
                  <span className="text-[10px] font-black text-teal-500 uppercase tracking-tighter bg-teal-50 px-2 py-0.5 rounded border border-teal-100">Terverifikasi</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION: PENDIDIKAN */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-blue-500" /> Pendidikan Terakhir
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Nama Sekolah</label>
                {isEditing ? (
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue={formData.namaSekolah} />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-900 border border-gray-50">{formData.namaSekolah}</div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Jurusan</label>
                {isEditing ? (
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue={formData.jurusan} />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-xl text-sm font-semibold text-gray-900 border border-gray-50">{formData.jurusan}</div>
                )}
              </div>
            </div>
          </div>

          {/* SECTION: PREFERENSI KERJA */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-500" /> Preferensi Kerja
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Bidang yang Diminati</label>
                <div className="flex flex-wrap gap-2">
                  {formData.bidangMinat.map((bidang, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                      {bidang}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="px-3 py-1.5 border border-dashed border-gray-300 text-gray-400 text-xs font-bold rounded-lg hover:border-blue-300 hover:text-blue-500 transition-all">+ Tambah</button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tipe Kerja</label>
                  <div className="flex gap-2">
                    {formData.tipeKerja.map((tipe, i) => (
                      <span key={i} className="px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-lg border border-teal-100">{tipe}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ekspektasi Gaji</label>
                  <div className="p-3 bg-gray-50 rounded-xl text-sm font-extrabold text-blue-600 border border-gray-50">
                    Rp {formData.gajiMin.toLocaleString()} – {formData.gajiMax.toLocaleString()}
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
