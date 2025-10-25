"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(item.id);
    }, 300);
  };

  const incrementQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isRemoving ? 0 : 1, 
        y: isRemoving ? -20 : 0,
        scale: isRemoving ? 0.9 : 1
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
    >
      {/* Product Image */}
      <Link href={`/product/${item.id}`} className="relative w-full sm:w-24 h-32 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, 96px"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Link href={`/product/${item.id}`}>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
              {item.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
          {item.size && (
            <p className="text-sm text-gray-600 mt-1">Size: <span className="font-medium">{item.size}</span></p>
          )}
          {item.color && (
            <p className="text-sm text-gray-600">Color: <span className="font-medium">{item.color}</span></p>
          )}
          <p className="text-lg sm:text-xl font-bold text-gray-900 mt-2 sm:mt-3">
            ${item.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls & Remove */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
            <button
              onClick={decrementQuantity}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-l-lg"
              aria-label="Decrease quantity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="w-10 text-center font-semibold">{item.quantity}</span>
            <button
              onClick={incrementQuantity}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-r-lg"
              aria-label="Increase quantity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove item"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
