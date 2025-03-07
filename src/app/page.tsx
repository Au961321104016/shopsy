import FeaturedProducts from "@/components/featured-products"
import Hero from "@/components/hero"
import { getProducts } from "@/lib/products"

export default function Home() {
  const products = getProducts()
  const featuredProducts = products.filter((product) => product.featured)
  return (
    <main className="flex min-h-screen flex-col items-center">
    <Hero
      title="Modern Fashion for Everyone"
      subtitle="Discover our latest collection of high-quality products at affordable prices"
      ctaText="Shop Now"
      ctaLink="/products"
    />
    <FeaturedProducts products={featuredProducts} title="Featured Products" />
  </main>
  );
}
