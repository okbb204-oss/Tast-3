import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProgressData {
  currentCraftId: string | null;
  completedLessons: Record<string, string[]>; // craftId -> lessonIds
  overallProgress: number;
}

interface ProgressContextType {
  progress: ProgressData;
  completeLesson: (craftId: string, lessonId: string) => void;
  setCurrentCraft: (craftId: string) => void;
  getProgressForCraft: (craftId: string) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('learner_progress');
    if (saved) return JSON.parse(saved);
    return {
      currentCraftId: null,
      completedLessons: {},
      overallProgress: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('learner_progress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (craftId: string, lessonId: string) => {
    setProgress(prev => {
      const craftLessons = prev.completedLessons[craftId] || [];
      if (craftLessons.includes(lessonId)) return prev;

      return {
        ...prev,
        completedLessons: {
          ...prev.completedLessons,
          [craftId]: [...craftLessons, lessonId],
        },
      };
    });
  };

  const setCurrentCraft = (craftId: string) => {
    setProgress(prev => ({ ...prev, currentCraftId: craftId }));
  };

  const getProgressForCraft = (craftId: string) => {
    const completed = progress.completedLessons[craftId]?.length || 0;
    const total = 60; // Hardcoded total lessons per requirement
    return Math.round((completed / total) * 100);
  };

  return (
    <ProgressContext.Provider value={{ progress, completeLesson, setCurrentCraft, getProgressForCraft }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
