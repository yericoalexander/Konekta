import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Lightbulb, Send, Sparkles, User, CheckCircle2, Mic } from 'lucide-react';

interface Message {
  id: string;
  role: 'ai' | 'user';
  text: string;
  time: string;
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
    time: "10:32"
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

    setTimeout(() => {
      const feedbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: "Terima kasih atas jawabannya, Raka. Mari kita lihat feedback untuk jawaban barusan.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        feedback: {
          positif: ["Struktur pengenalan diri sudah jelas", "Menunjukkan antusiasme yang baik"],
          perbaikan: ["Coba hubungkan lebih spesifik dengan tugas QC", "Gunakan angka/pencapaian konkret"]
        }
      };

      const nextQuestion: Message = {
        id: (Date.now() + 2).toString(),
        role: 'ai',
        text: `Pertanyaan ${questionIndex + 1} dari 8:\n\n"Apa yang kamu ketahui tentang standar kualitas di industri manufaktur otomotif?"`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, feedbackMsg, nextQuestion]);
      setQuestionIndex(prev => prev + 1);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px 40px 40px' }} className="grid grid-cols-12 gap-8 h-[calc(100vh-140px)] animate-fade-in-up">

      {/* LEFT PANEL */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        <div className="bg-white rounded-[32px] shadow-premium border border-slate-100 p-8">
          <h3 className="text-xl font-black text-navy mb-6">Sesi Latihan</h3>
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm"><Briefcase size={20} /></div>
              <div>
                <h4 className="text-[11px] font-black text-navy uppercase leading-none mb-1">Staff QC</h4>
                <p className="text-[10px] font-bold text-blue-600 uppercase">PT Astra International</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress {questionIndex}/8</span>
                <span className="text-[10px] font-black text-blue-600">{Math.round((questionIndex / 8) * 100)}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(questionIndex / 8) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-8 flex-1 overflow-hidden flex flex-col">
           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Tips Interview ✨</h4>
           <div className="space-y-4 overflow-y-auto pr-2">
              {[
                "Gunakan metode STAR (Situasi, Tugas, Aksi, Hasil).",
                "Fokus pada ketelitian dan standar operasional.",
                "Jawab dengan tenang dan terstruktur."
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Lightbulb size={18} className="text-amber-500 shrink-0" />
                  <p className="text-[11px] font-bold text-slate-500 leading-relaxed">{tip}</p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* CHAT INTERFACE */}
      <div className="col-span-12 lg:col-span-8 flex flex-col bg-white rounded-[32px] shadow-premium border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-white">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-white shadow-xl"><Sparkles size={24} /></div>
              <div>
                <h3 className="font-black text-navy leading-none">AI Interview Coach</h3>
                <span className="text-[9px] font-black text-teal-500 uppercase tracking-widest mt-1.5 block">Sesi Aktif</span>
              </div>
           </div>
           <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 transition-all"><Mic size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/30">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white shadow-lg ${msg.role === 'ai' ? 'bg-navy' : 'bg-blue-600'}`}>
                  {msg.role === 'ai' ? <Sparkles size={18} /> : <User size={18} />}
                </div>
                <div className="space-y-3">
                  <div className={`p-6 rounded-[24px] text-sm font-bold leading-relaxed shadow-sm ${msg.role === 'ai' ? 'bg-white text-navy rounded-tl-none border border-slate-100' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                    {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                  {msg.feedback && (
                    <div className="bg-white border-2 border-amber-100 p-6 rounded-[24px] shadow-xl animate-fade-in-up">
                      <div className="flex items-center gap-2 mb-4 text-amber-600 font-black text-[10px] uppercase tracking-widest">
                         <CheckCircle2 size={16} /> AI Feedback
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <span className="text-[9px] font-black text-teal-600 uppercase mb-2 block">✓ Positif</span>
                          {msg.feedback.positif.map((p, i) => <p key={i} className="text-[11px] font-bold text-slate-500 mb-1">• {p}</p>)}
                        </div>
                        <div>
                          <span className="text-[9px] font-black text-amber-600 uppercase mb-2 block">↑ Perbaikan</span>
                          {msg.feedback.perbaikan.map((p, i) => <p key={i} className="text-[11px] font-bold text-slate-500 mb-1">• {p}</p>)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && <div className="flex justify-start gap-4"><div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center"><Sparkles size={18} /></div><div className="bg-white p-4 rounded-2xl shadow-sm flex gap-1"><div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce [animation-delay:0.4s]"></div></div></div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-8 bg-white border-t border-slate-50">
          <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {["Perkenalkan saya...", "Saya tertarik karena...", "Motivasi saya..."].map((chip) => (
              <button key={chip} onClick={() => setInput(chip)} className="whitespace-nowrap px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-slate-400 hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest">{chip}</button>
            ))}
          </div>
          <div className="flex gap-4">
            <textarea className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-bold focus:bg-white transition-all outline-none resize-none h-16" placeholder="Ketik jawabanmu..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }} />
            <button onClick={handleSend} disabled={!input.trim()} className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-navy transition-all disabled:opacity-50"><Send size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInterviewCoach;
