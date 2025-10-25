"use client";

import { motion } from 'framer-motion';

export default function OfferBanner() {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-linear-to-r from-rose-50 to-yellow-50 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-serif">Seasonal Sale — Up to 50% off</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 font-light">Selected items on fashion and electronics. While stocks last.</p>
          </div>
          <a href="#offers" className="inline-block rounded-full bg-rose-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-rose-700 transition-colors whitespace-nowrap">
            Shop Offers
          </a>
        </div>
      </div>
    </motion.section>
  );
}
