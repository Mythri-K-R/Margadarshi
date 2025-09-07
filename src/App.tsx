import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/components/LoginPage';
import SignupPage from './features/auth/components/SignupPage';
import DashboardPage from './features/dashboard/components/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import QuizPage from './features/quiz/pages/QuizPage';
import AspirationMapPage from './features/aspiration/pages/AspirationMapPage';
import MentorsPage from './features/mentors/pages/MentorsPage';
import EnglishWingPage from './features/englishwing/pages/EnglishWingPage';
import ProfilePage from './features/profile/pages/ProfilePage';
import PublicProfilePage from './features/public-profile/pages/PublicProfilePage';
import PublicLayout from './layout/PublicLayout';

function App() {
  return (
    <Routes>
      {/* --- Public Routes --- */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<PublicLayout />}>
        <Route path="/profile/:studentId" element={<PublicProfilePage />} />
      </Route>

      {/* --- Protected Routes (These will have the Navbar) --- */}
      <Route 
        element={
          <ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/aspiration-map" element={<AspirationMapPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/english-wing" element={<EnglishWingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* --- Protected Routes (These are full-screen pages without the Navbar) --- */}
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />

      {/* --- Fallback Route --- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

