'use client';

import { motion } from 'framer-motion';
import { PlusIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import ProductCard from './ProductCard';

export default function ProductGrid({ 
  loading, 
  filteredData, 
  searchQuery, 
  selectedCategory, 
  selectedStatus,
  onAddProduct,
  onEdit,
  onDelete,
  getProductStatus 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl shadow-md p-12 text-center"
      >
        <div className="text-gray-400 mb-4">
          <InformationCircleIcon className="h-16 w-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
        <p className="text-gray-500 mb-6">
          {searchQuery || selectedCategory !== 'All Categories' || selectedStatus !== 'All Status'
            ? 'Try adjusting your filters'
            : 'Start by adding your first product'}
        </p>
        {!searchQuery && selectedCategory === 'All Categories' && selectedStatus === 'All Status' && (
          <button
            onClick={onAddProduct}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <PlusIcon className="h-5 w-5 inline mr-2" />
            Add Your First Product
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredData.map((product) => (
        <motion.div key={product._id} variants={itemVariants}>
          <ProductCard 
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
            getProductStatus={getProductStatus}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
