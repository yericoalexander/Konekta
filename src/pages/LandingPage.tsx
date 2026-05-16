import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit, CheckCircle2, ChevronDown, ChevronUp,
  Award, Menu,
  Building, ArrowRight, ClipboardList, Target, Send, Mic, LineChart,
  Settings, Filter, FileCheck, Video, Lightbulb,
  RefreshCcw
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CaraKerjaKandidat />
      <CaraKerjaPerusahaan />
      <FiturUtama />
      <Statistik />
      <Harga />
      <FAQ />
      <Footer />
    </div>
  );
}

const Navbar = () => (
  <nav className="bg-white" style={{ borderBottom: '1px solid var(--gray-border)', position: 'sticky', top: 0, zIndex: 50 }}>
    <div className="container flex justify-between items-center" style={{ height: '72px' }}>
      <div className="flex items-center gap-2">
        <BrainCircuit size={28} className="text-blue" />
        <span className="font-bold text-xl text-navy">Konekta</span>
      </div>
      <div className="flex gap-6 hidden-mobile">
        <a href="#kandidat" className="font-medium text-gray hover:text-blue">Untuk Kandidat</a>
        <a href="#perusahaan" className="font-medium text-gray hover:text-blue">Untuk Perusahaan</a>
        <a href="#fitur" className="font-medium text-gray hover:text-blue">Cara Kerja</a>
        <a href="#harga" className="font-medium text-gray hover:text-blue">Harga</a>
      </div>
      <div className="flex gap-4 hidden-mobile">
        <Link to="/login" className="btn btn-outline-blue">Masuk</Link>
        <Link to="/assessment" className="btn btn-solid-blue">Daftar Gratis</Link>
      </div>
      <Menu size={24} className="text-navy" style={{ display: 'none' }} id="mobile-menu-btn" />
    </div>
  </nav>
);

const Hero = () => (
  <section className="section bg-white" style={{ overflow: 'hidden' }}>
    <div className="container grid grid-cols-2 items-center gap-12 hero-content">
      <div style={{ flex: '0 0 55%' }}>
        <div className="badge badge-blue mb-4">
          <BrainCircuit size={16} /> Didukung AI Terkini
        </div>
        <h1 className="text-5xl font-bold mb-4">Buktikan Kemampuanmu.<br />Bukan Gelarmu.</h1>
        <p className="text-lg text-gray mb-8">
          Platform AI yang mencocokkan lulusan SMK/SMA dengan pekerjaan yang tepat — berdasarkan skill nyata, bukan ijazah atau jurusan.
        </p>
        <div className="flex gap-4 mb-8">
          <Link to="/assessment" className="btn btn-solid-blue w-full">Mulai Tes Gratis <ArrowRight size={18} /></Link>
          <Link to="/perusahaan/dashboard" className="btn btn-outline-blue w-full"><Building size={18} /> Saya Perusahaan</Link>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-teal" /> Tidak perlu CV</div>
          <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-teal" /> Tes hanya 45 menit</div>
          <div className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-teal" /> Gratis untuk kandidat</div>
        </div>
      </div>

      <div style={{ flex: '0 0 45%', position: 'relative' }}>
        <div className="card" style={{ position: 'relative', zIndex: 10 }}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>RD</div>
              <div>
                <h4 className="font-bold text-lg">Raka Dermawan</h4>
                <p className="text-xs text-gray">SMK Teknik Mesin</p>
              </div>
            </div>
            <div className="badge badge-teal" style={{ position: 'absolute', top: '-12px', right: '-12px', boxShadow: 'var(--shadow-md)' }}>87% Match Score</div>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1"><span className="text-blue">Logika & Analitik</span><span>88%</span></div>
              <div className="progress-wrap"><div className="progress-bar bg-blue" style={{ width: '88%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1"><span className="text-teal">Komunikasi</span><span>76%</span></div>
              <div className="progress-wrap"><div className="progress-bar bg-teal" style={{ width: '76%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1"><span className="text-purple">Kepribadian Kerja</span><span>91%</span></div>
              <div className="progress-wrap"><div className="progress-bar bg-purple" style={{ width: '91%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1"><span className="text-amber">Teknis Spesifik</span><span>82%</span></div>
              <div className="progress-wrap"><div className="progress-bar bg-amber" style={{ width: '82%' }}></div></div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-teal bg-teal-light p-2 rounded" style={{ justifyContent: 'center' }}>
            <CheckCircle2 size={16} /> Terverifikasi AI
          </div>
        </div>

        <div className="card" style={{ position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 11, padding: '12px' }}>
          <p className="text-xs font-bold flex items-center gap-2">🎉 Diterima di PT Astra International</p>
        </div>
      </div>
    </div>
  </section>
);

const CaraKerjaKandidat = () => (
  <section id="kandidat" className="section bg-white text-center">
    <div className="container">
      <div className="badge badge-blue" style={{ marginBottom: '12px' }}>Untuk Kandidat</div>
      <h2 className="section-title">Dari Daftar Sampai Dapat Kerja</h2>
      <p className="section-subtitle" style={{ marginBottom: '48px' }}>7 langkah mudah yang semuanya dipandu AI</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', textAlign: 'left' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>1</div>
            <ClipboardList size={16} style={{ color: 'var(--blue)', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0, flex: 1 }}>Daftar 2 Menit</h3>
            <span className="badge badge-amber">Gratis</span>
          </div>
          <p style={{ color: 'var(--teal)', fontWeight: '600', fontSize: '0.8rem', marginBottom: '10px' }}>Tidak perlu CV &amp; pengalaman.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input disabled placeholder="Nama Lengkap" style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.8rem', width: '100%' }} />
            <select disabled style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.8rem', width: '100%' }}><option>SMK / SMA</option></select>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#10B981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>2</div>
            <BrainCircuit size={16} style={{ color: '#10B981', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>Tes Berbasis AI</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px' }}>
            {['🧠 Logika', '💬 Bahasa', '🎯 Situasional', '🌟 Kepribadian'].map(t => (
              <div key={t} style={{ padding: '7px 8px', borderRadius: '6px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: '0.72rem', textAlign: 'center' }}>{t}</div>
            ))}
          </div>
          <p style={{ fontSize: '0.72rem', color: '#64748B' }}>⏱ Maks 45 menit • Bisa dari HP spesifikasi rendah</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>3</div>
            <Award size={16} style={{ color: '#7C3AED', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>AI Buat Profilmu</h3>
          </div>
          <div style={{ background: '#EDE9FE', borderRadius: '8px', padding: '10px', marginBottom: '10px', display: 'flex', gap: '8px' }}>
            <Lightbulb size={15} style={{ color: '#7C3AED', flexShrink: 0, marginTop: '1px' }} />
            <p style={{ fontSize: '0.72rem', color: '#7C3AED', fontWeight: '600', margin: 0 }}>Hidden Talent: Problem-solving di atas rata-rata</p>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#64748B' }}>Sertifikat Digital Terverifikasi yang bisa dibagikan ke perusahaan mana pun.</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>4</div>
            <Target size={16} style={{ color: 'var(--blue)', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>AI Mencarikan Kerja</h3>
          </div>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', position: 'relative' }}>
            <span className="badge badge-teal" style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '0.68rem' }}>87% Match</span>
            <p style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '3px' }}>Staff Quality Control</p>
            <p style={{ fontSize: '0.72rem', color: '#64748B', marginBottom: '8px' }}>PT Astra International • Manufaktur</p>
            <span style={{ fontSize: '0.68rem', fontWeight: '600', color: 'var(--blue)', background: '#EFF6FF', padding: '3px 8px', borderRadius: '4px' }}>Cocok meski jurusan otomotif</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#10B981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>5</div>
            <Send size={16} style={{ color: '#10B981', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>Lamar Tanpa Repot</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '12px' }}>Profil kompetensimu langsung terkirim. Tidak perlu tulis surat lamaran.</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['Dikirim ✓', 'Dibaca ✓', 'Diproses...'].map((s, i) => (
              <span key={i} style={{ fontSize: '0.72rem', fontWeight: '700', color: '#10B981', background: '#D1FAE5', padding: '4px 10px', borderRadius: '99px' }}>{s}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>6</div>
            <Mic size={16} style={{ color: '#7C3AED', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>Interview AI Coach</h3>
          </div>
          <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '10px', marginBottom: '10px', fontFamily: 'monospace', fontSize: '0.72rem' }}>
            <p style={{ color: 'var(--blue)', fontWeight: '700', marginBottom: '4px' }}>AI Coach:</p>
            <p style={{ margin: 0 }}>"Ceritakan dirimu & mengapa tertarik posisi QC?"</p>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span className="badge badge-blue" style={{ fontSize: '0.68rem' }}>📋 Standar Astra</span>
            <span className="badge badge-purple" style={{ fontSize: '0.68rem' }}>🎌 Budaya Jepang</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>7</div>
            <LineChart size={16} style={{ color: 'var(--blue)', flexShrink: 0 }} />
            <h3 style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>Terus Berkembang</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '10px' }}>Rekomendasi kursus gratis untuk tingkatkan skill dan peluang kerja.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ padding: '10px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '0.8rem' }}><strong>Kursus Excel</strong><br /><span style={{ color: '#64748B', fontSize: '0.72rem' }}>Tutup gap data entry</span></div>
            <div style={{ padding: '10px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '0.8rem' }}><strong>Komunikasi</strong><br /><span style={{ color: '#64748B', fontSize: '0.72rem' }}>Tingkatkan skor 15%</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const CaraKerjaPerusahaan = () => (
  <section id="perusahaan" className="section bg-gray text-center">
    <div className="container">
      <div className="badge badge-navy mb-4">Untuk Perusahaan HR</div>
      <h2 className="section-title">Rekrut Talenta Terbaik Tanpa Baca Ratusan CV</h2>

      <div className="flex flex-wrap justify-center gap-6 mt-12 pb-4" style={{ textAlign: 'left' }}>

        <div className="card flex-1" style={{ minWidth: '280px', maxWidth: '350px' }}>
          <h1 className="text-4xl font-bold text-blue mb-4">01</h1>
          <div className="flex items-center gap-2 mb-2">
            <Settings className="text-navy" size={20} />
            <h3 className="font-bold text-lg">Buka Lowongan Presisi</h3>
          </div>
          <div className="bg-teal-light text-teal p-2 rounded text-xs font-semibold mb-4">AI membantu mendefinisikan skill</div>
          <p className="text-sm text-gray">Selesai dalam 10 menit dengan bantuan AI untuk merumuskan kebutuhan.</p>
        </div>

        <div className="card flex-1" style={{ minWidth: '280px', maxWidth: '350px' }}>
          <h1 className="text-4xl font-bold text-blue mb-4">02</h1>
          <div className="flex items-center gap-2 mb-2">
            <Filter className="text-navy" size={20} />
            <h3 className="font-bold text-lg">AI Langsung Bekerja</h3>
          </div>
          <p className="text-sm text-gray font-medium mb-2">500+ Kandidat → 15 Terbaik</p>
          <ul className="text-xs text-gray space-y-1">
            <li>⚡ Hasil dalam &lt; 1 jam</li>
            <li>🎯 Akurasi pencocokan 87%</li>
          </ul>
        </div>

        <div className="card flex-1" style={{ minWidth: '280px', maxWidth: '350px' }}>
          <h1 className="text-4xl font-bold text-blue mb-4">03</h1>
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="text-navy" size={20} />
            <h3 className="font-bold text-lg">Verifikasi & Seleksi</h3>
          </div>
          <div className="text-sm font-mono bg-gray p-2 rounded mb-2">
            #1 Raka D. - 87% ✓<br />
            #2 Sari W. - 82% ✓
          </div>
          <p className="text-xs text-gray">Semua hasil assessment bisa diverifikasi independen.</p>
        </div>

        <div className="card flex-1" style={{ minWidth: '280px', maxWidth: '350px' }}>
          <h1 className="text-4xl font-bold text-blue mb-4">04</h1>
          <div className="flex items-center gap-2 mb-2">
            <Video className="text-navy" size={20} />
            <h3 className="font-bold text-lg">Interview Platform</h3>
          </div>
          <div className="badge badge-purple text-xs mb-2">🎥 Video Interview Tersedia</div>
          <p className="text-xs text-gray">Atur jadwal dan notifikasi otomatis. Ideal untuk perusahaan luar kota.</p>
        </div>

        <div className="card flex-1" style={{ minWidth: '280px', maxWidth: '350px' }}>
          <h1 className="text-4xl font-bold text-blue mb-4">05</h1>
          <div className="flex items-center gap-2 mb-2">
            <RefreshCcw className="text-navy" size={20} />
            <h3 className="font-bold text-lg">Bantu AI Cerdas</h3>
          </div>
          <p className="text-sm text-gray mb-2">Beri rating kandidat untuk melatih akurasi AI.</p>
          <div className="badge badge-blue text-xs">Berkontribusi pada ekosistem</div>
        </div>

      </div>
    </div>
  </section>
);

// ─── Fitur Utama ────────────────────────────────────────────────────────────
// ─── Fitur Utama (Bento Grid Style) ──────────────────────────────────────────
// ─── Fitur Utama (Symmetrical 4-Column Grid) ──────────────────────────────────
const FiturUtama = () => {
  const fitur = [
    { icon: '🚫', title: 'Tidak Perlu CV', desc: 'Sistem menilai kemampuan nyata kamu sekarang, bukan tumpukan kertas.', featured: true },
    { icon: '🧠', title: 'Tes AI 45 Menit', desc: '5 jenis tes: logika, bahasa, situasional, kepribadian, dan teknis spesifik.' },
    { icon: '🎯', title: 'Cocok Lintas Industri', desc: 'Lulusan SMK otomotif bisa dicocokkan ke logistik atau QC.' },
    { icon: '💡', title: 'Deteksi Bakat', desc: 'AI menemukan potensi yang mungkin tidak kamu sadari sebelumnya.' },
    { icon: '🏅', title: 'Sertifikat Digital', desc: 'Profil kompetensi terverifikasi AI, siap pakai secara global.' },
    { icon: '🌏', title: 'Pasar Internasional', desc: 'Koneksi ke perusahaan Jepang, Korea, dan Asia Tenggara.' },
    { icon: '📡', title: 'Real-Time Update', desc: 'Pantau status lamaran langsung dari dashboard kamu.' },
    { icon: '🎤', title: 'AI Interview Coach', desc: 'Simulasi interview dengan feedback instan dari AI.' },
  ];

  return (
    <section id="fitur" className="section" style={{ background: '#fff', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="badge badge-blue" style={{ marginBottom: '16px' }}>Kenapa Konekta?</div>
          <h2 className="section-title">Semua yang Kamu Butuhkan</h2>
          <p className="section-subtitle">Teknologi AI untuk menjamin karir impianmu</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }}>
          {fitur.map((f, i) => (
            <div key={i} style={{
              background: f.featured ? 'var(--navy)' : '#F8FAFC',
              color: f.featured ? '#fff' : 'inherit',
              borderRadius: '24px',
              padding: '32px',
              border: f.featured ? 'none' : '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: f.featured ? '0 20px 40px rgba(15, 27, 45, 0.15)' : 'none',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{f.icon}</div>
              <h3 style={{
                fontWeight: '800',
                fontSize: '1.15rem',
                color: f.featured ? '#fff' : 'var(--navy)',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}>{f.title}</h3>
              <p style={{
                fontSize: '0.9rem',
                color: f.featured ? 'rgba(255,255,255,0.7)' : 'var(--gray-text)',
                lineHeight: '1.6',
                margin: 0
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Statistik = () => (
  <section style={{ background: '#F8FAFC', padding: '100px 0' }}>
    <div className="container">
      {/* Testimonials First for better flow */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 className="section-title">Mereka Sudah Membuktikan</h2>
        <p className="section-subtitle">Kisah sukses dari ribuan talenta Indonesia</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '80px' }}>
        {[
          {
            name: 'Andi Dwi Saputra', role: 'Staff QC di PT Astra',
            quote: 'Saya pikir susah dapat kerja karena jurusan otomotif tapi mau kerja di elektronik. Konekta buktikan kalau skill saya cocok.',
            color: 'var(--teal)'
          },
          {
            name: 'Siti Rahayu', role: 'HR Manager — PT Maju Bersama',
            quote: 'Sekarang shortlist 10 kandidat terbaik sudah ada dalam 1 jam. Kualitas kandidat jauh lebih terukur dibanding sistem lama.',
            color: 'var(--blue)'
          }
        ].map((t, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            position: 'relative',
            border: '1px solid #E2E8F0'
          }}>
            <div style={{ position: 'absolute', top: '32px', right: '40px', fontSize: '4rem', opacity: 0.1, color: t.color }}>"</div>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--navy)', marginBottom: '24px', fontWeight: '500' }}>{t.quote}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: t.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{t.name[0]}</div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--navy)' }}>{t.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Counter */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        background: 'var(--navy)',
        borderRadius: '32px',
        padding: '64px',
        textAlign: 'center',
        color: '#fff'
      }}>
        {[
          { label: 'Kandidat', val: '10.000+' },
          { label: 'Perusahaan', val: '500+' },
          { label: 'Penempatan', val: '85%' },
          { label: 'Kecepatan', val: '< 7 Hari' }
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '8px' }}>{s.val}</div>
            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Harga ────────────────────────────────────────────────────────────────────
const Harga = () => (
  <section id="harga" style={{ background: '#fff', padding: '100px 0' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 className="section-title">Harga Transparan</h2>
        <p className="section-subtitle">Investasi terbaik untuk masa depan karir dan perusahaan Anda</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Simple & Clean pricing */}
        {[
          { title: 'Talenta', price: 'Gratis', sub: 'Selamanya', feat: ['1x Assessment Lengkap', 'Profil Kompetensi AI', 'Maks 5 Lamaran/Bulan'], color: 'var(--teal)' },
          { title: 'Bisnis', price: '500rb', sub: 'Per Bulan', feat: ['5 Lowongan Aktif', 'AI Smart Shortlist', 'Match Score Otomatis'], color: 'var(--blue)', featured: true },
          { title: 'Enterprise', price: '1.5jt', sub: 'Per Bulan', feat: ['Lowongan Tanpa Batas', 'Video Interview AI', 'Akses Internasional'], color: 'var(--purple)' }
        ].map((p, i) => (
          <div key={i} style={{
            background: p.featured ? 'var(--navy)' : '#fff',
            color: p.featured ? '#fff' : 'var(--navy)',
            borderRadius: '32px',
            padding: '48px 40px',
            border: p.featured ? 'none' : '1px solid #E2E8F0',
            boxShadow: p.featured ? '0 30px 60px rgba(15,27,45,0.2)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease'
          }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: p.featured ? '#fff' : p.color }}>{p.title}</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800' }}>{p.price}</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '32px' }}>{p.sub}</p>

            <div style={{ height: '1px', background: p.featured ? 'rgba(255,255,255,0.1)' : '#E2E8F0', marginBottom: '32px' }}></div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {p.feat.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: p.featured ? '#fff' : p.color }}>✓</span> {f}
                </li>
              ))}
            </ul>

            <button style={{
              width: '100%',
              padding: '16px',
              borderRadius: '16px',
              border: 'none',
              background: p.featured ? 'var(--blue)' : '#F1F5F9',
              color: p.featured ? '#fff' : 'var(--navy)',
              fontWeight: '700',
              cursor: 'pointer'
            }}>Pilih Paket</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title text-center mb-12">Pertanyaan yang Sering Ditanyakan</h2>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="badge badge-teal mb-6">Untuk Kandidat</div>
            <div className="space-y-4">
              <div className="card cursor-pointer p-6" onClick={() => toggle('k1')}>
                <div className="flex justify-between items-center font-bold">
                  <span>Apakah saya perlu pengalaman kerja? <span className="badge badge-amber ml-2 py-0 px-2 text-xs">Populer</span></span>
                  {open === 'k1' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {open === 'k1' && <p className="mt-4 text-gray text-sm">Tidak sama sekali. Sistem kami dirancang khusus untuk lulusan baru. Yang dinilai adalah potensi dan kemampuan aktual kamu sekarang, bukan riwayat pekerjaan.</p>}
              </div>
              <div className="card cursor-pointer p-6" onClick={() => toggle('k2')}>
                <div className="flex justify-between items-center font-bold">
                  <span>Bagaimana kalau HP saya tidak canggih?</span>
                  {open === 'k2' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {open === 'k2' && <p className="mt-4 text-gray text-sm">Aplikasi dirancang ringan dan bisa berjalan di HP spesifikasi rendah. Kamu bisa menyimpan progress tes sementara dan melanjutkan kapan pun ada koneksi.</p>}
              </div>
            </div>
          </div>

          <div>
            <div className="badge badge-blue mb-6">Untuk Perusahaan</div>
            <div className="space-y-4">
              <div className="card cursor-pointer p-6" onClick={() => toggle('p1')}>
                <div className="flex justify-between items-center font-bold">
                  <span>Bagaimana cara kerjanya secara teknis? <span className="badge badge-amber ml-2 py-0 px-2 text-xs">Populer</span></span>
                  {open === 'p1' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {open === 'p1' && <p className="mt-4 text-gray text-sm">Pengguna daftar, ikuti assessment AI maksimal 45 menit, AI membangun profil kompetensi otomatis, lalu langsung mencocokkan ke posisi yang tersedia. Perusahaan tinggal terima shortlist.</p>}
              </div>
              <div className="card cursor-pointer p-6" onClick={() => toggle('p2')}>
                <div className="flex justify-between items-center font-bold">
                  <span>Seberapa akurat pencocokan AI-nya?</span>
                  {open === 'p2' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {open === 'p2' && <p className="mt-4 text-gray text-sm">Rata-rata akurasi matching 85-91% berdasarkan feedback dari perusahaan mitra. Semakin banyak data dan feedback yang masuk, semakin akurat sistemnya.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-navy text-white pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BrainCircuit size={28} className="text-blue" />
            <span className="font-bold text-xl">Konekta</span>
          </div>
          <p className="text-gray text-sm">Buktikan Kemampuanmu. Bukan Gelarmu. Platform AI rekrutmen masa depan untuk talenta Indonesia.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kandidat</h4>
          <ul className="space-y-2 text-sm text-gray">
            <li><a href="#" className="hover:text-blue">Cara Kerja</a></li>
            <li><Link to="/assessment" className="hover:text-blue">Mulai Tes Gratis</Link></li>
            <li><a href="#" className="hover:text-blue">Kisah Sukses</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Perusahaan</h4>
          <ul className="space-y-2 text-sm text-gray">
            <li><a href="#" className="hover:text-blue">Fitur Rekrutmen AI</a></li>
            <li><a href="#" className="hover:text-blue">Harga Paket</a></li>
            <li><Link to="/perusahaan/dashboard" className="hover:text-blue">Login HR</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Bantuan</h4>
          <ul className="space-y-2 text-sm text-gray">
            <li><a href="#" className="hover:text-blue">FAQ</a></li>
            <li><a href="#" className="hover:text-blue">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-blue">Hubungi Kami</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray pt-8 flex justify-between text-sm text-gray" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <p>&copy; 2026 Konekta. All rights reserved.</p>
        <p>🇮🇩 Indonesia | 🇬🇧 English</p>
      </div>
    </div>
  </footer>
);
