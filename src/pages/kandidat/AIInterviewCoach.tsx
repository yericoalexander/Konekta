import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Lightbulb, Send, Sparkles, User, CheckCircle2, Mic } from 'lucide-react';

interface Message {
  id: string;
  role: 'ai' | 'user';
  text: string;
  time: string;
  isQuestion?: boolean;
  feedback?: {
    positif: string[];
    perbaikan: string[];
  };
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'ai',
    text: "Halo Raka! Selamat datang di sesi latihan interview untuk posisi Staff Quality Control di PT Astra International. Saya akan memandu kamu dengan 8 pertanyaan yang kemungkinan besar akan ditanyakan. Jawab seperti saat interview sungguhan ya!",
    time: "10:32"
  },
  {
    id: '2',
    role: 'ai',
    text: "Pertanyaan 1 dari 8:\n\n\"Ceritakan tentang dirimu dan mengapa kamu tertarik melamar posisi Staff Quality Control di PT Astra International?\"",
    time: "10:32",
    isQuestion: true
  }
];

const AIInterviewCoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI Feedback
    setTimeout(() => {
      const feedbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: "Terima kasih atas jawabannya, Raka. Mari kita lihat feedback untuk jawaban barusan.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        feedback: {
          positif: ["Struktur pengenalan diri sudah jelas", "Menunjukkan antusiasme yang baik terhadap brand Astra"],
          perbaikan: ["Coba hubungkan lebih spesifik antara skill teknis mesinmu dengan tugas QC", "Gunakan angka/pencapaian konkret jika ada"]
        }
      };

      const nextQuestion: Message = {
        id: (Date.now() + 2).toString(),
        role: 'ai',
        text: `Pertanyaan ${questionIndex + 1} dari 8:\n\n"Apa yang kamu ketahui tentang standar kualitas di industri manufaktur otomotif?"`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isQuestion: true
      };

      setMessages(prev => [...prev, feedbackMsg, nextQuestion]);
      setQuestionIndex(prev => prev + 1);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-12 gap-8 h-[calc(100vh-120px)] animate-fade-in-up">

      {/* KOLOM KIRI — PANEL KONTROL */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-black text-navy tracking-tight mb-6">Sesi Latihan</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Perusahaan & Posisi</label>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy leading-none">Staff QC</h4>
                  <p className="text-[10px] font-bold text-blue-600 mt-1">PT Astra International</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Progress Wawancara</label>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-700">Pertanyaan {questionIndex} dari 8</span>
                <span className="text-xs font-black text-blue-600">{Math.round((questionIndex / 8) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(questionIndex / 8) * 100}%` }}></div>
              </div>
            </div>

            <button className="btn btn-outline-blue w-full py-3 rounded-2xl text-xs font-black uppercase tracking-widest mt-4">Akhiri Sesi</button>
          </div>
        </div>

        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Tips Interview ✨</h4>
          <div className="space-y-3">
            {[
              "Gunakan metode STAR (Situasi, Tugas, Aksi, Hasil) saat menjawab.",
              "PT Astra mengutamakan ketelitian dan kemampuan kerja tim.",
              "Jawab dalam 60–90 detik per pertanyaan."
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <Lightbulb size={16} className="text-amber-500 shrink-0" />
                <p className="text-[11px] font-semibold text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KOLOM KANAN — CHAT INTERFACE */}
      <div className="col-span-12 lg:col-span-8 flex flex-col bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-100 bg-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue/20">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="font-black text-navy leading-none">AI Interview Coach</h3>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sesi Aktif</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-navy transition-colors"><Mic size={20} /></button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-2xl shrink-0 flex items-center justify-center text-sm font-bold shadow-sm ${msg.role === 'ai' ? 'bg-gradient-to-br from-blue-600 to-teal-500 text-white' : 'bg-white text-navy border border-gray-200'
                  }`}>
                  {msg.role === 'ai' ? <Sparkles size={18} /> : <User size={18} />}
                </div>

                <div className="space-y-2">
                  <div className={`p-5 rounded-[24px] text-sm leading-relaxed shadow-sm ${msg.role === 'ai'
                    ? 'bg-white text-navy rounded-tl-none'
                    : 'bg-blue-600 text-white rounded-tr-none'
                    }`}>
                    {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                  </div>

                  {msg.feedback && (
                    <div className="bg-amber-50 border border-amber-100 p-5 rounded-[24px] shadow-sm animate-fade-in-up">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 size={16} className="text-amber-600" />
                        <span className="text-xs font-black text-amber-700 uppercase tracking-widest">Feedback AI</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] font-black text-green-700 uppercase tracking-widest block mb-2">✓ Kelebihan</span>
                          <ul className="space-y-1.5">
                            {msg.feedback.positif.map((p, i) => (
                              <li key={i} className="text-[11px] font-semibold text-gray-700 flex gap-1.5 items-start">
                                <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 shrink-0"></div> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-orange-700 uppercase tracking-widest block mb-2">↑ Perbaikan</span>
                          <ul className="space-y-1.5">
                            {msg.feedback.perbaikan.map((p, i) => (
                              <li key={i} className="text-[11px] font-semibold text-gray-700 flex gap-1.5 items-start">
                                <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 shrink-0"></div> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <span className="text-[10px] font-bold text-gray-400 block px-1">{msg.time}</span>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-white flex items-center justify-center shadow-sm">
                  <Sparkles size={18} />
                </div>
                <div className="bg-white p-4 rounded-[24px] rounded-tl-none shadow-sm flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex gap-3 items-center mb-4">
            {["Perkenalkan nama saya...", "Saya tertarik karena...", "Pengalaman saya..."].map((chip) => (
              <button key={chip} onClick={() => setInput(chip)} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all">
                {chip}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <textarea
              className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none resize-none h-14"
              placeholder="Ketik jawabanmu di sini..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue/20 hover:bg-blue-700 transition-all disabled:opacity-50 disabled:shadow-none"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AIInterviewCoach;
