'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatCard from '@/components/admin/StatCard';
import RecentOrdersTable from '@/components/admin/RecentOrdersTable';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy data for statistics
  const stats = [
    {
      id: 1,
      title: 'Total Products',
      value: '1,234',
      icon: '🛍️',
      change: '+12.5%',
      changeType: 'increase',
    },
    {
      id: 2,
      title: 'Total Orders',
      value: '8,549',
      icon: '📦',
      change: '+8.2%',
      changeType: 'increase',
    },
    {
      id: 3,
      title: 'Total Users',
      value: '12,847',
      icon: '👥',
      change: '+15.3%',
      changeType: 'increase',
    },
    {
      id: 4,
      title: 'Total Revenue',
      value: '$124,590',
      icon: '💰',
      change: '+23.1%',
      changeType: 'increase',
    },
  ];

  // Dummy data for recent orders
  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      status: 'Completed',
      total: '$245.00',
      date: '2025-10-24',
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      status: 'Processing',
      total: '$189.50',
      date: '2025-10-24',
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      status: 'Pending',
      total: '$567.80',
      date: '2025-10-23',
    },
    {
      id: '#ORD-004',
      customer: 'Sarah Williams',
      status: 'Completed',
      total: '$89.99',
      date: '2025-10-23',
    },
    {
      id: '#ORD-005',
      customer: 'David Brown',
      status: 'Shipped',
      total: '$345.25',
      date: '2025-10-22',
    },
    {
      id: '#ORD-006',
      customer: 'Emily Davis',
      status: 'Completed',
      total: '$128.40',
      date: '2025-10-22',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            {/* Page Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back! Here's what's happening with your store today.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.id} variants={itemVariants}>
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </motion.div>

            {/* Recent Orders Section */}
            <motion.div variants={itemVariants}>
              <RecentOrdersTable orders={recentOrders} />
            </motion.div>
          </motion.div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        />
      )}
    </div>
  );
}
