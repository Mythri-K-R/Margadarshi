// src/features/aspiration/pages/AspirationMapPage.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useStudentProfile } from '../../../hooks/useStudentProfile';
import { careerService } from '../services/careerService';
import { studentService } from '../../profile/services/studentService';
import { CareerPath } from '../types';

import { Map, Loader2, AlertTriangle } from 'lucide-react';
import ScoreChart from '../components/ScoreChart';
import CareerCard from '../components/CareerCard';

const AspirationMapPage = () => {
  const { user } = useAuth();
  const { profile, loading: profileLoading } = useStudentProfile();
  const [recommendations, setRecommendations] = useState<CareerPath[]>([]);
  const [loadingRecs, setLoadingRecs] = useState(true);

  useEffect(() => {
    const fetchAndSaveRecommendations = async () => {
      if (profile && profile.quizResults) {
        // If recommendations are already saved, use them.
        if (profile.recommendedCareers) {
          setRecommendations(profile.recommendedCareers);
          setLoadingRecs(false);
          return;
        }

        // Otherwise, fetch new ones and save them.
        try {
          const fetchedRecs = await careerService.getRecommendations(profile.quizResults.dominantCategory);
          setRecommendations(fetchedRecs);
          if (user) {
            await studentService.saveRecommendedCareers(user.uid, fetchedRecs);
          }
        } catch (error) {
          console.error("Failed to fetch recommendations:", error);
        } finally {
          setLoadingRecs(false);
        }
      } else if (!profileLoading) {
        setLoadingRecs(false);
      }
    };

    fetchAndSaveRecommendations();
  }, [profile, profileLoading, user]);

  if (profileLoading) {
    return <div className="flex justify-center items-center p-8"><Loader2 className="animate-spin" /></div>;
  }

  const quizResults = profile?.quizResults;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <Map className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Your Aspiration Map</h1>
        </div>
        
        {!quizResults ? (
          <div className="text-center py-10">
            <AlertTriangle className="w-12 h-12 mx-auto text-amber-500" />
            <p className="mt-4 text-lg text-gray-600">Complete the Discovery Quiz to build your map!</p>
          </div>
        ) : (
          <ScoreChart results={quizResults} />
        )}
      </div>

      {quizResults && (
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended Career Paths</h2>
          <p className="text-gray-600 mb-6">Based on your dominant interest in <span className="font-semibold text-indigo-700">{quizResults.dominantCategory}</span>, here are a few paths to explore.</p>
          
          {loadingRecs ? (
            <div className="flex justify-center items-center p-8"><Loader2 className="animate-spin" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((career, index) => (
                <CareerCard key={career.id} career={career} index={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AspirationMapPage;

