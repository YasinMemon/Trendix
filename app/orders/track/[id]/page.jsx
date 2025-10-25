"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Dummy order data
const ordersData = {
  '1': {
    id: 'ORD-2025-1001',
    date: 'October 20, 2025',
    status: 'Out for Delivery',
    currentStep: 4,
    estimatedDelivery: 'October 25, 2025',
    trackingNumber: 'TRK1234567890',
    carrier: 'Express Shipping',
    items: [
      { name: 'Premium Wireless Headphones', quantity: 1, price: 299 },
      { name: 'Smart Watch Series 5', quantity: 1, price: 399 }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      zip: '10001',
      country: 'USA'
    }
  },
  '2': {
    id: 'ORD-2025-1002',
    date: 'October 22, 2025',
    status: 'Processing',
    currentStep: 2,
    estimatedDelivery: 'October 28, 2025',
    trackingNumber: 'TRK0987654321',
    carrier: 'Standard Shipping',
    items: [
      { name: 'Designer Sunglasses', quantity: 2, price: 149 }
    ],
    shippingAddress: {
      name: 'Jane Smith',
      street: '456 Oak Avenue',
      city: 'Los Angeles',
      zip: '90001',
      country: 'USA'
    }
  },
  '3': {
    id: 'ORD-2025-1003',
    date: 'October 18, 2025',
    status: 'Delivered',
    currentStep: 5,
    estimatedDelivery: 'October 23, 2025',
    deliveredDate: 'October 23, 2025',
    trackingNumber: 'TRK5678901234',
    carrier: 'Express Shipping',
    items: [
      { name: 'Leather Wallet', quantity: 1, price: 79 }
    ],
    shippingAddress: {
      name: 'Mike Johnson',
      street: '789 Pine Road',
      city: 'Chicago',
      zip: '60601',
      country: 'USA'
    }
  }
};

// Timeline steps
const timelineSteps = [
  {
    id: 1,
    title: 'Order Placed',
    description: 'Your order has been received',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Processing',
    description: 'We are preparing your order',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Shipped',
    description: 'Your order is on the way',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Out for Delivery',
    description: 'Your order is out for delivery',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Delivered',
    description: 'Order successfully delivered',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

// Status badge colors
const statusColors = {
  'Order Placed': 'bg-blue-100 text-blue-800 border-blue-200',
  'Processing': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Shipped': 'bg-purple-100 text-purple-800 border-purple-200',
  'Out for Delivery': 'bg-orange-100 text-orange-800 border-orange-200',
  'Delivered': 'bg-green-100 text-green-800 border-green-200'
};

export default function TrackOrderPage() {
  const params = useParams();
  const orderId = params.id;
  const order = ordersData[orderId];

  // If order not found
  if (!order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-12"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
              <p className="text-gray-600 mb-8">The order you're looking for doesn't exist or has been removed.</p>
              <Link
                href="/orders"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Orders
              </Link>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const totalAmount = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Track Your Order
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay updated on your order's journey
            </p>
          </motion.div>

          {/* Order Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Order #{order.id}</h2>
                <p className="text-gray-600 text-sm">Placed on {order.date}</p>
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full border-2 font-semibold text-sm ${statusColors[order.status]}`}>
                <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></span>
                {order.status}
              </div>
            </div>

            {/* Order Details Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tracking Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tracking Number:</span>
                    <span className="font-semibold text-gray-900">{order.trackingNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carrier:</span>
                    <span className="font-semibold text-gray-900">{order.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-semibold text-gray-900">${totalAmount}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Shipping Address</h3>
                <div className="text-gray-700">
                  <p className="font-semibold">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.zip}</p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Estimated Delivery Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 sm:p-8 mb-8 text-white"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {order.status === 'Delivered' ? 'Delivered On' : 'Expected Delivery'}
                </h3>
                <p className="text-2xl font-bold">
                  {order.status === 'Delivered' ? order.deliveredDate : order.estimatedDelivery}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Order Tracking Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Timeline</h2>

            {/* Desktop Timeline (Horizontal) */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((order.currentStep - 1) / (timelineSteps.length - 1)) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-indigo-500 to-purple-600 rounded-full"
                  />
                </div>

                {/* Timeline Steps */}
                <div className="relative flex justify-between">
                  {timelineSteps.map((step, index) => {
                    const isCompleted = step.id <= order.currentStep;
                    const isCurrent = step.id === order.currentStep;

                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex flex-col items-center relative z-10"
                        style={{ width: '20%' }}
                      >
                        {/* Icon Circle */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                          className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 transition-all ${
                            isCompleted
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'bg-white border-gray-300 text-gray-400'
                          } ${isCurrent ? 'ring-4 ring-indigo-200 shadow-lg' : ''}`}
                        >
                          {step.icon}
                        </motion.div>

                        {/* Step Info */}
                        <div className="text-center">
                          <h3 className={`font-semibold text-sm mb-1 ${isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-xs ${isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.description}
                          </p>
                        </div>

                        {/* Current Step Indicator */}
                        {isCurrent && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="absolute -top-10 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            Current
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Timeline (Vertical) */}
            <div className="md:hidden space-y-6">
              {timelineSteps.map((step, index) => {
                const isCompleted = step.id <= order.currentStep;
                const isCurrent = step.id === order.currentStep;
                const isLast = index === timelineSteps.length - 1;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex gap-4 relative"
                  >
                    {/* Icon and Line */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-4 shrink-0 transition-all ${
                          isCompleted
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'bg-white border-gray-300 text-gray-400'
                        } ${isCurrent ? 'ring-4 ring-indigo-200 shadow-lg' : ''}`}
                      >
                        {step.icon}
                      </motion.div>
                      {!isLast && (
                        <div className={`w-1 flex-1 min-h-[60px] rounded-full ${
                          isCompleted && step.id < order.currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`font-semibold ${isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.title}
                        </h3>
                        {isCurrent && (
                          <span className="bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Order Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-gray-900">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-6 mt-6 border-t-2 border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-indigo-600">${totalAmount}</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/orders"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Orders
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Need Help?
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
