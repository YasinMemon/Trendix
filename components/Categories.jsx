"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = [
  { id: 1, title: 'Fashion', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop' },
  { id: 2, title: 'Electronics', img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop' },
  { id: 3, title: 'Accessories', img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop' },
  { id: 4, title: 'Home Decor', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-serif">Shop by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((c, i) => (
            <motion.a
              key={c.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              href="#"
              className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-32 sm:h-40 lg:h-36 w-full">
                <Image 
                  src={c.img} 
                  alt={c.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-medium text-gray-900">{c.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
