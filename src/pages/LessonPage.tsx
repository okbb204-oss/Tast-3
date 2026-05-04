import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { craftsList } from "@/src/data/craftsData";
import { BookOpen, ArrowLeft, ArrowRight, Play, Info } from "lucide-react";
import { curriculumData } from "@/src/data/curriculum";

export default function LessonPage() {
  const { craftId, levelId, lessonId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const craft = craftsList.find(c => c.id === craftId);
  const lid = parseInt(lessonId || "1");
  const levId = parseInt(levelId || "1");

  // Fallback content if curriculumData is not yet populated
  const lesson = curriculumData[craftId || ""]?.[levId - 1]?.lessons?.[lid - 1] || {
    title: `الدرس ${lid}: عنوان تجريبي`,
    summary: "هذا ملخص تجريبي للدرس. سيتم استبداله بالمحتوى الحقيقي المولد بواسطة الذكاء الاصطناعي قريباً. يتناول هذا الدرس المبادئ الأساسية والمهارات المطلوبة للبدء في هذا المجال العملي.",
    illustrationDesc: "رسم توضيحي يظهر الأدوات الأساسية للمهنة",
    quiz: []
  };

  if (!craft) return <div>Craft not found</div>;

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 pb-32" dir="rtl">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(`/craft/${craftId}`)}
          className="p-2 hover:bg-muted rounded-full transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">
            {craft.name} | المستوى {levelId}
          </span>
          <h2 className="font-bold text-lg">الدرس {lessonId}</h2>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border rounded-3xl overflow-hidden shadow-sm"
      >
        <div className={`h-4 bg-primary/20 w-full`} />
        
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black">{lesson.title}</h1>
          </div>

          {/* Summary Section */}
          <div className="prose prose-slate max-w-none mb-10">
            <div className="flex items-center gap-2 mb-4 text-primary font-black">
              <Info className="w-5 h-5" />
              <span>ملخص الدرس</span>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {lesson.summary}
            </p>
          </div>

          {/* Illustration Placeholder */}
          <div className="w-full aspect-video bg-muted/30 rounded-2xl border-2 border-dashed border-muted flex flex-col items-center justify-center p-8 text-center mb-10">
             <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                <Play className="w-10 h-10 text-muted-foreground opacity-50" />
             </div>
             <p className="text-sm font-bold text-muted-foreground max-w-sm">
               {lesson.illustrationDesc}
             </p>
             <span className="text-[10px] uppercase mt-2 text-muted-foreground/50">Illustration System Active</span>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lessonId}/quiz`)}
              className="flex-1 h-16 bg-primary text-primary-foreground rounded-2xl font-black text-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              <span>ابدأ الاختبار</span>
              <BookOpen className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
