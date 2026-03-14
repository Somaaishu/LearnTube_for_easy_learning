import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold gradient-text">
          SkillNova
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard-home" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/courses/it" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
              <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">Leaderboard</Link>
            </>
          )}
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <User className="w-4 h-4" />
                <span className="hidden sm:block">{user?.name}</span>
              </Link>
              <button onClick={() => { logout(); navigate('/'); }} className="btn-outline-glass text-sm px-4 py-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline-glass text-sm px-4 py-2">Login</Link>
              <Link to="/create-account" className="btn-primary text-sm px-4 py-2">Create Account</Link>
            </>
          )}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-2 pb-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Home</Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard-home" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Dashboard</Link>
              <Link to="/courses/it" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Courses</Link>
              <Link to="/leaderboard" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Leaderboard</Link>
              <Link to="/profile" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Profile</Link>
            </>
          )}
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
