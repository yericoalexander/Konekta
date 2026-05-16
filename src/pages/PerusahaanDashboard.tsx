import { Link } from 'react-router-dom';
import {
  Home, Briefcase, Users, Calendar, BarChart2, Settings,
  CheckCircle2, MoreVertical, Video, Send
} from 'lucide-react';

export default function PerusahaanDashboard() {
  return (
    <div className="flex bg-gray min-h-screen">
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        minWidth: '280px',
        background: 'var(--navy)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
        borderRight: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Company Logo Section */}
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'var(--blue)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            color: '#fff',
            boxShadow: '0 8px 16px rgba(37,99,235,0.3)'
          }}>MB</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '700', color: '#fff', fontSize: '1rem', lineHeight: '1.2' }}>Maju Bersama</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>HR Portal</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { icon: <Home size={20} />, label: 'Overview', active: true },
            { icon: <Briefcase size={20} />, label: 'Lowongan Aktif' },
            { icon: <Users size={20} />, label: 'Kandidat' },
            { icon: <Calendar size={20} />, label: 'Interview' },
            { icon: <BarChart2 size={20} />, label: 'Laporan' },
            { icon: <Settings size={20} />, label: 'Pengaturan' },
          ].map(({ icon, label, active }) => (
            <a key={label} href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: active ? '600' : '500',
              color: active ? '#fff' : 'rgba(255,255,255,0.5)',
              background: active ? 'linear-gradient(135deg, var(--blue) 0%, #1d4ed8 100%)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: active ? '0 4px 12px rgba(37,99,235,0.25)' : 'none'
            }}>
              <span style={{ display: 'flex', opacity: active ? 1 : 0.6 }}>{icon}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Plan Summary */}
        <div style={{
          margin: '16px',
          padding: '20px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '8px' }}>Paket Aktif:</div>
          <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '4px' }}>Basic HR Plan</div>
          <div style={{ color: 'var(--blue)', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Upgrade ke Pro →</div>
        </div>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Rekrutmen</h1>
            <p className="text-gray text-sm">PT Maju Bersama Industri</p>
          </div>
          <button className="btn btn-solid-blue">Buka Posisi Baru</button>
        </div>

        {/* Row 1: Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="card bg-navy text-white p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm text-gray mb-1">Kandidat Diterima</p>
              <h3 className="text-3xl font-bold text-teal">12</h3>
            </div>
          </div>
          <div className="card bg-navy text-white p-6 rounded-xl">
            <p className="text-sm text-gray mb-1">Shortlist Aktif</p>
            <h3 className="text-3xl font-bold text-white">47</h3>
          </div>
          <div className="card bg-navy text-white p-6 rounded-xl">
            <p className="text-sm text-gray mb-1">Posisi Terbuka</p>
            <h3 className="text-3xl font-bold text-white">3 <span className="text-sm text-gray font-normal">/ 5</span></h3>
          </div>
          <div className="card bg-navy text-white p-6 rounded-xl accent-t-blue" style={{ borderTopColor: 'var(--blue)' }}>
            <p className="text-sm text-gray mb-1">Akurasi Matching</p>
            <h3 className="text-3xl font-bold text-blue">89%</h3>
          </div>
        </div>

        {/* Row 2: Table */}
        <div className="card mb-8 p-0 overflow-hidden">
          <div className="p-6 border-b border-gray flex justify-between items-center">
            <h2 className="text-lg font-bold">Lowongan Aktif</h2>
            <button className="text-sm text-blue font-bold">Lihat Semua</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray text-xs uppercase text-gray">
                <th className="p-4 font-semibold">Posisi</th>
                <th className="p-4 font-semibold">Kandidat Tersedia</th>
                <th className="p-4 font-semibold">Shortlist AI</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="p-4 font-bold text-navy">Staff QC</td>
                <td className="p-4">234</td>
                <td className="p-4 font-bold text-blue">12</td>
                <td className="p-4"><span className="badge badge-teal">🟢 Aktif</span></td>
                <td className="p-4 text-right"><button className="btn btn-outline-blue py-1 px-3 text-xs">Lihat Shortlist</button></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-bold text-navy">Admin Gudang</td>
                <td className="p-4">187</td>
                <td className="p-4 font-bold text-blue">8</td>
                <td className="p-4"><span className="badge badge-teal">🟢 Aktif</span></td>
                <td className="p-4 text-right"><button className="btn btn-outline-blue py-1 px-3 text-xs">Lihat Shortlist</button></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-navy">Driver Distribusi</td>
                <td className="p-4">98</td>
                <td className="p-4 font-bold text-blue">5</td>
                <td className="p-4"><span className="badge badge-amber">🟡 Review</span></td>
                <td className="p-4 text-right"><button className="btn btn-outline-blue py-1 px-3 text-xs">Lihat Shortlist</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Shortlist Terbaru — Staff QC</h2>
              <span className="badge badge-blue text-xs">12 Tersedia</span>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Raka D.', school: 'SMK Mesin', match: '87%', lgk: '88%', bhs: '76%' },
                { name: 'Sari W.', school: 'SMK Kimia', match: '82%', lgk: '79%', bhs: '85%' }
              ].map((k, i) => (
                <div key={i} className="card p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-light text-blue flex items-center justify-center font-bold text-sm">{k.name.substring(0, 2)}</div>
                      <div>
                        <h4 className="font-bold flex items-center gap-1">{k.name} <CheckCircle2 size={14} className="text-teal" /></h4>
                        <p className="text-xs text-gray">{k.school}</p>
                      </div>
                    </div>
                    <div className="badge badge-teal">{k.match} Match</div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <p className="text-xs text-gray mb-1">Logika</p>
                      <div className="progress-wrap h-1.5"><div className="progress-bar bg-blue" style={{ width: k.lgk }}></div></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray mb-1">Bahasa</p>
                      <div className="progress-wrap h-1.5"><div className="progress-bar bg-teal" style={{ width: k.bhs }}></div></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/profil/raka-dermawan" className="btn btn-outline-blue py-1.5 px-3 text-xs flex-1">Profil Lengkap</Link>
                    <button className="btn btn-solid-blue py-1.5 px-3 text-xs flex-1">Jadwalkan</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Interview Mendatang</h2>
            <div className="card p-0 overflow-hidden">
              <div className="p-4 border-b flex items-center gap-4 hover:bg-gray transition">
                <div className="w-12 h-12 bg-purple-light rounded flex flex-col items-center justify-center text-purple">
                  <span className="text-xs font-bold uppercase">Mei</span>
                  <span className="text-lg font-bold leading-none">13</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Raka D. — Staff QC</h4>
                  <p className="text-sm text-gray flex items-center gap-1"><Video size={14} /> Video Call • 10.00 WIB</p>
                </div>
                <MoreVertical className="text-gray" />
              </div>

              <div className="p-4 flex items-center gap-4 hover:bg-gray transition">
                <div className="w-12 h-12 bg-purple-light rounded flex flex-col items-center justify-center text-purple">
                  <span className="text-xs font-bold uppercase">Mei</span>
                  <span className="text-lg font-bold leading-none">14</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">Sari W. — Staff QC</h4>
                  <p className="text-sm text-gray flex items-center gap-1"><Video size={14} /> Video Call • 14.00 WIB</p>
                </div>
                <MoreVertical className="text-gray" />
              </div>

              <div className="p-4 border-t bg-gray flex gap-2">
                <button className="btn btn-solid-blue py-2 flex-1 flex items-center justify-center gap-2"><Video size={16} /> Buka G-Meet</button>
                <button className="btn btn-outline-blue py-2 flex-1 flex items-center justify-center gap-2"><Send size={16} /> Kirim Notif</button>
              </div>
            </div>

            <div className="card mt-6 p-4  accent-l-blue">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-sm">Akurasi Matching per Bulan</h4>
                <BarChart2 size={16} className="text-blue" />
              </div>
              <p className="text-xs text-gray mb-2">Grafik meningkat 7% setelah 3 feedback terakhir. AI semakin memahami kultur perusahaan Anda.</p>
              {/* Fake mini chart */}
              <div className="flex items-end gap-1 h-12 mt-2">
                <div className="w-full bg-blue-light rounded-t" style={{ height: '40%' }}></div>
                <div className="w-full bg-blue-light rounded-t" style={{ height: '50%' }}></div>
                <div className="w-full bg-blue-light rounded-t" style={{ height: '55%' }}></div>
                <div className="w-full bg-blue-light rounded-t" style={{ height: '70%' }}></div>
                <div className="w-full bg-blue rounded-t" style={{ height: '89%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
