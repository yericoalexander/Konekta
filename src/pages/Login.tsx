import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrainCircuit, Mail, Lock, ArrowRight, Building, User, ChevronLeft } from 'lucide-react';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'kandidat' | 'perusahaan'>('kandidat');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'kandidat') {
      navigate('/kandidat/dashboard');
    } else {
      
      navigate('/perusahaan/dashboard');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'radial-gradient(circle at top right, #F1F5F9 0%, #E2E8F0 100%)' }}>
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column' }} className="animate-fade-in-up">
        {/* Back Link */}
        <Link to="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--gray-text)', 
          fontSize: '0.9rem', 
          fontWeight: '600',
          textDecoration: 'none',
          marginBottom: '20px',
          transition: 'color 0.2s'
        }} className="hover:text-blue">
          <ChevronLeft size={18} /> Kembali ke Beranda
        </Link>

        <div className="card" style={{ padding: '0', borderRadius: '32px', boxShadow: '0 30px 100px rgba(15, 27, 45, 0.12)', display: 'flex', overflow: 'hidden', background: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
          {/* Left Side: Branding */}
          <div style={{ 
            flex: '0 0 42%', 
            background: 'linear-gradient(135deg, var(--navy) 0%, #1a2a3a 100%)', 
            padding: '56px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated Blobs */}
            <div className="animate-pulse-slow" style={{ 
              position: 'absolute', 
              top: '-10%', 
              right: '-10%', 
              width: '250px', 
              height: '250px', 
              background: 'var(--blue)', 
              borderRadius: '50%', 
              filter: 'blur(80px)',
              zIndex: 0
            }}></div>
            <div className="animate-pulse-slow" style={{ 
              position: 'absolute', 
              bottom: '-20%', 
              left: '-20%', 
              width: '300px', 
              height: '300px', 
              background: 'var(--purple)', 
              borderRadius: '50%', 
              filter: 'blur(100px)',
              zIndex: 0,
              animationDelay: '1s'
            }}></div>
            
            <div className="animate-float" style={{ 
              width: '64px', 
              height: '64px', 
              background: 'var(--blue)', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: '#fff',
              marginBottom: '40px',
              boxShadow: '0 12px 24px rgba(37,99,235,0.4)',
              zIndex: 1,
              position: 'relative'
            }}>
              <BrainCircuit size={36} />
            </div>
            
            <div className="animate-slide-in-right" style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2', letterSpacing: '-0.02em', color: '#fff' }}>
                {activeTab === 'kandidat' ? 'Mulai Langkah Karirmu' : 'Rekrut Talenta Terbaik'}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '0', fontWeight: '500' }}>
                {activeTab === 'kandidat' 
                  ? 'Buktikan kemampuan aslimu dan temukan pekerjaan impian dengan bantuan AI Konekta.' 
                  : 'Temukan kandidat paling cocok secara instan dengan validasi kemampuan berbasis AI.'}
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div style={{ flex: 1, padding: '56px', background: '#fff' }}>
            {/* Tabs */}
            <div style={{ 
              display: 'flex', 
              background: '#F1F5F9', 
              padding: '6px', 
              borderRadius: '18px', 
              marginBottom: '40px' 
            }}>
              <button 
                onClick={() => setActiveTab('kandidat')}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '14px',
                  border: 'none',
                  background: activeTab === 'kandidat' ? '#fff' : 'transparent',
                  color: activeTab === 'kandidat' ? 'var(--navy)' : 'var(--gray-text)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: activeTab === 'kandidat' ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <User size={20} /> Kandidat
              </button>
              <button 
                onClick={() => setActiveTab('perusahaan')}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '14px',
                  border: 'none',
                  background: activeTab === 'perusahaan' ? '#fff' : 'transparent',
                  color: activeTab === 'perusahaan' ? 'var(--navy)' : 'var(--gray-text)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: activeTab === 'perusahaan' ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <Building size={20} /> Perusahaan
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '10px' }}>
                  Email {activeTab === 'perusahaan' ? 'Perusahaan' : ''}
                </label>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', transition: 'color 0.2s' }}>
                    <Mail size={20} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="nama@email.com"
                    required
                    className="login-input"
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 54px',
                      borderRadius: '16px',
                      border: '1.5px solid #E2E8F0',
                      background: '#F8FAFC',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </div>
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy)' }}>Password</label>
                  <a href="#" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--blue)', textDecoration: 'none' }}>Lupa Password?</a>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }}>
                    <Lock size={20} />
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 54px',
                      borderRadius: '16px',
                      border: '1.5px solid #E2E8F0',
                      background: '#F8FAFC',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </div>
              </div>

              <div style={{ gridColumn: 'span 2', marginTop: '8px' }}>
                <button type="submit" className="btn btn-solid-blue" style={{ width: '100%', padding: '16px', borderRadius: '16px', fontSize: '1rem', boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)' }}>
                  Masuk Sekarang <ArrowRight size={20} />
                </button>
              </div>

              <div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>Atau Masuk Dengan</span>
                  <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                </div>
                <button type="button" style={{ 
                  width: '100%', 
                  padding: '14px', 
                  borderRadius: '16px', 
                  border: '1.5px solid #E2E8F0', 
                  background: '#fff', 
                  color: 'var(--navy)', 
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  transition: 'all 0.2s ease'
                }} className="hover:bg-gray">
                  <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '20px' }} /> Google
                </button>
              </div>

              <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '16px' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', margin: 0 }}>
                  Belum punya akun?{' '}
                  <Link to="/assessment" style={{ color: 'var(--blue)', fontWeight: '700', textDecoration: 'none' }}>Daftar Gratis</Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Info Outside Card to ensure visibility */}
        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.6' }}>
          Dengan masuk, Anda menyetujui <a href="#" style={{ color: '#64748B', fontWeight: '600' }}>Ketentuan Layanan</a> dan <a href="#" style={{ color: '#64748B', fontWeight: '600' }}>Kebijakan Privasi</a> Konekta.
        </p>
      </div>
    </div>
  );
}


