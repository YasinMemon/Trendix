"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full cursor-pointer">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h4 className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">{product.name}</h4>
        </Link>
        <p className="mt-2 text-lg font-semibold">${product.price}</p>
        <button className="mt-4 w-full rounded-md bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700">Add to cart</button>
      </div>
    </motion.div>
  );
}
