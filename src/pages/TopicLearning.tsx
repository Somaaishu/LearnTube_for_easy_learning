import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { itCourses } from '@/data/itCourses';
import { nonItCourses } from '@/data/nonItCourses';
import { useProgress } from '@/contexts/ProgressContext';
import { Progress } from '@/components/ui/progress';

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

const TopicLearning = () => {
  const { courseId, topicId } = useParams();
  const navigate = useNavigate();
  const { updateWatchProgress, progress } = useProgress();
  const allCourses = [...itCourses, ...nonItCourses];
  const course = allCourses.find(c => c.id === courseId);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [watchPercent, setWatchPercent] = useState(0);

  if (!course) return <div className="min-h-screen pt-24 px-6 text-center">Course not found.</div>;

  const allTopics = course.modules.flatMap(m => m.topics);
  const topicIndex = allTopics.findIndex(t => t.id === topicId);
  const topic = allTopics[topicIndex];

  if (!topic) return <div className="min-h-screen pt-24 px-6 text-center">Topic not found.</div>;

  const videoId = getYouTubeId(topic.videoUrl);
  const savedPercent = progress[course.id]?.[topic.id]?.watchPercent || 0;
  const currentPercent = Math.max(watchPercent, savedPercent);
  const completed = currentPercent >= 80;
  const nextTopicId = topicIndex < allTopics.length - 1 ? allTopics[topicIndex + 1].id : null;

  // Load YouTube IFrame API
  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
  }, []);

  const trackProgress = useCallback(() => {
    if (!playerRef.current) return;
    try {
      const duration = playerRef.current.getDuration?.();
      const currentTime = playerRef.current.getCurrentTime?.();
      if (duration && currentTime) {
        const pct = Math.round((currentTime / duration) * 100);
        setWatchPercent(pct);
        if (courseId && topicId) {
          updateWatchProgress(courseId, topicId, pct);
        }
      }
    } catch {}
  }, [courseId, topicId, updateWatchProgress]);

  useEffect(() => {
    if (!videoId) return;

    const initPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy?.();
      }
      playerRef.current = new (window as any).YT.Player(`yt-player-${topicId}`, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (event: any) => {
            if (event.data === 1) {
              // Playing
              if (intervalRef.current) clearInterval(intervalRef.current);
              intervalRef.current = setInterval(trackProgress, 5000);
            } else {
              if (intervalRef.current) clearInterval(intervalRef.current);
              trackProgress();
            }
          },
        },
      });
    };

    if ((window as any).YT?.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videoId, topicId, trackProgress]);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto py-12">
        <Link to={`/course/${courseId}`} className="text-primary hover:underline text-sm mb-6 inline-block">← Back to {course.title}</Link>

        <div className="animate-fade-in">
          {/* Video Player */}
          <div className="glass-card mb-6">
            <h1 className="text-3xl font-display font-bold mb-4">{topic.title}</h1>
            <div className="aspect-video rounded-lg overflow-hidden bg-black mb-4">
              <div id={`yt-player-${topicId}`} className="w-full h-full" />
            </div>
            <div className="flex items-center gap-4">
              <Progress value={currentPercent} className="h-3 flex-1" />
              <span className={`text-sm font-semibold ${completed ? 'text-green-400' : 'text-muted-foreground'}`}>
                {currentPercent}% watched
              </span>
            </div>
            {completed && (
              <p className="text-green-400 text-sm mt-2">✓ Video completed! Next topic unlocked.</p>
            )}
          </div>

          {/* Explanation */}
          <div className="glass-card mb-6">
            <h2 className="text-xl font-display font-semibold mb-3">📖 Overview</h2>
            <p className="text-foreground leading-relaxed whitespace-pre-line">{topic.explanation}</p>
          </div>

          {topic.examples.length > 0 && (
            <div className="glass-card mb-6">
              <h2 className="text-xl font-display font-semibold mb-3">📌 Examples</h2>
              <ul className="space-y-2">
                {topic.examples.map((ex, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2"><span className="text-primary">•</span> {ex}</li>
                ))}
              </ul>
            </div>
          )}

          {topic.codeExample && (
            <div className="glass-card mb-6">
              <h2 className="text-xl font-display font-semibold mb-3">💻 Code Example</h2>
              <pre className="bg-background/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-foreground">
                <code>{topic.codeExample}</code>
              </pre>
            </div>
          )}

          <div className="glass-card mb-6">
            <h2 className="text-xl font-display font-semibold mb-3">🔑 Key Concepts Learned</h2>
            <ul className="space-y-2">
              {topic.keyConceptsLearned.map((kc, i) => (
                <li key={i} className="flex gap-2 text-muted-foreground"><span className="text-accent">✓</span> {kc}</li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 justify-center flex-wrap">
            {completed && nextTopicId && (
              <button onClick={() => navigate(`/course/${courseId}/topic/${nextTopicId}`)} className="btn-primary text-lg px-8 py-4">
                Next Topic →
              </button>
            )}
            {completed && !nextTopicId && (
              <Link to={`/course/${courseId}`} className="btn-primary text-lg px-8 py-4">View Course Completion</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicLearning;
