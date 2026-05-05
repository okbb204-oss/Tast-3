import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Trophy, Lock } from 'lucide-react';
import { LessonCard } from '../components/LessonCard';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { fashionBeginner } from '../data/curriculum/fashion_beginner';
import { tailoringBeginner } from '../data/curriculum/tailoring_beginner';
import { aluminumBeginner } from '../data/curriculum/aluminum_beginner';
import { hairBeginner } from '../data/curriculum/hair_beginner';
import { dataEntryBeginner } from '../data/curriculum/data_entry_beginner';
import { msAccessBeginner } from '../data/curriculum/ms_access_beginner';

const curricula: Record<string, any[]> = {
  fashion: fashionBeginner,
  tailoring: tailoringBeginner,
  aluminum: aluminumBeginner,
  hair: hairBeginner,
  data_entry: dataEntryBeginner,
  ms_access: msAccessBeginner
};

import { generateLevelOnServer } from '../services/aiService';

export const LevelView: React.FC = () => {
  const { craftId, levelId } = useParams<{ craftId: string; levelId: string }>();
  const navigate = useNavigate();
  const { getLessonRecord, progress, saveAiLevel } = useProgress();
  const { t } = useLanguage();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const levelNumber = parseInt(levelId || '1');
  const key = `craft_${craftId}_level_${levelId}`;
  
  // 1. Check static
  let levelData = curricula[craftId || '']?.find(l => l.id === levelNumber);
  
  // 2. Check dynamic store
  if (!levelData && progress.aiCurricula[key]) {
    levelData = progress.aiCurricula[key];
  }

  // Effect to trigger generation if missing
  React.useEffect(() => {
    if (!levelData && craftId && !isGenerating) {
      const triggerGen = async () => {
        setIsGenerating(true);
        try {
          const fetched = await generateLevelOnServer(craftId, levelNumber);
          saveAiLevel(craftId, levelNumber, fetched);
        } catch (err) {
          console.error("Failed to generate level:", err);
        } finally {
          setIsGenerating(false);
        }
      };
      triggerGen();
    }
  }, [levelData, craftId, levelNumber, isGenerating, saveAiLevel]);

  if (isGenerating || !levelData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-slate-50 dark:bg-slate-950">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-green-primary border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl">✨</span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-tighter">AI Curriculum Generation</h2>
          <p className="opacity-40 font-medium">يقوم الذكاء الاصطناعي ببناء محتوى المستوى {levelId} خصيصاً لك...</p>
        </div>
      </div>
    );
  }

  const allLessons = levelData.lessons || [];
  const allCompleted = allLessons.length > 0 && allLessons.every((l: any) => getLessonRecord(craftId!, levelNumber, l.id).completed);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-40 mb-4 px-2">
        <button onClick={() => navigate('/')} className="hover:text-green-primary transition-colors">الرئيسية</button>
        <ChevronRight size={12} />
        <button onClick={() => navigate(`/craft/${craftId}`)} className="hover:text-green-primary transition-colors">تخصص {craftId}</button>
        <ChevronRight size={12} />
        <span className="text-green-primary">المستوى {levelId}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 bg-white dark:bg-dark-card p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-border/50 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 green-gradient opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity" />
        <div className="space-y-4 relative z-10 text-center md:text-right">
          <div className="flex flex-col md:flex-row items-center gap-4">
             <div className="w-20 h-20 green-gradient rounded-3xl flex items-center justify-center text-white shadow-lg text-3xl font-black">
                {levelId}
             </div>
             <div className="space-y-1">
                <h1 className="text-4xl md:text-5xl font-black mb-0 tracking-tighter">وحدات المستوى {levelId}</h1>
                <p className="text-muted-foreground font-medium">أكمل دروس هذا المستوى للانتقال إلى المرحلة التالية من احترافك.</p>
             </div>
             {allCompleted && <motion.div initial={{scale: 0}} animate={{scale: 1}} className="text-gold"><Trophy size={48} className="drop-shadow-lg" /></motion.div>}
          </div>
        </div>
        
        {/* Level Progress */}
        <div className="w-full md:max-w-xs space-y-3 relative z-10">
           <div className="flex justify-between text-sm font-black uppercase tracking-widest">
              <span className="opacity-60">{t('level.progress')}</span>
              <span className="text-green-primary">{allCompleted ? '100%' : '66%'}</span>
           </div>
           <div className="h-4 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner border border-border/20">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: allCompleted ? '100%' : '66%' }}
                className="h-full green-gradient shadow-[0_0_15px_rgba(0,255,135,0.4)]"
                transition={{ duration: 1.5, ease: "circOut" }}
              />
           </div>
        </div>
      </div>

      {allCompleted && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-1 green-gradient rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.4rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-right text-white">
              <h3 className="text-3xl font-black mb-0 tracking-tight flex items-center justify-center md:justify-start gap-4">
                <span>👑 تهانينا! المستوى مكتمل</span>
              </h3>
              <p className="text-lg opacity-90 font-medium leading-relaxed">لقد أثبت جدارتك في كافة دروس هذا المستوى. أنت الآن جاهز للتحدي القادم!</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/craft/${craftId}/level/${levelNumber + 1}`)}
              className="px-10 py-5 bg-white text-green-primary rounded-2xl font-black text-lg hover:shadow-2xl transition-all flex items-center gap-3 whitespace-nowrap"
            >
              ابدأ المستوى {levelNumber + 1}
              <ChevronRight className="rotate-180" />
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Lesson Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {levelData.lessons.map((lesson: any, index: number) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LessonCard
              lesson={{...lesson, levelId: levelNumber}}
              record={getLessonRecord(craftId!, levelNumber, lesson.id)}
              onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lesson.id}`)}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty State Mock */}
      {levelData.lessons.length === 0 && (
        <div className="text-center py-32 bg-slate-50 dark:bg-dark-card rounded-[3rem] border-2 border-dashed border-border/50">
           <Lock size={64} className="mx-auto mb-6 opacity-20" />
           <h4 className="text-xl font-bold opacity-40">هذا المستوى مغلق حالياً</h4>
           <p className="text-sm opacity-30 mt-2">نحن نعمل على تجهيز المحتوى التعليمي لهذه المحطة.</p>
        </div>
      )}
    </div>
  );
};
