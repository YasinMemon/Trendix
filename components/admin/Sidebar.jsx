'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Products', href: '/admin/products', icon: ShoppingBagIcon },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCartIcon },
  { name: 'Users', href: '/admin/users', icon: UsersIcon },
  { name: 'Settings', href: '/admin/settings', icon: CogIcon },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg lg:shadow-md flex-col"
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trendix
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="ml-auto w-1.5 h-1.5 bg-white rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">
              Need Help?
            </p>
            <p className="text-xs text-gray-600 mb-3">
              Check our documentation
            </p>
            <button className="w-full bg-white text-gray-700 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200 shadow-sm">
              Get Support
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <motion.aside
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className="lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg flex flex-col"
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trendix
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="ml-auto w-1.5 h-1.5 bg-white rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-800 mb-1">
              Need Help?
            </p>
            <p className="text-xs text-gray-600 mb-3">
              Check our documentation
            </p>
            <button className="w-full bg-white text-gray-700 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200 shadow-sm">
              Get Support
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
