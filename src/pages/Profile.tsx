import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/contexts/ProgressContext';
import { itCourses } from '@/data/itCourses';
import { nonItCourses } from '@/data/nonItCourses';
import { Link } from 'react-router-dom';
import { User, BookOpen, Trophy, Bookmark, Flame } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const { user } = useAuth();
  const {
    progress, bookmarks, streak,
    getCompletedCoursesCount, getQuizzesPassed, getPoints, getCourseProgress,
  } = useProgress();

  const allCourses = [...itCourses, ...nonItCourses];
  const enrolledCourses = allCourses.filter(c => progress[c.id]);
  const completedCourses = allCourses.filter(c => {
    const allTopicIds = c.modules.flatMap(m => m.topics.map(t => t.id));
    return allTopicIds.length > 0 && allTopicIds.every(tid => progress[c.id]?.[tid]?.quizPassed);
  });
  const bookmarkedCourses = allCourses.filter(c => bookmarks.includes(c.id));

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto py-12">
        {/* Profile Header */}
        <div className="glass-card text-center mb-8 animate-fade-in">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-1">{user?.name || 'Learner'}</h1>
          <p className="text-muted-foreground">{user?.email}</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Flame className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">{streak} Day Streak</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Courses Enrolled', value: enrolledCourses.length, icon: '📚' },
            { label: 'Courses Completed', value: completedCourses.length, icon: '🎓' },
            { label: 'Quizzes Passed', value: getQuizzesPassed(), icon: '✅' },
            { label: 'Points Earned', value: getPoints(), icon: '⭐' },
          ].map(s => (
            <div key={s.label} className="glass-card text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="text-2xl font-display font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Learning Progress */}
        {enrolledCourses.length > 0 && (
          <div className="glass-card mb-8">
            <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Learning Progress
            </h2>
            <div className="space-y-4">
              {enrolledCourses.map(course => {
                const allTopicIds = course.modules.flatMap(m => m.topics.map(t => t.id));
                const pct = getCourseProgress(course.id, allTopicIds);
                const completedTopics = allTopicIds.filter(tid => progress[course.id]?.[tid]?.quizPassed).length;
                return (
                  <Link key={course.id} to={`/course/${course.id}`} className="block hover:bg-muted/20 rounded-lg p-3 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{course.icon} {course.title}</span>
                      <span className="text-sm text-muted-foreground">{pct}%</span>
                    </div>
                    <Progress value={pct} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">Topics completed: {completedTopics} / {allTopicIds.length}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Certificates */}
        {completedCourses.length > 0 && (
          <div className="glass-card mb-8">
            <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" /> Certificates Earned
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {completedCourses.map(course => (
                <div key={course.id} className="glass-card border border-primary/20 text-center">
                  <p className="text-sm text-muted-foreground">Certificate of Completion</p>
                  <p className="text-lg font-display font-bold gradient-text mt-1">{course.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">Awarded to {user?.name}</p>
                  <p className="text-xs text-muted-foreground">SkillNova Education Platform</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookmarked Courses */}
        {bookmarkedCourses.length > 0 && (
          <div className="glass-card">
            <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-secondary" /> Saved Courses
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {bookmarkedCourses.map(course => (
                <Link key={course.id} to={`/course/${course.id}`} className="glass-card flex items-center gap-3 group">
                  <span className="text-3xl">{course.icon}</span>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{course.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{course.level} · {course.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
