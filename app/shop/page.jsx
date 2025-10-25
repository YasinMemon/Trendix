"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

// Dummy product data
const allProducts = [
  { id: 1, name: 'Classic Leather Jacket', price: 149.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop' },
  { id: 2, name: 'Wireless Headphones', price: 199.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop' },
  { id: 3, name: 'Minimalist Watch', price: 89.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop' },
  { id: 4, name: 'Smart Home Speaker', price: 129.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop' },
  { id: 5, name: 'Designer Sunglasses', price: 39.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop' },
  { id: 6, name: 'Canvas Backpack', price: 59.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop' },
  { id: 7, name: 'Running Shoes', price: 119.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop' },
  { id: 8, name: 'Wireless Charging Pad', price: 49.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1591290619762-c588f0edf1f4?w=800&auto=format&fit=crop' },
  { id: 9, name: 'Laptop Sleeve', price: 39.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop' },
  { id: 10, name: 'LED Desk Lamp', price: 69.00, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop' },
  { id: 11, name: 'Bluetooth Speaker', price: 89.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop' },
  { id: 12, name: 'Crossbody Bag', price: 79.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop' },
  { id: 13, name: 'Wireless Earbuds', price: 79.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop' },
  { id: 14, name: 'Fitness Tracker', price: 99.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop' },
  { id: 15, name: 'Designer Tote Bag', price: 129.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=800&auto=format&fit=crop' },
  { id: 16, name: 'Premium Sneakers', price: 159.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop' },
  { id: 17, name: 'Wall Art Print', price: 45.00, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&auto=format&fit=crop' },
  { id: 18, name: 'Throw Pillow Set', price: 55.00, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop' },
  { id: 19, name: 'Ceramic Vase', price: 35.00, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop' },
  { id: 20, name: 'Desk Organizer', price: 29.00, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&auto=format&fit=crop' },
  { id: 21, name: 'Denim Jacket', price: 89.00, category: 'Fashion', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop' },
  { id: 22, name: 'Smart Watch', price: 249.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop' },
  { id: 23, name: 'Leather Wallet', price: 49.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop' },
  { id: 24, name: 'Coffee Table Book', price: 39.00, category: 'Home Decor', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop' },
];

const ITEMS_PER_PAGE = 12;

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price range filter
    if (priceRange === 'under50') {
      filtered = filtered.filter(p => p.price < 50);
    } else if (priceRange === '50to100') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
    } else if (priceRange === '100to200') {
      filtered = filtered.filter(p => p.price > 100 && p.price <= 200);
    } else if (priceRange === 'over200') {
      filtered = filtered.filter(p => p.price > 200);
    }

    // Sorting
    if (sortBy === 'priceLowHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighLow') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      // Keep original order (newest first)
      filtered.reverse();
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <section className="bg-indigo-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-3 font-serif"
          >
            Shop All Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 font-light"
          >
            Discover our complete collection of fashion and electronics
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {['All', 'Fashion', 'Electronics', 'Accessories', 'Home Decor'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="flex-1 lg:max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="All">All Prices</option>
                <option value="under50">Under $50</option>
                <option value="50to100">$50 - $100</option>
                <option value="100to200">$100 - $200</option>
                <option value="over200">Over $200</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex-1 lg:max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="priceLowHigh">Price: Low → High</option>
                <option value="priceHighLow">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {paginatedProducts.length} of {filteredProducts.length} products
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setPriceRange('All');
                setSortBy('newest');
              }}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center gap-2 mt-8"
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === i + 1
                      ? 'bg-indigo-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </motion.div>
        )}
        </div>
      </div>
    </Layout>
  );
}
