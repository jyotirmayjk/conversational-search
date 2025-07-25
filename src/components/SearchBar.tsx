import React, { useState } from 'react';
import { Search, Mic, Camera } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center bg-gray-50 rounded-xl border border-gray-200">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 pl-10 pr-16 py-3 text-sm bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
          <div className="absolute right-1 flex items-center space-x-0.5">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              title="Voice search"
            >
              <Mic className="h-4 w-4 text-gray-500" />
            </button>
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              title="Visual search"
            >
              <Camera className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};