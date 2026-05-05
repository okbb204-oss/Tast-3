import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, Sparkles, ChevronDown, Award, Users, BookOpen, Layers } from 'lucide-react';
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
            className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter uppercase"
          >
            Craft Your <br/>
            <span className="text-green-primary">Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl opacity-40 max-w-2xl mx-auto leading-relaxed"
          >
            حلل مسارك المهني وابدأ رحلة التعلم الرقمي بأحدث التقنيات العالمية.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <button 
              onClick={() => {
                const craftsSection = document.getElementById('crafts');
                if (craftsSection) craftsSection.scrollIntoView({ behavior: 'smooth' });
                else navigate('/#crafts');
              }}
              className="w-full sm:w-auto px-12 py-6 bg-green-primary text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Explore Crafts
            </button>

            <button 
              onClick={() => navigate('/personality-test')}
              className="w-full sm:w-auto px-12 py-6 border border-white/20 hover:bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-white backdrop-blur-xl"
            >
              Intelligent Analysis
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
