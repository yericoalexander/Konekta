import { useState } from 'react';
import { BrainCircuit, Clock, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Assessment() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showInterstitial, setShowInterstitial] = useState(false);

  const handleNext = () => {
    setShowInterstitial(true);
  };

  if (showInterstitial) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center" style={{ background: 'radial-gradient(circle at center, #fff 0%, #F8FAFC 100%)' }}>
        <div style={{ 
          width: '120px', 
          height: '120px', 
          background: 'rgba(16,185,129,0.1)', 
          borderRadius: '40px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '40px',
          boxShadow: '0 20px 40px rgba(16,185,129,0.1)'
        }}>
          <CheckCircle2 size={64} style={{ color: 'var(--teal)' }} />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--blue)', fontWeight: '700', marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          <Sparkles size={16} /> AI Analysis Complete
        </div>
        
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '16px', letterSpacing: '-1px' }}>Tes Logika Selesai!</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--gray-text)', marginBottom: '48px', maxWidth: '500px', lineHeight: '1.6' }}>
          Luar biasa! AI kami sedang memproses pola jawabanmu untuk membangun profil kompetensi yang akurat.
        </p>
        
        <div style={{ background: '#F1F5F9', padding: '24px 40px', borderRadius: '24px', marginBottom: '48px', display: 'inline-flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--gray-text)', textTransform: 'uppercase' }}>Waktu Pengerjaan</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy)' }}>07:12 Menit</div>
          </div>
          <div style={{ width: '1px', height: '40px', background: '#CBD5E1' }}></div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--gray-text)', textTransform: 'uppercase' }}>Akurasi</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--teal)' }}>Sangat Tinggi</div>
          </div>
        </div>
        
        <Link to="/kandidat/dashboard" style={{ 
          background: 'var(--blue)', 
          color: '#fff', 
          padding: '18px 48px', 
          borderRadius: '16px', 
          fontWeight: '700', 
          fontSize: '1.1rem', 
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 20px 40px rgba(37,99,235,0.2)'
        }}>Lanjut ke Tes Bahasa <ChevronRight/></Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <header style={{ 
        background: '#fff', 
        padding: '20px 40px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '25%' }}>
          <div style={{ width: '36px', height: '36px', background: 'var(--blue)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BrainCircuit size={20} color="#fff" />
          </div>
          <span style={{ fontWeight: '800', color: 'var(--navy)', fontSize: '1rem' }}>Assessment Center</span>
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
          {['Logika', 'Bahasa', 'Situasional', 'Kepribadian', 'Teknis'].map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '0.85rem', 
                fontWeight: '700',
                color: i === 0 ? 'var(--blue)' : i < 1 ? 'var(--teal)' : '#94A3B8'
              }}>
                {i < 1 ? <CheckCircle2 size={16} /> : <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === 0 ? 'var(--blue)' : '#CBD5E1' }}></div>}
                {step}
              </div>
              {i < 4 && <div style={{ width: '20px', height: '1px', background: '#E2E8F0' }}></div>}
            </div>
          ))}
        </div>

        <div style={{ width: '25%', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#FEF2F2', color: 'var(--red)', padding: '8px 20px', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #FEE2E2' }}>
            <Clock size={18} /> 08:23
          </div>
        </div>
      </header>

      {/* Main Area */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <div style={{ background: '#fff', padding: '60px', borderRadius: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.03)', border: '1px solid #E2E8F0' }}>
            <div style={{ color: 'var(--blue)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>Question 03 of 10</div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '48px', lineHeight: '1.4' }}>
              Skenario: Kamu sedang mengerjakan tugas deadline besok, tapi rekan kerja meminta bantuan dengan masalah mendesak mereka. Apa tindakan yang paling mencerminkan dirimu?
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                "Menyelesaikan tugasmu dulu secara fokus, baru bantu setelah selesai",
                "Langsung membantu rekan kerja karena kerja tim adalah prioritas utama",
                "Menjelaskan situasimu dengan jujur dan mencari solusi alternatif bersama",
                "Mendelegasikan atau meminta rekan lain untuk membantu temanmu tersebut"
              ].map((opt, i) => (
                <div 
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{ 
                    padding: '24px 32px', 
                    borderRadius: '20px', 
                    border: '2px solid',
                    borderColor: selected === i ? 'var(--blue)' : '#F1F5F9',
                    background: selected === i ? 'rgba(37,99,235,0.04)' : '#F8FAFC',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    border: '2px solid',
                    borderColor: selected === i ? 'var(--blue)' : '#CBD5E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: selected === i ? 'var(--blue)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}>
                    {selected === i && <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%' }}></div>}
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: '600', color: selected === i ? 'var(--navy)' : '#64748B' }}>{opt}</span>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '48px', textAlign: 'center', fontSize: '0.85rem', color: '#94A3B8', fontStyle: 'italic' }}>
              * AI merekam pola pengambilan keputusanmu, berikan jawaban yang paling jujur.
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <footer style={{ background: '#fff', padding: '24px 40px', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#94A3B8', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ChevronLeft size={20}/> Previous Question
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <div key={n} style={{ 
                width: '30px', 
                height: '6px', 
                borderRadius: '99px', 
                background: n < 3 ? 'var(--teal)' : n === 3 ? 'var(--blue)' : '#F1F5F9' 
              }}></div>
            ))}
          </div>

          <button 
            style={{ 
              background: selected !== null ? 'var(--navy)' : '#F1F5F9', 
              color: selected !== null ? '#fff' : '#94A3B8', 
              padding: '12px 32px', 
              borderRadius: '12px', 
              border: 'none',
              fontWeight: '700', 
              cursor: selected !== null ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onClick={handleNext}
            disabled={selected === null}
          >
            Next Question <ChevronRight size={20}/>
          </button>
        </div>
      </footer>
    </div>
  );
}
