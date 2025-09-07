// src/features/mentors/services/mentorService.ts
import { mockMentors } from '../data/mockMentors';
import { Mentor } from '../types';

// This service simulates fetching mentor data from a Firestore collection.
export const mentorService = {
  /**
   * Fetches all mentors.
   * @returns A promise that resolves to an array of mentor profiles.
   */
  getMentors: (): Promise<Mentor[]> => {
    return new Promise((resolve) => {
      // Simulate a network delay to mimic a real API call
      setTimeout(() => {
        resolve(mockMentors);
      }, 700);
    });
  },
};
