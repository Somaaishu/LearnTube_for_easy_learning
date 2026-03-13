import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Welcome, <span className="gradient-text">{user?.name || 'Learner'}</span>! 👋
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SkillNova offers structured courses with interactive quizzes to help you master new skills. Choose your learning path below to get started.
          </p>
        </div>

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
