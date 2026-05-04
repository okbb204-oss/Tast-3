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

export const LevelView: React.FC = () => {
  const { craftId, levelId } = useParams<{ craftId: string; levelId: string }>();
  const navigate = useNavigate();
  const { getLessonRecord } = useProgress();
  const { t } = useLanguage();

  const levelNumber = parseInt(levelId || '1');
  const levelData = curricula[craftId || '']?.find(l => l.id === levelNumber);

  if (!levelData) return <div className="p-20 text-center">المستوى غير موجود</div>;

  const allCompleted = levelData.lessons.every((l: any) => getLessonRecord(craftId!, levelNumber, l.id).completed);

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm opacity-60 mb-8">
        <button onClick={() => navigate('/')} className="hover:text-green-primary">الرئيسية</button>
        <ChevronRight size={14} />
        <button onClick={() => navigate(`/craft/${craftId}`)} className="hover:text-green-primary">التخصص</button>
        <ChevronRight size={14} />
        <span className="font-bold text-green-primary">المستوى {levelId}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-bold mb-0">المستوى {levelId}</h1>
             {allCompleted && <Trophy className="text-gold animate-bounce" size={32} />}
          </div>
          <p className="text-lg opacity-60">أكمل الدروس الثلاثة للانتقال للمستوى التالي</p>
        </div>
        
        {/* Level Progress */}
        <div className="w-full md:max-w-xs space-y-2">
           <div className="flex justify-between text-sm font-bold">
              <span>{t('level.progress')}</span>
              <span>{allCompleted ? '100%' : '66%'}</span>
           </div>
           <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: allCompleted ? '100%' : '66%' }}
                className="h-full green-gradient"
              />
           </div>
        </div>
      </div>

      {allCompleted && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 gold-gradient text-white rounded-3xl shadow-xl flex items-center justify-between"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold mb-0">👑 أحسنت! المستوى مكتمل</h3>
            <p className="text-sm opacity-90">لقد أتقنت مهارات هذا المستوى بنجاح.</p>
          </div>
          <button 
            onClick={() => navigate(`/craft/${craftId}/level/${levelNumber + 1}`)}
            className="px-6 py-3 bg-white text-gold rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
          >
            انتقل للمستوى {levelNumber + 1}
          </button>
        </motion.div>
      )}

      {/* Lesson Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {levelData.lessons.map((lesson: any, index: number) => (
          <LessonCard
            key={lesson.id}
            lesson={{...lesson, levelId: levelNumber}}
            record={getLessonRecord(craftId!, levelNumber, lesson.id)}
            onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lesson.id}`)}
          />
        ))}
      </div>

      {/* Empty State Mock */}
      {levelData.lessons.length === 0 && (
        <div className="text-center py-20 opacity-50">
           <Lock size={64} className="mx-auto mb-4" />
           <p>هذا المستوى لم يتم تفعيله بعد</p>
        </div>
      )}
    </div>
  );
};
