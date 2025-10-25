"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const styles = [
  { id: 1, title: 'Casual Wear', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop' },
  { id: 2, title: 'Formal Style', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop' },
  { id: 3, title: 'Street Fashion', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop' },
  { id: 4, title: 'Athletic', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop' },
];

export default function ShopByStyle() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 font-serif">Shop by Style</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {styles.map((style, i) => (
            <motion.a
              key={style.id}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <Image 
                src={style.image} 
                alt={style.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{style.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1">Explore Collection →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
