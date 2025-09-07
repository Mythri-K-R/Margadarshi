// src/features/quiz/pages/QuizPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { quizQuestions } from '../data/questions';
import { QuizCategory, QuizResults } from '../types';
import { useAuth } from '../../../hooks/useAuth';
import { studentService } from '../../profile/services/studentService';

import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import QuizResult from '../components/QuizResult';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<QuizCategory, number>>({
    Technical: 0,
    Creative: 0,
    Social: 0,
    Analytical: 0,
  });
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAnswer = (category: QuizCategory) => {
    // Update score
    setScores(prev => ({ ...prev, [category]: prev[category] + 1 }));

    // Move to next question or finish
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setIsFinished(true);

    // Determine dominant category
    const finalScores = { ...scores };
    const dominantCategory = Object.keys(finalScores).reduce((a, b) =>
      finalScores[a as QuizCategory] > finalScores[b as QuizCategory] ? a : b
    ) as QuizCategory;

    const results: QuizResults = {
      scores: finalScores,
      dominantCategory: dominantCategory,
      completedAt: new Date(),
    };

    // Save results to Firestore
    if (user) {
      try {
        await studentService.saveQuizResults(user.uid, results);
      } catch (error) {
        console.error("Failed to save quiz results:", error);
      }
    }
    
    // Redirect after a short delay
    setTimeout(() => {
      navigate('/aspiration-map');
    }, 2000);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {isFinished ? (
            <QuizResult key="result" />
          ) : (
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="mb-8">
                <ProgressBar current={currentQuestionIndex} total={quizQuestions.length} />
              </div>
              <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
