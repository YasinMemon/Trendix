"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { id: 1, name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop' },
  { id: 2, name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&auto=format&fit=crop' },
  { id: 3, name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop' },
  { id: 4, name: 'Adidas', logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&auto=format&fit=crop' },
  { id: 5, name: 'Sony', logo: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&auto=format&fit=crop' },
  { id: 6, name: 'Puma', logo: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop' },
];

export default function BrandShowcase() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Shop by Brand</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, i) => (
            <motion.a
              key={brand.id}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition"
            >
              <div className="relative h-20 w-full">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain grayscale hover:grayscale-0 transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
