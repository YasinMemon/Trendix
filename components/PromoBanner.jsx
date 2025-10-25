"use client";

import { motion } from 'framer-motion';

export default function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center shadow-xl"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="text-2xl sm:text-3xl">✨</span>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
          Free Shipping on Orders Over ₹999!
        </h3>
        <span className="text-2xl sm:text-3xl">✨</span>
      </div>
      <p className="text-indigo-100 mt-2 text-sm sm:text-base">
        Shop now and get your favorite products delivered at your doorstep
      </p>
    </motion.div>
  );
}
