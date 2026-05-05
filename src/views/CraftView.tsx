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
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group p-1 bg-white dark:bg-dark-card rounded-[3.5rem] shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 green-gradient opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity" />
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
             <div className="w-28 h-28 green-gradient rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(0,180,100,0.3)] shrink-0 border-4 border-white/20">
                {craftId === 'fashion' ? '👗' : craftId === 'tailoring' ? '🧵' : '🛠️'}
             </div>
             <div className="space-y-4 flex-1 text-center md:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-primary/10 text-green-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                   <ShieldCheck size={12} /> منهج معتمد من الوزارة
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-0 tracking-tighter">خريطة تعلم {craftId}</h1>
                <p className="text-muted-foreground font-medium max-w-xl mx-auto md:mx-0">بناء خبرتك المهنية عبر 20 مستوى تفاعلي مدعوم بالذكاء الاصطناعي.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                   <div className="px-5 py-2.5 bg-secondary/80 dark:bg-white/5 backdrop-blur-md rounded-2xl text-sm font-bold flex items-center gap-2 border border-border/50">
                      <Trophy size={18} className="text-gold" /> {progress}% مكتمل
                   </div>
                   <button 
                     onClick={handleShare}
                     className="px-5 py-2.5 bg-slate-100 dark:bg-white/5 rounded-2xl text-sm font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                   >
                      <Share2 size={18} /> مشاركة
                   </button>
                </div>
             </div>
          </div>
        </motion.div>

        {/* New Roadmap Section */}
        <section className="py-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-white/5 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {Array.from({ length: totalLevels }).map((_, i) => {
              const levelId = i + 1;
              const completed = isLevelCompleted(levelId);
              const unlocked = isLevelUnlocked(levelId);
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={levelId}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => unlocked && navigate(`/craft/${craftId}/level/${levelId}`)}
                  className={`relative flex items-center justify-center md:justify-between w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} ${unlocked ? 'cursor-pointer' : 'opacity-40 grayscale pointer-events-none'}`}
                >
                  {/* Card container */}
                  <div className={`w-full md:w-[45%] luxury-card rounded-[2.5rem] p-8 flex flex-col items-center md:items-start text-center md:text-right gap-6 transition-all hover:scale-[1.03] hover:shadow-2xl ${completed ? 'border-r-4 border-r-green-primary' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-2xl font-black text-green-primary shadow-inner">
                      {levelId}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">المستوى {levelId}</h3>
                      <p className="text-xs opacity-40 font-bold uppercase tracking-widest mt-2">{completed ? 'تم الإكمال' : unlocked ? 'مفتوح للانطلاق' : 'محتوى مغلق'}</p>
                    </div>
                  </div>

                  {/* Node Connector */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-slate-200 dark:border-white/5 bg-white dark:bg-dark-bg z-10 hidden md:flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${completed ? 'bg-green-primary animate-pulse' : unlocked ? 'bg-blue-500' : 'bg-slate-300'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
