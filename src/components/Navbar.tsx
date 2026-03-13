import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold gradient-text">
          SkillNova
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          {isAuthenticated && (
            <Link to="/dashboard-home" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
          )}
          <Link to="/courses/it" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:block">Hi, {user?.name}</span>
              <button onClick={() => { logout(); navigate('/'); }} className="btn-outline-glass text-sm px-4 py-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline-glass text-sm px-4 py-2">Login</Link>
              <Link to="/create-account" className="btn-primary text-sm px-4 py-2">Create Account</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
