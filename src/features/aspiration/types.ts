// src/features/aspiration/types.ts
import { QuizCategory } from "../quiz/types";

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  category: QuizCategory;
  trainingLink: string;
}
