// src/layout/RootLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4 sm:p-6 lg:p-8">
        <Outlet /> 
      </main>
    </div>
  );
};

export default RootLayout;
