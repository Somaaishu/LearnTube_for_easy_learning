import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('skillnova_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signup = (name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('skillnova_users') || '[]');
    if (users.find((u: any) => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem('skillnova_users', JSON.stringify(users));
    const userData = { name, email };
    localStorage.setItem('skillnova_user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('skillnova_users') || '[]');
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (!found) return false;
    const userData = { name: found.name, email: found.email };
    localStorage.setItem('skillnova_user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('skillnova_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
