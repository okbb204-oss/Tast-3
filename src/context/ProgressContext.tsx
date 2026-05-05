import React, { createContext, useContext, useEffect, useState } from 'react';

export interface LessonRecord {
  completed: boolean;
  score: string;
  date: string;
  timeSpent: string;
  rating: number;
  status: 'locked' | 'current' | 'completed' | 'retry';
}

interface ProgressData {
  currentCraftId: string | null;
  lessonRecords: Record<string, LessonRecord>; // key: craft_${craftId}_level_${levelId}_lesson_${lessonId}
  overallProgress: number;
}

interface ProgressContextType {
  progress: ProgressData;
  completeLesson: (craftId: string, levelId: number, lessonId: string, record: Partial<LessonRecord>) => void;
  setCurrentCraft: (craftId: string) => void;
  getLessonRecord: (craftId: string, levelId: number, lessonId: string) => LessonRecord;
  getProgressForCraft: (craftId: string) => number;
  isLessonLocked: (craftId: string, levelId: number, lessonId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('learner_progress');
    if (saved) return JSON.parse(saved);
    return {
      currentCraftId: null,
      lessonRecords: {},
      overallProgress: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('learner_progress', JSON.stringify(progress));
  }, [progress]);

  const getLessonKey = (craftId: string, levelId: number, lessonId: string) => 
    `craft_${craftId}_level_${levelId}_lesson_${lessonId}`;

  const completeLesson = (craftId: string, levelId: number, lessonId: string, record: Partial<LessonRecord>) => {
    const key = getLessonKey(craftId, levelId, lessonId);
    
    // Determine if fully passed based on score string like "3/3"
    let isFullSuccess = false;
    if (record.score) {
      const [score, total] = record.score.split('/').map(Number);
      isFullSuccess = score === total;
    }

    setProgress(prev => ({
      ...prev,
      lessonRecords: {
        ...prev.lessonRecords,
        [key]: {
          completed: true,
          score: record.score || '0/3',
          date: record.date || new Date().toISOString().split('T')[0],
          timeSpent: record.timeSpent || '0min',
          rating: record.rating || 0,
          status: isFullSuccess ? 'completed' : 'retry'
        } as LessonRecord,
      },
    }));
  };

  const getLessonRecord = (craftId: string, levelId: number, lessonId: string): LessonRecord => {
    const key = getLessonKey(craftId, levelId, lessonId);
    return progress.lessonRecords[key] || {
      completed: false,
      score: '0/3',
      date: '',
      timeSpent: '0min',
      rating: 0,
      status: isLessonLocked(craftId, levelId, lessonId) ? 'locked' : 'current'
    };
  };

  const isLessonLocked = (craftId: string, levelId: number, lessonId: string): boolean => {
    // Sequential logic: A lesson is locked if its predecessor is not COMPLETED
    // Extract lesson index from ID like "1-1" -> index 1 or "1-2" -> index 2
    const parts = lessonId.split('-');
    const lessonIndex = parseInt(parts[parts.length - 1]);
    
    // First lesson of Level 1 is always unlocked
    if (levelId === 1 && lessonIndex === 1) return false;
    
    if (lessonIndex > 1) {
      // Find previous lesson in the SAME level
      // Construct prevLessonId by keeping the prefix if any, or just decrementing index
      const prevLessonId = parts.length > 1 
        ? `${parts.slice(0, -1).join('-')}-${lessonIndex - 1}`
        : (lessonIndex - 1).toString();
        
      const prevKey = getLessonKey(craftId, levelId, prevLessonId);
      return progress.lessonRecords[prevKey]?.status !== 'completed';
    }

    // If it's Lesson 1 of Level > 1, check if the LAST lesson of the PREVIOUS level is done
    if (lessonIndex === 1 && levelId > 1) {
      const prevLevelId = levelId - 1;
      // We assume 3 lessons per level as per the user requirement
      const lastLessonOfPrevLevel = `${prevLevelId}-3`; 
      const prevLevelKey = getLessonKey(craftId, prevLevelId, lastLessonOfPrevLevel);
      
      // Fallback: if "1-3" doesn't exist, try "3"
      if (!progress.lessonRecords[prevLevelKey]) {
        const altPrevKey = getLessonKey(craftId, prevLevelId, '3');
        return progress.lessonRecords[altPrevKey]?.status !== 'completed';
      }
      
      return progress.lessonRecords[prevLevelKey]?.status !== 'completed';
    }

    return false;
  };

  const setCurrentCraft = (craftId: string) => {
    setProgress(prev => ({ ...prev, currentCraftId: craftId }));
  };

  const getProgressForCraft = (craftId: string) => {
    const completed = Object.keys(progress.lessonRecords).filter(k => k.startsWith(`craft_${craftId}`) && progress.lessonRecords[k].completed).length;
    const total = 60; // 20 levels * 3 lessons
    return Math.round((completed / total) * 100);
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      completeLesson, 
      setCurrentCraft, 
      getProgressForCraft, 
      getLessonRecord, 
      isLessonLocked 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
