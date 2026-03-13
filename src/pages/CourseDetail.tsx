import { useParams, Link } from 'react-router-dom';
import { itCourses } from '@/data/itCourses';
import { nonItCourses } from '@/data/nonItCourses';
import { useProgress } from '@/contexts/ProgressContext';
import { Lock, CheckCircle, Circle } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = [...itCourses, ...nonItCourses].find(c => c.id === courseId);
  const { isTopicUnlocked, progress, isCourseCompleted } = useProgress();

  if (!course) return <div className="min-h-screen pt-24 px-6 text-center"><p className="text-xl">Course not found.</p></div>;

  const allTopicIds = course.modules.flatMap(m => m.topics.map(t => t.id));
  const completed = isCourseCompleted(course.id, allTopicIds);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto py-12">
        <div className="glass-card mb-8 animate-fade-in">
          <div className="text-5xl mb-4">{course.icon}</div>
          <h1 className="text-3xl font-display font-bold mb-2">{course.title}</h1>
          <p className="text-muted-foreground mb-2">{course.description}</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="capitalize">{course.level}</span>
            <span>{course.modules.length} modules</span>
            <span>{allTopicIds.length} topics</span>
          </div>
        </div>

        {completed && (
          <div className="glass-card text-center mb-8 border border-green-500/30">
            <h2 className="text-2xl font-display font-bold mb-2">Course Completed 🎉</h2>
            <p className="text-muted-foreground mb-4">Congratulations! You've completed all topics and quizzes.</p>
            <div className="glass-card inline-block px-8 py-6 border border-primary/30">
              <p className="text-sm text-muted-foreground">Certificate of Completion</p>
              <p className="text-xl font-display font-bold gradient-text mt-1">{course.title}</p>
              <p className="text-sm text-muted-foreground mt-2">SkillNova Education Platform</p>
            </div>
          </div>
        )}

        {course.modules.map((mod, mi) => (
          <div key={mod.id} className="mb-8">
            <h2 className="text-xl font-display font-semibold mb-4">Module {mi + 1}: {mod.title}</h2>
            <div className="space-y-3">
              {mod.topics.map((topic) => {
                const unlocked = isTopicUnlocked(course.id, topic.id, allTopicIds);
                const passed = progress[course.id]?.[topic.id]?.quizPassed;
                const score = progress[course.id]?.[topic.id]?.score;

                return (
                  <div key={topic.id} className={`glass-card flex items-center justify-between ${!unlocked ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-3">
                      {passed ? (
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      ) : unlocked ? (
                        <Circle className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <Lock className="w-5 h-5 text-muted-foreground shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">{topic.title}</p>
                        {passed && score !== undefined && (
                          <p className="text-xs text-green-400">Passed with {score}%</p>
                        )}
                      </div>
                    </div>
                    {unlocked && (
                      <Link to={`/course/${course.id}/topic/${topic.id}`} className={passed ? 'btn-outline-glass text-sm px-4 py-2' : 'btn-primary text-sm px-4 py-2'}>
                        {passed ? 'Review' : 'Start'}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
