// src/features/aspiration/services/careerService.ts
import { QuizCategory } from '../../quiz/types';
import { CareerPath } from '../types';
import { mockCareerPaths } from '../data/careerPaths';

// In a real app, this service would fetch data from Firestore.
// For now, it simulates that by filtering our mock data.

export const careerService = {
  /**
   * Fetches recommended career paths based on a quiz category.
   * @param category The dominant category from the quiz results.
   * @returns A promise that resolves to an array of career paths.
   */
  getRecommendations: (category: QuizCategory): Promise<CareerPath[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredPaths = mockCareerPaths
          .filter(path => path.category === category)
          .slice(0, 4); // Get up to 4 recommendations
        resolve(filteredPaths);
      }, 500); // Simulate network delay
    });
  },
};
