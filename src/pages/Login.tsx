import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, Lock, ArrowRight, 
  Sparkles, CheckCircle2, ShieldCheck, Zap, Globe,
  Building2, Users, Target, BarChart2
} from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'kandidat' | 'perusahaan'>('kandidat');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(userType === 'kandidat' ? '/kandidat/dashboard' : '/perusahaan/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      
      {/* LEFT SIDE — AUTH FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-20 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -mr-32 -mb-32"></div>
        
        <div className="w-full max-w-[420px] relative z-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-10 group no-underline w-fit">
            <img src="/logo-konekta.png" alt="Konekta Logo" className="h-16 w-auto object-contain drop-shadow-xl scale-[1.3] transform group-hover:rotate-2 transition-transform" />
            <span className="font-extrabold text-2xl text-[#0B1120] tracking-tighter">Konekta</span>
          </Link>

          {/* User Type Toggle */}
          <div className="flex bg-[#F8FAFC] p-1.5 rounded-[20px] mb-10 border border-[#E2E8F0] shadow-inner">
            <button
              type="button"
              onClick={() => setUserType('kandidat')}
              className={`flex-1 py-3.5 rounded-[16px] text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                userType === 'kandidat' 
                  ? 'bg-white text-blue-600 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#E2E8F0]' 
                  : 'text-[#64748B] hover:text-[#0B1120] hover:bg-[#F1F5F9]'
              }`}
            >
              Kandidat
            </button>
            <button
              type="button"
              onClick={() => setUserType('perusahaan')}
              className={`flex-1 py-3.5 rounded-[16px] text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                userType === 'perusahaan' 
                  ? 'bg-white text-[#0D9488] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#E2E8F0]' 
                  : 'text-[#64748B] hover:text-[#0B1120] hover:bg-[#F1F5F9]'
              }`}
            >
              Perusahaan
            </button>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-black text-[#0B1120] tracking-tight mb-3">Selamat Datang 👋</h1>
            <p className="text-[#64748B] font-medium">
              {userType === 'kandidat' 
                ? 'Masuk untuk melanjutkan perjalanan karir AI kamu.' 
                : 'Masuk ke HR Portal untuk merekrut talenta terbaik.'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-[3px] ml-1">Email Address</label>
              <div className="relative group">
                <div className={`absolute inset-y-0 left-0 flex items-center pointer-events-none transition-colors duration-300 ${userType === 'kandidat' ? 'text-[#94A3B8] group-focus-within:text-blue-500' : 'text-[#94A3B8] group-focus-within:text-[#0D9488]'}`} style={{ paddingLeft: '20px' }}>
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  required
                  className="block w-full pr-6 py-4 bg-[#F8FAFC] border-2 border-transparent rounded-[20px] text-[15px] font-bold text-[#0B1120] placeholder:text-[#CBD5E1] focus:bg-white outline-none transition-all duration-300 focus:border-[#E2E8F0] shadow-inner"
                  style={{ 
                    paddingLeft: '56px', 
                    borderColor: userType === 'kandidat' ? (email ? '#BFDBFE' : '') : (email ? '#99F6E4' : '')
                  }}
                  placeholder={userType === 'kandidat' ? "name@email.com" : "hr@company.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-[3px]">Password</label>
                <a href="#" className={`text-[10px] font-extrabold uppercase tracking-widest hover:underline transition-colors ${userType === 'kandidat' ? 'text-blue-600' : 'text-[#0D9488]'}`}>Forgot Password?</a>
              </div>
              <div className="relative group">
                <div className={`absolute inset-y-0 left-0 flex items-center pointer-events-none transition-colors duration-300 ${userType === 'kandidat' ? 'text-[#94A3B8] group-focus-within:text-blue-500' : 'text-[#94A3B8] group-focus-within:text-[#0D9488]'}`} style={{ paddingLeft: '20px' }}>
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  required
                  className="block w-full pr-6 py-4 bg-[#F8FAFC] border-2 border-transparent rounded-[20px] text-[15px] font-bold text-[#0B1120] placeholder:text-[#CBD5E1] focus:bg-white outline-none transition-all duration-300 focus:border-[#E2E8F0] shadow-inner"
                  style={{ 
                    paddingLeft: '56px', 
                    borderColor: userType === 'kandidat' ? (password ? '#BFDBFE' : '') : (password ? '#99F6E4' : '')
                  }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-5 text-white rounded-[24px] font-black text-[11px] uppercase tracking-[3px] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              style={{
                backgroundColor: userType === 'kandidat' ? '#2563EB' : '#0D9488',
                boxShadow: userType === 'kandidat' ? '0 12px 32px rgba(37,99,235,0.3)' : '0 12px 32px rgba(13,148,136,0.3)'
              }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Sign In Now <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute inset-0 flex items-center px-2">
                <div className="w-full border-t border-[#E2E8F0]"></div>
              </div>
              <span className="relative px-6 bg-white text-[10px] font-extrabold text-[#94A3B8] uppercase tracking-[4px]">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 border-2 border-[#E2E8F0] bg-white rounded-[20px] text-[10px] font-extrabold uppercase tracking-widest text-[#0B1120] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-all">
                <Globe size={18} className="text-blue-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-4 border-2 border-[#E2E8F0] bg-white rounded-[20px] text-[10px] font-extrabold uppercase tracking-widest text-[#0B1120] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-all">
                <ShieldCheck size={18} className="text-purple-500" /> SSO
              </button>
            </div>
          </div>

          <p className="mt-12 text-center text-sm font-bold text-[#64748B]">
            Belum punya akun?{' '}
            {userType === 'kandidat' ? (
              <Link to="/assessment" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">Daftar gratis di sini</Link>
            ) : (
              <a href="#" className="text-[#0D9488] hover:text-[#0F766E] hover:underline transition-colors">Hubungi Tim Sales</a>
            )}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE — BRAND EXPERIENCE */}
      <div className="hidden lg:flex w-1/2 bg-[#0B1120] relative items-center justify-center overflow-hidden transition-colors duration-700">
        {/* Animated Background Elements */}
        {userType === 'kandidat' ? (
          <>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse-slow transition-all duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -ml-64 -mb-64 transition-all duration-1000"></div>
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D9488]/20 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse-slow transition-all duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -ml-64 -mb-64 transition-all duration-1000"></div>
          </>
        )}
        
        <div className="relative z-10 max-w-lg p-12 text-center transition-all duration-500">
          <div className={`inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-2xl text-[10px] font-extrabold uppercase tracking-[3px] border border-white/10 mb-12 transition-colors duration-500 ${userType === 'kandidat' ? 'text-blue-400' : 'text-[#2DD4BF]'}`}>
            <Sparkles size={16} /> 
            {userType === 'kandidat' ? 'Empowering Future Talent' : 'Empowering Modern HR'}
          </div>
          
          <h2 className="text-5xl font-black text-white tracking-tight leading-[1.1] mb-8">
            {userType === 'kandidat' ? (
              <>Lebih dari Sekadar <br/><span className="text-blue-400 transition-colors duration-500">Portal Kerja.</span></>
            ) : (
              <>Rekrutmen Cerdas <br/><span className="text-[#2DD4BF] transition-colors duration-500">Berbasis AI.</span></>
            )}
          </h2>
          
          <p className="text-[#94A3B8] text-lg font-medium leading-relaxed mb-12 min-h-[84px]">
            {userType === 'kandidat' 
              ? 'Konekta menghubungkan potensi terbaikmu dengan kesempatan industri global melalui analisis kompetensi berbasis AI.'
              : 'Konekta membantu perusahaan Anda menemukan talenta unggul dengan presisi tinggi melalui Smart Matching Engine.'}
          </p>

          <div className="grid grid-cols-2 gap-6 text-left">
            {userType === 'kandidat' ? (
              // Features for Kandidat
              [
                { icon: <Zap size={18}/>, title: 'Matching Presisi', desc: 'Akurasi hingga 91%' },
                { icon: <ShieldCheck size={18}/>, title: 'Data Terverifikasi', desc: 'Blockchain certified' },
                { icon: <CheckCircle2 size={18}/>, title: 'Tanpa Ijazah', desc: 'Fokus pada kompetensi' },
                { icon: <Sparkles size={18}/>, title: 'AI Coaching', desc: 'Interview simulation' }
              ].map((feat, i) => (
                <div key={i} className="p-6 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="text-blue-400 mb-4">{feat.icon}</div>
                  <h4 className="text-sm font-extrabold text-white mb-1">{feat.title}</h4>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{feat.desc}</p>
                </div>
              ))
            ) : (
              // Features for Perusahaan
              [
                { icon: <Target size={18}/>, title: 'Smart Matching', desc: 'Sesuai culture & skill' },
                { icon: <Users size={18}/>, title: 'AI Talent Pool', desc: 'Rekomendasi otomatis' },
                { icon: <Building2 size={18}/>, title: 'Auto Shortlist', desc: 'Hemat 70% waktu screening' },
                { icon: <BarChart2 size={18}/>, title: 'Analitik Rekrutmen', desc: 'Data-driven hiring' }
              ].map((feat, i) => (
                <div key={i} className="p-6 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="text-[#2DD4BF] mb-4">{feat.icon}</div>
                  <h4 className="text-sm font-extrabold text-white mb-1">{feat.title}</h4>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{feat.desc}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
    </div>
  );
};

export default Login;
