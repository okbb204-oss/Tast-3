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
            <div className="p-8 space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10 py-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 green-gradient rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {craft.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{craft.name}</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Banner Info */}
              <div className="p-6 gold-gradient text-white rounded-3xl space-y-4 shadow-xl">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold flex items-center gap-1">
                    <Info size={16} /> المصدر: وزارة التكوين المهني 🇩🇿
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold">{craft.rating}/5</span>
                  </div>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  هذا التخصص معتمد رسمياً من قبل مصالح وزارة التكوين والتعليم المهنيين بالجزائر، ويهدف لتزويد المتعلم بالمهارات التطبيقية المطلوبة في سوق العمل الوطني.
                </p>
              </div>

              {/* Grid Info */}
              <div className="grid grid-cols-2 gap-4">
                <InfoItem icon={<Clock className="text-green-primary" />} label={t('modal.duration')} value={craft.duration} />
                <InfoItem icon={<GraduationCap className="text-blue-500" />} label={t('modal.certificate')} value={craft.certificate} />
                <InfoItem icon={<BarChart className="text-gold" />} label={t('modal.level')} value={craft.level} />
                <InfoItem icon={<TrendingUp className="text-green-light" />} label="نسبة التوظيف" value="85% - 90%" />
              </div>

              {/* Detailed Sections */}
              <div className="space-y-6">
                <DetailSection 
                  icon={<HardHat className="text-gold" />} 
                  title={t('modal.tools')} 
                  content="الأدوات الأساسية تشمل المعدات التقنية، أجهزة القياس، برمجيات متخصصة (حسب التخصص)، وملابس الوقاية والأمن المهني."
                />
                <DetailSection 
                  icon={<Briefcase className="text-blue-600" />} 
                  title={t('modal.jobs')} 
                  content="يمكن للمتخرج العمل في المؤسسات العمومية والخاصة، أو إنشاء مؤسسة مصغرة خاصة (ANADE)، أو العمل بصفة حرفي حر."
                />
                <DetailSection 
                  icon={<School className="text-green-primary" />} 
                  title="المراكز المتوفرة" 
                  content="متوفر في معظم مراكز التكوين المهني (CFPA) والمعاهد الوطنية المتخصصة (INSFP) عبر 58 ولاية."
                />
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
                <button 
                  onClick={onStart}
                  className="sm:col-span-2 px-8 py-5 green-gradient text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl group"
                >
                  <Rocket size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t('modal.start')}
                </button>
                <button 
                  onClick={handleDownloadPDF}
                  className="px-6 py-4 bg-secondary dark:bg-white/5 border border-border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Download size={20} />
                  {t('modal.download')}
                </button>
                <button className="px-6 py-4 bg-secondary dark:bg-white/5 border border-border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  <Share2 size={20} />
                  {t('modal.share')}
                </button>
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
