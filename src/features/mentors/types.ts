// src/features/mentors/types.ts
import { QuizCategory } from '../quiz/types';

export interface Mentor {
  id: string;
  name: string;
  expertise: QuizCategory;
  title: string;
  profilePictureUrl: string;
}
