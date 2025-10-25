"use client";

import { motion } from 'framer-motion';

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-all ${
            activeCategory === category
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
