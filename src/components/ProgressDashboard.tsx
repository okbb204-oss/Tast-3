import React from "react";
import { useGame } from "@/src/contexts/GameContext";
import { craftsList } from "@/src/data/craftsData";
import { motion } from "framer-motion";
import { Award, Target, Zap, CheckCircle } from "lucide-react";

export default function ProgressDashboard() {
  const { state } = useGame();
  
  const totalLevels = craftsList.length * 20;
  let completedLevelsCount = 0;
  let unlockedLevelsCount = 0;

  craftsList.forEach(craft => {
    const prog = state.crafts[craft.id];
    if (prog) {
      completedLevelsCount += prog.completedLevels.length;
      unlockedLevelsCount += prog.unlockedLevels.length;
    }
  });

  const overallPercentage = Math.round((completedLevelsCount / totalLevels) * 100);

  return (
    <div className="w-full max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-4 gap-4" dir="rtl">
      {/* Percentage Card */}
      <CardStripe className="bg-primary/5 border-primary/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase">التقدم الإجمالي</span>
            <div className="text-2xl font-black text-primary">{overallPercentage}%</div>
          </div>
        </div>
      </CardStripe>

      {/* Levels Count */}
      <CardStripe className="bg-emerald-500/5 border-emerald-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase">المستويات المكتملة</span>
            <div className="text-2xl font-black text-emerald-600">{completedLevelsCount}</div>
          </div>
        </div>
      </CardStripe>

      {/* Badges Count */}
      <CardStripe className="bg-amber-500/5 border-amber-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase">الأوسمة المستحقة</span>
            <div className="text-2xl font-black text-amber-600">{Math.floor(completedLevelsCount / 5)}</div>
          </div>
        </div>
      </CardStripe>

      {/* XP or Points */}
      <CardStripe className="bg-blue-500/5 border-blue-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase">نقاط الخبرة</span>
            <div className="text-2xl font-black text-blue-600">{completedLevelsCount * 150}</div>
          </div>
        </div>
      </CardStripe>
    </div>
  );
}

function CardStripe({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-3xl border shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
