// src/features/quiz/data/questions.ts
import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    question: "When faced with a difficult problem, you first...",
    options: [
      { text: "Break it down into smaller, logical steps.", category: 'Analytical' },
      { text: "Brainstorm wild and unconventional ideas.", category: 'Creative' },
      { text: "Discuss it with friends or colleagues.", category: 'Social' },
      { text: "Try to build or tinker with a prototype.", category: 'Technical' },
    ],
  },
  {
    question: "Which of these school subjects do you enjoy most?",
    options: [
      { text: "Mathematics or Physics", category: 'Analytical' },
      { text: "Art, Music, or Literature", category: 'Creative' },
      { text: "History or Social Studies", category: 'Social' },
      { text: "Computer Science or Shop Class", category: 'Technical' },
    ],
  },
  {
    question: "You are planning a group holiday. Your main role is...",
    options: [
      { text: "Creating a detailed itinerary and budget.", category: 'Analytical' },
      { text: "Designing a fun, themed experience for everyone.", category: 'Creative' },
      { text: "Making sure everyone feels included and happy.", category: 'Social' },
      { text: "Figuring out the travel logistics and tech gadgets.", category: 'Technical' },
    ],
  },
    {
    question: "A new gadget is released. You are most interested in...",
    options: [
      { text: "Understanding how its internal components work.", category: 'Technical' },
      { text: "Its sleek design and user experience.", category: 'Creative' },
      { text: "How it will change the way people connect.", category: 'Social' },
      { text: "Comparing its specs with other gadgets on the market.", category: 'Analytical' },
    ],
  },
  {
    question: "Which work environment sounds most appealing?",
    options: [
      { text: "A quiet library or lab for deep thinking.", category: 'Analytical' },
      { text: "A vibrant, open-plan studio full of art.", category: 'Creative' },
      { text: "A busy, collaborative office with lots of meetings.", category: 'Social' },
      { text: "A workshop or maker-space with tools and machines.", category: 'Technical' },
    ],
  },
   {
    question: "How do you prefer to learn new things?",
    options: [
        { text: "By doing - I like to take things apart and reassemble them.", category: 'Technical'},
        { text: "Through stories, visuals, and creative examples.", category: 'Creative'},
        { text: "In study groups or by teaching others.", category: 'Social'},
        { text: "By reading textbooks and analyzing data.", category: 'Analytical'},
    ]
  },
  {
    question: "Your ideal weekend project is...",
    options: [
        { text: "Building a custom PC or coding a small app.", category: 'Technical'},
        { text: "Painting, writing a song, or making a short film.", category: 'Creative'},
        { text: "Volunteering or organizing a community event.", category: 'Social'},
        { text: "Solving puzzles like Sudoku or a complex board game.", category: 'Analytical'},
    ]
  }
];
