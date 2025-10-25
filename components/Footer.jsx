"use client";

import { FacebookIcon, InstagramIcon } from './icons';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold font-serif">Trendix</h4>
            <p className="mt-2 text-sm text-gray-600 font-light">Modern fashion & electronics store</p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h5 className="font-semibold mb-3">Help</h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="font-semibold mb-3">Follow us</h5>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-md bg-white shadow hover:shadow-md transition-shadow" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="p-2 rounded-md bg-white shadow hover:shadow-md transition-shadow" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5 text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center sm:text-left">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Trendix — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
