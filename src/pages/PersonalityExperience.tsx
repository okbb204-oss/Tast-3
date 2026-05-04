import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/src/contexts/GameContext';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { personalityQuestions, calculateBestCrafts, Trait } from '@/src/data/personality';
import { craftsList } from '@/src/data/craftsData';
import { Sparkles, ArrowLeft, Loader2, Brain, Star } from 'lucide-react';

export default function PersonalityExperience() {
  const navigate = useNavigate();
  const { setPersonalityResult } = useGame();
  const { t } = useLanguage();
  
  const [step, setStep] = useState<'intro' | 'questions' | 'calculating' | 'result'>('intro');
  const [qIndex, setQIndex] = useState(0);
  const [userTraits, setUserTraits] = useState<Record<Trait, number>>({
    logical: 0, creative: 0, practical: 0, social: 0, computer: 0, hands_on: 0, academic: 0, vocational: 0
  });
  
  const [topCrafts, setTopCrafts] = useState<{ id: string; score: number }[]>([]);

  const handleStart = () => setStep('questions');

  const handleAnswer = (traits: Partial<Record<Trait, number>>) => {
    setUserTraits(prev => {
      const newTraits = { ...prev };
      for (const [t, val] of Object.entries(traits)) {
        if (val !== undefined) {
          newTraits[t as Trait] += val;
        }
      }
      return newTraits;
    });

    if (qIndex < personalityQuestions.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      setStep('calculating');
    }
  };

  useEffect(() => {
    if (step === 'calculating') {
      const timer = setTimeout(() => {
        const results = calculateBestCrafts(userTraits);
        setTopCrafts(results);
        setStep('result');
      }, 2500); // 2.5 seconds of fake intense AI calculation
      return () => clearTimeout(timer);
    }
  }, [step, userTraits]);

  useEffect(() => {
    if (step === 'result' && topCrafts.length > 0) {
      const topCraftId = topCrafts[0].id;
      const timer = setTimeout(() => {
        setPersonalityResult(topCraftId);
        navigate(`/craft/${topCraftId}`);
      }, 7000); // Redirect after 7 seconds
      return () => clearTimeout(timer);
    }
  }, [step, topCrafts, navigate, setPersonalityResult]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[75vh] px-4">
      <AnimatePresence mode="wait">
        
        {step === 'intro' && (
          <motion.div 
            key="intro" 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center space-y-8 max-w-3xl"
          >
            <div className="mx-auto w-24 h-24 bg-indigo-500/10 text-indigo-600 flex items-center justify-center rounded-2xl mb-6 relative border border-indigo-500/20 shadow-sm">
               <Brain className="w-10 h-10 relative z-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.2] tracking-tight">
              نظام التوجيه المهني الذكي
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              تقييم علمي دقيق لتحديد المسار المهني الأنسب لقدراتك وطموحاتك بناءً على متطلبات سوق العمل.
            </p>
            <button 
              onClick={handleStart}
              className="mt-12 px-10 py-5 bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              <span>بدء التقييم المهني</span>
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}

        {step === 'questions' && (
          <motion.div 
            key="questions" 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl"
          >
            <div className="mb-12 flex flex-col items-center space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted/50 px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <span>{t('pers.question.step')} {qIndex + 1}</span>
                <span className="opacity-50">{t('pers.question.of')}</span>
                <span>{personalityQuestions.length}</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight tracking-tight text-foreground/90">
                {personalityQuestions[qIndex].question}
              </h2>
            </div>
            <div className="space-y-4">
              {personalityQuestions[qIndex].options.map((opt, i) => (
                <button
                  key={opt.id}
                  onClick={() => handleAnswer(opt.traits)}
                  className="w-full p-6 text-center md:text-start md:rtl:text-right md:text-xl font-medium bg-card/60 hover:bg-card border border-border hover:border-primary/50 text-foreground/80 hover:text-primary rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'calculating' && (
          <motion.div 
            key="calc" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center space-y-6 text-center"
          >
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <h2 className="text-2xl font-black">{t('pers.calc.title')}</h2>
            <p className="text-muted-foreground animate-pulse">{t('pers.calc.desc')}</p>
          </motion.div>
        )}

        {step === 'result' && topCrafts.length > 0 && (
          <motion.div 
            key="result" 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="w-full max-w-4xl space-y-10"
          >
            <div className="text-center space-y-4">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-700 font-bold uppercase tracking-wider text-xs rounded-lg border border-emerald-500/20 mb-2">
                 <Star className="w-4 h-4" /> تحليل البيانات مكتمل
               </div>
               <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">توصيات التوجيه المهني</h2>
            </div>

            {(() => {
              const mainCraftIndex = craftsList.findIndex(c => c.id === topCrafts[0].id);
              const alt1Index = craftsList.findIndex(c => c.id === topCrafts[1].id);
              const alt2Index = craftsList.findIndex(c => c.id === topCrafts[2].id);
              const mainCraft = craftsList[mainCraftIndex];
              const alt1 = craftsList[alt1Index];
              const alt2 = craftsList[alt2Index];

              return (
                <div className="space-y-6">
                  {/* Main Recommendation */}
                  <div className={`p-8 md:p-12 rounded-2xl bg-card border shadow-md relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300`}>
                    <div className="absolute top-0 right-0 p-8 rtl:right-auto rtl:left-0 opacity-5 pointer-events-none">
                       <mainCraft.icon className="w-48 h-48 -rotate-12 text-indigo-500" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                       <div className="p-6 bg-indigo-50 border shadow-sm rounded-2xl text-indigo-600">
                         <mainCraft.icon className="w-12 h-12" />
                       </div>
                       <div className="text-center md:text-start md:rtl:text-right flex-1">
                         <h3 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight text-foreground">المسار الأساسي: {mainCraft.name}</h3>
                         <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
                           بناءً على نتائجك، يبرز هذا المسار كأفضل خيار لتطوير مهاراتك وبناء مسيرة مهنية مستقرة تلائم إمكانياتك.
                         </p>
                       </div>
                    </div>
                  </div>

                  {/* Alternatives */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                     <div className="p-6 bg-card border hover:border-border hover:shadow-sm rounded-xl flex items-center gap-5 transition-all duration-200">
                        <div className={`p-4 rounded-lg box-border ${alt1.bg} bg-opacity-10 text-primary`}>
                          <alt1.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase text-muted-foreground mb-1">مسار بديل أول</div>
                          <div className="font-bold text-lg text-foreground tracking-tight">{alt1.name}</div>
                        </div>
                     </div>
                     <div className="p-6 bg-card border hover:border-border hover:shadow-sm rounded-xl flex items-center gap-5 transition-all duration-200">
                        <div className={`p-4 rounded-lg box-border ${alt2.bg} bg-opacity-10 text-primary`}>
                          <alt2.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase text-muted-foreground mb-1">مسار بديل ثانٍ</div>
                          <div className="font-bold text-lg text-foreground tracking-tight">{alt2.name}</div>
                        </div>
                     </div>
                  </div>
                </div>
              );
            })()}

            <div className="text-center pt-8 flex flex-col items-center space-y-4">
              <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
              <p className="font-bold text-muted-foreground uppercase tracking-widest text-sm">جاري إنشاء ملفك التدريبي وتحويلك...</p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
