import { CheckCircle2, Lightbulb, QrCode, Download, Share2, Target, BrainCircuit, MessageSquare, Star, Settings } from 'lucide-react';

export default function ProfilKandidat() {
  return (
    <div className="min-h-screen bg-gray font-sans">
      {/* Header Section */}
      <header style={{ 
        background: 'var(--navy)', 
        color: '#fff', 
        padding: '100px 0 140px 0', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.15, 
          background: 'radial-gradient(circle at 80% 20%, var(--blue), transparent 40%)' 
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ 
              width: '110px', 
              height: '110px', 
              borderRadius: '32px', 
              background: 'linear-gradient(135deg, var(--blue), #1d4ed8)', 
              color: '#fff', 
              fontSize: '2.5rem', 
              fontWeight: '800', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(37,99,235,0.3)',
              border: '4px solid rgba(255,255,255,0.1)'
            }}>RD</div>
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '8px', letterSpacing: '-1px' }}>Raka Dermawan</h1>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>Teknik Mesin — SMK Negeri 3 Purwokerto</p>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: 'rgba(16,185,129,0.1)', 
                color: 'var(--teal)', 
                padding: '8px 16px', 
                borderRadius: '12px', 
                fontSize: '0.9rem', 
                fontWeight: '700',
                border: '1px solid rgba(16,185,129,0.2)'
              }}>
                <CheckCircle2 size={18} /> Terverifikasi AI — Mei 2026
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '90px', 
                height: '90px', 
                borderRadius: '50%', 
                border: '6px solid var(--teal)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(16,185,129,0.2)'
              }}>
                <span style={{ fontSize: '2rem', fontWeight: '800' }}>84</span>
              </div>
              <div style={{ marginTop: '12px', fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Competency Score</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{ background: 'var(--blue)', color: '#fff', border: 'none', padding: '14px 24px', borderRadius: '14px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(37,99,235,0.2)' }}><Download size={18}/> Unduh Sertifikat</button>
              <button style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '14px 24px', borderRadius: '14px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}><Share2 size={18}/> Bagikan Profil</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ marginTop: '-70px', position: 'relative', zIndex: 20, paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          
          {/* Left Column: Competency Details */}
          <div className="card" style={{ padding: '48px', borderRadius: '32px', background: '#fff', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '40px', color: 'var(--navy)' }}>Analisis Kompetensi AI</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { label: 'Logika & Analitik', score: 88, icon: <BrainCircuit size={20}/>, color: 'var(--blue)' },
                { label: 'Komunikasi & Bahasa', score: 76, icon: <MessageSquare size={20}/>, color: 'var(--teal)' },
                { label: 'Situasional & Keputusan', score: 83, icon: <Target size={20}/>, color: 'var(--amber)' },
                { label: 'Kepribadian Kerja', score: 91, icon: <Star size={20}/>, color: 'var(--purple)' },
                { label: 'Teknis Spesifik', score: 79, icon: <Settings size={20}/>, color: 'var(--navy)' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--navy)' }}>
                      <span style={{ color: item.color, display: 'flex' }}>{item.icon}</span> {item.label}
                    </div>
                    <div style={{ fontWeight: '800', fontSize: '1.25rem' }}>{item.score}<span style={{ fontSize: '0.9rem', color: 'var(--gray-text)', fontWeight: '400' }}>/100</span></div>
                  </div>
                  <div style={{ height: '12px', background: '#F1F5F9', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${item.score}%`, background: item.color, borderRadius: '99px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Insights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)', 
              borderRadius: '32px', 
              padding: '32px', 
              color: '#fff',
              boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Lightbulb size={28} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Bakat Tersembunyi</h3>
              </div>
              <p style={{ lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                AI mendeteksi kemampuan <strong>analisis data</strong> dan <strong>ketelitian teknis</strong> yang luar biasa. Sangat direkomendasikan untuk peran presisi tinggi seperti QC atau teknisi lab.
              </p>
            </div>

            <div className="card" style={{ padding: '32px', borderRadius: '32px', textAlign: 'center' }}>
              <h3 style={{ fontWeight: '800', marginBottom: '24px' }}>Verifikasi Digital</h3>
              <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '24px', border: '1px solid #E2E8F0', marginBottom: '16px', display: 'inline-block' }}>
                <QrCode size={140} color="var(--navy)" />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)', marginBottom: '0' }}>ID: TB-2026-RD-88429</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--blue)', fontWeight: '600' }}>Scan untuk verifikasi resmi</p>
            </div>
          </div>
        </div>

        {/* Matches Section */}
        <div style={{ marginTop: '32px', background: '#fff', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '32px' }}>Posisi yang Direkomendasikan</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { pos: 'Staff Quality Control', comp: 'PT Astra International', match: '87%', color: 'var(--teal)' },
              { pos: 'Operator Logistik', comp: 'PT JNE Express', match: '82%', color: 'var(--blue)' },
              { pos: 'Admin Data Entry', comp: 'PT Bank Central Asia', match: '79%', color: 'var(--purple)' },
            ].map(m => (
              <div key={m.pos} style={{ 
                padding: '24px', 
                borderRadius: '24px', 
                border: '1px solid #E2E8F0', 
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ background: m.color, color: '#fff', position: 'absolute', top: 0, right: 0, padding: '6px 16px', fontSize: '0.75rem', fontWeight: '800', borderRadius: '0 0 0 16px' }}>{m.match} Match</div>
                <h4 style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '4px' }}>{m.pos}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{m.comp}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="container" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--gray-text)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <BrainCircuit size={20} style={{ color: 'var(--blue)' }} />
        <span>Didukung teknologi AI standar internasional oleh Konekta</span>
      </footer>
    </div>
  );
}
