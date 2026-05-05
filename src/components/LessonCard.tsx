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
  const { status, completed } = record;
  const isLocked = status === 'locked';

  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.02, y: -5 } : {}}
      onClick={!isLocked ? onClick : undefined}
      className={`luxury-card rounded-[2.5rem] p-10 cursor-pointer transition-all border-2 ${
        isLocked ? 'opacity-40 cursor-not-allowed border-transparent grayscale' : 
        completed ? 'border-green-primary/20' : 
        'border-green-primary'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${completed ? 'bg-green-primary text-white' : 'bg-slate-100 dark:bg-white/5'}`}>
          {completed ? <CheckCircle2 size={24} /> : (lesson.icon || <BarChart size={24} />)}
        </div>
        {isLocked && <Lock size={20} className="opacity-40" />}
      </div>

      <h4 className="text-2xl font-black mb-2 tracking-tight uppercase leading-none">{lesson.title}</h4>
      <p className="text-[10px] opacity-40 font-black uppercase tracking-[0.2em] mb-8">{lesson.duration || '15 MIN TRAINING'}</p>

      <div className="pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
         <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Module {lesson.id}</span>
         {!isLocked && <ArrowRight size={20} className="text-green-primary" />}
      </div>
    </motion.div>
  );
};
