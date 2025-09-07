// src/features/mentors/components/ConfirmationModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { Mentor } from '../types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  mentor: Mentor | null;
};

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-50px", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { y: "50px", opacity: 0 },
};

const ConfirmationModal = ({ isOpen, onClose, mentor }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && mentor && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Request Sent!</h2>
            <p className="mt-2 text-gray-600">
              Your request for a session with <span className="font-semibold">{mentor.name}</span> has been sent. They will be in touch shortly to confirm.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
            >
              Done
            </button>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
