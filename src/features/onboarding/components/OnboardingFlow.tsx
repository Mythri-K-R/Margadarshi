// src/features/onboarding/components/OnboardingFlow.tsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LanguageSelectionStep from './LanguageSelectionStep';
import IntroCarouselStep from './IntroCarouselStep';
import { studentService } from '../../profile/services/studentService';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState<'English' | 'Kannada'>('English');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLanguageSelect = (lang: 'English' | 'Kannada') => {
    setLanguage(lang);
    setTimeout(() => setStep(2), 400);
  };

  const handleOnboardingComplete = async () => {
    // --- DIAGNOSTIC TEST ---
    // This new line will tell us if the user object is available.
    console.log("'Let's Go!' button clicked. The user object is:", user);

    if (!user) {
      console.error("Onboarding failed: User object is not available.");
      return; // Stop the function if user is not defined
    }

    try {
      await studentService.updateStudentProfile(user.uid, {
        preferredLanguage: language,
        onboardingCompleted: true,
      });
      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.error("Failed to update profile during onboarding:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <LanguageSelectionStep
              key="step1"
              selectedLanguage={language}
              onSelectLanguage={handleLanguageSelect}
            />
          )}
          {step === 2 && (
            <IntroCarouselStep
              key="step2"
              onComplete={handleOnboardingComplete}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingFlow;

