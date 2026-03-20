import { useParams, Link } from 'react-router-dom';
import { itCourses } from '@/data/itCourses';
import { nonItCourses } from '@/data/nonItCourses';
import { useProgress } from '@/contexts/ProgressContext';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, CheckCircle, Circle, Star, Bookmark, BookmarkCheck, Download } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const course = [...itCourses, ...nonItCourses].find(c => c.id === courseId);
  const {
    isTopicUnlocked, progress, isCourseCompleted, getCourseProgress,
    toggleBookmark, isBookmarked, addReview, getReview, getWatchPercent,
  } = useProgress();

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!course) return <div className="min-h-screen pt-24 px-6 text-center"><p className="text-xl">Course not found.</p></div>;

  const allTopicIds = course.modules.flatMap(m => m.topics.map(t => t.id));
  const completed = isCourseCompleted(course.id, allTopicIds);
  const pct = getCourseProgress(course.id, allTopicIds);
  const existingReview = getReview(course.id);

  const handleDownloadCertificate = () => {
    const cert = `
╔══════════════════════════════════════════════╗
║                                              ║
║          CERTIFICATE OF COMPLETION           ║
║                                              ║
║              LearnTube Academy               ║
║                                              ║
║  This certifies that                         ║
║                                              ║
║  ${(user?.name || 'Learner').padEnd(42)}║
║                                              ║
║  has successfully completed the course       ║
║                                              ║
║  ${course.title.padEnd(42)}║
║                                              ║
║  Date: ${new Date().toLocaleDateString().padEnd(37)}║
║                                              ║
╚══════════════════════════════════════════════╝
    `.trim();
    const blob = new Blob([cert], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `LearnTube-Certificate-${course.title.replace(/\s+/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmitReview = () => {
    if (rating > 0) {
      addReview(course.id, rating, reviewText);
      setReviewSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto py-12">
        <div className="glass-card mb-8 animate-fade-in">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-5xl mb-4">{course.icon}</div>
              <h1 className="text-3xl font-display font-bold mb-2">{course.title}</h1>
              <p className="text-muted-foreground mb-2">{course.description}</p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="capitalize">{course.level}</span>
                <span>{course.modules.length} modules</span>
                <span>{allTopicIds.length} videos</span>
              </div>
            </div>
            <button onClick={() => toggleBookmark(course.id)} className="text-muted-foreground hover:text-primary transition-colors">
              {isBookmarked(course.id) ? <BookmarkCheck className="w-6 h-6 text-primary" /> : <Bookmark className="w-6 h-6" />}
            </button>
          </div>
          {progress[course.id] && (
            <div className="mt-4">
              <Progress value={pct} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">{pct}% complete</p>
            </div>
          )}
        </div>

        {completed && (
          <div className="glass-card text-center mb-8 border border-green-500/30">
            <h2 className="text-2xl font-display font-bold mb-2">Course Completed 🎉</h2>
            <p className="text-muted-foreground mb-4">Congratulations! You've watched all videos.</p>
            <div className="glass-card inline-block px-8 py-6 border border-primary/30 mb-4">
              <p className="text-sm text-muted-foreground">Certificate of Completion</p>
              <p className="text-xl font-display font-bold gradient-text mt-1">{course.title}</p>
              <p className="text-sm text-muted-foreground mt-1">Awarded to {user?.name}</p>
              <p className="text-xs text-muted-foreground">Date: {new Date().toLocaleDateString()}</p>
              <p className="text-xs text-muted-foreground">LearnTube Education Platform</p>
            </div>
            <div>
              <button onClick={handleDownloadCertificate} className="btn-primary inline-flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Certificate
              </button>
            </div>
          </div>
        )}

        {course.modules.map((mod, mi) => (
          <div key={mod.id} className="mb-8">
            <h2 className="text-xl font-display font-semibold mb-4">Module {mi + 1}: {mod.title}</h2>
            <div className="space-y-3">
              {mod.topics.map((topic) => {
                const unlocked = isTopicUnlocked(course.id, topic.id, allTopicIds);
                const wp = getWatchPercent(course.id, topic.id);
                const topicCompleted = wp >= 80;
                return (
                  <div key={topic.id} className={`glass-card flex items-center justify-between ${!unlocked ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-3">
                      {topicCompleted ? <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                        : unlocked ? <Circle className="w-5 h-5 text-primary shrink-0" />
                        : <Lock className="w-5 h-5 text-muted-foreground shrink-0" />}
                      <div>
                        <p className="font-medium">{topic.title}</p>
                        {wp > 0 && <p className="text-xs text-muted-foreground">{wp}% watched</p>}
                      </div>
                    </div>
                    {unlocked && (
                      <Link to={`/course/${course.id}/topic/${topic.id}`} className={topicCompleted ? 'btn-outline-glass text-sm px-4 py-2' : 'btn-primary text-sm px-4 py-2'}>
                        {topicCompleted ? 'Rewatch' : wp > 0 ? 'Continue' : 'Watch'}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Review Section */}
        <div className="glass-card mt-8">
          <h2 className="text-xl font-display font-semibold mb-4">⭐ Rate This Course</h2>
          {existingReview || reviewSubmitted ? (
            <div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className={`w-5 h-5 ${s <= (existingReview?.rating || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{existingReview?.text || reviewText}</p>
              <p className="text-xs text-green-400 mt-2">Thanks for your review!</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(s => (
                  <button key={s} onClick={() => setRating(s)}>
                    <Star className={`w-6 h-6 transition-colors ${s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground hover:text-yellow-400'}`} />
                  </button>
                ))}
              </div>
              <textarea
                placeholder="Write your review (optional)..."
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                className="glass-input w-full text-foreground text-sm min-h-[80px]"
              />
              <button onClick={handleSubmitReview} disabled={rating === 0} className="btn-primary text-sm px-6 py-2 disabled:opacity-50">
                Submit Review
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
