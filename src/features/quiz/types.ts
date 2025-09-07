// src/features/quiz/types.ts
export type QuizCategory = 'Technical' | 'Creative' | 'Social' | 'Analytical';

export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    category: QuizCategory;
  }[];
}

export interface QuizResults {
  scores: Record<QuizCategory, number>;
  dominantCategory: QuizCategory;
  completedAt: Date;
}
