"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchIcon, ShoppingCartIcon } from './icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="w-full bg-linear-to-r from-indigo-600 to-indigo-700 sticky top-0 z-40 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap font-serif tracking-tight">
              Trendix
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-4 text-sm text-indigo-100">
              <Link 
                href="/" 
                className={`hover:text-white transition-colors ${isActive('/') ? 'text-white font-semibold border-b-2 border-white pb-1' : ''}`}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`hover:text-white transition-colors ${isActive('/products') ? 'text-white font-semibold border-b-2 border-white pb-1' : ''}`}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className={`hover:text-white transition-colors ${isActive('/about') ? 'text-white font-semibold border-b-2 border-white pb-1' : ''}`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`hover:text-white transition-colors ${isActive('/contact') ? 'text-white font-semibold border-b-2 border-white pb-1' : ''}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="flex items-center w-full bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 gap-2 border border-white/30">
              <SearchIcon className="w-5 h-5 text-indigo-100 shrink-0" />
              <input
                className="bg-transparent outline-none text-sm w-full text-white placeholder-indigo-200"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5 text-white" />
            </button>

            {/* Cart Button */}
            <Link href="/cart" className="relative p-2 rounded-full hover:bg-white/20 transition-colors">
              <ShoppingCartIcon className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-rose-500 rounded-full">3</span>
            </Link>

            {/* User Profile/Orders Icon */}
            <Link href="/orders" className="hidden md:block p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="My Orders">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Login/Signup Buttons */}
            <Link 
              href="/login" 
              className="hidden md:block px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="hidden md:block px-4 py-2 text-sm font-medium bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex items-center w-full bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 gap-2 border border-white/30">
              <SearchIcon className="w-5 h-5 text-indigo-100 shrink-0" />
              <input
                className="bg-transparent outline-none text-sm w-full text-white placeholder-indigo-200"
                placeholder="Search products..."
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <nav className="py-4 space-y-2">
              <Link 
                href="/" 
                className={`block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors ${isActive('/') ? 'bg-white/10 text-white font-semibold' : ''}`}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors ${isActive('/products') ? 'bg-white/10 text-white font-semibold' : ''}`}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className={`block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors ${isActive('/about') ? 'bg-white/10 text-white font-semibold' : ''}`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors ${isActive('/contact') ? 'bg-white/10 text-white font-semibold' : ''}`}
              >
                Contact
              </Link>
              <Link href="/orders" className="block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors">
                My Orders
              </Link>
              <Link 
                href="/login" 
                className={`block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors ${isActive('/login') ? 'bg-white/10 text-white font-semibold' : ''}`}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className={`block px-4 py-2 text-indigo-100 hover:text-white hover:bg-white/10 rounded transition-colors ${isActive('/signup') ? 'bg-white/10 text-white font-semibold' : ''}`}
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
