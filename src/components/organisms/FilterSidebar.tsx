import React from 'react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => onSelectCategory(null)}
              className={`block w-full text-left text-sm ${
                selectedCategory === null ? 'font-semibold text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`block w-full text-left text-sm ${
                  selectedCategory === category ? 'font-semibold text-black' : 'text-gray-600 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Additional filters can be added here (Price range, Ratings, etc.) */}
      </div>
    </div>
  );
};
