import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/contexts/ProgressContext';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderEntry {
  name: string;
  points: number;
  quizzes: number;
  courses: number;
}

const Leaderboard = () => {
  const { user } = useAuth();
  const { getPoints, getQuizzesPassed, getCompletedCoursesCount } = useProgress();

  // Build leaderboard from stored users + sample data
  const sampleLeaders: LeaderEntry[] = [
    { name: 'Aishu', points: 120, quizzes: 12, courses: 3 },
    { name: 'Rahul', points: 100, quizzes: 10, courses: 2 },
    { name: 'Meera', points: 95, quizzes: 9, courses: 2 },
    { name: 'Priya', points: 80, quizzes: 8, courses: 1 },
    { name: 'Arjun', points: 65, quizzes: 6, courses: 1 },
  ];

  const currentUser: LeaderEntry = {
    name: user?.name || 'You',
    points: getPoints(),
    quizzes: getQuizzesPassed(),
    courses: getCompletedCoursesCount(),
  };

  const allLeaders = [...sampleLeaders];
  const existingIdx = allLeaders.findIndex(l => l.name === currentUser.name);
  if (existingIdx >= 0) {
    allLeaders[existingIdx] = currentUser;
  } else {
    allLeaders.push(currentUser);
  }
  allLeaders.sort((a, b) => b.points - a.points);

  const rankIcons = [
    <Trophy className="w-6 h-6 text-yellow-400" />,
    <Medal className="w-6 h-6 text-gray-300" />,
    <Award className="w-6 h-6 text-amber-600" />,
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto py-12">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-display font-bold gradient-text mb-2">🏆 Leaderboard</h1>
          <p className="text-muted-foreground">Top learners on SkillNova</p>
        </div>

        <div className="space-y-3">
          {allLeaders.map((entry, i) => {
            const isCurrentUser = entry.name === (user?.name || 'You');
            return (
              <div
                key={entry.name}
                className={`glass-card flex items-center gap-4 ${isCurrentUser ? 'border border-primary/40 bg-primary/5' : ''}`}
              >
                <div className="w-10 text-center font-display font-bold text-lg">
                  {i < 3 ? rankIcons[i] : <span className="text-muted-foreground">{i + 1}</span>}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">
                    {entry.name} {isCurrentUser && <span className="text-xs text-primary">(You)</span>}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {entry.quizzes} quizzes · {entry.courses} courses
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-lg">{entry.points}</p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
