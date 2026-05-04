import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Medal, Star, Hash, UserCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { t } = useLanguage();

  const leaders = [
    { id: 1, name: 'أحمد بن محمد', craft: 'الخياطة', lessons: '45/60', score: '98%', rank: 1 },
    { id: 2, name: 'سارة لعموري', craft: 'إدخال المعلومات', lessons: '42/60', score: '95%', rank: 2 },
    { id: 3, name: 'يوسف بلقاسم', craft: 'نجارة الألومنيوم', lessons: '40/60', score: '93%', rank: 3 },
    { id: 4, name: 'فاطمة الزهراء', craft: 'الخياطة', lessons: '38/60', score: '90%', rank: 4 },
    { id: 5, name: 'مراد دزايري', craft: 'أكساس Access', lessons: '35/60', score: '88%', rank: 5 },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full font-bold text-sm">
            <Trophy size={16} />
            <span>{t('leaderboard.title')}</span>
          </div>
          <h2 className="text-3xl font-bold">نخبة الحرفيين الجزائريين</h2>
          
          <div className="flex gap-2 justify-center mt-6 p-1 bg-secondary/50 dark:bg-white/5 rounded-2xl w-fit mx-auto">
            {['all', 'state', 'center'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-white dark:bg-dark-card shadow-md text-green-primary' : 'opacity-60'
                }`}
              >
                {t(`leaderboard.${tab}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Podium (Top 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-end">
          {/* Silver - Rank 2 */}
          <PodiumCard leader={leaders[1]} color="text-slate-400" />
          {/* Gold - Rank 1 */}
          <PodiumCard leader={leaders[0]} color="text-gold" isCenter />
          {/* Bronze - Rank 3 */}
          <PodiumCard leader={leaders[2]} color="text-amber-600" />
        </div>

        {/* List (Rank 4+) */}
        <div className="space-y-3">
          {leaders.slice(3).map((leader) => (
            <motion.div
              key={leader.id}
              whileHover={{ scale: 1.01 }}
              className="p-4 glass-card rounded-2xl border border-border flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 font-mono font-bold opacity-30">#{leader.rank}</span>
                <UserCircle size={32} className="opacity-70" />
                <div>
                  <div className="font-bold">{leader.name}</div>
                  <div className="text-xs opacity-60">{leader.craft}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center hidden sm:block">
                  <div className="text-[10px] uppercase font-bold opacity-50">الدروس</div>
                  <div className="font-mono">{leader.lessons}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold opacity-50">النتيجة</div>
                  <div className="font-bold text-green-primary">{leader.score}</div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Current User (Mock) */}
          <div className="mt-8 p-4 bg-green-primary text-white rounded-2xl flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-4">
              <span className="w-8 font-mono font-bold">#42</span>
              <UserCircle size={32} />
              <div>
                <div className="font-bold">أنت (متعلم مجهول)</div>
                <div className="text-xs text-white/70">خياطة</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-white/70">متوسط الدرجات</div>
              <div className="font-bold text-xl">--- %</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PodiumCard = ({ leader, color, isCenter }: { leader: any; color: string; isCenter?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`p-6 glass-card rounded-[2.5rem] border border-border text-center space-y-4 relative overflow-hidden ${
      isCenter ? 'md:h-[320px] bg-gold/5 border-gold/30 shadow-2xl z-10' : 'md:h-[280px]'
    }`}
  >
    {isCenter && <div className="absolute inset-0 arabesque-pattern opacity-10" />}
    <div className={`flex justify-center ${color}`}>
      {isCenter ? <Trophy size={64} fill="currentColor" /> : <Medal size={48} fill="currentColor" />}
    </div>
    <div className="relative">
      <div className={`text-2xl font-bold ${isCenter ? 'text-gold' : ''}`}>#{leader.rank}</div>
      <div className="font-bold text-lg truncate">{leader.name}</div>
      <div className="text-sm opacity-60 mb-4">{leader.craft}</div>
      
      <div className="flex justify-around pt-4 border-t border-border/50">
        <div>
          <div className="text-[10px] font-bold opacity-40">الدقة</div>
          <div className="font-bold">{leader.score}</div>
        </div>
        <div>
          <div className="text-[10px] font-bold opacity-40">إكمال</div>
          <div className="font-bold">{leader.lessons}</div>
        </div>
      </div>
    </div>
  </motion.div>
);
