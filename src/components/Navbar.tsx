// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../features/auth/services/authService';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const navLinks = [
  { name: 'Home', path: '/dashboard' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Aspiration Map', path: '/map' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'English Wing', path: '/english' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/dashboard" className="text-2xl font-bold text-indigo-600">
              Dream2Skill
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
             <span className="text-sm text-gray-500 mr-4 hidden sm:block">{user?.email}</span>
            <Link to="/profile" className="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               <User className="h-6 w-6" />
            </Link>
            <button
              onClick={handleLogout}
              className="ml-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Logout"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
