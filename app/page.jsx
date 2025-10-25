"use client";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import TrendingProducts from '../components/TrendingProducts';
import FeaturedProducts from '../components/FeaturedProducts';
import ShopByStyle from '../components/ShopByStyle';
import OfferBanner from '../components/OfferBanner';
import BestSellers from '../components/BestSellers';
import Testimonials from '../components/Testimonials';
import PromoCTA from '../components/PromoCTA';
import Newsletter from '../components/Newsletter';

export default function Page() {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        <main>
          <Hero />
          <Features />
          <Categories />
          <TrendingProducts />
          <FeaturedProducts />
          <ShopByStyle />
          <OfferBanner />
          <BestSellers />
          <Testimonials />
          <PromoCTA />
          <Newsletter />
        </main>
      </div>
    </Layout>
  );
}
