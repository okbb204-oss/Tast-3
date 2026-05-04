import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, CheckCircle2, ArrowRight, RefreshCcw, Clock, BarChart, Star, Check } from 'lucide-react';
import { LessonRecord } from '../context/ProgressContext';

interface LessonCardProps {
  lesson: any;
  record: LessonRecord;
  onClick: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, record, onClick }) => {
  const { status, score, date, completed } = record;

  const isLocked = status === 'locked';
  const isCurrent = status === 'current';
  const isCompleted = status === 'completed';
  const isRetry = status === 'retry';

  const cardVariants = {
    locked: { opacity: 0.5, scale: 0.98 },
    current: { opacity: 1, scale: 1, boxShadow: '0 0 20px rgba(0, 98, 51, 0.2)' },
    completed: { opacity: 1, scale: 1, backgroundColor: 'rgba(0, 98, 51, 0.05)' },
    retry: { opacity: 1, scale: 1, borderColor: '#D21034' }
  };

  const getBadge = () => {
    switch (status) {
      case 'locked':
        return <div className="bg-slate-500 text-white px-2 py-1 rounded text-[10px] font-bold">🔒 أكمل السابق</div>;
      case 'current':
        return <div className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-bold animate-pulse">🔵 الدرس الحالي</div>;
      case 'completed':
        return (
          <div className="bg-[#006233] text-white px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1"><Check size={10} /> مكتمل</div>
            <div className="text-[8px] opacity-80">{score} | 💯</div>
            <div className="text-[8px] opacity-80">{date}</div>
          </div>
        );
      case 'retry':
        return (
          <div className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] font-bold flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1"><RefreshCcw size={10} /> إعادة المحاولة</div>
            <div className="text-[8px] opacity-80">{score} | ❌</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      animate={status}
      whileHover={!isLocked ? { y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' } : {}}
      onClick={!isLocked ? onClick : undefined}
      className={`relative p-6 bg-card border-2 rounded-[20px] transition-all duration-350 flex flex-col gap-4 cursor-pointer group ${
        isLocked ? 'cursor-not-allowed border-border/50' : 
        isCurrent ? 'border-green-primary' : 
        isCompleted ? 'border-green-primary/30' : 
        'border-orange-400 animate-pulse'
      }`}
    >
      {/* State Badge */}
      <div className="absolute top-4 right-4 z-10">
        {getBadge()}
      </div>

      {/* Main Content */}
      <div className="flex items-start gap-4 rtl:flex-row-reverse">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isCompleted ? 'bg-green-primary text-white' : 'bg-secondary text-primary'}`}>
           {lesson.icon || <BarChart size={24} />}
        </div>
        <div className="space-y-1 text-right">
          <h4 className="font-bold text-lg leading-tight">{lesson.title}</h4>
          <p className="text-xs opacity-60 line-clamp-2 leading-relaxed">{lesson.summary?.substring(0, 100)}...</p>
        </div>
      </div>

      <div className="h-px bg-border/50 my-2" />

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[11px] font-bold opacity-70">
        <div className="flex items-center gap-4">
           <span className="flex items-center gap-1"><Clock size={14} className="text-green-primary" /> {lesson.duration || '15 دقيقة'}</span>
           <span className="flex items-center gap-1"><BarChart size={14} className="text-blue-500" /> المستوى {lesson.levelId || 1}</span>
           <span className="flex items-center gap-1"><Star size={14} className="text-gold" fill="currentColor" /> 4.8</span>
        </div>
        {isCurrent && <ArrowRight size={16} className="text-green-primary animate-bounce-x" />}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: isCompleted ? '100%' : isRetry ? '66%' : '0%' }}
          className={`h-full ${isCompleted ? 'bg-green-primary' : 'bg-orange-400'}`}
        />
      </div>

      {/* Success Overlays */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-green-primary/5 rounded-[20px] pointer-events-none flex items-center justify-center"
          >
             <motion.div
               initial={{ scale: 0, rotate: -20 }}
               animate={{ scale: 1, rotate: 0 }}
               transition={{ type: 'spring', bounce: 0.6 }}
               className="w-16 h-16 bg-green-primary text-white rounded-full flex items-center justify-center shadow-2xl"
             >
                <Check size={32} strokeWidth={4} />
             </motion.div>
             
             {/* Ripple effect can be added here with more motion divs */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lock Overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-[20px] pointer-events-none flex items-center justify-center">
          <Lock className="opacity-40" size={32} />
        </div>
      )}
    </motion.div>
  );
};
