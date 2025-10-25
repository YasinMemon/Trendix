"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const bestSellers = [
  { id: 1, name: 'Ultra Comfort Running Shoes', price: '119.00', sold: '2.3k', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop' },
  { id: 2, name: 'Wireless Charging Pad', price: '49.00', sold: '1.8k', image: 'https://images.unsplash.com/photo-1591290619762-c588f0edf1f4?w=800&auto=format&fit=crop' },
  { id: 3, name: 'Premium Laptop Sleeve', price: '39.00', sold: '1.5k', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop' },
  { id: 4, name: 'Smart LED Desk Lamp', price: '69.00', sold: '1.2k', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop' },
  { id: 5, name: 'Bluetooth Speaker Pro', price: '89.00', sold: '2.1k', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop' },
  { id: 6, name: 'Minimalist Crossbody Bag', price: '79.00', sold: '1.6k', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop' },
];

export default function BestSellers() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">Best Sellers</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-light">Our most loved products by customers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bestSellers.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative h-56 w-full cursor-pointer">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Best Seller
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h4 className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">{product.name}</h4>
                </Link>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xl font-bold text-gray-900">${product.price}</p>
                  <p className="text-sm text-gray-500">{product.sold} sold</p>
                </div>
                <button className="mt-4 w-full rounded-md bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
