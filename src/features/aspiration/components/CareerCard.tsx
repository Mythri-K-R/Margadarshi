// src/features/aspiration/components/CareerCard.tsx
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import { CareerPath } from '../types';

type Props = {
  career: CareerPath;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const CareerCard = ({ career, index }: Props) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <div className="flex items-center mb-3">
        <Briefcase className="w-6 h-6 text-indigo-500 mr-3" />
        <h3 className="text-xl font-bold text-gray-800">{career.title}</h3>
      </div>
      <p className="text-gray-600 flex-grow mb-4">{career.description}</p>
      <a
        href={career.trainingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800"
      >
        Explore Path <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </motion.div>
  );
};

export default CareerCard;
