// src/features/public-profile/pages/PublicProfilePage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentService } from '../../profile/services/studentService';
import { StudentProfile } from '../../profile/types';
import { Loader2, User, Map } from 'lucide-react';
import ScoreChart from '../../aspiration/components/ScoreChart';
import CareerCard from '../../aspiration/components/CareerCard';

const PublicProfilePage = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (studentId) {
      const fetchProfile = async () => {
        try {
          const studentProfile = await studentService.getStudentProfile(studentId);
          if (studentProfile) {
            setProfile(studentProfile);
          } else {
            setError('Profile not found.');
          }
        } catch (err) {
          setError('Failed to load profile.');
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    }
  }, [studentId]);

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin h-10 w-10" /></div>;
  if (error) return <div className="text-center p-12 text-red-600">{error}</div>;
  if (!profile) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center">
            <User className="w-8 h-8 text-indigo-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">{profile.fullName}'s Profile</h1>
        </div>
        <p className="mt-2 text-gray-600">This is a public, shareable snapshot of their Aspiration Map.</p>
      </div>

      {profile.quizResults ? (
        <>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Aspiration Map</h2>
          <ScoreChart results={profile.quizResults} />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Recommended Career Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profile.recommendedCareers?.map((career, index) => (
                    <CareerCard key={career.id} career={career} index={index} />
                ))}
            </div>
        </div>
        </>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Map className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No Aspiration Map Yet</h3>
          <p className="mt-1 text-sm text-gray-500">This student has not yet completed their Discovery Quiz.</p>
        </div>
      )}
    </div>
  );
};

export default PublicProfilePage;
