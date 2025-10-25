"use client";

import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Classic Leather Jacket', price: '149.00', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop' },
  { id: 2, name: 'Noise-Cancel Headphones', price: '199.00', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop' },
  { id: 3, name: 'Minimalist Watch', price: '89.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop' },
  { id: 4, name: 'Smart Home Speaker', price: '129.00', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop' },
  { id: 5, name: 'Sunglasses', price: '39.00', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop' },
  { id: 6, name: 'Backpack', price: '59.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop' },
];

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-serif">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
