import React from 'react';
import { ServiceCategory } from '@/app/data/services';

interface CategoryTabsProps {
  categories: ServiceCategory[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  setActiveCategory
}: CategoryTabsProps) {
  return (
    <div className="category-tabs flex flex-wrap justify-center gap-3 mb-12">
      {categories.map(category => (
        <button
          key={category.id}
          className={`tab px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}