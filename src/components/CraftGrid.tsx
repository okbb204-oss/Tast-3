import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Clock, GraduationCap, BarChart, Star, Users, ExternalLink, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

interface Craft {
  id: string;
  name: string;
  category: 'tech' | 'services' | 'industrial' | 'creative';
  duration: string;
  certificate: string;
  level: string;
  rating: number;
  learners: string;
  icon: string;
}

const crafts: Craft[] = [
  { id: 'data_entry', name: 'عون إدراج المعلومات', category: 'tech', duration: '12 شهراً', certificate: 'شهادة كفاءة مهنية', level: '9 أساسي', rating: 4.8, learners: '12.4k', icon: '⌨️' },
  { id: 'tailoring', name: 'الخياطة', category: 'creative', duration: '18 شهراً', certificate: 'شهادة كفاءة مهنية', level: 'ابتدائي', rating: 4.9, learners: '45k', icon: '🧵' },
  { id: 'aluminum', name: 'نجارة الألومنيوم والمواد البلاستيكية', category: 'industrial', duration: '12 شهراً', certificate: 'شهادة كفاءة مهنية', level: 'متوسط', rating: 4.7, learners: '8.2k', icon: '🏗️' },
  { id: 'hair', name: 'صبغ الشعر وإزالة الصبغة والتجعيد', category: 'services', duration: '12 شهراً', certificate: 'شهادة تأهيل مهني', level: 'ابتدائي', rating: 4.8, learners: '22k', icon: '💇' },
  { id: 'fashion', name: 'إنجاز النماذج في صناعة الألبسة', category: 'creative', duration: '24 شهراً', certificate: 'تقني', level: '4 متوسط', rating: 4.6, learners: '5.1k', icon: '👗' },
  { id: 'ms_access', name: 'أكساس ACCESS', category: 'tech', duration: '6 أشهر', certificate: 'شهادة تكوين مهني', level: 'متوسط', rating: 4.5, learners: '3.8k', icon: '🗄️' },
];

export const CraftGrid: React.FC<{ onSelect: (craft: Craft) => void }> = ({ onSelect }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | Craft['category']>('all');
  const { t, dir } = useLanguage();

  const filteredCrafts = crafts.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'all' || c.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filters = [
    { id: 'all', label: t('crafts.filter.all') },
    { id: 'tech', label: t('crafts.filter.tech') },
    { id: 'services', label: t('crafts.filter.services') },
    { id: 'industrial', label: t('crafts.filter.industrial') },
    { id: 'creative', label: t('crafts.filter.creative') },
  ];

  return (
    <section id="crafts" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t('crafts.header')}</h2>
          <div className="w-20 h-1 green-gradient mx-auto rounded-full" />
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className={`absolute ${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-muted-foreground`} size={20} />
            <input
              type="text"
              placeholder={t('crafts.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white dark:bg-dark-card border border-border rounded-2xl py-4 flex pl-12 pr-12 focus:ring-2 focus:ring-green-primary/20 outline-none transition-all shadow-sm"
              style={{ paddingRight: dir === 'rtl' ? '3rem' : '1rem', paddingLeft: dir === 'rtl' ? '1rem' : '3rem' }}
            />
          </div>

          <div className="flex gap-2 p-1 bg-white dark:bg-dark-card border border-border rounded-2xl overflow-x-auto scroller-hide max-w-full">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeFilter === f.id ? 'green-gradient text-white shadow-md' : 'hover:bg-green-primary/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCrafts.map((craft) => (
              <CraftCard 
                key={craft.id} 
                craft={craft} 
                onClick={() => onSelect(craft)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const CraftCard: React.FC<{ craft: Craft; onClick: () => void }> = ({ craft, onClick }) => {
  const { t } = useLanguage();
  const { getProgressForCraft } = useProgress();
  const progress = getProgressForCraft(craft.id);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: craft.name,
        text: `تخصص ${craft.name} في منصة التكوين المهني الجزائرية`,
        url: window.location.href,
      });
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative bg-white dark:bg-dark-card border border-border rounded-[2.5rem] p-8 cursor-pointer transition-all shadow-sm hover:shadow-2xl hover:border-green-primary/30 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/5 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:-mr-12 group-hover:-mt-12 transition-all" />

      {/* Progress Badge */}
      {progress > 0 && (
        <div className="absolute top-6 left-6 px-3 py-1 bg-green-light/10 text-green-light text-[10px] font-bold rounded-full border border-green-light/20 flex items-center gap-1">
          <Star size={10} fill="currentColor" />
          {progress}% مكتمل
        </div>
      )}

      {/* Icon */}
      <div className="w-16 h-16 bg-off-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner">
        {craft.icon}
      </div>

      <h3 className="text-xl font-bold mb-6 group-hover:text-green-primary transition-colors">{craft.name}</h3>

      <div className="space-y-4 mb-8 text-sm opacity-80">
        <div className="flex items-center gap-3">
          <Clock size={16} className="text-green-primary" />
          <span>مدة التكوين: {craft.duration}</span>
        </div>
        <div className="flex items-center gap-3">
          <GraduationCap size={16} className="text-blue-500" />
          <span>{craft.certificate}</span>
        </div>
        <div className="flex items-center gap-3">
          <BarChart size={16} className="text-gold" />
          <span>المستوى: {craft.level}</span>
        </div>
        <div className="flex items-center gap-6 pt-2 border-t border-border/50">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-gold fill-gold" />
            <span className="font-bold">{craft.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} className="text-muted-foreground" />
            <span>{craft.learners} متعلم</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        <button className="flex-1 px-4 py-3 bg-secondary dark:bg-white/5 hover:bg-green-primary hover:text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all group/btn">
          <ExternalLink size={16} className="group-hover/btn:scale-110" />
          تفاصيل
        </button>
        <button 
          onClick={handleShare}
          className="p-3 bg-secondary dark:bg-white/5 hover:bg-gold hover:text-white rounded-xl transition-all"
          title="مشاركة التخصص"
        >
          <Share2 size={20} />
        </button>
      </div>
    </motion.div>
  );
};
