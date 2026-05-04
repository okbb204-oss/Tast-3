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
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl opacity-80"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button 
              onClick={() => {
                const craftsSection = document.getElementById('crafts');
                if (craftsSection) craftsSection.scrollIntoView({ behavior: 'smooth' });
                else navigate('/#crafts');
              }}
              className="w-full sm:w-auto px-10 py-5 green-gradient text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl group"
            >
              <Rocket size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {t('hero.cta.start')}
            </button>

            <button 
              onClick={() => navigate('/personality-test')}
              className="w-full sm:w-auto px-10 py-5 gold-gradient text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl animate-pulse-gold relative group"
            >
              <Brain size={24} className="group-hover:rotate-12 transition-transform" />
              {t('hero.cta.ai')}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-2 bg-black/80 text-white text-[10px] rounded scale-0 group-hover:scale-100 transition-transform whitespace-nowrap">
                حلّل مساري المهني بالذكاء الاصطناعي
              </div>
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-6 glass-card rounded-3xl"
          >
            {[
              { label: 'تخصص معتمد', value: '6', icon: <Layers size={20} className="text-green-primary" /> },
              { label: 'درس مكتمل', value: '360', icon: <BookOpen size={20} className="text-blue-500" /> },
              { label: 'مستوى تعليمي', value: '20', icon: <ChevronDown size={20} className="text-gold" /> },
              { label: 'سؤال تقييمي', value: '1080', icon: <Sparkles size={20} className="text-red-accent" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2 opacity-70">
                  {stat.icon}
                  <span className="text-xs font-bold uppercase">{stat.label}</span>
                </div>
                <p className="text-3xl font-bold text-green-primary dark:text-green-light">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <a href="#crafts" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};
