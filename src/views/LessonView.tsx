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
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm opacity-60">
        <button onClick={() => navigate('/')} className="hover:text-green-primary">الرئيسية</button>
        <ChevronRight size={14} />
        <button onClick={() => navigate(`/craft/${craftId}`)} className="hover:text-green-primary">التخصص</button>
        <ChevronRight size={14} />
        <button onClick={() => navigate(`/craft/${craftId}/level/${levelId}`)} className="hover:text-green-primary">المستوى {levelId}</button>
        <ChevronRight size={14} />
        <span className="font-bold text-green-primary">{lesson.title}</span>
      </nav>

      {/* Header Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden p-8 md:p-12 green-gradient text-white rounded-[2.5rem] shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl">
                {record.completed ? '✅' : '📖'}
             </div>
             <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">الدرس {lessonId}</span>
                <h1 className="text-3xl md:text-5xl font-bold mb-0">{lesson.title}</h1>
             </div>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-bold opacity-90">
             <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Clock size={16} /> 15 دقيقة</span>
             <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><BookOpen size={16} /> محتوى نظري + الصور</span>
             {record.completed && <span className="flex items-center gap-2 bg-[#00FF87]/20 text-[#00FF87] px-4 py-2 rounded-full border border-[#00FF87]/30">مكتمل بجدارة</span>}
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
           <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                 <div className="w-2 h-8 bg-green-primary rounded-full" />
                 ملخص الدرس
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none bg-secondary/30 dark:bg-white/5 p-8 rounded-3xl border border-border/50 text-justify leading-relaxed whitespace-pre-wrap">
                 {lesson.summary}
              </div>
           </section>

           <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                 <div className="w-2 h-8 bg-blue-500 rounded-full" />
                 التوضيح المرئي
              </h2>
              <div className="relative group overflow-hidden rounded-3xl border-4 border-white dark:border-dark-border shadow-xl aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-center p-12">
                 <div className="space-y-4">
                    <AlertCircle size={48} className="mx-auto opacity-30" />
                    <p className="text-sm opacity-60 font-medium italic">{(lesson as any).illustrationDesc || "توضيح فني للمهارة الجاري تعلمها"}</p>
                 </div>
                 {/* In a real app, this would be an actual image or 3D model */}
              </div>
           </section>
        </div>

        {/* Sidebar Actions */}
        <aside className="space-y-6">
           <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-card border border-border rounded-3xl shadow-sm space-y-6">
                 <h3 className="text-lg font-bold">جاهز للاختبار؟</h3>
                 <p className="text-sm opacity-60">تحتاج للإجابة بشكل صحيح على 3 أسئلة لتجاوز هذا الدرس.</p>
                 
                 <button 
                   onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lessonId}/quiz`)}
                   className="w-full btn-primary py-5 text-xl"
                 >
                    <Play fill="currentColor" size={24} />
                    {record.completed ? 'إعادة الاختبار' : 'بدء الاختبار'}
                 </button>

                 {record.completed && (
                   <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-bold opacity-60">
                      <span>آخر محاولة: {record.date}</span>
                      <span>الدرجة: {record.score}</span>
                   </div>
                 )}
              </div>

              <div className="p-6 bg-gold/5 border border-gold/20 rounded-3xl">
                 <h4 className="font-bold text-gold flex items-center gap-2 mb-2">
                    <AlertCircle size={16} /> نصيحة من الوزارة
                 </h4>
                 <p className="text-xs leading-relaxed opacity-70">ركز جيدا في الصور التوضيحية، فهي تحتوي على 40% من الإجابات في الاختبار النهائي.</p>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
};
