// src/features/auth/components/SignupPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { SignupData } from '../types';

const SignupPage = () => {
    const [formData, setFormData] = useState<Omit<SignupData, 'age'> & { age: string }>({
        email: '', password: '', fullName: '', age: '',
        gender: 'Prefer not to say', schoolName: '',
        district: '', state: '', preferredLanguage: 'English'
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.age || parseInt(formData.age) <= 0) {
            setError("Please enter a valid age.");
            setLoading(false);
            return;
        }

        try {
            const signupPayload: SignupData = {
                ...formData,
                age: parseInt(formData.age, 10),
            };
            await authService.signUpWithEmail(signupPayload);
            navigate('/');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-900">Create Your Account</h2>
                <form onSubmit={handleSignup} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                        <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                        <input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="password"className="text-sm font-medium">Password</label>
                        <input id="password" name="password" type="password" required minLength={6} value={formData.password} onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md"/>
                    </div>
                    {error && <p className="sm:col-span-2 text-sm text-red-600 text-center">{error}</p>}
                    <button type="submit" disabled={loading} className="sm:col-span-2 w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700">
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <p className="text-sm text-center">
                    Already have an account? <Link to="/login" className="font-medium text-indigo-600">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;

