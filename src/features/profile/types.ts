// src/features/profile/types.ts
import { QuizResults } from '../quiz/types';
import { CareerPath } from '../aspiration/types'; // Import CareerPath type

export interface StudentProfile {
  uid: string;
  email: string | null;
  fullName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  schoolName: string;
  location: {
    district: string;
    state: string;
  };
  preferredLanguage: string;
  createdAt: Date;
  onboardingCompleted?: boolean;
  quizResults?: QuizResults;
  recommendedCareers?: CareerPath[]; // Add recommended careers
}

