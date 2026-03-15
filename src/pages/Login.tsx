import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const successMessage = (location.state as any)?.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard-home');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
      <div className="glass-card w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-display font-bold gradient-text mb-2 text-center">Welcome Back</h1>
        <p className="text-center text-muted-foreground text-sm mb-6">Login to continue learning</p>
        {successMessage && <p className="text-center text-secondary mb-4 text-sm font-medium">{successMessage}</p>}
        {error && <p className="text-center text-destructive mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="glass-input w-full text-foreground" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="glass-input w-full text-foreground" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
        <p className="text-center text-muted-foreground text-sm mt-4">
          Don't have an account? <Link to="/create-account" className="text-primary hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
