// src/features/englishwing/pages/EnglishWingPage.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Mic } from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';
import { interviewQuestions } from '../data/interviewQuestions';

// Simple useLocalStorage hook
const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const Flashcard = ({ card }: { card: typeof vocabularyData[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="w-full h-64 perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-6 border">
          <h2 className="text-3xl font-bold text-indigo-700">{card.word}</h2>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-indigo-600 shadow-lg rounded-lg flex flex-col justify-center p-6" style={{ transform: 'rotateY(180deg)' }}>
          <p className="text-lg text-white font-semibold">{card.definition}</p>
          <p className="text-sm text-indigo-200 mt-4 italic">"{card.example}"</p>
        </div>
      </motion.div>
    </div>
  );
};

const EnglishWingPage = () => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'interview'>('vocab');
  const [vocabIndex, setVocabIndex] = useLocalStorage('vocabIndex', 0);
  const [interviewIndex, setInterviewIndex] = useLocalStorage('interviewIndex', 0);

  const nextVocab = () => setVocabIndex((prev: number) => (prev + 1) % vocabularyData.length);
  const nextInterview = () => setInterviewIndex((prev: number) => (prev + 1) % interviewQuestions.length);

  return (
    <div className="max-w-4xl mx-auto">
       <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">English Wing</h1>
        </div>
        <p className="text-gray-600">Sharpen your professional English skills for interviews and the workplace.</p>
       </div>

      <div className="flex border-b mb-6">
        <button onClick={() => setActiveTab('vocab')} className={`px-6 py-3 font-semibold ${activeTab === 'vocab' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}>Vocabulary Flashcards</button>
        <button onClick={() => setActiveTab('interview')} className={`px-6 py-3 font-semibold ${activeTab === 'interview' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}>Interview Practice</button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'vocab' && (
          <motion.div key="vocab" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Flashcard card={vocabularyData[vocabIndex]} />
            <button onClick={nextVocab} className="mt-6 w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg">Next Word</button>
          </motion.div>
        )}
        {activeTab === 'interview' && (
          <motion.div key="interview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-start">
                    <Mic className="w-6 h-6 text-indigo-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{interviewQuestions[interviewIndex].question}</h3>
                        <p className="mt-4 text-gray-600">{interviewQuestions[interviewIndex].answerTip}</p>
                    </div>
                </div>
            </div>
            <button onClick={nextInterview} className="mt-6 w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg">Next Question</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnglishWingPage;
