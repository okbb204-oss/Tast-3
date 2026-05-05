import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, GraduationCap, BarChart, HardHat, Briefcase, School, TrendingUp, Star, Info, Rocket, Download, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { generateReportPDF } from '../lib/pdfGenerator';

interface CraftDetailsProps {
  craft: any;
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export const CraftDetailsModal: React.FC<CraftDetailsProps> = ({ craft, isOpen, onClose, onStart }) => {
  const { t, dir } = useLanguage();
  const { getProgressForCraft } = useProgress();

  if (!craft) return null;

  const handleDownloadPDF = () => {
    generateReportPDF({
      name: 'متعلم جزائري',
      craftName: craft.name,
      level: craft.level,
      lessonsCompleted: Math.round((getProgressForCraft(craft.id) / 100) * 60),
      totalLessons: 60,
      averageScore: '94%',
      startDate: new Date().toLocaleDateString()
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: dir === 'rtl' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: dir === 'rtl' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6 }}
            className={`fixed top-0 bottom-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} w-full max-w-xl bg-background shadow-2xl z-[101] overflow-y-auto arabesque-pattern`}
          >
            <div className="p-12 space-y-12">
              {/* Header */}
              <div className="flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10 py-4">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-[2rem] flex items-center justify-center text-4xl shadow-inner">
                    {craft.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter">{craft.name}</h2>
                    <p className="text-[10px] opacity-40 font-black uppercase tracking-widest">{craft.category} specialty</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-3 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors border border-black/5 dark:border-white/5">
                  <X size={24} />
                </button>
              </div>

              {/* Banner Info */}
              <div className="p-10 luxury-card rounded-[3rem] space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 green-gradient opacity-10 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <Info size={14} /> Official Certification
                  </span>
                  <div className="flex items-center gap-1 text-green-primary">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-black">{craft.rating}</span>
                  </div>
                </div>
                <p className="text-lg font-medium leading-relaxed opacity-80 relative z-10">
                  تخصص معتمد وفق المقاييس الوطنية لوزارة التكوين والتعليم المهنيين. يمنحك هذا المسار الكفاءة اللازمة للاندماج المباشر في سوق العمل أو إطلاق مشروعك الخاص.
                </p>
              </div>

              {/* Grid Info */}
              <div className="grid grid-cols-2 gap-6">
                <InfoItem icon={<Clock size={16} className="text-green-primary" />} label="Training Term" value={craft.duration} />
                <InfoItem icon={<GraduationCap size={16} className="text-green-primary" />} label="Certificate" value={craft.certificate} />
                <InfoItem icon={<BarChart size={16} className="text-green-primary" />} label="Entry Level" value={craft.level} />
                <InfoItem icon={<TrendingUp size={16} className="text-green-primary" />} label="Employment" value="92% Rate" />
              </div>

               {/* Detailed Sections */}
               <div className="space-y-10 py-4">
                <DetailSection 
                  icon={<HardHat size={20} className="text-green-primary" />} 
                  title="Required Assets" 
                  content="المعدات واللوازم الضرورية لمزاولة هذا التخصص تشمل أدوات القياس الدقيقة، الملابس الوقائية، والعدة التقنية المتوافقة مع المعايير المهنية."
                />
                <DetailSection 
                  icon={<Briefcase size={20} className="text-green-primary" />} 
                  title="Career Outlook" 
                  content="فرص عمل واسعة في القطاع العام والخاص، بالإضافة إلى إمكانية الاستفادة من قروض دعم الشباب (ANADE) لإنشاء مؤسسة مصغرة."
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 pt-12">
                <button 
                  onClick={onStart}
                  className="w-full py-7 bg-green-primary text-slate-950 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10">Initiate Training Program</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={handleDownloadPDF}
                    className="py-5 border border-black/5 dark:border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                  >
                    <Download size={14} /> PDF Syllabus
                  </button>
                  <button 
                    onClick={() => {
                       if (navigator.share) {
                        navigator.share({ title: craft.name, url: window.location.href });
                       }
                    }}
                    className="py-5 border border-black/5 dark:border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                  >
                    <Share2 size={14} /> Share Link
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="p-4 bg-secondary/50 dark:bg-white/5 rounded-2xl border border-border/50">
    <div className="flex items-center gap-2 opacity-60 mb-1 text-[10px] font-bold uppercase">
      {icon}
      <span>{label}</span>
    </div>
    <div className="font-bold text-sm">{value}</div>
  </div>
);

const DetailSection = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 font-bold">
      {icon}
      <span>{title}</span>
    </div>
    <p className="text-sm opacity-80 leading-relaxed text-justify px-2 border-r-2 border-border/30">
      {content}
    </p>
  </div>
);
