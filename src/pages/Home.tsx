import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { craftsList } from "@/src/data/craftsData";
import { useGame } from "@/src/contexts/GameContext";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { Award, RefreshCcw, Sparkles, ChevronRight } from "lucide-react";
import PersonalityExperience from "./PersonalityExperience";
import ProgressDashboard from "@/src/components/ProgressDashboard";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export default function Home() {
  const { state, setPersonalityResult } = useGame();
  const { t } = useLanguage();

  const handleRetakePersonality = () => {
    setPersonalityResult(''); // Reset to empty to show the test again
  };

  const bestCraftId = useMemo(() => {
    let topCraft = null;
    let maxScore = -1;

    for (const [craftId, progress] of Object.entries(state.crafts)) {
      const typedProgress = progress as any;
      // Score = (completedLevels * 100)
      const score = (typedProgress.completedLevels.length * 100);
      if (score > maxScore) {
        maxScore = score;
        topCraft = craftId;
      }
    }
    
    // Only recommend if they actually made some progress
    if (maxScore > 0) return topCraft;
    
    // Fallback to personality result
    return state.personalityResult || null;
  }, [state.crafts, state.personalityResult]);

  const recommendedCraft = craftsList.find(c => c.id === bestCraftId);

  // If no personality result, show the experience
  if (!state.personalityResult) {
    return <PersonalityExperience />;
  }

  return (
    <div className="flex flex-col items-center min-h-[75vh] w-full px-6 py-12 relative pb-24 font-sans" dir="rtl">
      <div className="w-full max-w-5xl mx-auto flex justify-end mb-8">
        <button 
          onClick={handleRetakePersonality}
          className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/50 px-4 py-2 rounded-full"
        >
          <RefreshCcw className="w-4 h-4" />
          {t('home.retake_test')}
        </button>
      </div>

      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 font-semibold text-sm">
           <Sparkles className="w-4 h-4" />
           مدعوم بذكاء Gemini التوليدي
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-foreground tracking-tighter mb-4">
          HIRFATI <span className="text-neon-green">AI</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed mt-4">
          {t('home.hero_subtitle')}
        </p>
      </div>

      <ProgressDashboard />

      {recommendedCraft && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="w-full max-w-4xl mx-auto mb-16 mt-12"
        >
          <Card className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
               <Award className="w-64 h-64 text-neon-green -rotate-12" />
            </div>
            <div className="relative z-10 flex-1 space-y-4 text-center md:text-start md:rtl:text-right">
               <div className="inline-block px-3 py-1 bg-neon-green/10 text-neon-green text-[10px] font-black uppercase tracking-widest rounded-full border border-neon-green/20">
                 RECOMMENDED PATH
               </div>
               <h3 className="text-3xl font-black tracking-tight text-foreground">
                 {recommendedCraft.name}
               </h3>
               <p className="text-muted-foreground font-medium text-base max-w-md leading-relaxed">
                 {t('home.recommended_desc')}
               </p>
            </div>
            <Link to={`/craft/${recommendedCraft.id}`}>
               <Button variant="neon" size="lg" className="relative z-10 px-10 h-14 text-md font-black italic rounded-2xl group-hover:scale-105 transition-transform">
                 {t('home.continue_reading')}
               </Button>
            </Link>
          </Card>
        </motion.div>
      )}

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {craftsList.map((craft, i) => (
          <motion.div
            key={craft.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <Link to={`/craft/${craft.id}`} className="group h-full">
              <Card className="p-6 h-full border border-white/5 hover:border-neon-blue/30 group-hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex flex-col gap-4">
                <div className={`p-4 rounded-2xl w-fit ${craft.bg} shadow-lg transition-transform group-hover:rotate-12`}>
                  <craft.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-black text-xl mb-1 tracking-tight text-foreground transition-colors group-hover:text-neon-blue">
                    {craft.name}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-medium">
                    {craft.desc}
                  </p>
                </div>
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-neon-blue font-bold text-xs tracking-tighter uppercase">
                  Explore Path <ChevronRight className="w-3 h-3 translate-y-[1px]" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

