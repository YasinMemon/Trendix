"use client";

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: '🚚',
    title: 'Free Shipping',
    description: 'On orders over $50'
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Secure Payment',
    description: '100% secure transactions'
  },
  {
    id: 3,
    icon: '↩️',
    title: 'Easy Returns',
    description: '30-day return policy'
  },
  {
    id: 4,
    icon: '24/7',
    title: 'Support',
    description: 'Dedicated customer service'
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4"
            >
              <div className="text-4xl sm:text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
