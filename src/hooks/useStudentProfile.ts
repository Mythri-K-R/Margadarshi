// src/hooks/useStudentProfile.ts
import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { studentService } from '../features/profile/services/studentService';
import { StudentProfile } from '../features/profile/types';

export const useStudentProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        setLoading(true);
        try {
          const studentProfile = await studentService.getStudentProfile(user.uid);
          setProfile(studentProfile);
        } catch (error) {
          console.error("Failed to fetch student profile:", error);
          setProfile(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  return { profile, loading };
};
