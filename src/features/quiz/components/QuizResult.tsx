// src/features/quiz/components/QuizResult.tsx
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const QuizResult = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center justify-center"
    >
      <Loader2 className="w-16 h-16 text-indigo-600 animate-spin" />
      <h2 className="mt-6 text-3xl font-bold text-gray-800">Calculating Your Profile...</h2>
      <p className="mt-2 text-gray-600">
        We're analyzing your answers to build your Aspiration Map.
      </p>
    </motion.div>
  );
};

export default QuizResult;
