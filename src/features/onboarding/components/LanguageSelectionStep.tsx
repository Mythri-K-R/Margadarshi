// src/features/onboarding/components/LanguageSelectionStep.tsx
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import React from 'react';

type Props = {
  onSelectLanguage: (language: 'English' | 'Kannada') => void;
  selectedLanguage: string;
};

const LanguageSelectionStep = ({ onSelectLanguage, selectedLanguage }: Props) => {
  const languages = ['English', 'Kannada'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800">Choose Your Language</h2>
      <p className="mt-2 text-gray-600">ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onSelectLanguage(lang as 'English' | 'Kannada')}
            className={`relative p-6 border-2 rounded-xl text-xl font-semibold transition-all duration-300 ${
              selectedLanguage === lang
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-gray-300 bg-white hover:border-indigo-400'
            }`}
          >
            {lang}
            {selectedLanguage === lang && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2"
              >
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </motion.div>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default LanguageSelectionStep;
