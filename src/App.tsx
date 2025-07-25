import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { FollowUpQuestions } from './components/FollowUpQuestions';
import { FilterSort } from './components/FilterSort';
import { ProductListing } from './components/ProductListing';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('relevance');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  const handleQuestionClick = (question: string) => {
    setSearchQuery(question);
    console.log('Following up on:', question);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Filters changed:', newFilters);
  };

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
    console.log('Sort changed:', newSort);
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      {/* Header - Constrained width */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-3 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold text-gray-900">ShopSearch</h1>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                AI
              </span>
            </div>
            <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">U</span>
              </div>
            </button>
          </div>
          
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      {/* Main Content - Constrained width */}
      <main className="pb-4">
        <FollowUpQuestions onQuestionClick={handleQuestionClick} />
        
        <FilterSort 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        
        <ProductListing />
      </main>
    </div>
  );
}

export default App;