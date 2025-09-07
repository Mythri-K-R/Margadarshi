// src/features/onboarding/components/IntroCarouselStep.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
  onComplete: () => void;
};

const slides = [
  {
    title: "Discover Your Passion",
    description: "Our unique quiz helps you understand your interests and points you toward a future you'll love.",
    image: "🎯"
  },
  {
    title: "Build Your Skill Map",
    description: "Visualize your journey from where you are to where you want to be with a personalized Aspiration Map.",
     image: "🗺️"
  },
  {
    title: "Connect with Mentors",
    description: "Get guidance from industry experts who can help you navigate your career path.",
     image: "🤝"
  }
];

const IntroCarouselStep = ({ onComplete }: Props) => {
  const [index, setIndex] = useState(0);

  const nextStep = () => setIndex(prev => Math.min(prev + 1, slides.length - 1));
  const prevStep = () => setIndex(prev => Math.max(prev - 1, 0));

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-800">How Dream2Skill Works</h2>
      <div className="mt-8 w-full h-64 relative overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col justify-center items-center p-4"
          >
            <div className="text-6xl mb-4">{slides[index].image}</div>
            <h3 className="text-2xl font-semibold">{slides[index].title}</h3>
            <p className="mt-2 text-gray-600 max-w-sm">{slides[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation and Finish Button */}
      <div className="mt-8 flex justify-between items-center w-full max-w-xs">
        <button onClick={prevStep} disabled={index === 0} className="p-2 rounded-full bg-gray-200 disabled:opacity-50">
          <ArrowLeft />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-gray-300'}`} />
          ))}
        </div>
        {index < slides.length - 1 ? (
          <button onClick={nextStep} className="p-2 rounded-full bg-gray-200">
            <ArrowRight />
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full">
            Let's Go!
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default IntroCarouselStep;
