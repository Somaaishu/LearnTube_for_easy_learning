import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (signup(name, email, password)) {
      navigate('/login', { state: { message: 'Account created successfully! Please login.' } });
    } else {
      setError('An account with this email already exists.');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
      <div className="glass-card w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-display font-bold gradient-text mb-2 text-center">Get Started</h1>
        <p className="text-center text-muted-foreground text-sm mb-6">Create your SkillNova account</p>
        {error && <p className="text-center text-destructive mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Name</label>
            <input type="text" required value={name} onChange={e => setName(e.target.value)} className="glass-input w-full text-foreground" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="glass-input w-full text-foreground" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="glass-input w-full text-foreground" placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Confirm Password</label>
            <input type="password" required value={confirm} onChange={e => setConfirm(e.target.value)} className="glass-input w-full text-foreground" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">Create Account</button>
        </form>
        <p className="text-center text-muted-foreground text-sm mt-4">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
