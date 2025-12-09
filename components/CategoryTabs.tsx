import React from 'react';
import { CATEGORIES, UI_TEXT } from '../constants';
import { Category, Language } from '../types';

interface CategoryTabsProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  language: Language;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, onSelectCategory, language }) => {
  const t = UI_TEXT[language];
  
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id as Category)}
          className={`
            px-5 py-3 sm:px-6 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border-2 whitespace-nowrap
            ${selectedCategory === cat.id 
              ? 'bg-brand-900 text-white border-brand-900 shadow-lg shadow-brand-900/20' 
              : 'bg-white text-brand-900 border-brand-100 hover:border-brand-300 hover:bg-brand-50'
            }
          `}
        >
           {/* Use translation from UI_TEXT based on category ID */}
          {t.categories[cat.id as Category]}
        </button>
      ))}
    </div>
  );
};