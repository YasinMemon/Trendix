'use client';

import { motion } from 'framer-motion';
import { PencilIcon, TrashIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product, onEdit, onDelete, getProductStatus }) {
  const status = getProductStatus(product.stock);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <PhotoIcon className="h-16 w-16 text-gray-300" />
        )}
        {product.isTrending && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            🔥 Trending
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 truncate">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">
              {product.brand} • {product.category}
            </p>
          </div>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ml-2 ${status.color}`}>
            {status.label}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-600">
            Stock: <span className="font-semibold">{product.stock}</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(product)}
            className="flex-1 cursor-pointer flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
          >
            <PencilIcon className="h-4 w-4 mr-1" />
            Edit
          </button>
          <button 
            onClick={() => onDelete(product._id)}
            className="flex cursor-pointer items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
