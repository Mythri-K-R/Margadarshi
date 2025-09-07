// src/features/auth/services/authService.ts
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut, // Kept for use in the Navbar
} from 'firebase/auth';
import { auth } from '../../../lib/firebase';

// Action code settings for the email link
const actionCodeSettings = {
  // URL you want to redirect back to.
  url: `${window.location.origin}/login`,
  handleCodeInApp: true, // This must be true.
};

export const authService = {
  /**
   * Sends a passwordless sign-in link to the user's email.
   * @param email The user's email address.
   */
  sendSignInLink: async (email: string) => {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    // Save the email locally so we can retrieve it when the user returns.
    window.localStorage.setItem('emailForSignIn', email);
  },

  /**
   * Signs in the user using the link from their email.
   * @param email The user's email address.
   * @param link The full link from the user's email.
   * @returns A promise that resolves with the user credential.
   */
  signInWithLink: (email: string, link: string) => {
    return signInWithEmailLink(auth, email, link);
  },

  /**
   * Checks if the current URL is a sign-in link.
   * @param link The current window's URL.
   * @returns A boolean indicating if it's a sign-in link.
   */
  isSignInLink: (link: string) => {
    return isSignInWithEmailLink(auth, link);
  },
  
  /**
   * Signs the current user out.
   */
  logout: () => {
    return signOut(auth);
  },
};

