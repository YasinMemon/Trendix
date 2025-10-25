"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { FacebookIcon, InstagramIcon, ShoppingCartIcon } from '@/components/icons';

// Dummy product data
const productsData = {
  '1': {
    id: '1',
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop',
    ],
    shortDescription: 'Experience premium sound quality with advanced noise cancellation technology. Perfect for music lovers and professionals.',
    description: `
      <h3 class="text-xl font-bold mb-4 text-gray-900">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">Immerse yourself in exceptional audio quality with our Premium Wireless Headphones. Engineered for audiophiles and everyday users alike, these headphones deliver crystal-clear sound with deep bass and precise highs.</p>
      
      <h4 class="font-bold mb-3 text-gray-900 text-lg">Key Features:</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>Active Noise Cancellation (ANC) for immersive listening</li>
        <li>40-hour battery life with quick charge support</li>
        <li>Premium comfort with memory foam ear cushions</li>
        <li>Bluetooth 5.0 for seamless connectivity</li>
        <li>Built-in microphone for crystal-clear calls</li>
        <li>Foldable design with carrying case included</li>
      </ul>
      
      <h4 class="font-bold mb-3 text-gray-900 text-lg">Specifications:</h4>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Driver Size: 40mm</li>
        <li>Frequency Response: 20Hz - 20kHz</li>
        <li>Impedance: 32 Ohms</li>
        <li>Weight: 250g</li>
        <li>Connectivity: Bluetooth 5.0, 3.5mm aux cable</li>
      </ul>
    `,
    inStock: true,
    tags: ['wireless', 'noise-cancelling', 'premium'],
  },
  '2': {
    id: '2',
    name: 'Classic Leather Jacket',
    category: 'Fashion',
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviewCount: 94,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562751361-ac86e0a245a7?w=800&auto=format&fit=crop',
    ],
    shortDescription: 'Timeless genuine leather jacket with premium craftsmanship. A wardrobe essential for every season.',
    description: `
      <h3 class="text-xl font-bold mb-4 text-gray-900">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">Elevate your style with this classic leather jacket, crafted from premium genuine leather. This versatile piece combines timeless design with modern comfort.</p>
      
      <h4 class="font-bold mb-3 text-gray-900 text-lg">Features:</h4>
      <ul class="list-disc list-inside space-y-2 mb-4 text-gray-700">
        <li>100% Genuine leather construction</li>
        <li>Premium YKK zippers</li>
        <li>Multiple interior and exterior pockets</li>
        <li>Soft polyester lining for comfort</li>
        <li>Adjustable snap cuffs</li>
      </ul>
    `,
    inStock: true,
    tags: ['leather', 'jacket', 'fashion'],
  },
};

// Related products
const relatedProducts = [
  {
    id: '3',
    name: 'Smart Watch Pro',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Designer Sunglasses',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Minimalist Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Wireless Earbuds',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop',
  },
];

// Star Rating Component
const StarRating = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= Math.floor(rating) ? 'text-yellow-400' : star - 0.5 <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating} ({reviewCount} reviews)
      </span>
    </div>
  );
};

// Social Share Component
const ShareIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Share on Facebook">
        <FacebookIcon className="w-5 h-5 text-blue-600" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Share on Instagram">
        <InstagramIcon className="w-5 h-5 text-pink-600" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Share on Twitter">
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Copy link">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
    </div>
  );
};

export default function ProductPage({ params }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get product data (in real app, fetch from API using params.id)
  const product = productsData[params.id] || productsData['1'];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
          {/* Left Side - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 sm:h-20 lg:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-indigo-600 scale-105' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${index + 1}`} fill className="object-cover" sizes="(max-width: 640px) 80px, 100px" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full">
              {product.category}
            </span>

            {/* Product Name */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-serif">{product.name}</h1>

            {/* Rating */}
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />

            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl sm:text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="px-2 py-1 text-xs sm:text-sm font-semibold text-white bg-rose-500 rounded">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Short Description */}
            <p className="text-gray-700 leading-relaxed">{product.shortDescription}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="border-t pt-6 space-y-6">
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-16 text-center text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
                  <ShoppingCartIcon className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex-1 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-md">
                  Buy Now
                </button>
              </div>

              {/* Wishlist Button */}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add to Wishlist
              </button>
            </div>

            {/* Social Share */}
            <div className="border-t pt-6">
              <ShareIcons />
            </div>
          </motion.div>
        </div>

        {/* Product Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 sm:mt-8 bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8"
        >
          <div className="max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
        </motion.div>

        {/* Related Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 sm:mt-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
