'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

export default function UsersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy users data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      location: 'New York, USA',
      orders: 12,
      totalSpent: '$2,450.00',
      joinDate: '2024-08-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 8901',
      location: 'Los Angeles, USA',
      orders: 8,
      totalSpent: '$1,890.50',
      joinDate: '2024-09-20',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234 567 8902',
      location: 'Chicago, USA',
      orders: 15,
      totalSpent: '$3,250.80',
      joinDate: '2024-07-10',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+1 234 567 8903',
      location: 'Houston, USA',
      orders: 5,
      totalSpent: '$780.99',
      joinDate: '2024-10-01',
      status: 'Active',
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+1 234 567 8904',
      location: 'Phoenix, USA',
      orders: 20,
      totalSpent: '$4,125.25',
      joinDate: '2024-06-05',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+1 234 567 8905',
      location: 'Philadelphia, USA',
      orders: 3,
      totalSpent: '$456.40',
      joinDate: '2024-10-15',
      status: 'Inactive',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Users Management
                </h1>
                <p className="text-gray-600 mt-1">
                  View and manage customer accounts
                </p>
              </div>
              <button className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                <UserPlusIcon className="h-5 w-5 mr-2" />
                Add User
              </button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            >
              {[
                { label: 'Total Users', value: '12,847', icon: '👥' },
                { label: 'Active Users', value: '11,234', icon: '✅' },
                { label: 'New This Month', value: '234', icon: '🆕' },
                { label: 'Total Orders', value: '8,549', icon: '📦' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-4 mb-6"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users by name, email, or phone..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>

            {/* Users Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {users.map((user) => (
                <motion.div
                  key={user.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* User Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                        {user.name.charAt(0)}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                    <p className="text-blue-100 text-sm mt-1">
                      Member since {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* User Details */}
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400" />
                        {user.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
                        {user.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" />
                        {user.location}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Orders</p>
                        <div className="flex items-center">
                          <ShoppingBagIcon className="h-4 w-4 mr-1 text-blue-600" />
                          <span className="font-semibold text-gray-900">
                            {user.orders}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                        <span className="font-semibold text-gray-900">
                          {user.totalSpent}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                        View Profile
                      </button>
                      <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                        •••
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
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
