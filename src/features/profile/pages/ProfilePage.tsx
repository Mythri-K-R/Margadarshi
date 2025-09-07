// src/features/profile/pages/ProfilePage.tsx
import { useState } from 'react';
import { useStudentProfile } from '../../../hooks/useStudentProfile';
import { useAuth } from '../../../hooks/useAuth';
import { Loader2, Share2, Check } from 'lucide-react';

const ProfilePage = () => {
    const { user } = useAuth();
    const { profile, loading } = useStudentProfile();
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        if (!user) return;
        const shareUrl = `${window.location.origin}/profile/${user.uid}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin h-8 w-8" /></div>;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                {profile && (
                    <div className="mt-6 space-y-4">
                        <p><strong>Name:</strong> {profile.fullName}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Language:</strong> {profile.preferredLanguage}</p>
                    </div>
                )}

                <div className="mt-8 border-t pt-6">
                    <h2 className="text-xl font-semibold">Share Your Profile</h2>
                    <p className="text-gray-600 mt-2">Share a public, read-only version of your Aspiration Map with mentors, teachers, or parents.</p>
                    <button 
                        onClick={handleShare}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                    >
                        {copied ? (
                            <>
                                <Check className="w-5 h-5 mr-2" /> Copied!
                            </>
                        ) : (
                            <>
                                <Share2 className="w-5 h-5 mr-2" /> Copy Share Link
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
