// src/features/quiz/components/ProgressBar.tsx
import { motion } from 'framer-motion';

type Props = {
  current: number;
  total: number;
};

const ProgressBar = ({ current, total }: Props) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-indigo-600 h-2.5 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default ProgressBar;
