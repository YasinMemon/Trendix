'use client';

import { PlusIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function ProductsHeader({ 
  productCount, 
  loading, 
  onAddProduct, 
  onRefresh 
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Products
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your product inventory ({productCount} products)
        </p>
      </div>
      <div className="flex gap-3 mt-4 md:mt-0">
        <button 
          onClick={onRefresh}
          className="flex items-center justify-center px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
          title="Refresh products"
          disabled={loading}
        >
          <ArrowPathIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
        <button 
          onClick={onAddProduct}
          className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>
    </div>
  );
}
