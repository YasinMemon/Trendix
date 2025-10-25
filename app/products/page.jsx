"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCardEnhanced from '@/components/ProductCardEnhanced';
import CategoryFilter from '@/components/CategoryFilter';
import PromoBanner from '@/components/PromoBanner';

const categories = ['All', 'Fashion', 'Electronics', 'Accessories', 'Home Decor'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [allProducts, setAllProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        
        if (response.ok) {
          setAllProducts(data.products);
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setVisibleProducts(8); // Reset visible products when allProducts change
  }, [allProducts]);

  // Filter products by category
  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  // Get products to display based on visible count
  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleProducts(8); // Reset to initial count when category changes
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-serif">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the latest trends and gadgets
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-sm sm:text-base text-gray-600">
            Showing <span className="font-semibold text-gray-900">{displayedProducts.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
            {activeCategory !== 'All' && (
              <span> in <span className="font-semibold text-indigo-600">{activeCategory}</span></span>
            )}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {allProducts.map((product, index) => (
            <ProductCardEnhanced key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 sm:px-10 sm:py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <span>Load More Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="text-sm text-gray-600 mt-4">
              {filteredProducts.length - visibleProducts} more products available
            </p>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-sm p-12 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 font-serif">No products found</h2>
            <p className="text-gray-600 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              View All Products
            </button>
          </motion.div>
        )}

        {/* Promotional Banner */}
        <PromoBanner />
      </main>

      <Footer />
    </div>
  );
}
