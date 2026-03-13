import { Link } from 'react-router-dom';
import { nonItCourses } from '@/data/nonItCourses';

const NonITCoursesPage = () => {
  const levels = ['beginner', 'intermediate', 'advanced'] as const;
  const levelLabels = { beginner: '🟢 Beginner', intermediate: '🟡 Intermediate', advanced: '🔴 Advanced' };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-display font-bold gradient-text mb-2 text-center">Non-IT Courses</h1>
        <p className="text-muted-foreground text-center mb-12">Build essential business and personal skills.</p>
        {levels.map(level => {
          const courses = nonItCourses.filter(c => c.level === level);
          if (!courses.length) return null;
          return (
            <div key={level} className="mb-12">
              <h2 className="text-2xl font-display font-semibold mb-6">{levelLabels[level]}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                  <Link key={course.id} to={`/course/${course.id}`} className="glass-card group">
                    <div className="text-4xl mb-3">{course.icon}</div>
                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                    <span className="text-xs text-primary">{course.modules.length} modules · {course.modules.reduce((a, m) => a + m.topics.length, 0)} topics</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NonITCoursesPage;
