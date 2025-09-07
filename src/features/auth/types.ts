// src/features/auth/services/types.ts
export interface LoginData {
    email: string;
    password: string;
}

export interface SignupData extends LoginData {
    fullName: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
    schoolName: string;
    district: string;
    state: string;
    preferredLanguage: string;
}

