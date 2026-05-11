import { Link } from 'react-router-dom';
import { 
  Home, User, BarChart2, Briefcase, Mail, BookOpen, Settings, LogOut,
  BrainCircuit, CheckCircle2, ChevronRight, Award, Bell, Mic
} from 'lucide-react';

export default function KandidatDashboard() {
  return (
    <div className="flex bg-gray min-h-screen">
      {/* Sidebar */}
      <aside style={{ 
        width: '280px', 
        minWidth: '280px', 
        background: '#fff', 
        borderRight: '1px solid #E2E8F0', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        position: 'sticky', 
        top: 0, 
        overflowY: 'auto',
        zIndex: 100
      }}>
        {/* Logo Section */}
        <div style={{ padding: '32px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: 'var(--blue)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(37,99,235,0.2)'
          }}>
            <BrainCircuit size={24} color="#fff" />
          </div>
          <span style={{ fontWeight: '800', fontSize: '1.25rem', color: 'var(--navy)', letterSpacing: '-0.5px' }}>Konekta</span>
        </div>

        {/* Navigation Menu */}
        <nav style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { icon: <Home size={20}/>, label: 'Dashboard', active: true },
            { icon: <User size={20}/>, label: 'Profil Saya' },
            { icon: <BarChart2 size={20}/>, label: 'Hasil Assessment' },
            { icon: <Mic size={20}/>, label: 'AI Interview Coach' },
            { icon: <Briefcase size={20}/>, label: 'Lowongan Untukku' },
            { icon: <Mail size={20}/>, label: 'Lamaran Saya' },
            { icon: <BookOpen size={20}/>, label: 'Rekomendasi Kursus' },
            { icon: <Settings size={20}/>, label: 'Pengaturan' },
          ].map(({ icon, label, active }) => (
            <a key={label} href="#" style={{
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '12px 16px',
              borderRadius: '12px', 
              fontSize: '0.95rem', 
              fontWeight: active ? '700' : '500',
              color: active ? 'var(--blue)' : '#64748B',
              background: active ? 'rgba(37,99,235,0.08)' : 'transparent',
              textDecoration: 'none', 
              transition: 'all 0.2s ease',
            }} className="nav-link-hover">
              <span style={{ display: 'flex', color: active ? 'var(--blue)' : '#94A3B8' }}>{icon}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Footer Sidebar (Logout) */}
        <div style={{ padding: '24px 16px', borderTop: '1px solid #F1F5F9' }}>
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 16px', 
            borderRadius: '12px', 
            color: 'var(--red)', 
            fontSize: '0.95rem', 
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'background 0.2s'
          }} onMouseOver={(e) => e.currentTarget.style.background = '#FEF2F2'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
            <LogOut size={20} /> Keluar
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Selamat datang, Raka 👋</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full border shadow-sm relative">
              <Bell size={20} className="text-gray" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-light text-blue font-bold flex items-center justify-center border border-blue">RD</div>
          </div>
        </div>

        {/* Row 1: Stat Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="card bg-white p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm text-gray font-medium mb-1">Skor Kompetensi</p>
              <h3 className="text-3xl font-bold text-blue">84<span className="text-lg text-gray">/100</span></h3>
            </div>
            <Award className="text-blue opacity-50" size={32} />
          </div>
          <div className="card bg-white p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm text-gray font-medium mb-1">Lamaran Aktif</p>
              <h3 className="text-3xl font-bold text-navy">3</h3>
            </div>
            <Briefcase className="text-gray opacity-50" size={32} />
          </div>
          <div className="card bg-white p-6 rounded-xl flex items-center justify-between " style={{ borderLeftColor: 'var(--teal)' }}>
            <div>
              <p className="text-sm text-gray font-medium mb-1">Match Terbaik</p>
              <h3 className="text-3xl font-bold text-teal">87%</h3>
            </div>
            <Target className="text-teal opacity-50" size={32} />
          </div>
          <div className="card bg-white p-6 rounded-xl flex items-center justify-between " style={{ borderLeftColor: 'var(--amber)' }}>
            <div>
              <p className="text-sm text-gray font-medium mb-1">Profil Lengkap</p>
              <h3 className="text-3xl font-bold text-amber">72%</h3>
            </div>
            <button className="text-xs font-bold text-amber bg-amber-light px-2 py-1 rounded">Lengkapi →</button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Lowongan Direkomendasikan AI</h2>
              <a href="#" className="text-sm text-blue font-semibold hover:underline">Lihat semua 24 lowongan →</a>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Staff Quality Control', co: 'PT Astra International', match: '87%', loc: 'Jakarta', action: 'Lamar', actionClass: 'btn-solid-blue' },
                { title: 'Operator Logistik', co: 'PT JNE Express', match: '82%', loc: 'Surabaya', action: 'Lamar', actionClass: 'btn-solid-blue' },
                { title: 'Teknisi Mesin Junior', co: 'PT Toyota Astra', match: '76%', loc: 'Karawang', action: 'Lihat', actionClass: 'btn-outline-blue' },
              ].map((job, i) => (
                <div key={i} className="card flex justify-between items-center p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray rounded flex items-center justify-center text-xs font-bold text-gray">LOGO</div>
                    <div>
                      <h4 className="font-bold text-navy">{job.title}</h4>
                      <p className="text-sm text-gray">{job.co} • {job.loc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="badge badge-teal">{job.match} Match</span>
                    <button className={`btn ${job.actionClass} px-4 py-2`}>{job.action}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Profil Kompetensi Saya</h2>
            <div className="card text-center relative p-6">
              <div className="badge badge-teal absolute top-4 right-4 text-xs"><CheckCircle2 size={12}/> Diverifikasi</div>
              
              <div className="w-full h-48 bg-gray rounded-full flex items-center justify-center mb-6 mt-4 relative">
                {/* Radar chart placeholder */}
                <span className="text-gray text-xs font-mono absolute top-2">Logika</span>
                <span className="text-gray text-xs font-mono absolute right-2">Bahasa</span>
                <span className="text-gray text-xs font-mono absolute bottom-2 left-8">Teknis</span>
                <span className="text-gray text-xs font-mono absolute bottom-2 right-8">Kepribadian</span>
                <div className="w-32 h-32 bg-blue-light rounded-full border-2 border-blue opacity-50"></div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link to="/profil/raka-dermawan" className="btn btn-solid-blue w-full">Lihat Sertifikat</Link>
                <button className="btn btn-outline-blue w-full">Bagikan Profil</button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 & 4 */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Lamaran Terkini</h2>
            <div className="card overflow-hidden p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray text-xs uppercase text-gray border-b">
                    <th className="p-4">Posisi</th>
                    <th className="p-4">Perusahaan</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="p-4 font-bold">Staff QC</td>
                    <td className="p-4 text-gray">PT Astra</td>
                    <td className="p-4"><span className="badge badge-amber">🟡 Diproses</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-bold">Admin Data</td>
                    <td className="p-4 text-gray">PT BCA</td>
                    <td className="p-4"><span className="badge badge-teal">🟢 Interview</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Operator</td>
                    <td className="p-4 text-gray">PT JNE</td>
                    <td className="p-4"><span className="badge badge-blue">🔵 Dikirim</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">AI Merekomendasikan untukmu</h2>
            <div className="space-y-4">
              <div className="card p-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-blue-light rounded flex items-center justify-center text-blue"><BookOpen/></div>
                <div className="flex-1">
                  <h4 className="font-bold">Excel untuk Pemula</h4>
                  <p className="text-xs text-gray mb-2">Tingkatkan peluang 15% pada data entry</p>
                  <div className="flex gap-2">
                    <span className="badge badge-gray text-xs bg-gray">Gratis</span>
                    <span className="badge badge-gray text-xs bg-gray">2 jam</span>
                  </div>
                </div>
                <button className="text-blue font-bold p-2"><ChevronRight/></button>
              </div>
              <div className="card p-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-purple-light rounded flex items-center justify-center text-purple"><BookOpen/></div>
                <div className="flex-1">
                  <h4 className="font-bold">Komunikasi Profesional</h4>
                  <p className="text-xs text-gray mb-2">Skor bahasa +12 poin</p>
                  <div className="flex gap-2">
                    <span className="badge badge-gray text-xs bg-gray">Gratis</span>
                    <span className="badge badge-gray text-xs bg-gray">3 jam</span>
                  </div>
                </div>
                <button className="text-blue font-bold p-2"><ChevronRight/></button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// Dummy icon to fulfill references
function Target(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}
