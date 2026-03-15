import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import CreateAccount from "@/pages/CreateAccount";
import Login from "@/pages/Login";
import DashboardHome from "@/pages/DashboardHome";
import ITCoursesPage from "@/pages/ITCoursesPage";
import NonITCoursesPage from "@/pages/NonITCoursesPage";
import CourseDetail from "@/pages/CourseDetail";
import TopicLearning from "@/pages/TopicLearning";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard-home" /> : <>{children}</>;
};

const AppRoutes = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<PublicOnlyRoute><CreateAccount /></PublicOnlyRoute>} />
      <Route path="/create-account" element={<PublicOnlyRoute><CreateAccount /></PublicOnlyRoute>} />
      <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
      <Route path="/dashboard-home" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
      <Route path="/courses/it" element={<ProtectedRoute><ITCoursesPage /></ProtectedRoute>} />
      <Route path="/courses/non-it" element={<ProtectedRoute><NonITCoursesPage /></ProtectedRoute>} />
      <Route path="/course/:courseId" element={<ProtectedRoute><CourseDetail /></ProtectedRoute>} />
      <Route path="/course/:courseId/topic/:topicId" element={<ProtectedRoute><TopicLearning /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <TooltipProvider>
            <BrowserRouter>
              <AppRoutes />
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
