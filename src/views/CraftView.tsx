import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Lock, Trophy, Star, ArrowDown, Share2, Sparkles, ShieldCheck } from 'lucide-react';
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

  const totalLevels = 20; 
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `مساري في تخصص ${craftId}`,
        text: `أنا بصدد تعلم ${craftId} عبر منصة HIRFATI AI. لقد أكملت ${progress}% من المسار!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط لمشاركته!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-500">
      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group p-1 bg-white dark:bg-dark-card rounded-[3.5rem] shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 green-gradient opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity" />
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
             <div className="w-28 h-28 green-gradient rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(0,255,135,0.3)] shrink-0 border-4 border-white/20">
                {craftId === 'fashion' ? '👗' : craftId === 'tailoring' ? '🧵' : '🛠️'}
             </div>
             <div className="space-y-4 flex-1 text-center md:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-primary/10 text-green-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                   <ShieldCheck size={12} /> منهج معتمد من الوزارة
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-0 tracking-tighter">خريطة تعلم {craftId}</h1>
                <p className="text-muted-foreground font-medium max-w-xl mx-auto md:mx-0">بناء خبرتك المهنية خطوة بخطوة عبر 20 مستوى تفاعلي مدعوم بالذكاء الاصطناعي.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                   <div className="px-5 py-2.5 bg-secondary/80 dark:bg-white/5 backdrop-blur-md rounded-2xl text-sm font-bold flex items-center gap-2 border border-border/50">
                      <Trophy size={18} className="text-gold" /> {progress}% مكتمل
                   </div>
                   <button 
                     onClick={handleShare}
                     className="px-5 py-2.5 bg-green-primary text-white rounded-2xl text-sm font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg"
                   >
                      <Share2 size={18} /> مشاركة التقدم
                   </button>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Roadmap Container */}
        <div className="relative py-24 px-4 overflow-hidden">
           {/* Luxury Background Elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-green-primary/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

           {/* Connecting Line (Underlay) with shadow */}
           <div className="absolute left-1/2 top-0 bottom-0 w-2.5 bg-slate-200 dark:bg-white/5 -translate-x-1/2 rounded-full shadow-inner" />
           
           {/* Animated Progress Line with glow */}
           <motion.div 
             initial={{ height: 0 }}
             animate={{ height: `${progress}%` }}
             className="absolute left-1/2 top-0 w-2.5 green-gradient -translate-x-1/2 z-10 rounded-full shadow-[0_0_20px_rgba(0,255,135,0.5)]"
             transition={{ duration: 2.5, ease: "circOut" }}
           />

           <div className="space-y-40 relative z-20">
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
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className={`flex flex-col items-center ${isLeft ? 'md:translate-x-[-120px]' : 'md:translate-x-[120px]'}`}
                  >
                    <div className="relative">
                       {/* Level Node with floating effect */}
                       <motion.button
                         whileHover={unlocked ? { scale: 1.15, rotate: isLeft ? -5 : 5 } : {}}
                         whileTap={unlocked ? { scale: 0.9 } : {}}
                         onClick={() => unlocked && navigate(`/craft/${craftId}/level/${levelId}`)}
                         className={`w-28 h-28 rounded-[2.5rem] flex items-center justify-center text-3xl font-black transition-all border-4 relative overflow-hidden ${
                           completed ? 'bg-green-primary border-green-light text-white shadow-[0_15px_40px_rgba(0,255,135,0.4)]' :
                           isCurrent ? 'bg-white dark:bg-dark-card border-blue-500 text-blue-500 shadow-[0_15px_40px_rgba(59,130,246,0.3)]' :
                           'bg-slate-100 dark:bg-white/10 border-transparent text-slate-400 cursor-not-allowed opacity-50'
                         }`}
                       >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {completed ? <Trophy size={40} /> : unlocked ? levelId : <Lock size={30} />}
                       </motion.button>

                       {/* High-end decorative icons */}
                       {completed && (
                         <motion.div 
                           animate={{ y: [0, -10, 0] }}
                           transition={{ repeat: Infinity, duration: 3 }}
                           className="absolute -top-6 -right-6 text-4xl filter drop-shadow-lg"
                         >
                           👑
                       </motion.div>
                       )}
                       {isCurrent && (
                         <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-blue-500 flex flex-col items-center">
                            <Sparkles className="animate-pulse mb-1" size={20} />
                            <ArrowDown size={32} className="animate-bounce" />
                         </div>
                       )}
                       {isSpecial && (
                          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gold/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase border border-white/20 shadow-lg whitespace-nowrap">
                             🚀 مرحلة الانتقال
                          </div>
                       )}
                    </div>

                    <div className={`mt-10 text-center space-y-2 transition-all duration-500 ${unlocked ? 'scale-110' : 'opacity-40 grayscale blur-[1px]'}`}>
                       <h3 className="text-2xl font-black mb-0 tracking-tight">المستوى {levelId}</h3>
                       <div className="flex items-center justify-center gap-2">
                          <span className={`h-1.5 w-1.5 rounded-full ${completed ? 'bg-green-primary' : isCurrent ? 'bg-blue-500 animate-ping' : 'bg-slate-400'}`} />
                          <p className="text-sm font-bold uppercase tracking-widest opacity-60">
                             {completed ? 'جدارة مهنية' : isCurrent ? 'المحطة الحالية' : 'محتوى تأميني'}
                          </p>
                       </div>
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
