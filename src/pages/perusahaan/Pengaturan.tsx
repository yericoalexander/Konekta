import React, { useState } from 'react';
import { 
  Building2, User, Shield, CreditCard, Bell, LogOut, ChevronRight, 
  Zap, Upload, Plus, MoreVertical, CheckCircle2, Lock, Smartphone, Key
} from 'lucide-react';

export default function Pengaturan() {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    { icon: <Building2 size={20} />, title: 'Profil Perusahaan', desc: 'Kelola informasi publik dan identitas.' },
    { icon: <User size={20} />, title: 'Manajemen Tim', desc: 'Atur anggota tim dan peran.' },
    { icon: <Zap size={20} />, title: 'Integrasi AI', desc: 'Konfigurasi model matching.' },
    { icon: <CreditCard size={20} />, title: 'Paket & Penagihan', desc: 'Kelola langganan Anda.' },
    { icon: <Bell size={20} />, title: 'Notifikasi', desc: 'Atur preferensi email.' },
    { icon: <Shield size={20} />, title: 'Keamanan', desc: 'Autentikasi dan password.' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 animate-fade-in-up">
             <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
               <div>
                 <h2 className="text-2xl font-black text-navy tracking-tight">Profil Perusahaan</h2>
                 <p className="text-sm text-slate-400 mt-1">Perbarui informasi dasar dan detail publik perusahaan Anda.</p>
               </div>
             </div>
             
             <div className="flex items-center gap-8 mb-10">
                <div className="relative group">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center font-black text-white text-4xl shadow-lg shadow-blue-500/20">
                     MB
                  </div>
                  <div className="absolute inset-0 bg-navy/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-sm">
                    <Upload className="text-white" size={24} />
                  </div>
                </div>
                <div>
                   <div className="flex gap-3 mb-3">
                     <button className="px-6 py-2.5 bg-white border border-slate-200 text-navy rounded-xl text-xs font-black uppercase tracking-widest hover:border-navy transition-all shadow-sm">
                        Ubah Logo
                     </button>
                     <button className="px-6 py-2.5 bg-slate-50 border border-transparent text-slate-500 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all">
                        Hapus
                     </button>
                   </div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      Format: JPG, PNG <span className="w-1 h-1 bg-slate-300 rounded-full"></span> Max: 2MB
                   </p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Nama Perusahaan</label>
                   <input type="text" defaultValue="PT Maju Bersama Industri" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all" />
                </div>
                
                <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Industri</label>
                   <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer">
                      <option>Manufaktur & Logistik</option>
                      <option>Teknologi Informasi</option>
                      <option>Kesehatan & Medis</option>
                   </select>
                </div>

                <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Ukuran Perusahaan</label>
                   <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer">
                      <option>50 - 200 Karyawan</option>
                      <option>201 - 500 Karyawan</option>
                      <option>500+ Karyawan</option>
                   </select>
                </div>

                <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Deskripsi Perusahaan</label>
                   <textarea rows={4} defaultValue="Perusahaan manufaktur terkemuka yang berfokus pada produksi suku cadang berkualitas tinggi." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"></textarea>
                </div>

                <div className="md:col-span-2">
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Lokasi Utama (Headquarters)</label>
                   <input type="text" defaultValue="Kawasan Industri Cikarang, Bekasi" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-navy outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all" />
                </div>
             </div>

             <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button className="px-8 py-3.5 bg-navy text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-blue-600 hover:-translate-y-0.5 transition-all">
                   Simpan Perubahan
                </button>
             </div>
          </div>
        );

      case 1:
        return (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
               <div>
                 <h2 className="text-2xl font-black text-navy tracking-tight">Manajemen Tim</h2>
                 <p className="text-sm text-slate-400 mt-1">Undang rekan kerja dan kelola hak akses mereka.</p>
               </div>
               <button className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-navy/20 hover:bg-blue-600 transition-all">
                 <Plus size={16} /> Undang Anggota
               </button>
            </div>
            
            <div className="space-y-4">
               {[
                 { name: 'Andi Susanto', role: 'Super Admin', email: 'andi@majubersama.com', initials: 'AS', bg: 'bg-blue-600' },
                 { name: 'Budi Santoso', role: 'HR Manager', email: 'budi@majubersama.com', initials: 'BS', bg: 'bg-teal-500' },
                 { name: 'Sari Wulandari', role: 'Interviewer', email: 'sari@majubersama.com', initials: 'SW', bg: 'bg-purple-500' },
               ].map((user, i) => (
                 <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black shadow-inner ${user.bg}`}>
                          {user.initials}
                       </div>
                       <div>
                          <p className="font-bold text-navy text-sm">{user.name}</p>
                          <p className="text-xs text-slate-400 font-medium">{user.email}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm">
                          {user.role}
                       </span>
                       <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors">
                          <MoreVertical size={16} />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
               <div>
                 <h2 className="text-2xl font-black text-navy tracking-tight">Integrasi AI Konekta</h2>
                 <p className="text-sm text-slate-400 mt-1">Sesuaikan bagaimana AI menyeleksi dan menilai kandidat untuk perusahaan Anda.</p>
               </div>
            </div>

            <div className="space-y-6">
               <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/50 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
                  <div className="relative z-10 flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Zap size={24} />
                     </div>
                     <div className="flex-1">
                        <h3 className="font-black text-navy text-lg mb-1">Smart Matching Engine</h3>
                        <p className="text-sm text-slate-500 mb-4">AI secara otomatis mencocokkan CV kandidat dengan deskripsi pekerjaan Anda.</p>
                        <label className="flex items-center cursor-pointer">
                           <div className="relative">
                              <input type="checkbox" className="sr-only" defaultChecked />
                              <div className="block bg-blue-600 w-14 h-8 rounded-full"></div>
                              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform translate-x-6"></div>
                           </div>
                           <span className="ml-3 text-xs font-bold text-navy uppercase tracking-widest">Aktif</span>
                        </label>
                     </div>
                  </div>
               </div>

               <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                  <h3 className="font-black text-navy text-lg mb-4">Bobot Penilaian (Weighting)</h3>
                  <div className="space-y-4">
                     <div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                           <span>Kesesuaian Skills</span>
                           <span className="text-navy">60%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                           <span>Pengalaman Kerja</span>
                           <span className="text-navy">25%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full bg-teal-500 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                           <span>Skor Assessment (Logika & Bahasa)</span>
                           <span className="text-navy">15%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full bg-purple-500 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                     <button className="px-6 py-2.5 bg-white border border-slate-200 text-navy rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-navy transition-all">
                        Sesuaikan Bobot
                     </button>
                  </div>
               </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
               <div>
                 <h2 className="text-2xl font-black text-navy tracking-tight">Paket & Penagihan</h2>
                 <p className="text-sm text-slate-400 mt-1">Kelola paket langganan dan metode pembayaran.</p>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-10">
               <div className="flex-1 p-8 rounded-3xl border-2 border-blue-500 bg-blue-50/30 relative overflow-hidden shadow-lg shadow-blue-500/10">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">Paket Saat Ini</div>
                  <h3 className="font-black text-navy text-2xl mb-1">Enterprise AI</h3>
                  <p className="text-sm text-slate-500 mb-6">Akses penuh ke semua fitur AI dan analitik tingkat lanjut.</p>
                  <div className="flex items-baseline gap-1 mb-6">
                     <span className="text-4xl font-black text-blue-600">Rp 5.000k</span>
                     <span className="text-sm font-bold text-slate-400">/ bulan</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                     {['Unlimited lowongan', 'Smart Matching Engine', 'Custom assessment', 'Dedicated support'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-navy">
                           <CheckCircle2 size={16} className="text-blue-500" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-md hover:bg-blue-700 transition-colors">
                     Kelola Langganan
                  </button>
               </div>

               <div className="flex-1 space-y-6">
                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                     <h4 className="font-black text-navy text-sm mb-4">Metode Pembayaran</h4>
                     <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                        <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-black text-slate-400 border border-slate-200">VISA</div>
                        <div className="flex-1">
                           <p className="font-bold text-navy text-sm">•••• •••• •••• 4242</p>
                           <p className="text-[10px] font-medium text-slate-400">Kadaluarsa: 12/28</p>
                        </div>
                        <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Ubah</button>
                     </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
                     <h4 className="font-black text-navy text-sm mb-4">Riwayat Penagihan</h4>
                     <div className="space-y-3">
                        {[
                           { date: '01 Mei 2026', amount: 'Rp 5.000.000', status: 'Lunas' },
                           { date: '01 Apr 2026', amount: 'Rp 5.000.000', status: 'Lunas' },
                        ].map((inv, i) => (
                           <div key={i} className="flex justify-between items-center pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                              <div>
                                 <p className="font-bold text-navy text-xs">{inv.date}</p>
                                 <p className="text-[10px] text-slate-400 font-medium">Invoice #INV-2026-{String(i+4).padStart(2, '0')}</p>
                              </div>
                              <div className="text-right">
                                 <p className="font-bold text-navy text-xs">{inv.amount}</p>
                                 <p className="text-[9px] font-black text-teal-500 uppercase tracking-widest">{inv.status}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
               <div>
                 <h2 className="text-2xl font-black text-navy tracking-tight">Notifikasi</h2>
                 <p className="text-sm text-slate-400 mt-1">Pilih notifikasi yang ingin Anda terima.</p>
               </div>
            </div>
            
            <div className="space-y-6">
               <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors">
                  <div>
                     <p className="font-bold text-navy text-sm">Pelamar Baru</p>
                     <p className="text-xs text-slate-400 mt-1">Email setiap kali ada kandidat yang melamar ke lowongan Anda.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" className="sr-only peer" defaultChecked />
                     <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
               </div>

               <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors">
                  <div>
                     <p className="font-bold text-navy text-sm">Laporan Mingguan</p>
                     <p className="text-xs text-slate-400 mt-1">Terima ringkasan performa rekrutmen setiap hari Senin.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" className="sr-only peer" defaultChecked />
                     <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
               </div>

               <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors">
                  <div>
                     <p className="font-bold text-navy text-sm">Pengingat Interview</p>
                     <p className="text-xs text-slate-400 mt-1">Notifikasi 1 jam sebelum jadwal interview dimulai.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" className="sr-only peer" defaultChecked />
                     <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
               </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-10 animate-fade-in-up">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
               <div>
                 <h2 className="text-2xl font-black text-navy tracking-tight">Keamanan</h2>
                 <p className="text-sm text-slate-400 mt-1">Lindungi akun perusahaan Anda.</p>
               </div>
            </div>

            <div className="space-y-8">
               <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm text-slate-500 shrink-0">
                     <Key size={20} />
                  </div>
                  <div className="flex-1">
                     <h3 className="font-black text-navy text-sm mb-1">Ganti Password</h3>
                     <p className="text-xs text-slate-500 mb-4">Ganti kata sandi Anda secara berkala untuk menjaga keamanan.</p>
                     <div className="space-y-4 max-w-sm">
                        <input type="password" placeholder="Password Saat Ini" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium outline-none focus:border-blue-500 transition-all" />
                        <input type="password" placeholder="Password Baru" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium outline-none focus:border-blue-500 transition-all" />
                        <input type="password" placeholder="Konfirmasi Password Baru" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium outline-none focus:border-blue-500 transition-all" />
                        <button className="px-6 py-3 bg-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md hover:bg-blue-600 transition-colors">
                           Perbarui Password
                        </button>
                     </div>
                  </div>
               </div>

               <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shadow-sm text-teal-600 shrink-0">
                     <Smartphone size={20} />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div>
                        <h3 className="font-black text-navy text-sm mb-1">Autentikasi Dua Faktor (2FA)</h3>
                        <p className="text-xs text-slate-500">Tambahkan lapisan keamanan ekstra menggunakan aplikasi authenticator.</p>
                     </div>
                     <button className="px-6 py-2.5 bg-white border border-slate-200 text-navy rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-navy transition-all shrink-0">
                        Aktifkan 2FA
                     </button>
                  </div>
               </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto animate-fade-in-up pb-20">
      <div className="mb-8">
         <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">Pengaturan</h1>
         <p className="text-slate-500 font-medium">Kelola sistem rekrutmen dan informasi perusahaan Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Sidebar menu within Settings */}
         <div className="lg:col-span-1 space-y-2">
            {sections.map((sec, i) => {
               const isActive = activeTab === i;
               return (
                 <div 
                   key={i} 
                   onClick={() => setActiveTab(i)}
                   className={`px-5 py-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                     isActive 
                       ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' 
                       : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50 hover:border-slate-200 hover:text-navy'
                   }`}>
                    <div className={isActive ? 'text-blue-100' : 'text-slate-400'}>{sec.icon}</div>
                    <div className="flex-1">
                       <h4 className={`font-bold text-sm leading-tight ${isActive ? 'text-white' : 'text-navy'}`}>{sec.title}</h4>
                    </div>
                    {isActive && <ChevronRight size={16} className="text-blue-200" />}
                 </div>
               );
            })}

            <div className="px-5 py-4 mt-6 rounded-2xl flex items-center gap-4 cursor-pointer bg-white text-red-500 border border-red-100 hover:bg-red-50 hover:border-red-200 transition-colors">
               <LogOut size={20} />
               <h4 className="font-bold text-sm">Keluar dari Akun</h4>
            </div>
         </div>

         {/* Content Area */}
         <div className="lg:col-span-3">
            {renderContent()}
         </div>
      </div>
    </div>
  );
}
