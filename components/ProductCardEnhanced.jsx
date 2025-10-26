"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCardEnhanced({ product, index, handleRedirect }) {
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  console.log(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {/* Product Image */}
        <div onClick={() => {handleRedirect(product)}} className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100 cursor-pointer">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.badge && (
            <div className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.badge}
            </div>
          )}
          {product.discount && (
            <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.discount}% OFF
            </div>
          )}
        </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded">
            {product.category}
          </span>
        </div>
        
        {/* <img src={product.images[0]} alt="" srcset="" />
        <h1>hello world</h1> */}

        <Link href={`/product/${product._id}`}>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
            )}
            <p className="text-xl sm:text-2xl font-bold text-gray-900">₹{product.price}</p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`mt-4 w-full rounded-lg py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all ${
            isAdding
              ? 'bg-green-500 text-white'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
          }`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added!
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to Cart
            </span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
