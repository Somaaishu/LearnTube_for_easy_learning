import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/contexts/ProgressContext';
import { itCourses } from '@/data/itCourses';
import { nonItCourses } from '@/data/nonItCourses';
import { Progress } from '@/components/ui/progress';
import { Flame, Search } from 'lucide-react';
import { useState } from 'react';

const DashboardHome = () => {
  const { user } = useAuth();
  const { streak, getLastStudied, getCourseProgress, progress } = useProgress();
  const [search, setSearch] = useState('');

  const allCourses = [...itCourses, ...nonItCourses];
  const lastStudied = getLastStudied();
  const lastCourse = lastStudied ? allCourses.find(c => c.id === lastStudied.courseId) : null;
  const lastTopic = lastCourse?.modules.flatMap(m => m.topics).find(t => t.id === lastStudied?.topicId);

  const filteredCourses = search.trim()
    ? allCourses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Welcome, <span className="gradient-text">{user?.name || 'Learner'}</span>! 👋
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your learning path below to get started.
          </p>
        </div>

        {/* Streak */}
        {streak > 0 && (
          <div className="glass-card text-center mb-8 border border-accent/20">
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-6 h-6 text-accent" />
              <span className="text-xl font-display font-bold text-accent">🔥 {streak} Day Learning Streak</span>
            </div>
          </div>
        )}

        {/* Continue Learning */}
        {lastCourse && lastTopic && (
          <div className="glass-card mb-8 animate-fade-in">
            <h2 className="text-lg font-display font-semibold mb-3">📖 Continue Learning</h2>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-medium">{lastCourse.icon} {lastCourse.title}</p>
                <p className="text-sm text-muted-foreground">Resume from: {lastTopic.title}</p>
                <Progress
                  value={getCourseProgress(lastCourse.id, lastCourse.modules.flatMap(m => m.topics.map(t => t.id)))}
                  className="h-2 w-48 mt-2"
                />
              </div>
              <Link to={`/course/${lastCourse.id}/topic/${lastTopic.id}`} className="btn-primary text-sm px-6 py-2">
                Continue →
              </Link>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="glass-card mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses... (Python, React, Marketing...)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="glass-input w-full pl-12 text-foreground"
            />
          </div>
          {filteredCourses.length > 0 && (
            <div className="mt-4 space-y-2">
              {filteredCourses.slice(0, 6).map(course => (
                <Link key={course.id} to={`/course/${course.id}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                  <span className="text-2xl">{course.icon}</span>
                  <div>
                    <p className="font-medium">{course.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{course.level} · {course.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Category Cards */}
        <h2 className="text-2xl font-display font-semibold text-center mb-8">Choose Your Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card text-center group" style={{ animationDelay: '0.1s' }}>
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="text-2xl font-display font-bold mb-3">IT Courses</h3>
            <p className="text-muted-foreground mb-6">
              Learn programming, web development, AI, cloud computing, and software engineering with hands-on code examples.
            </p>
            <Link to="/courses/it" className="btn-secondary inline-block">Explore IT Courses</Link>
          </div>
          <div className="glass-card text-center group" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💼</div>
            <h3 className="text-2xl font-display font-bold mb-3">Non-IT Courses</h3>
            <p className="text-muted-foreground mb-6">
              Learn business, communication, leadership, marketing, and productivity skills with real-world examples.
            </p>
            <Link to="/courses/non-it" className="btn-accent inline-block">Explore Non-IT Courses</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
