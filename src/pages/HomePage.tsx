import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center py-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">SkillNova</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Master new skills with structured courses, interactive quizzes, and real-world examples. Your journey to expertise starts here.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/create-account" className="btn-primary text-lg px-8 py-4">Get Started Free</Link>
            <Link to="/login" className="btn-outline-glass text-lg px-8 py-4">Login</Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 py-16">
          {[
            { icon: '📚', title: 'Structured Learning', desc: 'Courses with modules, topics, and progressive quizzes.' },
            { icon: '🧠', title: 'Interactive Quizzes', desc: 'Test your knowledge with MCQs after every topic.' },
            { icon: '🎓', title: 'Track Progress', desc: 'Unlock topics as you learn. Earn completion certificates.' },
          ].map((f) => (
            <div key={f.title} className="glass-card text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Categories preview */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Two Learning Paths</h2>
          <p className="text-muted-foreground mb-10">Choose your direction and start mastering skills today.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-display font-semibold mb-2">IT Courses</h3>
              <p className="text-muted-foreground mb-4">Programming, web development, AI, cloud, and more.</p>
              <Link to="/create-account" className="btn-secondary text-sm">Start Learning</Link>
            </div>
            <div className="glass-card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-display font-semibold mb-2">Non-IT Courses</h3>
              <p className="text-muted-foreground mb-4">Business, communication, leadership, and productivity.</p>
              <Link to="/create-account" className="btn-accent text-sm">Start Learning</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
