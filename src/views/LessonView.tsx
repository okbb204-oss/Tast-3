import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Play, BookOpen, Clock, AlertCircle } from 'lucide-react';
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

export const LessonView: React.FC = () => {
  const { craftId, levelId, lessonId } = useParams<{ craftId: string; levelId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { getLessonRecord, progress } = useProgress();
  const { t } = useLanguage();

  const levelNumber = parseInt(levelId || '1');
  const key = `craft_${craftId}_level_${levelId}`;

  // Resolve level data
  let levelData = curricula[craftId || '']?.find(l => l.id === levelNumber);
  if (!levelData && progress.aiCurricula[key]) {
    levelData = progress.aiCurricula[key];
  }

  const lesson = levelData?.lessons.find((l: any) => l.id.toString() === lessonId?.toString());
  const record = getLessonRecord(craftId!, levelNumber, lessonId!);

  if (!lesson) return (
    <div className="min-h-screen flex items-center justify-center">
       <div className="text-center space-y-4">
          <AlertCircle size={48} className="mx-auto opacity-20" />
          <h2 className="text-2xl font-black">الدرس غير متوفر</h2>
          <button onClick={() => navigate(-1)} className="px-6 py-2 bg-green-primary text-white rounded-xl font-bold">العودة</button>
       </div>
    </div>
  );

  const content = lesson.summary || lesson.content;
  const illDesc = (lesson as any).illustrationDesc || (lesson as any).visualPrompt;

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
      {/* Dynamic HeaderSection */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative p-12 md:p-20 bg-slate-900 text-white rounded-[4rem] overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary opacity-20 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="relative flex flex-col md:flex-row items-center gap-12 text-center md:text-right">
           <div className="w-32 h-32 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 flex items-center justify-center text-6xl shadow-inner">
              {record.completed ? '✅' : '🌟'}
           </div>
           <div className="flex-1 space-y-4">
              <div className="flex items-center justify-center md:justify-end gap-3 text-xs font-black uppercase tracking-[0.3em] opacity-40">
                 Lesson {lessonId} • Level {levelId}
              </div>
              <h1 className="text-4xl md:text-7xl font-black mb-2 tracking-tighter uppercase leading-[0.9]">
                 {lesson.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-[10px] font-black uppercase tracking-widest pt-4">
                 <span className="flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/10"><Clock size={16} /> 15 MIN ESTIMATE</span>
                 <span className="flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/10"><BookOpen size={16} /> ACADEMIC CONTENT</span>
                 {record.completed && <span className="bg-green-primary text-white px-6 py-2 rounded-full shadow-lg">CERTIFIED LEVEL COMPLETED</span>}
              </div>
           </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
           <section className="space-y-6">
              <h2 className="text-3xl font-black flex items-center gap-4 text-right justify-end grayscale opacity-50">
                 المفهوم الأساسي
                 <div className="w-1.5 h-1.5 bg-green-primary rounded-full" />
              </h2>
              <div className="prose prose-xl dark:prose-invert max-w-none luxury-card p-10 md:p-14 rounded-[3rem] text-right leading-relaxed font-medium">
                 {lesson.content || lesson.summary}
              </div>
           </section>

           <section className="space-y-6">
              <h2 className="text-3xl font-black flex items-center gap-4 text-right justify-end grayscale opacity-50">
                 التوضيح التقني
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              </h2>
              <div className="relative group overflow-hidden rounded-[3rem] border-4 border-white dark:border-white/5 shadow-2xl aspect-video bg-slate-100 dark:bg-white/5 flex items-center justify-center text-center p-12">
                 <div className="space-y-4 max-w-sm">
                    <Sparkles size={48} className="mx-auto opacity-10 animate-pulse" />
                    <p className="text-sm opacity-40 font-bold italic">{(lesson as any).illustrationDesc || (lesson as any).visualPrompt || "Technical schematic placeholder"}</p>
                 </div>
              </div>
           </section>
        </div>

        {/* Sidebar Actions */}
        <aside className="space-y-8">
           <div className="sticky top-24 space-y-8">
              <div className="luxury-card p-10 rounded-[3rem] shadow-xl space-y-8 bg-green-primary/5 border-green-primary/20">
                 <h3 className="text-xl font-black text-right">أهم المكتسبات</h3>
                 <ul className="space-y-4">
                    {( (lesson as any).summaryPoints || ["إتقان التقنيات المهنية النوعية", "تطبيق معايير الجودة العالمية", "التمكن من الأدوات التخصصية"] ).map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 text-right justify-end group">
                        <span className="text-sm font-bold opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">{point}</span>
                        <div className="mt-2 w-2 h-2 rounded-full bg-green-primary shrink-0 shadow-[0_0_10px_rgba(0,180,100,0.5)]" />
                      </li>
                    ))}
                 </ul>
                 
                 <div className="pt-8 border-t border-green-primary/10">
                   <button 
                     onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lessonId}/quiz`)}
                     className="w-full green-gradient py-6 rounded-[2rem] text-white font-black text-xl shadow-[0_20px_40px_rgba(0,180,100,0.3)] hover:scale-[1.03] active:scale-95 transition-all"
                   >
                      {record.completed ? 'إعادة التقييم' : 'بدء التقييم'}
                   </button>
                 </div>
              </div>

              <div className="luxury-card p-8 rounded-[2.5rem] bg-slate-100 dark:bg-white/5">
                 <h4 className="font-black text-[10px] uppercase tracking-widest opacity-40 flex items-center gap-2 mb-4 justify-end">
                    أدوات المهنة <Clock size={14} />
                 </h4>
                 <div className="flex flex-wrap gap-2 justify-end">
                    {lesson.tools.map((tool: any, idx: number) => (
                      <span key={idx} className="px-4 py-2 bg-white dark:bg-white/10 rounded-xl text-xs font-black shadow-sm">
                        {typeof tool === 'string' ? tool : tool.name}
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
};
