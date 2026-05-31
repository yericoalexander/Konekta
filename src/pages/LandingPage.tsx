import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit, CheckCircle2, ChevronDown,
  Award,
  Building, ArrowRight, ClipboardList, Target, Send, Mic, LineChart,
  Settings, Filter, FileCheck, Video,
  RefreshCcw, Sparkles, Zap, ShieldCheck
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Logos />
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
  <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
    <div className="container mx-auto px-6 h-20 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-3 group">
        <img src="/logo-konekta.png" alt="Konekta Logo" className="h-14 w-auto object-contain drop-shadow-lg scale-[1.3] transform group-hover:rotate-2 transition-transform" />
        <span className="font-extrabold text-2xl text-navy tracking-tighter">Konekta</span>
      </Link>
      
      <div className="hidden lg:flex gap-10">
        {['Kandidat', 'Perusahaan', 'Cara Kerja', 'Harga'].map(item => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-extrabold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
            {item}
          </a>
        ))}
      </div>
      
      <div className="flex gap-4 items-center">
        <Link to="/login" className="text-sm font-extrabold text-navy px-6 py-3 hover:text-blue-600 transition-colors uppercase tracking-widest">Masuk</Link>
        <Link to="/assessment" className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl text-sm font-extrabold shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all active:translate-y-0 uppercase tracking-widest">
          Daftar Gratis
        </Link>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-32 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse-slow"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
    
    <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-2xl text-[10px] font-extrabold uppercase tracking-[3px] border border-blue-100 mb-8">
          <Sparkles size={16} /> Didukung AI Generatif Terkini
        </div>
        <h1 className="text-7xl font-black text-navy tracking-tight leading-[1.05] mb-8">
          Buktikan <br/>
          <span className="text-blue-600">Skill Nyatamu,</span> <br/>
          Bukan Ijazahmu.
        </h1>
        <p className="text-xl text-slate-500 font-medium mb-12 max-w-xl leading-relaxed">
          Konekta menggunakan AI untuk mencocokkan lulusan SMK/SMA dengan pekerjaan impian berdasarkan kompetensi aktual, bukan sekadar gelar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Link to="/assessment" className="px-10 py-5 bg-navy text-white rounded-[24px] text-sm font-extrabold shadow-2xl shadow-navy/20 hover:bg-blue-600 hover:-translate-y-1 transition-all active:translate-y-0 uppercase tracking-widest flex items-center justify-center gap-3">
            Mulai Tes Gratis <ArrowRight size={20} />
          </Link>
          <Link to="/login" className="px-10 py-5 bg-white border-2 border-slate-100 text-navy rounded-[24px] text-sm font-extrabold hover:border-navy hover:shadow-lg transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
            <Building size={20} /> Untuk Perusahaan
          </Link>
        </div>
        
        <div className="flex gap-8 flex-wrap">
          {[
            { icon: <Zap size={16}/>, text: 'Tanpa CV' },
            { icon: <Target size={16}/>, text: 'Tes 45 Menit' },
            { icon: <ShieldCheck size={16}/>, text: 'Gratis & Terverifikasi' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
              <div className="text-teal-500">{item.icon}</div> {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10 bg-white rounded-[48px] p-10 shadow-premium border border-slate-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center text-white text-2xl font-black shadow-xl">RD</div>
              <div>
                <h4 className="font-extrabold text-2xl text-navy">Raka Dermawan</h4>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">SMK Teknik Mesin</p>
              </div>
            </div>
            <div className="px-5 py-2 bg-teal-50 text-teal-600 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest border border-teal-100 shadow-sm animate-bounce">
              87% Match
            </div>
          </div>

          <div className="space-y-6 mb-10">
            {[
              { label: 'Logika & Analitik', val: 88, color: 'blue' },
              { label: 'Komunikasi Kerja', val: 76, color: 'teal' },
              { label: 'Kepribadian Kerja', val: 91, color: 'purple' },
              { label: 'Teknis Spesifik', val: 82, color: 'amber' }
            ].map(stat => (
              <div key={stat.label}>
                <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest mb-2.5">
                  <span className="text-slate-400">{stat.label}</span>
                  <span className="text-navy">{stat.val}%</span>
                </div>
                <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                  <div className={`h-full bg-blue-500 rounded-full transition-all duration-1000`} style={{ width: `${stat.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-[11px] font-extrabold text-teal-600 bg-teal-50 py-4 rounded-2xl border border-teal-100 uppercase tracking-widest">
            <ShieldCheck size={18} /> Terverifikasi AI Global
          </div>
        </div>

        {/* Decorative Floating Card */}
        <div className="absolute -bottom-10 -left-10 z-20 bg-white rounded-3xl p-6 shadow-premium border border-slate-100 flex items-center gap-4 animate-float">
          <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-xs font-extrabold text-navy uppercase tracking-widest">Accepted at</p>
            <p className="font-black text-navy">PT Astra International</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Logos = () => (
  <section className="py-20 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
    <div className="container mx-auto px-6">
      <p className="text-center text-[10px] font-extrabold text-slate-400 uppercase tracking-[4px] mb-12">Dipercaya oleh 500+ Perusahaan Progresif</p>
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        {['Astra', 'Shopee', 'Gojek', 'JNE', 'Samsung', 'Toyota'].map(logo => (
          <span key={logo} className="text-2xl font-black text-navy italic tracking-tighter">{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

const CaraKerjaKandidat = () => (
  <section id="kandidat" className="py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border border-blue-100 mb-6">Untuk Kandidat</div>
        <h2 className="text-5xl font-black text-navy tracking-tight mb-6 leading-tight">Mulai Karirmu dalam <br/> 7 Langkah Mudah</h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Semua proses dipandu sepenuhnya oleh AI untuk memastikan kamu mendapatkan hasil terbaik.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { step: '01', icon: <ClipboardList />, title: 'Daftar 2 Menit', desc: 'Tanpa CV, tanpa ribet. Cukup data diri dasar dan pendidikan terakhirmu.', badge: 'Gratis' },
          { step: '02', icon: <BrainCircuit />, title: 'Tes Berbasis AI', desc: 'Tes seru selama 45 menit yang mengukur logika, bahasa, dan kepribadianmu.', badge: 'HP Friendly' },
          { step: '03', icon: <Award />, title: 'Profil Kompetensi', desc: 'Dapatkan sertifikat digital terverifikasi yang menonjolkan bakat tersembunyimu.' },
          { step: '04', icon: <Target />, title: 'Pencarian Otomatis', desc: 'AI kami secara aktif mencarikan lowongan yang 80%+ cocok dengan profilmu.' },
          { step: '05', icon: <Send />, title: 'Lamar Sekali Klik', desc: 'Kirim profilmu ke puluhan perusahaan tanpa harus menulis surat lamaran.' },
          { step: '06', icon: <Mic />, title: 'Interview Coach', desc: 'Berlatih interview dengan AI untuk meningkatkan kepercayaan dirimu.' }
        ].map((item, i) => (
          <div key={i} className="group p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-premium transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-blue-500/10 transition-colors">{item.step}</span>
               </div>
               <h3 className="text-2xl font-extrabold text-navy mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
               <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
               {item.badge && <span className="inline-block mt-6 px-3 py-1 bg-teal-50 text-teal-600 text-[9px] font-black uppercase tracking-widest rounded-lg">{item.badge}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
         <div className="bg-navy rounded-[40px] p-10 text-white w-full max-w-4xl shadow-premium relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] animate-pulse-slow"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
               <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center text-blue-400 shrink-0">
                  <LineChart size={32} />
               </div>
               <div className="flex-1 text-center md:text-left">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[4px] mb-3 block">Step 07: Grow</span>
                  <h4 className="text-2xl font-black mb-3 text-white">Terus Berkembang</h4>
                  <p className="text-slate-400 font-medium">Dapatkan rekomendasi kursus gratis untuk menutup celah skill dan meningkatkan peluang karirmu secara real-time.</p>
               </div>
               <button className="px-10 py-5 bg-white text-navy rounded-2xl font-extrabold text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl whitespace-nowrap">Explore Academy</button>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const CaraKerjaPerusahaan = () => (
  <section id="perusahaan" className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1.5 bg-navy text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest mb-6">Untuk Perusahaan HR</div>
        <h2 className="text-5xl font-black text-navy tracking-tight mb-6">Rekrut Tanpa Baca CV</h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">AI kami mengkurasi kandidat berdasarkan data kompetensi objektif, menghemat waktu screening hingga 90%.</p>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6">
        {[
          { num: '01', title: 'Open Job', icon: <Settings />, desc: 'AI membantu merumuskan kriteria skill presisi.' },
          { num: '02', numColor: 'blue', title: 'AI Match', icon: <Filter />, desc: 'Screening 500+ kandidat dalam hitungan detik.' },
          { num: '03', title: 'Verify', icon: <FileCheck />, desc: 'Akses hasil assessment terverifikasi blockchain.' },
          { num: '04', title: 'Video Int.', icon: <Video />, desc: 'Platform interview video terintegrasi AI.' },
          { num: '05', title: 'Smart Learn', icon: <RefreshCcw />, desc: 'AI terus belajar dari kriteria hiring kamu.' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <h1 className={`text-4xl font-black mb-8 transition-colors ${item.numColor === 'blue' ? 'text-blue-600' : 'text-slate-100 group-hover:text-blue-500/20'}`}>{item.num}</h1>
            <div className="flex items-center gap-3 mb-4 text-navy">
               <div className="text-blue-600">{item.icon}</div>
               <h3 className="font-extrabold text-lg">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FiturUtama = () => (
  <section id="cara-kerja" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-black text-navy tracking-tight mb-6">Kenapa Memilih Konekta?</h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Ekosistem AI terlengkap untuk menjembatani talenta muda dengan industri modern.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: '🚫', title: 'Zero CV Policy', desc: 'Menilai kemampuan nyata, bukan tumpukan kertas.', featured: true },
          { icon: '🧠', title: '45m AI Core', desc: 'Analisis logika, bahasa, dan teknis yang akurat.' },
          { icon: '🎯', title: 'Cross-Industry', desc: 'Cocokkan bakat melampaui batas jurusan.' },
          { icon: '💡', title: 'Talent Scout', desc: 'AI mendeteksi potensi tersembunyimu.' },
          { icon: '🏅', title: 'Verified Badge', desc: 'Profil digital siap pakai secara global.' },
          { icon: '🌏', title: 'Intl Market', desc: 'Akses ke perusahaan se-Asia Tenggara.' },
          { icon: '📡', title: 'Live Updates', desc: 'Pantau lamaran secara real-time.' },
          { icon: '🎤', title: 'AI Simulation', desc: 'Latihan interview dengan feedback instan.' },
        ].map((f, i) => (
          <div key={i} className={`p-10 rounded-[32px] transition-all duration-500 hover:-translate-y-2 cursor-default
            ${f.featured ? 'bg-navy text-white shadow-premium' : 'bg-slate-50 border border-slate-100 text-navy hover:bg-white hover:shadow-xl'}
          `}>
            <div className="text-4xl mb-6">{f.icon}</div>
            <h3 className={`text-xl font-extrabold mb-4 ${f.featured ? 'text-white' : 'text-navy'}`}>{f.title}</h3>
            <p className={`text-sm font-medium leading-relaxed ${f.featured ? 'text-slate-400' : 'text-slate-500'}`}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Statistik = () => (
  <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -mr-64 -mt-64 animate-pulse-slow"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
           <h2 className="text-5xl font-black text-white tracking-tight mb-8">Kisah Sukses <br/> Dari Seluruh Indonesia</h2>
           <div className="space-y-8">
              {[
                { name: 'Andi Dwi Saputra', role: 'QC Staff @ PT Astra', quote: 'Dulu saya ragu karena jurusan otomotif tapi mau ke industri elektronik. Konekta membuktikan skill saya relevan.', color: 'blue' },
                { name: 'Siti Rahayu', role: 'HR Manager @ PT Maju Bersama', quote: 'Screening 10 kandidat terbaik sekarang hanya butuh 1 jam. Kualitas kandidat jauh lebih terjamin.', color: 'teal' }
              ].map((t, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/5 hover:border-white/20 transition-all group">
                   <p className="text-lg font-medium italic text-slate-300 leading-relaxed mb-8 group-hover:text-white transition-colors">"{t.quote}"</p>
                   <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold`}>{t.name[0]}</div>
                      <div>
                        <p className="font-extrabold text-white">{t.name}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
           {[
             { label: 'Kandidat Aktif', val: '10.000+', sub: 'Tumbuh 20% tiap bulan' },
             { label: 'Perusahaan Mitra', val: '500+', sub: 'Dari Startup ke Multinational' },
             { label: 'Success Rate', val: '85%', sub: 'Penempatan kandidat' },
             { label: 'Screening Time', val: '< 1 Jam', sub: 'Efisiensi luar biasa' }
           ].map((s, i) => (
             <div key={i} className="p-8 bg-blue-600/10 rounded-[32px] border border-blue-500/20 text-center group hover:bg-blue-600 transition-all duration-500">
                <div className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform">{s.val}</div>
                <p className="text-[10px] font-black uppercase tracking-[3px] text-blue-400 group-hover:text-blue-100 mb-4">{s.label}</p>
                <p className="text-[10px] font-bold text-slate-400 group-hover:text-white/80">{s.sub}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const Harga = () => (
  <section id="harga" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-black text-navy tracking-tight mb-6">Investasi Masa Depan</h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Paket harga transparan untuk individu dan perusahaan dari segala skala.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: 'Talenta', price: 'Gratis', sub: 'Selamanya', feat: ['1x Assessment Lengkap', 'Profil Kompetensi AI', 'Sertifikat Digital', 'Maks 5 Lamaran/Bulan'], color: 'teal' },
          { title: 'Bisnis', price: '500rb', sub: 'Per Bulan', feat: ['5 Lowongan Aktif', 'AI Smart Shortlist', 'Priority Support', 'Match Score Otomatis'], color: 'blue', featured: true },
          { title: 'Enterprise', price: '1.5jt', sub: 'Per Bulan', feat: ['Lowongan Tanpa Batas', 'Video Interview AI', 'Akses Intl Market', 'Custom AI Training'], color: 'purple' }
        ].map((p, i) => (
          <div key={i} className={`p-12 rounded-[48px] border flex flex-col transition-all duration-500 hover:-translate-y-4
            ${p.featured ? 'bg-navy text-white shadow-premium border-navy' : 'bg-white border-slate-100 text-navy hover:shadow-xl'}
          `}>
            <span className={`text-[10px] font-black uppercase tracking-[4px] mb-8 ${p.featured ? 'text-blue-400' : `text-blue-500`}`}>{p.title}</span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-black tracking-tighter">{p.price}</span>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">{p.sub}</p>
            
            <div className={`h-px w-full mb-10 ${p.featured ? 'bg-white/10' : 'bg-slate-100'}`}></div>
            
            <ul className="space-y-6 flex-1 mb-12">
              {p.feat.map(f => (
                <li key={f} className="flex items-center gap-4 text-sm font-bold">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${p.featured ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-50 text-slate-400'}`}>✓</div>
                  {f}
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all
              ${p.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-50 text-navy hover:bg-navy hover:text-white'}
            `}>Pilih Paket Sekarang</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-navy text-center mb-24 tracking-tight">Punya Pertanyaan?</h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            { id: 'k1', q: 'Apakah saya perlu pengalaman kerja?', a: 'Tidak sama sekali. Sistem kami dirancang khusus untuk lulusan baru. Yang dinilai adalah potensi dan kemampuan aktual kamu sekarang, bukan riwayat pekerjaan.', cat: 'Kandidat' },
            { id: 'k2', q: 'Bagaimana kalau HP saya tidak canggih?', a: 'Aplikasi dirancang sangat ringan dan bisa berjalan di HP spesifikasi rendah. Kamu bisa menyimpan progress tes sementara dan melanjutkan kapan pun.', cat: 'Kandidat' },
            { id: 'p1', q: 'Seberapa akurat pencocokan AI-nya?', a: 'Rata-rata akurasi matching mencapai 85-91% berdasarkan feedback ribuan perusahaan. AI terus belajar setiap hari.', cat: 'Perusahaan' },
            { id: 'p2', q: 'Bisa rekrut untuk luar negeri?', a: 'Sangat bisa. Kami memiliki kemitraan dengan agensi di Jepang, Korea, dan Taiwan untuk menyalurkan talenta terbaik Indonesia.', cat: 'Perusahaan' }
          ].map(f => (
            <div key={f.id} className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer group" onClick={() => setOpen(open === f.id ? null : f.id)}>
              <div className="flex justify-between items-center">
                <div>
                   <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">{f.cat}</span>
                   <h4 className="font-extrabold text-lg text-navy group-hover:text-blue-600 transition-colors">{f.q}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${open === f.id ? 'rotate-180' : ''}`}>
                   <ChevronDown size={20} />
                </div>
              </div>
              {open === f.id && <p className="mt-6 text-slate-500 font-medium leading-relaxed animate-fade-in-up">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0B1120] text-white pt-32 pb-12 overflow-hidden relative">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -mr-32 -mb-32"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-24 justify-between">
        
        {/* Left side: Logo & Info */}
        <div className="md:w-2/5 flex flex-col">
          <Link to="/" className="flex items-center gap-3 mb-8 group w-fit">
            <img src="/logo-konekta.png" alt="Konekta Logo" className="h-14 w-auto object-contain scale-[1.3] transform" />
            <span className="font-extrabold text-2xl tracking-tighter text-white">Konekta</span>
          </Link>
          <p className="text-slate-300 font-medium leading-relaxed mb-8 max-w-sm text-sm">Platform AI rekrutmen masa depan yang memprioritaskan skill nyata di atas segalanya.</p>
          <div className="flex gap-4">
             {/* Decorative placeholder icons */}
             {[Sparkles, Target, LineChart, Send].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 transition-colors cursor-pointer flex items-center justify-center text-slate-400 hover:text-white">
                   <Icon size={18} />
                </div>
             ))}
          </div>
        </div>
        
        {/* Right side: Links Grid */}
        <div className="md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { title: 'Kandidat', links: ['Cara Kerja', 'Assessment', 'Dashboard', 'Academy'] },
            { title: 'Perusahaan', links: ['Rekrutmen AI', 'Pricing', 'Enterprise', 'Mitra HR'] },
            { title: 'Bantuan', links: ['Tentang Kami', 'Pusat Bantuan', 'Privasi', 'Kontak'] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-[3px] mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-slate-300 font-medium hover:text-white transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
        <p>&copy; 2026 Konekta. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
