import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, Sparkles, ChevronDown, Award, Users, BookOpen, Layers, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: string; duration: number }[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 6 + 2}px`,
      duration: Math.random() * 10 + 10
    }));
    setParticles(p);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden arabesque-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        
        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.4, 0],
              x: [0, 20, -20, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bg-green-light rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 glass-card rounded-full text-sm font-bold border border-white/20"
          >
            <Award size={16} className="text-gold" />
            <span>منصة التكوين المهني المعتمدة في الجزائر 🇩🇿</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase"
          >
            HIRFATI <br/>
            <span className="text-green-primary">EXPERTISE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium opacity-60 max-w-2xl mx-auto leading-relaxed"
          >
            نظام التوجيه المهني الأكثر تطوراً في الجزائر. <br/>
            باشر رحلة احترافك الآن مع مناهج تدريبية معتمدة ومدعومة بالذكاء الاصطناعي.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <button 
              onClick={() => navigate('/personality-test')}
              className="w-full sm:w-auto px-12 py-6 green-gradient text-slate-950 rounded-[1.5rem] font-black text-lg shadow-[0_20px_50px_rgba(0,180,100,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group"
            >
              <span>ابدأ التحليل الذكي</span>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight size={18} />
              </div>
            </button>

            <button 
              onClick={() => {
                const craftsSection = document.getElementById('crafts');
                if (craftsSection) craftsSection.scrollIntoView({ behavior: 'smooth' });
                else navigate('/#crafts');
              }}
              className="w-full sm:w-auto px-12 py-6 border-2 border-white/10 hover:bg-white/5 rounded-[1.5rem] font-black text-lg transition-all text-white backdrop-blur-xl"
            >
              استعرض الحرف
            </button>
          </motion.div>


        </div>
      </div>

      <a href="#crafts" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};
