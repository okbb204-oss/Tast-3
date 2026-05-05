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
    <section id="crafts" className="py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Available <span className="text-green-primary">Crafts.</span></h2>
             <p className="opacity-40 max-w-md font-medium">اختر تخصصك المهني وابدأ مسار الاحتراف مع أفضل المناهج التعليمية المدعمة بالذكاء الاصطناعي.</p>
           </div>
           
           <div className="flex gap-4 p-2 bg-slate-100 dark:bg-white/5 rounded-2xl overflow-x-auto scroller-hide">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeFilter === f.id ? 'bg-green-primary text-slate-950 shadow-xl' : 'opacity-40 hover:opacity-100'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative bg-slate-50 dark:bg-white/5 rounded-[3rem] p-10 cursor-pointer transition-all border border-transparent hover:border-green-primary/20 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      <div className="flex items-center justify-between mb-10">
        <div className="w-20 h-20 bg-white dark:bg-white/5 rounded-3xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">
          {craft.icon}
        </div>
        <div className="px-4 py-1.5 bg-green-primary/10 text-green-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-green-primary/10">
          {craft.level}
        </div>
      </div>

      <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-tight">{craft.name}</h3>
      <p className="text-xs opacity-40 font-medium uppercase tracking-[0.2em] mb-10">{craft.certificate}</p>

      <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/5">
        <div className="flex items-center gap-2">
           <Clock size={14} className="text-green-primary" />
           <span className="text-[10px] font-black uppercase tracking-widest">{craft.duration}</span>
        </div>
        <div className="px-6 py-2 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          View Detail
        </div>
      </div>
    </motion.div>
  );
};
