import { Link } from 'react-router-dom';
import { itCourses } from '@/data/itCourses';
import { useProgress } from '@/contexts/ProgressContext';
import { Bookmark, BookmarkCheck, Search } from 'lucide-react';
import { useState } from 'react';

const ITCoursesPage = () => {
  const { toggleBookmark, isBookmarked, getCourseProgress, progress } = useProgress();
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  const levels = ['beginner', 'intermediate', 'advanced'] as const;
  const levelLabels = { beginner: '🟢 Beginner', intermediate: '🟡 Intermediate', advanced: '🔴 Advanced' };

  const filtered = itCourses.filter(c => {
    const matchesSearch = !search.trim() || c.title.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = levelFilter === 'all' || c.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-display font-bold gradient-text mb-2 text-center">IT Courses</h1>
        <p className="text-muted-foreground text-center mb-8">Master technology skills from beginner to advanced.</p>

        {/* Search & Filters */}
        <div className="glass-card mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search IT courses..." value={search} onChange={e => setSearch(e.target.value)} className="glass-input w-full pl-10 text-foreground text-sm" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setLevelFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${levelFilter === 'all' ? 'btn-primary' : 'btn-outline-glass'}`}>All</button>
            {levels.map(l => (
              <button key={l} onClick={() => setLevelFilter(l)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${levelFilter === l ? 'btn-primary' : 'btn-outline-glass'}`}>{l}</button>
            ))}
          </div>
        </div>

        {levels.map(level => {
          const courses = filtered.filter(c => c.level === level);
          if (!courses.length) return null;
          return (
            <div key={level} className="mb-12">
              <h2 className="text-2xl font-display font-semibold mb-6">{levelLabels[level]}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => {
                  const allTopicIds = course.modules.flatMap(m => m.topics.map(t => t.id));
                  const pct = getCourseProgress(course.id, allTopicIds);
                  return (
                    <div key={course.id} className="glass-card group relative">
                      <button
                        onClick={(e) => { e.preventDefault(); toggleBookmark(course.id); }}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {isBookmarked(course.id) ? <BookmarkCheck className="w-5 h-5 text-primary" /> : <Bookmark className="w-5 h-5" />}
                      </button>
                      <Link to={`/course/${course.id}`}>
                        <div className="text-4xl mb-3">{course.icon}</div>
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                        {progress[course.id] && (
                          <div className="mb-3">
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{pct}% complete</p>
                          </div>
                        )}
                        <span className="text-xs text-primary">{course.modules.length} modules · {allTopicIds.length} topics</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && <p className="text-center text-muted-foreground">No courses found.</p>}
      </div>
    </div>
  );
};

export default ITCoursesPage;
