"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-indigo-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left w-full"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 font-serif">
              Style meets tech. Shop the latest in fashion & electronics.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Discover curated collections, exclusive drops, and limited-time
              offers across fashion, gadgets and home essentials. Free returns
              and fast shipping.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#featured" className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-700 transition-colors tracking-wide">
                Shop Now
              </a>
              <a href="#categories" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                View Products
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full h-64 sm:h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop"
                alt="Hero banner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
