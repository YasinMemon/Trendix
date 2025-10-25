"use client";

import { motion } from 'framer-motion';

export default function PromoCTA() {
  return (
    <section className="py-16 sm:py-20 bg-indigo-600">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif">
            Join Our VIP Club Today
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto font-light">
            Get exclusive access to sales, early product launches, and special discounts. Free shipping on all orders!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Sign Up Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
