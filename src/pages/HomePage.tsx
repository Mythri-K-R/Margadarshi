import { Navigate } from 'react-router-dom';
import { useStudentProfile } from '../hooks/useStudentProfile';
import OnboardingFlow from '../features/onboarding/components/OnboardingFlow';

const HomePage = () => {
  const { profile, loading } = useStudentProfile();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium">Preparing your space...</p>
      </div>
    );
  }
  
  // If profile exists and onboarding is completed, go to dashboard
  if (profile?.onboardingCompleted) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, show the onboarding flow
  return <OnboardingFlow />;
};

export default HomePage;

