import React, { useState } from 'react';
import { User as UserIcon, Bell, Lock as LockIcon, Eye, HelpCircle, ShieldCheck, Mail, ChevronRight, AlertTriangle, Smartphone } from 'lucide-react';

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}
  >
    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
  </button>
);

const Pengaturan: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Akun & Keamanan');
  const [notifs, setNotifs] = useState({
    lamaran: true,
    interview: true,
    tawaran: true,
    ditolak: false,
    lowonganBaru: true,
    wa: true
  });

  const sidebarItems = [
    { id: 'Akun & Keamanan', icon: <UserIcon size={20} /> },
    { id: 'Notifikasi', icon: <Bell size={20} /> },
    { id: 'Privasi & Data', icon: <LockIcon size={20} /> },
    { id: 'Visibilitas Profil', icon: <Eye size={20} /> },
    { id: 'Bantuan & Support', icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      <h1 className="text-3xl font-black text-navy tracking-tight mb-8">Pengaturan</h1>

      <div className="grid grid-cols-12 gap-8">

        {/* SIDEBAR PENGATURAN */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-3 sticky top-8">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 font-black shadow-sm shadow-blue/5'
                    : 'text-gray-500 hover:bg-gray-50 font-bold'
                  }`}
              >
                <span className={`${activeSection === item.id ? 'text-blue-600' : 'text-gray-400'}`}>{item.icon}</span>
                <span className="text-sm">{item.id}</span>
                {activeSection === item.id && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="col-span-12 lg:col-span-8">

          {activeSection === 'Akun & Keamanan' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-10">
                <h2 className="text-xl font-black text-navy tracking-tight mb-8">Ubah Password</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Password Saat Ini</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Password Baru</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Konfirmasi Password Baru</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full flex gap-1">
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-gray-200 rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Kuat</span>
                  </div>

                  <button className="btn btn-solid-blue px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-2 shadow-lg shadow-blue/20">Simpan Password</button>
                </div>

                <div className="h-px bg-gray-50 my-10"></div>

                <h2 className="text-xl font-black text-navy tracking-tight mb-8">Verifikasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[24px] border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm"><Smartphone size={24} /></div>
                      <div>
                        <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Nomor HP</span>
                        <span className="text-sm font-bold text-navy">08123456789</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase rounded-full border border-green-200 flex items-center gap-1.5"><ShieldCheck size={12} /> Terverifikasi</span>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[24px] border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm"><Mail size={24} /></div>
                      <div>
                        <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Alamat Email</span>
                        <span className="text-sm font-bold text-navy">raka@email.com</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase rounded-full border border-green-200 flex items-center gap-1.5"><ShieldCheck size={12} /> Terverifikasi</span>
                  </div>
                </div>

                <div className="mt-10 bg-red-50 border border-red-100 rounded-[24px] p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm shrink-0"><AlertTriangle size={20} /></div>
                    <div>
                      <h4 className="text-sm font-black text-red-900 tracking-tight">Zona Berbahaya</h4>
                      <p className="text-xs font-medium text-red-800/60 mt-1">Tindakan ini permanen dan data profilmu tidak dapat dipulihkan.</p>
                      <div className="flex flex-wrap gap-4 mt-6">
                        <button className="px-6 py-3 border-2 border-red-100 text-red-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all">Nonaktifkan Akun</button>
                        <button className="px-6 py-3 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all">Hapus Permanen</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'Notifikasi' && (
            <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-10 animate-fade-in">
              <h2 className="text-xl font-black text-navy tracking-tight mb-8">Preferensi Notifikasi</h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-6">LAMARAN & REKRUTMEN</h3>
                  <div className="space-y-6">
                    {[
                      { id: 'lamaran', label: 'Status lamaran diperbarui' },
                      { id: 'interview', label: 'Jadwal interview baru' },
                      { id: 'tawaran', label: 'Tawaran kerja diterima' },
                      { id: 'ditolak', label: 'Lamaran ditolak' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-700">{item.label}</span>
                        <Toggle checked={(notifs as any)[item.id]} onChange={() => setNotifs({ ...notifs, [item.id]: !(notifs as any)[item.id] })} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-50"></div>

                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-6">CHANNEL NOTIFIKASI</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-700">WhatsApp Notification</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] font-black uppercase rounded-full">Baru</span>
                      </div>
                      <Toggle checked={notifs.wa} onChange={() => setNotifs({ ...notifs, wa: !notifs.wa })} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-700">Push Notification (App)</span>
                      <Toggle checked={true} onChange={() => { }} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-700">Email Updates</span>
                      <Toggle checked={true} onChange={() => { }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
