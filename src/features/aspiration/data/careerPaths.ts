// src/features/aspiration/data/careerPaths.ts
// This file mocks the data that would be stored in a 'careerPaths' collection in Firestore.
import { CareerPath } from '../types';

export const mockCareerPaths: CareerPath[] = [
  // Technical
  { id: 'tech1', title: 'Software Developer', description: 'Build and maintain software applications for web, mobile, and desktop.', category: 'Technical', trainingLink: '#' },
  { id: 'tech2', title: 'Data Scientist', description: 'Analyze complex data to help organizations make better decisions.', category: 'Technical', trainingLink: '#' },
  { id: 'tech3', title: 'Cybersecurity Analyst', description: 'Protect computer networks and systems from security threats.', category: 'Technical', trainingLink: '#' },
  { id: 'tech4', title: 'Cloud Engineer', description: 'Design and manage cloud-based systems for businesses.', category: 'Technical', trainingLink: '#' },

  // Creative
  { id: 'creative1', title: 'Graphic Designer', description: 'Create visual concepts to communicate ideas that inspire and inform.', category: 'Creative', trainingLink: '#' },
  { id: 'creative2', title: 'Content Creator / YouTuber', description: 'Produce entertaining or educational material for the web.', category: 'Creative', trainingLink: '#' },
  { id: 'creative3', title: 'UI/UX Designer', description: 'Design user-friendly and visually appealing digital products.', category: 'Creative', trainingLink: '#' },
  { id: 'creative4', title: 'Animator', description: 'Create motion graphics and visual effects for film, TV, and games.', category: 'Creative', trainingLink: '#' },

  // Social
  { id: 'social1', title: 'Marketing Manager', description: 'Develop marketing strategies to promote a product or service.', category: 'Social', trainingLink: '#' },
  { id: 'social2', title: 'Human Resources Specialist', description: 'Recruit, screen, interview, and place workers in an organization.', category: 'Social', trainingLink: '#' },
  { id: 'social3', title: 'Teacher / Educator', description: 'Plan and deliver instructional activities for students.', category: 'Social', trainingLink: '#' },
  { id: 'social4', title: 'Social Worker', description: 'Help people cope with challenges in their everyday lives.', category: 'Social', trainingLink: '#' },
  
  // Analytical
  { id: 'analytical1', title: 'Financial Analyst', description: 'Provide guidance to businesses and individuals making investment decisions.', category: 'Analytical', trainingLink: '#' },
  { id: 'analytical2', title: 'Business Analyst', description: 'Identify business areas that can be improved to increase efficiency.', category: 'Analytical', trainingLink: '#' },
  { id: 'analytical3', title: 'Research Scientist', description: 'Design and analyze information from laboratory-based experiments.', category: 'Analytical', trainingLink: '#' },
];
