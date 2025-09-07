// src/features/mentors/components/MentorCard.tsx
import { motion } from 'framer-motion';
import { Mentor } from '../types';
import { Briefcase } from 'lucide-react';

type Props = {
  mentor: Mentor;
  onBookSession: (mentor: Mentor) => void;
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const expertiseColors = {
  Technical: 'bg-blue-100 text-blue-800',
  Creative: 'bg-pink-100 text-pink-800',
  Social: 'bg-green-100 text-green-800',
  Analytical: 'bg-orange-100 text-orange-800',
};

const MentorCard = ({ mentor, onBookSession }: Props) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-lg shadow-md overflow-hidden text-center flex flex-col"
    >
      <div className="p-6">
        <img
          src={mentor.profilePictureUrl}
          alt={mentor.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100"
        />
        <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
        <p className="text-gray-500 text-sm flex items-center justify-center mt-1">
          <Briefcase className="w-4 h-4 mr-1.5" />
          {mentor.title}
        </p>
        <span
          className={`mt-3 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            expertiseColors[mentor.expertise]
          }`}
        >
          {mentor.expertise}
        </span>
      </div>
      <div className="mt-auto p-4 bg-gray-50">
        <button
          onClick={() => onBookSession(mentor)}
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Request Session
        </button>
      </div>
    </motion.div>
  );
};

export default MentorCard;
