import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BrainCircuit, Clock, ChevronLeft, ChevronRight,
  CheckCircle2, Sparkles, BookOpen, Users, Lightbulb,
  Code2, AlertTriangle, ArrowRight, Zap, X
} from 'lucide-react';

// ─────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────
const SECTIONS = [
  {
    key: 'logika',
    label: 'Logika',
    Icon: BrainCircuit,
    from: '#2563EB',
    to: '#3B82F6',
    accent: '#2563EB',
    light: '#EFF6FF',
    border: '#BFDBFE',
    text: '#1D4ED8',
    questions: [
      { q: 'Jika semua A adalah B, dan semua B adalah C, maka…', opts: ['Semua A adalah C', 'Semua C adalah A', 'Sebagian A bukan C', 'Tidak dapat disimpulkan'] },
      { q: 'Angka berikutnya dalam deret: 2, 6, 12, 20, 30, …', opts: ['40', '42', '44', '48'] },
      { q: 'Lima orang duduk berurutan. Budi di kiri Ana, Cici di kanan Budi, Dedi paling kiri, Edi antara Dedi dan Budi. Siapa di tengah?', opts: ['Budi', 'Edi', 'Cici', 'Ana'] },
      { q: 'Hari ini Rabu. Ujian 3 hari lagi jatuh pada hari apa?', opts: ['Jumat', 'Sabtu', 'Minggu', 'Senin'] },
      { q: 'Mana yang BUKAN bilangan prima?', opts: ['7', '11', '13', '15'] },
      { q: 'Jam analog menunjukkan pukul 03:00. Berapa derajat sudut antara jarum menit dan jam?', opts: ['60°', '90°', '120°', '45°'] },
      { q: 'Kata "KONEKTA" jika dibalik menjadi?', opts: ['ATKENOK', 'ATKONKE', 'ATKENOK', 'AKTENOK'] },
      { q: 'Manakah silogisme yang valid?', opts: ['Semua hewan punya sayap. Kucing hewan. Jadi kucing punya sayap.', 'Beberapa manusia dokter. Ani manusia. Jadi Ani dokter.', 'Semua siswa belajar. Budi belajar. Jadi Budi siswa.', 'Tidak ada yang valid.'] },
      { q: 'Produk dijual Rp 120.000 dengan diskon 25%. Harga setelah diskon?', opts: ['Rp 90.000', 'Rp 95.000', 'Rp 85.000', 'Rp 80.000'] },
      { q: 'Jika X > Y dan Y > Z, pernyataan yang PASTI benar?', opts: ['X > Z', 'Z > X', 'X = Z', 'Y = Z'] },
    ],
  },
  {
    key: 'bahasa',
    label: 'Bahasa',
    Icon: BookOpen,
    from: '#7C3AED',
    to: '#8B5CF6',
    accent: '#7C3AED',
    light: '#F5F3FF',
    border: '#DDD6FE',
    text: '#6D28D9',
    questions: [
      { q: 'Kalimat yang menggunakan tanda baca yang benar adalah…', opts: ['Ibu membeli: sayur, buah, dan daging.', 'Ibu membeli sayur, buah, dan daging.', 'Ibu membeli; sayur, buah dan daging.', 'Ibu membeli sayur buah dan daging.'] },
      { q: 'Antonim dari kata "ambiguitas" adalah…', opts: ['Ketidakjelasan', 'Kejelasan', 'Kebingungan', 'Kerancuan'] },
      { q: 'Sinonim kata "inovatif" adalah…', opts: ['Kreatif', 'Konservatif', 'Monoton', 'Statis'] },
      { q: 'Kalimat efektif yang tepat adalah…', opts: ['Para hadirin semuanya dipersilakan duduk.', 'Para hadirin dipersilakan duduk.', 'Semua para hadirin dipersilakan duduk.', 'Hadirin sekalian semua dipersilakan duduk.'] },
      { q: 'Manakah ejaan yang benar sesuai KBBI?', opts: ['Apotik', 'Apotek', 'Aphotik', 'Aphotek'] },
      { q: 'Kata "mempermasalahkan" merupakan bentuk…', opts: ['Verba transitif', 'Verba intransitif', 'Nomina', 'Adjektiva'] },
      { q: '"Kepala batu" termasuk jenis ungkapan…', opts: ['Metafora', 'Idiom', 'Personifikasi', 'Simile'] },
      { q: 'Kalimat yang menggunakan kata depan "di" dengan benar?', opts: ['Diambil dari lemari', 'Di ambil dari lemari', 'Di mana kamu pergi?', 'Dimana kamu pergi?'] },
      { q: 'Gagasan utama paragraf disebut juga…', opts: ['Kalimat penjelas', 'Ide pokok', 'Kalimat simpleks', 'Kohesi'] },
      { q: '"Burung berkicau di pagi hari" menggunakan majas…', opts: ['Personifikasi', 'Hiperbola', 'Metafora', 'Litotes'] },
    ],
  },
  {
    key: 'situasional',
    label: 'Situasional',
    Icon: Lightbulb,
    from: '#D97706',
    to: '#F59E0B',
    accent: '#D97706',
    light: '#FFFBEB',
    border: '#FDE68A',
    text: '#B45309',
    questions: [
      { q: 'Skenario: Kamu mengerjakan tugas deadline besok, tapi rekan meminta bantuan mendesak. Apa tindakan yang paling mencerminkan dirimu?', opts: ['Menyelesaikan tugasmu dulu, baru bantu setelah selesai', 'Langsung membantu karena kerja tim adalah prioritas utama', 'Menjelaskan situasi dan mencari solusi alternatif bersama', 'Mendelegasikan ke rekan lain untuk membantu temanmu'] },
      { q: 'Skenario: Atasan memberi keputusan yang menurutmu kurang tepat. Apa yang kamu lakukan?', opts: ['Menurut saja karena atasan lebih berpengalaman', 'Menyampaikan pendapat dengan data pendukung secara profesional', 'Mengeluh kepada rekan kerja agar mendapat dukungan', 'Mengabaikan dan bekerja dengan cara sendiri'] },
      { q: 'Skenario: Proyek tim terlambat karena satu anggota tidak memenuhi tugasnya. Kamu…', opts: ['Menyelesaikan tugasnya sendiri agar proyek selesai tepat waktu', 'Melaporkan langsung ke atasan', 'Mendiskusikan masalah secara terbuka dalam rapat tim', 'Mengabaikan, itu bukan tanggung jawabmu'] },
      { q: 'Skenario: Kamu menemukan kesalahan dalam laporan yang sudah dikirim ke klien. Kamu…', opts: ['Diam dan berharap klien tidak menyadarinya', 'Segera memberi tahu atasan dan menawarkan solusi koreksi', 'Menunggu klien komplain baru bertindak', 'Menyalahkan rekan yang menyiapkan laporan'] },
      { q: 'Skenario: Konflik antar rekan kerja mengganggu produktivitas. Kamu…', opts: ['Tidak ikut campur, itu urusan mereka', 'Memihak salah satu yang menurutmu benar', 'Mengajak keduanya bicara secara netral untuk solusi bersama', 'Melaporkan langsung ke HRD'] },
      { q: 'Skenario: Kamu mendapat tugas baru yang sama sekali asing bagimu. Reaksimu?', opts: ['Menolak karena di luar kompetensi', 'Menerima dan belajar mandiri maupun bertanya kepada senior', 'Menerima namun diam-diam meminta orang lain mengerjakannya', 'Meminta agar tugas diberikan ke yang lebih berpengalaman'] },
      { q: 'Skenario: Kamu berbeda pendapat dengan klien penting. Sikapmu?', opts: ['Selalu mengikuti keinginan klien', 'Berdebat hingga klien memahami sudut pandangmu', 'Menyampaikan pendapat sopan sambil tetap mendengarkan klien', 'Menyerahkan penyelesaian ke atasan'] },
      { q: 'Skenario: Kamu diminta lembur mendadak saat sudah ada rencana pribadi. Kamu…', opts: ['Langsung menolak', 'Menerima tanpa mempertimbangkan situasi', 'Menjelaskan situasi dan mencari kompromi yang masuk akal', 'Setuju tapi menunjukkan perasaan kesal'] },
      { q: 'Skenario: Kamu melihat rekan menyontek dalam tes seleksi internal. Kamu…', opts: ['Berpura-pura tidak melihat', 'Langsung melaporkan ke pengawas', 'Menegur rekan tersebut secara pribadi setelah tes', 'Ikut menyontek agar setara'] },
      { q: 'Skenario: Kamu memiliki ide baru yang bisa meningkatkan proses kerja. Kamu…', opts: ['Menyimpan ide untuk dirimu sendiri', 'Langsung mengubah prosedur tanpa memberi tahu siapapun', 'Mengusulkan ide ke atasan dengan penjelasan matang', 'Meminta rekan untuk menyampaikan idemu'] },
    ],
  },
  {
    key: 'kepribadian',
    label: 'Kepribadian',
    Icon: Users,
    from: '#0D9488',
    to: '#14B8A6',
    accent: '#0D9488',
    light: '#F0FDFA',
    border: '#99F6E4',
    text: '#0F766E',
    questions: [
      { q: 'Dalam tim, saya lebih suka peran sebagai…', opts: ['Pemimpin yang memandu', 'Koordinator di balik layar', 'Kontributor aktif', 'Penilai dan evaluator'] },
      { q: 'Ketika menghadapi masalah, saya cenderung…', opts: ['Langsung bertindak', 'Menganalisis dulu sebelum bertindak', 'Meminta pendapat orang lain', 'Menunggu keadaan membaik'] },
      { q: 'Saya merasa paling produktif saat…', opts: ['Bekerja sendiri dengan fokus penuh', 'Berkolaborasi dalam tim', 'Ada tenggat waktu yang ketat', 'Bekerja dengan ritme santai'] },
      { q: 'Dalam mengambil keputusan, saya lebih mengandalkan…', opts: ['Intuisi', 'Data dan logika', 'Pendapat orang lain', 'Pengalaman masa lalu'] },
      { q: 'Saya menganggap diri saya seseorang yang…', opts: ['Terorganisir dan sistematis', 'Fleksibel dan adaptif', 'Kreatif dan inovatif', 'Empatik dan suportif'] },
      { q: 'Saat menghadapi kritik, saya biasanya…', opts: ['Merasa defensif', 'Menerima dan merefleksikan', 'Mempertanyakan validitas kritik', 'Mengabaikan jika tidak relevan'] },
      { q: 'Saya termotivasi bekerja oleh…', opts: ['Penghargaan finansial', 'Pertumbuhan karier', 'Dampak positif yang dihasilkan', 'Hubungan baik dengan tim'] },
      { q: 'Ketika bekerja, saya cenderung…', opts: ['Menyelesaikan satu hal sebelum pindah ke lain', 'Mengerjakan banyak hal bersamaan', 'Berfokus pada prioritas tertinggi', 'Mengikuti alur yang ada'] },
      { q: 'Dalam lingkungan kerja ideal, saya…', opts: ['Memiliki otonomi penuh', 'Punya struktur yang jelas', 'Berkolaborasi erat dengan tim', 'Dapat bereksplorasi dengan bebas'] },
      { q: 'Saya paling nyaman berkomunikasi secara…', opts: ['Tatap muka', 'Tertulis (email/chat)', 'Presentasi formal', 'Diskusi grup'] },
    ],
  },
  {
    key: 'teknis',
    label: 'Teknis',
    Icon: Code2,
    from: '#E11D48',
    to: '#F43F5E',
    accent: '#E11D48',
    light: '#FFF1F2',
    border: '#FECDD3',
    text: '#BE123C',
    questions: [
      { q: 'Apa fungsi utama dari Microsoft Excel VLOOKUP?', opts: ['Mencari nilai di baris', 'Mencari nilai di kolom secara vertikal', 'Menghitung rata-rata', 'Menyortir data'] },
      { q: 'Dalam manajemen gudang, istilah FIFO berarti…', opts: ['Fast In, Fast Out', 'First In, First Out', 'Fixed Input, Fixed Output', 'Full Index, Full Output'] },
      { q: 'Apa yang dimaksud dengan KPI?', opts: ['Key Performance Indicator', 'Key Product Index', 'Key Personnel Interface', 'Knowledge Performance Index'] },
      { q: 'Dokumen untuk mencatat pengiriman barang disebut…', opts: ['Invoice', 'Surat Jalan', 'Purchase Order', 'Bon Faktur'] },
      { q: 'Dalam Quality Control, "defect rate" mengacu pada…', opts: ['Tingkat produksi', 'Persentase produk cacat', 'Kecepatan mesin', 'Biaya produksi'] },
      { q: 'Rumus Excel untuk menghitung jumlah sel berisi angka adalah…', opts: ['=SUM()', '=COUNT()', '=COUNTA()', '=SUMIF()'] },
      { q: 'Apa kepanjangan dari SOP?', opts: ['Standard Operating Procedure', 'System of Process', 'Standard Output Plan', 'Service Operation Protocol'] },
      { q: 'Dalam logistik, "last mile delivery" mengacu pada…', opts: ['Pengiriman jarak jauh', 'Tahap akhir pengiriman ke tujuan', 'Jarak antar gudang', 'Rute terpanjang'] },
      { q: 'Apa arti "throughput" dalam manufaktur?', opts: ['Waktu istirahat mesin', 'Jumlah produk yang dihasilkan per satuan waktu', 'Jumlah bahan baku masuk', 'Total biaya produksi'] },
      { q: 'Dokumen "Bill of Materials" (BOM) digunakan untuk…', opts: ['Mencatat biaya gaji', 'Mendaftar semua komponen untuk membuat produk', 'Mencatat jumlah pesanan', 'Membuat laporan keuangan'] },
    ],
  },
];

const LETTERS = ['A', 'B', 'C', 'D'];

// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────
export default function Assessment() {
  const { section: sParam, nomor: nParam } = useParams<{ section: string; nomor: string }>();
  const navigate = useNavigate();

  const isComplete = sParam === 'selesai';

  const sectionIdx  = Math.max(0, SECTIONS.findIndex(s => s.key === sParam));
  const questionIdx = Math.max(0, Math.min(parseInt(nParam ?? '1') - 1, 9));

  const section  = SECTIONS[sectionIdx];
  const question = section.questions[questionIdx];
  const { Icon } = section;

  const totalQ       = section.questions.length;
  const isLastQ      = questionIdx === totalQ - 1;
  const isLastSection = sectionIdx === SECTIONS.length - 1;
  const isFirstEver   = sectionIdx === 0 && questionIdx === 0;

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  const key      = `${sectionIdx}-${questionIdx}`;
  const selected: number | null = answers[key] ?? null;

  // Timer
  useEffect(() => {
    if (isComplete) return;
    const t = setInterval(() => setTimeLeft(prev => (prev <= 1 ? 0 : prev - 1)), 1000);
    return () => clearInterval(t);
  }, [sectionIdx, isComplete]);
  useEffect(() => { if (!isComplete) setTimeLeft(10 * 60); }, [sectionIdx, isComplete]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const goTo = (secKey: string, q: number) =>
    navigate(`/assessment/${secKey}/${q + 1}`);

  const handleNext = () => {
    if (selected === null) return;
    if (isLastQ) {
      if (isLastSection) navigate('/assessment/selesai/1');
      else goTo(SECTIONS[sectionIdx + 1].key, 0);
    } else {
      goTo(section.key, questionIdx + 1);
    }
  };

  const handlePrev = () => {
    if (questionIdx > 0) goTo(section.key, questionIdx - 1);
    else if (sectionIdx > 0) goTo(SECTIONS[sectionIdx - 1].key, SECTIONS[sectionIdx - 1].questions.length - 1);
  };

  const urgent = timeLeft < 60;

  // ── COMPLETE SCREEN ──────────────────────────────────────────────
  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl" style={{ background: 'rgba(20,184,166,0.08)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-3xl" style={{ background: 'rgba(37,99,235,0.06)' }} />
        </div>

        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
          <div
            className="w-28 h-28 rounded-[36px] flex items-center justify-center mb-8 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg,#0D9488,#14B8A6)',
              boxShadow: '0 20px 60px rgba(13,148,136,0.25)',
              animation: 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <CheckCircle2 size={52} color="#fff" />
          </div>

          <p className="text-[10px] font-black uppercase tracking-[3px] text-blue-500 mb-3 flex items-center gap-2">
            <Sparkles size={12} /> AI Analysis Complete
          </p>
          <h1 className="text-4xl font-extrabold text-[#0B1120] tracking-tight mb-4">Assessment Selesai!</h1>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            AI Konekta sedang memproses pola jawabanmu untuk membangun profil kompetensi dan mencocokkanmu dengan lowongan terbaik.
          </p>

          <div className="grid grid-cols-3 gap-3 w-full mb-10">
            {[
              { label: 'Sesi Selesai', val: '5 / 5', bg: '#F0FDFA', border: '#99F6E4', color: '#0F766E' },
              { label: 'Total Soal',   val: '50 Soal', bg: '#EFF6FF', border: '#BFDBFE', color: '#1D4ED8' },
              { label: 'Estimasi',     val: 'Tinggi',  bg: '#F5F3FF', border: '#DDD6FE', color: '#6D28D9' },
            ].map(s => (
              <div key={s.label} className="rounded-2xl border px-4 py-4 text-left" style={{ background: s.bg, borderColor: s.border }}>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
                <p className="text-lg font-black" style={{ color: s.color }}>{s.val}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/kandidat/dashboard')}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest text-white transition-all hover:-translate-y-0.5"
            style={{ background: '#0B1120', boxShadow: '0 12px 40px rgba(11,17,32,0.2)' }}
          >
            Lihat Hasil di Dashboard <ArrowRight size={16} />
          </button>
        </div>

        <style>{`@keyframes popIn { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }`}</style>
      </div>
    );
  }

  // ── MAIN ASSESSMENT ──────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9', display: 'flex', flexDirection: 'column' }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header style={{
        background: '#0B1120',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          padding: '0 32px',
          height: 64,
          display: 'flex', alignItems: 'center', gap: 24,
        }}>
          {/* Back/Close Button */}
          <button 
            onClick={() => navigate('/')} 
            style={{ 
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', 
              cursor: 'pointer', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', width: 36, height: 36, marginLeft: -16,
              borderRadius: 10, transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            title="Keluar dari Assessment"
          >
            <X size={18} />
          </button>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <img 
              src="/logo-konekta.png" 
              alt="Konekta Logo" 
              style={{
                height: 56, width: 'auto', objectFit: 'contain',
                filter: 'drop-shadow(0 4px 12px rgba(37,99,235,0.2))',
                transform: 'scale(1.3)'
              }}
            />
            <div>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: 13, lineHeight: 1 }}>Assessment</p>
              <p style={{ color: '#60A5FA', fontWeight: 700, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', marginTop: 3 }}>Konekta AI</p>
            </div>
          </div>

          {/* Steps */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            {SECTIONS.map((sec, i) => {
              const SIcon = sec.Icon;
              const done   = i < sectionIdx;
              const active = i === sectionIdx;
              return (
                <div key={sec.key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 12px', borderRadius: 10,
                    fontSize: 10, fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: 1,
                    background: done ? 'rgba(20,184,166,0.12)' : active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: done ? '#2DD4BF' : active ? '#fff' : 'rgba(255,255,255,0.25)',
                    transition: 'all 0.2s',
                  }}>
                    {done ? <CheckCircle2 size={12} /> : <SIcon size={12} />}
                    <span>{sec.label}</span>
                  </div>
                  {i < SECTIONS.length - 1 && (
                    <div style={{ width: 16, height: 1, background: i < sectionIdx ? 'rgba(45,212,191,0.3)' : 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Timer */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 16px', borderRadius: 10, flexShrink: 0,
            fontWeight: 800, fontSize: 13,
            background: urgent ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.07)',
            color: urgent ? '#FCA5A5' : '#fff',
            border: `1px solid ${urgent ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.08)'}`,
            animation: urgent ? 'pulse 1s infinite' : 'none',
          }}>
            {urgent ? <AlertTriangle size={14} /> : <Clock size={14} />}
            {fmt(timeLeft)}
          </div>
        </div>
      </header>

      {/* ── CONTENT ────────────────────────────────────────── */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px 120px' }}>
        <div style={{ width: '100%', maxWidth: 760 }}>

          {/* Context Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `linear-gradient(135deg,${section.from},${section.to})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 14px ${section.from}40`,
              }}>
                <Icon size={16} color="#fff" />
              </div>
              <div>
                <p style={{ fontSize: 9, fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 2, lineHeight: 1, marginBottom: 4 }}>Sesi Aktif</p>
                <p style={{ fontSize: 13, fontWeight: 800, color: section.accent, lineHeight: 1 }}>{section.label}</p>
              </div>
            </div>
            <div style={{
              padding: '6px 14px', borderRadius: 10,
              background: section.light, border: `1px solid ${section.border}`,
              fontSize: 10, fontWeight: 800, color: section.text, letterSpacing: 1, textTransform: 'uppercase',
            }}>
              Soal {questionIdx + 1} / {totalQ}
            </div>
          </div>

          {/* Question Card */}
          <div
            key={key}
            style={{
              background: '#fff',
              borderRadius: 24,
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
              animation: 'slideUp 0.25s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            {/* Card Header */}
            <div style={{
              background: `linear-gradient(135deg, ${section.from}, ${section.to})`,
              padding: '32px 40px',
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.55)', fontSize: 9, fontWeight: 800,
                textTransform: 'uppercase', letterSpacing: 2,
                display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14,
              }}>
                <Zap size={10} color="rgba(255,255,255,0.4)" />
                Question {String(questionIdx + 1).padStart(2, '0')} of {String(totalQ).padStart(2, '0')}
              </p>
              <h2 style={{
                color: '#fff', fontWeight: 800, fontSize: '1.3rem',
                lineHeight: 1.5, margin: 0, letterSpacing: '-0.01em',
              }}>
                {question.q}
              </h2>
            </div>

            {/* Options */}
            <div style={{ padding: '28px 40px 24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {question.opts.map((opt, i) => {
                  const isSel = selected === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setAnswers(prev => ({ ...prev, [key]: i }))}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16,
                        padding: '16px 20px', borderRadius: 16, width: '100%', textAlign: 'left',
                        cursor: 'pointer', transition: 'all 0.15s',
                        border: `2px solid ${isSel ? section.accent : '#E2E8F0'}`,
                        background: isSel ? section.light : '#FAFAFA',
                        boxShadow: isSel ? `0 0 0 4px ${section.from}12` : 'none',
                        outline: 'none',
                      }}
                    >
                      {/* Letter Badge */}
                      <div style={{
                        width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 800,
                        background: isSel ? section.accent : '#F1F5F9',
                        color: isSel ? '#fff' : '#94A3B8',
                        transition: 'all 0.15s',
                      }}>
                        {LETTERS[i]}
                      </div>

                      {/* Option text */}
                      <span style={{
                        flex: 1,
                        fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.5,
                        color: isSel ? '#0B1120' : '#64748B',
                        transition: 'color 0.15s',
                      }}>
                        {opt}
                      </span>

                      {/* Check */}
                      {isSel && <CheckCircle2 size={18} color={section.accent} style={{ flexShrink: 0 }} />}
                    </button>
                  );
                })}
              </div>

              {/* Hint */}
              <p style={{
                marginTop: 20, fontSize: 11, color: '#CBD5E1', fontStyle: 'italic',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Sparkles size={11} color="#E2E8F0" />
                AI Konekta merekam pola pengambilan keputusanmu — berikan jawaban yang paling mencerminkan dirimu.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
        background: '#fff',
        borderTop: '1px solid #E2E8F0',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          maxWidth: 760, margin: '0 auto',
          padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          {/* Prev */}
          <button
            onClick={handlePrev}
            disabled={isFirstEver}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 20px', borderRadius: 12,
              border: '1.5px solid #E2E8F0', background: '#fff',
              fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1,
              color: isFirstEver ? '#CBD5E1' : '#64748B',
              cursor: isFirstEver ? 'not-allowed' : 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <ChevronLeft size={15} /> Sebelumnya
          </button>

          {/* Progress dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {section.questions.map((_, i) => {
              const answered = `${sectionIdx}-${i}` in answers;
              const current  = i === questionIdx;
              return (
                <button
                  key={i}
                  onClick={() => goTo(section.key, i)}
                  style={{
                    borderRadius: 99, border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.2s',
                    height: 8,
                    width: current ? 28 : 8,
                    background: current ? section.accent : answered ? '#34D399' : '#E2E8F0',
                  }}
                />
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            disabled={selected === null}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 24px', borderRadius: 12, border: 'none',
              fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1,
              cursor: selected !== null ? 'pointer' : 'not-allowed',
              background: selected !== null ? '#0B1120' : '#F1F5F9',
              color: selected !== null ? '#fff' : '#CBD5E1',
              boxShadow: selected !== null ? '0 4px 16px rgba(11,17,32,0.2)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            {isLastQ && isLastSection ? <><Sparkles size={13} /> Selesaikan</> :
             isLastQ                  ? <>Sesi Berikutnya <ChevronRight size={15} /></> :
                                        <>Berikutnya <ChevronRight size={15} /></>}
          </button>
        </div>
      </footer>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.7; }
        }
        button:hover:not(:disabled) { opacity: 0.92; }
      `}</style>
    </div>
  );
}
