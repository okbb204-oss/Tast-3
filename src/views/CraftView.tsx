import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Lock, Trophy, Star, ArrowDown } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
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

export const CraftView: React.FC = () => {
  const { craftId } = useParams<{ craftId: string }>();
  const navigate = useNavigate();
  const { getProgressForCraft, getLessonRecord, setCurrentCraft } = useProgress();
  const { t } = useLanguage();

  const curriculum = curricula[craftId || ''];
  
  React.useEffect(() => {
    if (craftId) {
      setCurrentCraft(craftId);
    }
  }, [craftId, setCurrentCraft]);

  if (!curriculum) return <div className="p-20 text-center">التخصص غير موجود</div>;

  const totalLevels = 20; // Requirement says 20 levels
  const progress = getProgressForCraft(craftId!);

  const isLevelCompleted = (levelId: number) => {
    const levelData = curriculum.find(l => l.id === levelId);
    if (!levelData) return false;
    return levelData.lessons.every((l: any) => getLessonRecord(craftId!, levelId, l.id).completed);
  };

  const isLevelUnlocked = (levelId: number) => {
    if (levelId === 1) return true;
    return isLevelCompleted(levelId - 1);
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-card p-10 rounded-[3rem] border border-border shadow-xl">
           <div className="w-24 h-24 green-gradient rounded-3xl flex items-center justify-center text-5xl shadow-2xl shrink-0">
              {craftId === 'fashion' ? '👗' : '🛠️'}
           </div>
           <div className="space-y-4 flex-1 text-center md:text-right">
              <h1 className="text-4xl font-black mb-0">خريطة تعلم {craftId}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 <div className="px-4 py-2 bg-secondary rounded-full text-sm font-bold flex items-center gap-2">
                    <Trophy size={16} className="text-gold" /> {progress}% مكتمل
                 </div>
                 <div className="px-4 py-2 bg-secondary rounded-full text-sm font-bold flex items-center gap-2">
                    <Star size={16} className="text-blue-500" /> 60 درساً معتمداً
                 </div>
              </div>
           </div>
        </div>

        {/* Roadmap */}
        <div className="relative py-20">
           {/* Connecting Line (Underlay) */}
           <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-slate-200 dark:bg-white/5 -translate-x-1/2" />
           
           {/* Animated Progress Line */}
           <motion.div 
             initial={{ height: 0 }}
             animate={{ height: `${(progress / 100) * 100}%` }}
             className="absolute left-1/2 top-0 w-1.5 bg-green-primary -translate-x-1/2 z-10"
             transition={{ duration: 2, ease: "easeInOut" }}
           />

           <div className="space-y-32 relative z-20">
              {Array.from({ length: totalLevels }).map((_, i) => {
                const levelId = i + 1;
                const completed = isLevelCompleted(levelId);
                const unlocked = isLevelUnlocked(levelId);
                const isCurrent = unlocked && !completed;
                const isSpecial = [5, 10, 15, 20].includes(levelId);

                const isLeft = i % 2 === 0;

                return (
                  <motion.div 
                    key={levelId}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-center ${isLeft ? 'md:translate-x-[-80px]' : 'md:translate-x-[80px]'}`}
                  >
                    <div className="relative">
                       {/* Level Circle */}
                       <button
                         onClick={() => unlocked && navigate(`/craft/${craftId}/level/${levelId}`)}
                         className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold transition-all border-4 ${
                           completed ? 'bg-green-primary border-green-light text-white shadow-green-primary/30 shadow-xl' :
                           isCurrent ? 'bg-white dark:bg-dark-card border-blue-500 text-blue-500 shadow-blue-500/30 shadow-lg animate-pulse' :
                           'bg-slate-200 dark:bg-white/5 border-transparent text-slate-400 cursor-not-allowed'
                         }`}
                       >
                          {completed ? <Trophy size={32} /> : unlocked ? levelId : <Lock size={24} />}
                       </button>

                       {/* Status Floating Elements */}
                       {completed && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: 'linear' }} className="absolute -top-4 -right-4 text-3xl">👑</motion.div>}
                       {isCurrent && <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-blue-500 animate-bounce"><ArrowDown size={32} /></div>}
                       {isSpecial && <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gold text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">اختبار مراجعة</div>}
                    </div>

                    <div className={`mt-6 text-center space-y-1 ${unlocked ? 'opacity-100' : 'opacity-40'}`}>
                       <h3 className="text-xl font-bold mb-0">المستوى {levelId}</h3>
                       <p className="text-sm">
                          {completed ? 'أتممت هذا التحدي ✅' : isCurrent ? 'أنت هنا الآن 🔵' : 'أكمل المستويات السابقة أولاً 🔒'}
                       </p>
                    </div>
                  </motion.div>
                );
              })}
           </div>
        </div>
      </div>
    </div>
  );
};
