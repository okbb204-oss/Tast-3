import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGame } from "@/src/contexts/GameContext";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { craftsList } from "@/src/data/craftsData";
import { curriculumData } from "@/src/data/curriculum";
import { X, Play, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function LevelFlow() {
  const { craftId, levelId } = useParams();
  const navigate = useNavigate();
  const { state } = useGame();
  
  const craft = craftsList.find(c => c.id === craftId);
  const parsedLevelId = parseInt(levelId || "1", 10);
  const levelBlocks = curriculumData[craftId || ""] || [];
  const level = levelBlocks.find(l => l.id === parsedLevelId);

  if (!craft || !level) {
    return (
      <div className="p-8 text-center" dir="rtl">
        <h2 className="text-2xl font-bold mb-4">المستوى غير متوفر بعد</h2>
        <Button onClick={() => navigate(`/craft/${craftId}`)}>العودة للمسار</Button>
      </div>
    );
  }

  const progress = state.crafts[craftId || ""];
  const isLocked = !progress?.unlockedLevels.includes(parsedLevelId);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl ${craft.bg} text-white`}>
            <craft.icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black">{craft.name}</h1>
            <p className="text-muted-foreground font-bold">المستوى {parsedLevelId}</p>
          </div>
        </div>
        <button onClick={() => navigate(`/craft/${craftId}`)} className="p-2 border rounded-xl">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {level.lessons.map((lesson, idx) => {
          const lessonKey = `${parsedLevelId}-${idx + 1}`;
          const isCompleted = progress?.completedLessons.includes(lessonKey);
          
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border-2 flex items-center justify-between ${
                isLocked ? 'opacity-50 grayscale' : 'hover:border-primary transition-all bg-card shadow-sm'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl ${
                  isCompleted ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-black">{lesson.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {isCompleted ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> مكتمل
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground">غير مكتمل</span>
                    )}
                  </div>
                </div>
              </div>

              <Button
                disabled={isLocked}
                onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${idx + 1}`)}
                className="rounded-xl h-12 px-6 font-black"
              >
                {isLocked ? <Lock className="w-5 h-5" /> : (isCompleted ? 'مراجعة' : 'ابدأ الآن')}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
