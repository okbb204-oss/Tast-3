import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/src/contexts/GameContext";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { craftsList } from "@/src/data/craftsData";
import { Check, Lock, ChevronDown, ChevronUp, Play, Award, Layout, BookOpen, PenTool } from "lucide-react";
import { curriculumData } from "@/src/data/curriculum";

type LevelGroup = 'beginner' | 'intermediate' | 'advanced';

export default function CraftPath() {
  const { craftId } = useParams();
  const navigate = useNavigate();
  const { state, initializeCraft } = useGame();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<LevelGroup>('beginner');
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const craft = craftsList.find(c => c.id === craftId);

  useEffect(() => {
    if (craftId) {
      initializeCraft(craftId);
    }
  }, [craftId, initializeCraft]);

  if (!craft) {
    return <div className="p-8 text-center font-bold">المسار غير موجود</div>;
  }

  const craftProg = state.crafts[craftId || ""] || { unlockedLevels: [1], completedLevels: [], performance: [] };
  
  const getLevelsForGroup = (group: LevelGroup) => {
    if (group === 'beginner') return Array.from({ length: 7 }, (_, i) => i + 1);
    if (group === 'intermediate') return Array.from({ length: 7 }, (_, i) => i + 8);
    return Array.from({ length: 6 }, (_, i) => i + 15);
  };

  const currentLevels = getLevelsForGroup(activeTab);

  const isLevelUnlocked = (levelId: number) => craftProg.unlockedLevels.includes(levelId);
  const isLevelCompleted = (levelId: number) => craftProg.completedLevels.includes(levelId);

  const getGroupStatus = (group: LevelGroup) => {
    const levels = getLevelsForGroup(group);
    const completedCount = levels.filter(l => isLevelCompleted(l)).length;
    return {
      completed: completedCount,
      total: levels.length,
      isUnlocked: group === 'beginner' || isLevelCompleted(getLevelsForGroup(group === 'intermediate' ? 'beginner' : 'intermediate').slice(-1)[0])
    };
  };

  const beginnerStatus = getGroupStatus('beginner');
  const intermediateStatus = getGroupStatus('intermediate');
  const advancedStatus = getGroupStatus('advanced');

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 flex flex-col items-center pb-32" dir="rtl">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full mb-8 text-center"
      >
        <div className={`mx-auto w-20 h-20 rounded-3xl ${craft.bg} flex items-center justify-center text-white mb-4 shadow-xl`}>
          <craft.icon className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black mb-2">{craft.name}</h1>
        <p className="text-muted-foreground w-full max-w-2xl mx-auto">{craft.desc}</p>
      </motion.div>

      {/* Progress Summary */}
      <div className="w-full grid grid-cols-3 gap-4 mb-12">
        {(['beginner', 'intermediate', 'advanced'] as LevelGroup[]).map((group) => {
          const status = getGroupStatus(group);
          const isActive = activeTab === group;
          const label = group === 'beginner' ? 'مبتدئ' : group === 'intermediate' ? 'متوسط' : 'متقدم';
          
          return (
            <button
              key={group}
              onClick={() => setActiveTab(group)}
              className={`relative p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                isActive 
                  ? 'border-primary bg-primary/5 shadow-lg scale-105 z-10' 
                  : 'border-transparent bg-muted/30 hover:bg-muted/50'
              }`}
            >
              <span className={`text-sm font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>{label}</span>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(status.completed / status.total) * 100}%` }}
                  className="h-full bg-primary"
                />
              </div>
              <span className="text-[10px] font-black">{status.completed}/{status.total}</span>
              {status.completed === status.total && status.total > 0 && (
                <Award className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 fill-yellow-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Level List */}
      <div className="w-full space-y-4">
        {currentLevels.map((levelId) => {
          const unlocked = isLevelUnlocked(levelId);
          const completed = isLevelCompleted(levelId);
          const isExpanded = expandedLevel === levelId;
          
          return (
            <div 
              key={levelId}
              className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                unlocked ? 'bg-card border-border' : 'bg-muted/20 border-transparent opacity-60'
              }`}
            >
              <button
                disabled={!unlocked}
                onClick={() => setExpandedLevel(isExpanded ? null : levelId)}
                className="w-full p-6 flex items-center justify-between text-right"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    completed ? 'bg-emerald-500/10 text-emerald-600' : unlocked ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                  }`}>
                    {completed ? <Check className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-black text-lg">المستوى {levelId}</h3>
                    <p className="text-xs text-muted-foreground font-bold">
                      {completed ? 'تم الإكمال بنجاح' : unlocked ? 'جاهز للتعلم' : 'مغلق'}
                    </p>
                  </div>
                </div>
                {unlocked && (
                  <div className="text-muted-foreground">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                )}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="border-t bg-muted/5 px-6 pb-6"
                  >
                    <div className="pt-6 space-y-3">
                      {[1, 2, 3].map((lessonNum) => (
                        <div 
                          key={lessonNum}
                          className="flex items-center justify-between p-4 bg-background rounded-xl border group hover:border-primary transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-black">
                              {lessonNum}
                            </div>
                            <span className="font-bold text-sm">الدرس {lessonNum}: موضوع تعليمي مخصص</span>
                          </div>
                          <button 
                            onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lessonNum}`)}
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                          >
                            <Play className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
