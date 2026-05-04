import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '');
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', text: 'مرحباً! أنا مساعدك الذكي في منصة التكوين المهني. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { t, language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: `You are an expert vocational training assistant for the Algerian CFPA/INSFP centers. Answer in ${language === 'ar' ? 'Arabic' : language === 'fr' ? 'French' : 'English'}. Be helpful, professional, and encouraging. Focus on the 6 main crafts provided: Data Entry, Tailoring, Aluminum Work, Hairdressing, Fashion Modeling, and MS Access.`,
        }
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.text || 'عذراً، حدث خطأ ما. حاول مجدداً.'
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { id: 'err', role: 'bot', text: 'لا يمكنني الاتصال بالخادم حالياً. تأكد من إعداد مفتاح API الخاص بـ Gemini.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickReplies = [
    { text: t('chatbot.reply1') || 'ما هي أفضل حرفة لي؟' },
    { text: t('chatbot.reply2') || 'كيف أعيد الاختبار؟' },
    { text: t('chatbot.reply3') || 'أين أجد شهادتي؟' }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[340px] h-[500px] glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 green-gradient text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <span className="font-bold">{t('chatbot.title')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 arabesque-pattern">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl flex gap-2 ${
                    msg.role === 'user' 
                      ? 'bg-green-primary text-white rounded-tr-none' 
                      : 'bg-white/80 dark:bg-dark-card text-foreground rounded-tl-none border border-border'
                  }`}>
                    {msg.role === 'bot' && <Bot size={16} className="mt-1 flex-shrink-0" />}
                    <p className="text-sm">{msg.text}</p>
                    {msg.role === 'user' && <User size={16} className="mt-1 flex-shrink-0" />}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/80 dark:bg-dark-card p-3 rounded-2xl rounded-tl-none border border-border flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="h-2 w-2 bg-green-primary rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="h-2 w-2 bg-green-primary rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="h-2 w-2 bg-green-primary rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scroller-hide">
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(reply.text);
                    // handleSend(reply.text);
                  }}
                  className="whitespace-nowrap px-3 py-1 bg-white/50 dark:bg-white/5 border border-border rounded-full text-xs hover:bg-green-primary hover:text-white transition-all"
                >
                  {reply.text}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-white/5 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1 bg-transparent border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-primary"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping}
                  className="p-2 green-gradient text-white rounded-xl hover:scale-105 active:scale-95 transition-transform disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-4 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen ? 'bg-red-accent text-white' : 'green-gradient text-white neon-glow'
        }`}
      >
        {isOpen ? <X size={28} /> : (
          <div className="relative">
            <Sparkles size={28} className="absolute -top-2 -right-2 text-gold animate-pulse" />
            <Bot size={28} />
          </div>
        )}
      </motion.button>
    </div>
  );
};
