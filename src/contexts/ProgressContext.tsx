import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TopicProgress {
  completed: boolean;
  watchPercent: number;
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
  updateWatchProgress: (courseId: string, topicId: string, percent: number) => void;
  isCourseCompleted: (courseId: string, allTopicIds: string[]) => boolean;
  getWatchPercent: (courseId: string, topicId: string) => number;
  getLastStudied: () => { courseId: string; topicId: string; timestamp: number } | null;
  toggleBookmark: (courseId: string) => void;
  isBookmarked: (courseId: string) => boolean;
  addReview: (courseId: string, rating: number, text: string) => void;
  getReview: (courseId: string) => { rating: number; text: string } | undefined;
  getCompletedCoursesCount: () => number;
  getVideosWatched: () => number;
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
    const stored = localStorage.getItem('learntube_progress');
    if (stored) setProgress(JSON.parse(stored));
    const bm = localStorage.getItem('learntube_bookmarks');
    if (bm) setBookmarks(JSON.parse(bm));
    const rv = localStorage.getItem('learntube_reviews');
    if (rv) setReviews(JSON.parse(rv));
    calculateStreak();
  }, []);

  const calculateStreak = () => {
    const days = JSON.parse(localStorage.getItem('learntube_study_days') || '[]') as string[];
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
    const days = JSON.parse(localStorage.getItem('learntube_study_days') || '[]') as string[];
    const today = new Date().toISOString().split('T')[0];
    if (!days.includes(today)) {
      days.push(today);
      localStorage.setItem('learntube_study_days', JSON.stringify(days));
      calculateStreak();
    }
  };

  const save = (p: Progress) => {
    setProgress(p);
    localStorage.setItem('learntube_progress', JSON.stringify(p));
  };

  const isTopicUnlocked = (courseId: string, topicId: string, allTopicIds: string[]): boolean => {
    const idx = allTopicIds.indexOf(topicId);
    if (idx === 0) return true;
    const prevId = allTopicIds[idx - 1];
    const prevProgress = progress[courseId]?.[prevId];
    return !!prevProgress && prevProgress.watchPercent >= 80;
  };

  const updateWatchProgress = (courseId: string, topicId: string, percent: number) => {
    recordStudyDay();
    const current = progress[courseId]?.[topicId];
    const newPercent = Math.max(current?.watchPercent || 0, Math.round(percent));
    const updated = {
      ...progress,
      [courseId]: {
        ...progress[courseId],
        [topicId]: {
          completed: newPercent >= 80,
          watchPercent: newPercent,
          lastStudied: Date.now(),
        },
      },
    };
    save(updated);
  };

  const isCourseCompleted = (courseId: string, allTopicIds: string[]): boolean => {
    return allTopicIds.every((tid) => (progress[courseId]?.[tid]?.watchPercent || 0) >= 80);
  };

  const getWatchPercent = (courseId: string, topicId: string): number => {
    return progress[courseId]?.[topicId]?.watchPercent || 0;
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
    localStorage.setItem('learntube_bookmarks', JSON.stringify(updated));
  };

  const isBookmarked = (courseId: string) => bookmarks.includes(courseId);

  const addReview = (courseId: string, rating: number, text: string) => {
    const updated = { ...reviews, [courseId]: { rating, text } };
    setReviews(updated);
    localStorage.setItem('learntube_reviews', JSON.stringify(updated));
  };

  const getReview = (courseId: string) => reviews[courseId];

  const getCompletedCoursesCount = () => {
    return Object.keys(progress).filter(courseId => {
      const topics = Object.values(progress[courseId]);
      return topics.length > 0 && topics.every(t => t.watchPercent >= 80);
    }).length;
  };

  const getVideosWatched = () => {
    let count = 0;
    for (const courseId of Object.keys(progress)) {
      for (const topicId of Object.keys(progress[courseId])) {
        if (progress[courseId][topicId].watchPercent >= 80) count++;
      }
    }
    return count;
  };

  const getPoints = () => {
    let points = 0;
    for (const courseId of Object.keys(progress)) {
      for (const topicId of Object.keys(progress[courseId])) {
        const wp = progress[courseId][topicId].watchPercent;
        if (wp >= 80) {
          points += 10;
          if (wp === 100) points += 5;
        }
      }
    }
    return points;
  };

  const getCourseProgress = (courseId: string, allTopicIds: string[]): number => {
    if (!allTopicIds.length) return 0;
    const completed = allTopicIds.filter(tid => (progress[courseId]?.[tid]?.watchPercent || 0) >= 80).length;
    return Math.round((completed / allTopicIds.length) * 100);
  };

  return (
    <ProgressContext.Provider value={{
      progress, bookmarks, streak, reviews,
      isTopicUnlocked, updateWatchProgress, isCourseCompleted, getWatchPercent,
      getLastStudied, toggleBookmark, isBookmarked, addReview, getReview,
      getCompletedCoursesCount, getVideosWatched, getPoints, getCourseProgress,
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
