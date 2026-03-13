import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Progress {
  [courseId: string]: {
    [topicId: string]: { completed: boolean; quizPassed: boolean; score?: number };
  };
}

interface ProgressContextType {
  progress: Progress;
  isTopicUnlocked: (courseId: string, topicId: string, allTopicIds: string[]) => boolean;
  markQuizPassed: (courseId: string, topicId: string, score: number) => void;
  isCourseCompleted: (courseId: string, allTopicIds: string[]) => boolean;
  getScore: (courseId: string, topicId: string) => number | undefined;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const stored = localStorage.getItem('skillnova_progress');
    if (stored) setProgress(JSON.parse(stored));
  }, []);

  const save = (p: Progress) => {
    setProgress(p);
    localStorage.setItem('skillnova_progress', JSON.stringify(p));
  };

  const isTopicUnlocked = (courseId: string, topicId: string, allTopicIds: string[]): boolean => {
    const idx = allTopicIds.indexOf(topicId);
    if (idx === 0) return true;
    const prevId = allTopicIds[idx - 1];
    return !!progress[courseId]?.[prevId]?.quizPassed;
  };

  const markQuizPassed = (courseId: string, topicId: string, score: number) => {
    const updated = {
      ...progress,
      [courseId]: {
        ...progress[courseId],
        [topicId]: { completed: true, quizPassed: true, score },
      },
    };
    save(updated);
  };

  const isCourseCompleted = (courseId: string, allTopicIds: string[]): boolean => {
    return allTopicIds.every((tid) => progress[courseId]?.[tid]?.quizPassed);
  };

  const getScore = (courseId: string, topicId: string): number | undefined => {
    return progress[courseId]?.[topicId]?.score;
  };

  return (
    <ProgressContext.Provider value={{ progress, isTopicUnlocked, markQuizPassed, isCourseCompleted, getScore }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
};
