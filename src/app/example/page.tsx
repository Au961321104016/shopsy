"use client";

//import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import { getProducts } from "@/lib/products";
import { useWishlist } from "@/context/wishlistcontext"; // ✅ Fixed import path
//import ProductCard from "@/components/productcard";

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero
        title="Modern Fashion for Everyone"
        subtitle="Discover our latest collection of high-quality products at affordable prices"
        ctaText="Shop Now"
        ctaLink="/products"
      /> 
    </main>
  );
}
