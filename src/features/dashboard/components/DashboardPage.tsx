// src/features/dashboard/components/DashboardPage.tsx
import { useAuth } from '../../../hooks/useAuth';
import { useStudentProfile } from '../../../hooks/useStudentProfile';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth();
  const { profile, loading } = useStudentProfile();

  if (loading) {
      return (
        <div className="flex justify-center items-center p-12">
            <Loader2 className="animate-spin h-8 w-8 text-indigo-600" />
        </div>
      );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome, {profile?.fullName || 'Student'}!
      </h1>
      <p className="mt-2 text-gray-600">
        This is your personalized space. We're excited to help you map your journey from dreams to skills.
      </p>
      
      {/* Conditional prompt to take the quiz */}
      {!profile?.quizResults && (
           <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                <h3 className="font-semibold text-indigo-800">Your First Step</h3>
                <p className="text-indigo-700">Take the Discovery Quiz to unlock your personalized Aspiration Map and career recommendations.</p>
                <Link 
                    to="/quiz" 
                    className="mt-3 inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                >
                    Start Quiz
                </Link>
           </div>
      )}

       {/* Display user's email */}
       {user && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-500">Logged in as:</p>
          <p className="font-medium text-gray-800">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

