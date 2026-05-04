import React, { createContext, useContext, useState, useEffect } from "react";

export type LevelPerformance = {
  levelId: number;
  correct: number;
  total: number;
};

export type CraftProgress = {
  unlockedLevels: number[];
  completedLevels: number[];
  completedLessons: string[]; // Format: "levelId-lessonId"
  performance: LevelPerformance[];
};

export type GameState = {
  personalityResult: string | null;
  crafts: Record<string, CraftProgress>;
};

type GameContextType = {
  state: GameState;
  completeLevel: (craftId: string, levelId: number, performance: LevelPerformance) => void;
  completeLesson: (craftId: string, levelId: number, lessonId: number) => void;
  initializeCraft: (craftId: string) => void;
  setPersonalityResult: (craftId: string) => void;
  resetGame: () => void;
};

const DEFAULT_STATE: GameState = {
  personalityResult: null,
  crafts: {},
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState>(() => {
    const saved = localStorage.getItem("hirfati-duo-progress");
    if (saved) {
      try {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      } catch (e) {
        return DEFAULT_STATE;
      }
    }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem("hirfati-duo-progress", JSON.stringify(state));
  }, [state]);

  const completeLevel = (craftId: string, levelId: number, performance: LevelPerformance) => {
    setState(prev => {
      const craftProg = prev.crafts[craftId] || { unlockedLevels: [1], completedLevels: [], completedLessons: [], performance: [] };
      
      const newCompleted = craftProg.completedLevels.includes(levelId) 
        ? craftProg.completedLevels 
        : [...craftProg.completedLevels, levelId];
        
      const nextLevel = levelId + 1;
      const newUnlocked = craftProg.unlockedLevels.includes(nextLevel) 
        ? craftProg.unlockedLevels 
        : [...craftProg.unlockedLevels, nextLevel];

      const newPerformance = [...craftProg.performance.filter(p => p.levelId !== levelId), performance];

      return {
        ...prev,
        crafts: {
          ...prev.crafts,
          [craftId]: {
            ...craftProg,
            completedLevels: newCompleted,
            unlockedLevels: newUnlocked,
            performance: newPerformance,
          }
        }
      };
    });
  };

  const completeLesson = (craftId: string, levelId: number, lessonId: number) => {
    setState(prev => {
      const craftProg = prev.crafts[craftId] || { unlockedLevels: [1], completedLevels: [], completedLessons: [], performance: [] };
      const lessonKey = `${levelId}-${lessonId}`;
      
      if (craftProg.completedLessons.includes(lessonKey)) return prev;

      const newCompletedLessons = [...craftProg.completedLessons, lessonKey];
      
      // Check if all 3 lessons of the level are done
      const levelLessons = newCompletedLessons.filter(l => l.startsWith(`${levelId}-`));
      
      let nextState = { ...prev };
      let updatedCraft = { ...craftProg, completedLessons: newCompletedLessons };

      if (levelLessons.length === 3) {
        // Level completed!
        if (!updatedCraft.completedLevels.includes(levelId)) {
          updatedCraft.completedLevels.push(levelId);
        }
        const nextLevel = levelId + 1;
        if (nextLevel <= 20 && !updatedCraft.unlockedLevels.includes(nextLevel)) {
          updatedCraft.unlockedLevels.push(nextLevel);
        }
      }

      return {
        ...nextState,
        crafts: {
          ...prev.crafts,
          [craftId]: updatedCraft
        }
      };
    });
  };

  const initializeCraft = (craftId: string) => {
    setState(prev => {
      if (prev.crafts[craftId]) return prev;
      return {
        ...prev,
        crafts: {
          ...prev.crafts,
          [craftId]: { unlockedLevels: [1], completedLevels: [], completedLessons: [], performance: [] }
        }
      };
    });
  };

  const setPersonalityResult = (craftId: string) => {
    setState(prev => ({
      ...prev,
      personalityResult: craftId,
    }));
  };

  const resetGame = () => {
    setState(DEFAULT_STATE);
  };

  return (
    <GameContext.Provider value={{
      state,
      completeLevel,
      completeLesson,
      initializeCraft,
      setPersonalityResult,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};

