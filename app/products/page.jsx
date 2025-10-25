"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCardEnhanced from '@/components/ProductCardEnhanced';
import CategoryFilter from '@/components/CategoryFilter';
import PromoBanner from '@/components/PromoBanner';

// Dummy product data
const allProducts = [
  // Fashion Products
  {
    id: 1,
    name: 'Premium Leather Jacket',
    category: 'Fashion',
    price: 4999,
    originalPrice: 7999,
    discount: 37,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 128,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Designer Sunglasses',
    category: 'Accessories',
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 89
  },
  {
    id: 3,
    name: 'Wireless Earbuds Pro',
    category: 'Electronics',
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 256,
    badge: 'Hot'
  },
  {
    id: 4,
    name: 'Stylish Sneakers',
    category: 'Fashion',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 167
  },
  {
    id: 5,
    name: 'Smart Watch Ultra',
    category: 'Electronics',
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 342,
    badge: 'New'
  },
  {
    id: 6,
    name: 'Casual T-Shirt',
    category: 'Fashion',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 94
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 1999,
    originalPrice: 3499,
    discount: 43,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 178
  },
  {
    id: 8,
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 799,
    originalPrice: 1299,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 145
  },
  {
    id: 9,
    name: 'Decorative Wall Clock',
    category: 'Home Decor',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 67
  },
  {
    id: 10,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 423,
    badge: 'Bestseller'
  },
  {
    id: 11,
    name: 'Cotton Hoodie',
    category: 'Fashion',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 112
  },
  {
    id: 12,
    name: 'Minimalist Table Lamp',
    category: 'Home Decor',
    price: 899,
    originalPrice: 1499,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 89
  },
  {
    id: 13,
    name: 'USB-C Cable',
    category: 'Accessories',
    price: 299,
    image: 'https://images.unsplash.com/photo-1591290619762-d4b64a93b8e1?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 234
  },
  {
    id: 14,
    name: 'Gaming Mouse',
    category: 'Electronics',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop',
    rating: 5,
    reviews: 189,
    badge: 'Hot'
  },
  {
    id: 15,
    name: 'Denim Jeans',
    category: 'Fashion',
    price: 1899,
    originalPrice: 2999,
    discount: 37,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 156
  },
  {
    id: 16,
    name: 'Decorative Cushions',
    category: 'Home Decor',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop',
    rating: 4,
    reviews: 78
  },
];

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
          {displayedProducts.map((product, index) => (
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
