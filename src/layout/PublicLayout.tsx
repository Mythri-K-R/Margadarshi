// src/layout/PublicLayout.tsx
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
           <h1 className="text-2xl font-bold text-indigo-600">Dream2Skill</h1>
        </div>
      </header>
      <main className="py-8 sm:py-10">
        <Outlet /> 
      </main>
    </div>
  );
};

export default PublicLayout;
