"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OrderSuccessPage() {
  const [orderDetails] = useState({
    orderId: 'ORD12345',
    totalAmount: 929.96,
    estimatedDelivery: 'October 29, 2025'
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-green-50/30">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Success Animation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.05 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"
            />
          </div>

          {/* Success Icon with Confetti Effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200, 
              damping: 20 
            }}
            className="relative w-28 h-28 mx-auto mb-6"
          >
            <div className="w-28 h-28 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </div>

            {/* Confetti Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 80,
                  y: Math.sin((i * Math.PI * 2) / 8) * 80,
                }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.8 }}
                className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${
                  i % 3 === 0 ? 'bg-green-500' : i % 3 === 1 ? 'bg-yellow-400' : 'bg-indigo-500'
                }`}
                style={{ transformOrigin: 'center' }}
              />
            ))}
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif leading-tight">
              Thank You! Your Order Has Been<br className="hidden sm:inline" /> Placed Successfully 🎉
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              We've received your order and will send you a confirmation email shortly.
            </p>
          </motion.div>

          {/* Order Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 my-8 max-w-lg mx-auto border border-gray-200 shadow-sm relative z-10"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 font-serif">Order Summary</h2>
            
            <div className="space-y-4">
              {/* Order ID */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-medium">Order ID</p>
                    <p className="text-lg font-bold text-gray-900">#{orderDetails.orderId}</p>
                  </div>
                </div>
              </div>

              {/* Total Amount */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-medium">Total Amount</p>
                    <p className="text-lg font-bold text-gray-900">${orderDetails.totalAmount.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-medium">Estimated Delivery</p>
                    <p className="text-lg font-bold text-gray-900">{orderDetails.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
          >
            <Link href="/shop" className="flex-1 sm:flex-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Continue Shopping
              </motion.button>
            </Link>
            
            <Link href="/orders" className="flex-1 sm:flex-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Go to My Orders
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 pt-6 border-t border-gray-200 relative z-10"
          >
            <p className="text-sm text-gray-600">
              Questions about your order? Contact us at{' '}
              <a href="mailto:support@trendix.com" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                support@trendix.com
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">Secure Payment</h3>
            <p className="text-xs text-gray-600 mt-1">256-bit SSL encrypted</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">Fast Delivery</h3>
            <p className="text-xs text-gray-600 mt-1">Ships within 24 hours</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">Easy Returns</h3>
            <p className="text-xs text-gray-600 mt-1">30-day return policy</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
