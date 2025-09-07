// src/features/quiz/components/QuestionCard.tsx
import { motion } from 'framer-motion';
import { QuizQuestion, QuizCategory } from '../types';

type Props = {
  question: QuizQuestion;
  onAnswer: (category: QuizCategory) => void;
};

const QuestionCard = ({ question, onAnswer }: Props) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
        {question.question}
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(option.category)}
            className="p-4 w-full text-left bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-indigo-50 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-lg font-medium text-gray-700">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
