import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { User, Menu, X, Sun, Moon, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isAuthenticated && (
            <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <Link to={isAuthenticated ? "/dashboard-home" : "/"} className="text-2xl font-display font-bold gradient-text">
            LearnTube
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {isAuthenticated && (
            <>
              <Link to="/dashboard-home" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/courses/it" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
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
          {isAuthenticated && (
            <>
              <Link to="/dashboard-home" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Dashboard</Link>
              <Link to="/courses/it" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Courses</Link>
              <Link to="/profile" onClick={() => setMobileOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">Profile</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
