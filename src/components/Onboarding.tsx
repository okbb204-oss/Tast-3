import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Sparkles, Rocket, Brain, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { t, language, dir } = useLanguage();

  useEffect(() => {
    const hasSeen = localStorage.getItem('has_seen_onboarding');
    if (!hasSeen) {
      setIsVisible(true);
    }
  }, []);

  const finishOnboarding = () => {
    localStorage.setItem('has_seen_onboarding', 'true');
    setIsVisible(false);
  };

  const slides = [
    {
      title: 'مرحباً بك في منصة التكوين المهني 🇩🇿',
      subtitle: 'تعلّم حرفتك بطريقة ذكية وسهلة',
      icon: <div className="w-24 h-24 green-gradient rounded-3xl flex items-center justify-center text-5xl shadow-2xl">🇩🇿</div>,
      color: 'green-primary'
    },
    {
      title: 'اختر من بين 6 تخصصات مهنية معتمدة',
      subtitle: '60 درساً × 20 مستوى لكل تخصص مع محتوى رسمي من الوزارة',
      icon: (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 border-4 border-dashed border-green-primary rounded-full opacity-20" />
          <Rocket size={64} className="text-green-primary animate-bounce" />
        </div>
      ),
      color: 'blue-500'
    },
    {
      title: 'هل تريد أن نساعدك في اختيار التخصص؟',
      subtitle: 'يمكنك استخدام الذكاء الاصطناعي لتحليل ملفك أو التصفح بنفسك',
      icon: <Brain size={80} className="text-gold animate-pulse" />,
      actions: (
        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
          <button onClick={finishOnboarding} className="px-6 py-4 gold-gradient text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all">
            <Brain size={20} /> حلّل ملفي بالذكاء الاصطناعي
          </button>
          <button onClick={finishOnboarding} className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            <Search size={20} /> تصفّح التخصصات بنفسي
          </button>
        </div>
      )
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] dark bg-dark-bg overflow-hidden flex items-center justify-center arabesque-pattern">
      {/* Floating background blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-green-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <button 
        onClick={finishOnboarding}
        className="absolute top-8 left-8 text-white/50 hover:text-white font-bold transition-colors"
      >
        {t('onboarding.skip')}
      </button>

      <div className="container max-w-lg mx-auto px-6 text-center space-y-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: dir === 'rtl' ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir === 'rtl' ? -100 : 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="space-y-8"
          >
            <div className="flex justify-center">{slides[step].icon}</div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{slides[step].title}</h2>
              <p className="text-lg text-white/70">{slides[step].subtitle}</p>
            </div>
            {slides[step].actions}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        {!slides[step].actions && (
          <div className="flex items-center justify-between pt-8">
            <button
              onClick={() => setStep(s => Math.max(0, s - 1))}
              disabled={step === 0}
              className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 disabled:opacity-0 transition-all text-white"
            >
              {dir === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all ${i === step ? 'w-8 bg-green-primary' : 'w-2 bg-white/20'}`} 
                />
              ))}
            </div>

            <button
              onClick={() => setStep(s => Math.min(slides.length - 1, s + 1))}
              className="p-4 green-gradient rounded-2xl hover:scale-110 active:scale-95 transition-all text-white"
            >
              {dir === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
