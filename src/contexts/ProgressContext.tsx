import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TopicProgress {
  completed: boolean;
  quizPassed: boolean;
  score?: number;
  lastStudied?: number;
}

interface Progress {
  [courseId: string]: {
    [topicId: string]: TopicProgress;
  };
}

interface ProgressContextType {
  progress: Progress;
  bookmarks: string[];
  streak: number;
  reviews: Record<string, { rating: number; text: string }>;
  isTopicUnlocked: (courseId: string, topicId: string, allTopicIds: string[]) => boolean;
  markQuizPassed: (courseId: string, topicId: string, score: number) => void;
  isCourseCompleted: (courseId: string, allTopicIds: string[]) => boolean;
  getScore: (courseId: string, topicId: string) => number | undefined;
  getLastStudied: () => { courseId: string; topicId: string; timestamp: number } | null;
  toggleBookmark: (courseId: string) => void;
  isBookmarked: (courseId: string) => boolean;
  addReview: (courseId: string, rating: number, text: string) => void;
  getReview: (courseId: string) => { rating: number; text: string } | undefined;
  getCompletedCoursesCount: () => number;
  getQuizzesPassed: () => number;
  getPoints: () => number;
  getCourseProgress: (courseId: string, allTopicIds: string[]) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<Progress>({});
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [reviews, setReviews] = useState<Record<string, { rating: number; text: string }>>({});

  useEffect(() => {
    const stored = localStorage.getItem('skillnova_progress');
    if (stored) setProgress(JSON.parse(stored));
    const bm = localStorage.getItem('skillnova_bookmarks');
    if (bm) setBookmarks(JSON.parse(bm));
    const rv = localStorage.getItem('skillnova_reviews');
    if (rv) setReviews(JSON.parse(rv));
    calculateStreak();
  }, []);

  const calculateStreak = () => {
    const days = JSON.parse(localStorage.getItem('skillnova_study_days') || '[]') as string[];
    if (!days.length) { setStreak(0); return; }
    const today = new Date().toISOString().split('T')[0];
    let count = 0;
    let date = new Date();
    for (let i = 0; i < 365; i++) {
      const d = date.toISOString().split('T')[0];
      if (days.includes(d)) { count++; date.setDate(date.getDate() - 1); }
      else if (d === today) { date.setDate(date.getDate() - 1); }
      else break;
    }
    setStreak(count);
  };

  const recordStudyDay = () => {
    const days = JSON.parse(localStorage.getItem('skillnova_study_days') || '[]') as string[];
    const today = new Date().toISOString().split('T')[0];
    if (!days.includes(today)) {
      days.push(today);
      localStorage.setItem('skillnova_study_days', JSON.stringify(days));
      calculateStreak();
    }
  };

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
    recordStudyDay();
    const updated = {
      ...progress,
      [courseId]: {
        ...progress[courseId],
        [topicId]: { completed: true, quizPassed: true, score, lastStudied: Date.now() },
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

  const getLastStudied = (): { courseId: string; topicId: string; timestamp: number } | null => {
    let latest: { courseId: string; topicId: string; timestamp: number } | null = null;
    for (const courseId of Object.keys(progress)) {
      for (const topicId of Object.keys(progress[courseId])) {
        const ts = progress[courseId][topicId].lastStudied;
        if (ts && (!latest || ts > latest.timestamp)) {
          latest = { courseId, topicId, timestamp: ts };
        }
      }
    }
    return latest;
  };

  const toggleBookmark = (courseId: string) => {
    const updated = bookmarks.includes(courseId)
      ? bookmarks.filter(b => b !== courseId)
      : [...bookmarks, courseId];
    setBookmarks(updated);
    localStorage.setItem('skillnova_bookmarks', JSON.stringify(updated));
  };

  const isBookmarked = (courseId: string) => bookmarks.includes(courseId);

  const addReview = (courseId: string, rating: number, text: string) => {
    const updated = { ...reviews, [courseId]: { rating, text } };
    setReviews(updated);
    localStorage.setItem('skillnova_reviews', JSON.stringify(updated));
  };

  const getReview = (courseId: string) => reviews[courseId];

  const getCompletedCoursesCount = () => {
    // This is approximate - we count courses where all tracked topics are passed
    return Object.keys(progress).filter(courseId => {
      const topics = Object.values(progress[courseId]);
      return topics.length > 0 && topics.every(t => t.quizPassed);
    }).length;
  };

  const getQuizzesPassed = () => {
    let count = 0;
    for (const courseId of Object.keys(progress)) {
      for (const topicId of Object.keys(progress[courseId])) {
        if (progress[courseId][topicId].quizPassed) count++;
      }
    }
    return count;
  };

  const getPoints = () => {
    let points = 0;
    for (const courseId of Object.keys(progress)) {
      for (const topicId of Object.keys(progress[courseId])) {
        if (progress[courseId][topicId].quizPassed) {
          points += 10;
          const score = progress[courseId][topicId].score || 0;
          if (score === 100) points += 5;
        }
      }
    }
    return points;
  };

  const getCourseProgress = (courseId: string, allTopicIds: string[]): number => {
    if (!allTopicIds.length) return 0;
    const completed = allTopicIds.filter(tid => progress[courseId]?.[tid]?.quizPassed).length;
    return Math.round((completed / allTopicIds.length) * 100);
  };

  return (
    <ProgressContext.Provider value={{
      progress, bookmarks, streak, reviews,
      isTopicUnlocked, markQuizPassed, isCourseCompleted, getScore,
      getLastStudied, toggleBookmark, isBookmarked, addReview, getReview,
      getCompletedCoursesCount, getQuizzesPassed, getPoints, getCourseProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
};
