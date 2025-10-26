"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FacebookIcon, InstagramIcon, ShoppingCartIcon } from "@/components/icons";

export default function ProductPageClient({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Check if product is in stock
  const isInStock = product?.stock > 0;

  // Handle images - use placeholder if no images
  const productImages = product?.images?.length > 0 ? product.images : ["/placeholder.png"];

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={productImages[selectedImage]}
                alt={product?.name || "Product"}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-16 sm:h-20 lg:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-indigo-600 scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product?.name} view ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 80px, 100px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full">
                {product?.category || "Uncategorized"}
              </span>
              {product?.brand && (
                <span className="inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                  {product.brand}
                </span>
              )}
              {product?.isTrending && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-50 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Trending
                </span>
              )}
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
              {product?.name || "Product Name"}
            </h1>

            {/* Reviews Section */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product?.numReviews || 0} reviews)
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                ${product?.price?.toFixed(2) || "0.00"}
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product?.description || "No description available"}
            </p>

            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isInStock ? "bg-green-500" : "bg-red-500"}`}></div>
              <span className={`text-sm font-medium ${isInStock ? "text-green-700" : "text-red-700"}`}>
                {isInStock ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Product Details */}
            <div className="border-t border-b py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SKU:</span>
                <span className="font-medium text-gray-900">{product?._id?.slice(-8).toUpperCase()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium text-gray-900">{product?.category}</span>
              </div>
              {product?.brand && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Brand:</span>
                  <span className="font-medium text-gray-900">{product.brand}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Added:</span>
                <span className="font-medium text-gray-900">{formatDate(product?.createdAt)}</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decrementQuantity}
                    disabled={!isInStock}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-16 text-center text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    disabled={!isInStock}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                {quantity >= product?.stock && isInStock && (
                  <p className="text-xs text-orange-600 mt-1">Maximum available quantity</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  disabled={!isInStock}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  disabled={!isInStock}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
