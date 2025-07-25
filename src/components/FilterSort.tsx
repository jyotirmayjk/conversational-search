import React, { useState } from 'react';
import { Filter, SortAsc, X, Check } from 'lucide-react';

interface FilterSortProps {
  onFilterChange: (filters: any) => void;
  onSortChange: (sort: string) => void;
}

export const FilterSort: React.FC<FilterSortProps> = ({ onFilterChange, onSortChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('relevance');

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const filterCategories = [
    {
      name: 'Price Range',
      options: ['Under $25', '$25-$50', '$50-$100', '$100-$200', 'Over $200']
    },
    {
      name: 'Brand',
      options: ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'Canon']
    },
    {
      name: 'Rating',
      options: ['4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars']
    },
    {
      name: 'Availability',
      options: ['In Stock', 'Ships Today', 'Free Shipping']
    }
  ];

  const handleSort = (value: string) => {
    setSelectedSort(value);
    onSortChange(value);
    setIsSortOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 mb-3">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-1 px-2 py-1 bg-white border border-gray-300 rounded text-xs"
          >
            <Filter className="h-2.5 w-2.5" />
            <span>Filters</span>
          </button>
          
          <button
            onClick={() => setIsSortOpen(true)}
            className="flex items-center space-x-1 px-2 py-1 bg-white border border-gray-300 rounded text-xs"
          >
            <SortAsc className="h-2.5 w-2.5" />
            <span>Sort</span>
          </button>
        </div>
        
        <div className="text-xs text-gray-600">
          1,247 results
        </div>
      </div>

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)} />
          <div className="relative w-full max-w-xs bg-white h-full shadow-xl ml-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto h-full pb-20">
              {filterCategories.map((category, index) => (
                <div key={index} className="mb-5">
                  <h3 className="font-medium text-gray-900 mb-2 text-sm">{category.name}</h3>
                  <div className="space-y-2">
                    {category.options.map((option, optIndex) => (
                      <label key={optIndex} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-sm">
                  Clear All
                </button>
                <button className="flex-1 px-3 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sort Modal */}
      {isSortOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsSortOpen(false)} />
          <div className="relative w-full bg-white rounded-t-2xl shadow-xl max-h-80">
            <div className="p-4">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Sort by</h2>
                <button
                  onClick={() => setIsSortOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-1">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSort(option.value)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                      selectedSort === option.value
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium text-sm">{option.label}</span>
                    {selectedSort === option.value && <Check className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};