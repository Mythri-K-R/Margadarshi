// src/features/auth/components/LoginPage.tsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const link = window.location.href;
    if (authService.isSignInLink(link)) {
      let emailFromStorage = window.localStorage.getItem('emailForSignIn');
      if (!emailFromStorage) {
        emailFromStorage = window.prompt('Please provide your email for confirmation');
      }
      if (emailFromStorage) {
        setLoading(true);
        authService.signInWithLink(emailFromStorage, link)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            navigate('/');
          })
          .catch((err: unknown) => {
            if (err instanceof Error) {
                setError(err.message);
            }
            setLoading(false);
          });
      }
    }
  }, [navigate]);

  const handlePasswordlessLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) {
          setError("Please enter your email address.");
          return;
      }
      setLoading(true);
      setError('');
      try {
          await authService.sendSignInLink(email);
          setLinkSent(true);
      } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          }
      } finally {
          setLoading(false);
      }
  };

  if (linkSent) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-900">Check Your Email</h2>
                <p className="text-gray-600">
                    A sign-in link has been sent to <span className="font-semibold">{email}</span>. Click the link to log in.
                </p>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign In</h2>
        <p className="text-center text-gray-600">Enter your email to receive a sign-in link.</p>
        
        <form onSubmit={handlePasswordlessLogin} className="space-y-4">
             <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md"/>
            </div>
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-2 bg-indigo-600 text-white rounded-md">
                {loading ? 'Sending Link...' : 'Sign in with Email Link'}
            </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

