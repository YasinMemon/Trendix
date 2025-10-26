'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

export default function OrdersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Dummy orders data
  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      status: 'Completed',
      total: '$245.00',
      date: '2025-10-24',
      items: 3,
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Processing',
      total: '$189.50',
      date: '2025-10-24',
      items: 2,
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      status: 'Pending',
      total: '$567.80',
      date: '2025-10-23',
      items: 5,
    },
    {
      id: '#ORD-004',
      customer: 'Sarah Williams',
      email: 'sarah@example.com',
      status: 'Completed',
      total: '$89.99',
      date: '2025-10-23',
      items: 1,
    },
    {
      id: '#ORD-005',
      customer: 'David Brown',
      email: 'david@example.com',
      status: 'Shipped',
      total: '$345.25',
      date: '2025-10-22',
      items: 4,
    },
    {
      id: '#ORD-006',
      customer: 'Emily Davis',
      email: 'emily@example.com',
      status: 'Completed',
      total: '$128.40',
      date: '2025-10-22',
      items: 2,
    },
    {
      id: '#ORD-007',
      customer: 'Robert Wilson',
      email: 'robert@example.com',
      status: 'Cancelled',
      total: '$99.99',
      date: '2025-10-21',
      items: 1,
    },
    {
      id: '#ORD-008',
      customer: 'Lisa Anderson',
      email: 'lisa@example.com',
      status: 'Processing',
      total: '$234.50',
      date: '2025-10-21',
      items: 3,
    },
  ];

  const statusColors = {
    Completed: 'bg-green-100 text-green-700',
    Processing: 'bg-blue-100 text-blue-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Shipped: 'bg-purple-100 text-purple-700',
    Cancelled: 'bg-red-100 text-red-700',
  };

  const filters = ['All', 'Pending', 'Processing', 'Shipped', 'Completed', 'Cancelled'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Orders Management
              </h1>
              <p className="text-gray-600 mt-1">
                Track and manage customer orders
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            >
              {[
                { label: 'Total Orders', value: '8', color: 'blue' },
                { label: 'Pending', value: '1', color: 'yellow' },
                { label: 'Processing', value: '2', color: 'blue' },
                { label: 'Completed', value: '3', color: 'green' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-4"
                >
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-4 mb-6"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders by ID or customer..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FunnelIcon className="h-5 w-5 mr-2 text-gray-600" />
                  <span className="text-gray-700">Filter</span>
                </button>
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Orders Table */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Items
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Total
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders.map((order, index) => (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">
                            {order.id}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {order.customer}
                            </p>
                            <p className="text-sm text-gray-500">{order.email}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {order.items}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              statusColors[order.status]
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          {order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <EyeIcon className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                              <CheckCircleIcon className="h-5 w-5" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <XCircleIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>

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
