// src/features/profile/services/studentService.ts
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import setDoc instead of updateDoc
import { db } from '../../../lib/firebase';
import { StudentProfile } from '../types';
import { QuizResults } from '../../quiz/types';
import { CareerPath } from '../../aspiration/types';

export const studentService = {
  getStudentProfile: async (uid: string): Promise<StudentProfile | null> => {
    const docRef = doc(db, 'students', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.createdAt?.toDate) data.createdAt = data.createdAt.toDate();
      if (data.quizResults?.completedAt?.toDate) data.quizResults.completedAt = data.quizResults.completedAt.toDate();
      return data as StudentProfile;
    }
    return null;
  },

  /**
   * Creates or updates a student's profile in Firestore.
   * Using setDoc with { merge: true } is more robust than updateDoc.
   */
  updateStudentProfile: async (uid: string, data: Partial<StudentProfile>): Promise<void> => {
    const docRef = doc(db, 'students', uid);
    await setDoc(docRef, data, { merge: true }); // THE FIX: Use setDoc with merge
  },

  /**
   * Saves quiz results to the student's profile.
   */
  saveQuizResults: async (uid: string, results: QuizResults): Promise<void> => {
    const docRef = doc(db, 'students', uid);
    await setDoc(docRef, { quizResults: results }, { merge: true }); // THE FIX: Use setDoc with merge
  },

  /**
   * Saves recommended career paths to the student's profile.
   */
  saveRecommendedCareers: async (uid: string, careers: CareerPath[]): Promise<void> => {
    const docRef = doc(db, 'students', uid);
    await setDoc(docRef, { recommendedCareers: careers }, { merge: true }); // THE FIX: Use setDoc with merge
  },
};

