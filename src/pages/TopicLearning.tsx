import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { itCourses } from '@/data/itCourses';
import { nonItCourses } from '@/data/nonItCourses';
import { useProgress } from '@/contexts/ProgressContext';

const TopicLearning = () => {
  const { courseId, topicId } = useParams();
  const navigate = useNavigate();
  const { markQuizPassed, progress } = useProgress();
  const allCourses = [...itCourses, ...nonItCourses];
  const course = allCourses.find(c => c.id === courseId);

  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!course) return <div className="min-h-screen pt-24 px-6 text-center">Course not found.</div>;

  const allTopics = course.modules.flatMap(m => m.topics);
  const topicIndex = allTopics.findIndex(t => t.id === topicId);
  const topic = allTopics[topicIndex];

  if (!topic) return <div className="min-h-screen pt-24 px-6 text-center">Topic not found.</div>;

  const quizPassed = progress[course.id]?.[topic.id]?.quizPassed;
  const totalQuestions = topic.quiz.length;
  const correctCount = Object.entries(answers).filter(([i, a]) => topic.quiz[Number(i)].correctAnswer === a).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const passed = scorePercent >= 60;

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    if (passed) {
      markQuizPassed(course.id, topic.id, scorePercent);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const nextTopicId = topicIndex < allTopics.length - 1 ? allTopics[topicIndex + 1].id : null;

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto py-12">
        <Link to={`/course/${courseId}`} className="text-primary hover:underline text-sm mb-6 inline-block">← Back to {course.title}</Link>

        {!showQuiz ? (
          <div className="animate-fade-in">
            <div className="glass-card mb-6">
              <h1 className="text-3xl font-display font-bold mb-4">{topic.title}</h1>
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

            <div className="text-center">
              <button onClick={() => setShowQuiz(true)} className="btn-primary text-lg px-8 py-4">
                {quizPassed ? 'Review Quiz' : 'Take Quiz →'}
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="glass-card mb-6">
              <h2 className="text-2xl font-display font-bold mb-2">📝 Quiz: {topic.title}</h2>
              <p className="text-muted-foreground text-sm">Score at least 60% to unlock the next topic.</p>
            </div>

            {topic.quiz.map((q, qi) => (
              <div key={qi} className="glass-card mb-4">
                <p className="font-semibold mb-3">Q{qi + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const selected = answers[qi] === oi;
                    const isCorrect = q.correctAnswer === oi;
                    let classes = 'glass-input w-full text-left cursor-pointer flex items-center gap-2';
                    if (submitted) {
                      if (isCorrect) classes += ' !border-green-500 bg-green-500/10';
                      else if (selected && !isCorrect) classes += ' !border-red-500 bg-red-500/10';
                    } else if (selected) {
                      classes += ' !border-primary bg-primary/10';
                    }
                    return (
                      <button key={oi} onClick={() => !submitted && setAnswers({ ...answers, [qi]: oi })} className={classes} disabled={submitted}>
                        <span className="font-semibold text-muted-foreground">{String.fromCharCode(65 + oi)}.</span>
                        <span className="text-foreground">{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <p className={`mt-2 text-sm ${answers[qi] === q.correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                    {answers[qi] === q.correctAnswer ? '✓ Correct!' : `✗ Incorrect.`} {q.explanation}
                  </p>
                )}
              </div>
            ))}

            {!submitted ? (
              <div className="text-center">
                <button onClick={handleSubmitQuiz} disabled={Object.keys(answers).length < totalQuestions} className="btn-primary text-lg px-8 py-4 disabled:opacity-50">
                  Submit Quiz
                </button>
              </div>
            ) : (
              <div className="glass-card text-center">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {passed ? '🎉 Congratulations!' : '😔 Not Quite'}
                </h3>
                <p className="text-xl mb-2">Score: <span className={passed ? 'text-green-400' : 'text-red-400'}>{scorePercent}%</span></p>
                <p className="text-muted-foreground mb-4">
                  {passed ? 'You passed! The next topic is now unlocked.' : 'You need at least 60% to pass. Try again!'}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  {!passed && <button onClick={handleRetry} className="btn-accent">Retry Quiz</button>}
                  {passed && nextTopicId && (
                    <button onClick={() => navigate(`/course/${courseId}/topic/${nextTopicId}`)} className="btn-primary">
                      Next Topic →
                    </button>
                  )}
                  {passed && !nextTopicId && (
                    <Link to={`/course/${courseId}`} className="btn-primary">View Course Completion</Link>
                  )}
                  <button onClick={() => setShowQuiz(false)} className="btn-outline-glass">Back to Lesson</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicLearning;
