// src/features/mentors/pages/MentorsPage.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { mentorService } from '../services/mentorService';
import { Mentor } from '../types';
import { QuizCategory } from '../../quiz/types';
import { Loader2, Search, Users } from 'lucide-react';

import MentorCard from '../components/MentorCard';
import ConfirmationModal from '../components/ConfirmationModal';

const ALL_CATEGORIES = 'All';
const filterCategories: (QuizCategory | 'All')[] = [ALL_CATEGORIES, 'Technical', 'Creative', 'Social', 'Analytical'];

const MentorsPage = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<QuizCategory | typeof ALL_CATEGORIES>(ALL_CATEGORIES);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const data = await mentorService.getMentors();
        setMentors(data);
      } catch (error) {
        console.error("Failed to fetch mentors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);
  
  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === ALL_CATEGORIES || mentor.expertise === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [mentors, searchTerm, activeFilter]);

  const handleBookSession = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };
  
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <Users className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Mentor Directory</h1>
        </div>
        <p className="text-gray-600">Find and connect with industry experts to guide your journey.</p>

        {/* Search and Filter UI */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                  activeFilter === cat 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center p-12"><Loader2 className="animate-spin h-10 w-10 text-indigo-600" /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} onBookSession={handleBookSession} />
          ))}
        </div>
      )}

      {filteredMentors.length === 0 && !loading && (
        <div className="text-center py-10 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">No mentors found matching your criteria.</p>
        </div>
      )}

      <ConfirmationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mentor={selectedMentor}
      />
    </div>
  );
};

export default MentorsPage;
