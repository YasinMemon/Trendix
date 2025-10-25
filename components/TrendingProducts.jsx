"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const trendingItems = [
  { id: 1, name: 'Wireless Earbuds Pro', price: '79.00', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop', badge: 'Hot' },
  { id: 2, name: 'Smart Fitness Tracker', price: '99.00', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop', badge: 'New' },
  { id: 3, name: 'Designer Tote Bag', price: '129.00', image: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=800&auto=format&fit=crop', badge: 'Trending' },
  { id: 4, name: 'Premium Sneakers', price: '159.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop', badge: 'Hot' },
];

export default function TrendingProducts() {
  return (
    <section className="py-12 sm:py-16 bg-linear-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">Trending Now</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-light">What everyone's talking about this week</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full z-10">
                {item.badge}
              </span>
              <Link href={`/product/${item.id}`}>
                <div className="relative h-56 w-full cursor-pointer">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/product/${item.id}`}>
                  <h4 className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">{item.name}</h4>
                </Link>
                <p className="mt-2 text-xl font-bold text-indigo-600">${item.price}</p>
                <Link href={`/product/${item.id}`}>
                  <button className="mt-3 w-full rounded-md bg-gray-900 text-white py-2 text-sm hover:bg-gray-800 transition">
                    Quick View
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
