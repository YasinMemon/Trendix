'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import {
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  KeyIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'General', icon: UserCircleIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'billing', name: 'Billing', icon: CreditCardIcon },
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
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Settings
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your account settings and preferences
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md mb-6 overflow-x-auto"
            >
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* General Settings */}
            {activeTab === 'general' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Profile Information */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Profile Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                        AD
                      </div>
                      <div>
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                          Change Avatar
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Admin User"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="admin@trendix.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="+1 234 567 8900"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          defaultValue="Administrator"
                          disabled
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                      Save Changes
                    </button>
                  </div>
                </motion.div>

                {/* Store Settings */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Store Settings
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Store Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Trendix"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Store URL
                      </label>
                      <div className="flex items-center">
                        <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <input
                          type="text"
                          defaultValue="trendix.com"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                        <option>GBP - British Pound</option>
                        <option>INR - Indian Rupee</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Notification Preferences
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Email Notifications',
                      description: 'Receive email updates about your orders',
                      icon: EnvelopeIcon,
                    },
                    {
                      title: 'Push Notifications',
                      description: 'Get push notifications on your device',
                      icon: DevicePhoneMobileIcon,
                    },
                    {
                      title: 'Order Updates',
                      description: 'Notifications for new orders',
                      icon: BellIcon,
                    },
                    {
                      title: 'Marketing Updates',
                      description: 'Receive marketing and promotional emails',
                      icon: EnvelopeIcon,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Change Password
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="password"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                      Update Password
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Two-Factor Authentication
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Enable 2FA
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Billing Information
                </h2>
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            •••• •••• •••• 4242
                          </p>
                          <p className="text-xs text-gray-600">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                  <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                    + Add Payment Method
                  </button>
                </div>
              </motion.div>
            )}
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
