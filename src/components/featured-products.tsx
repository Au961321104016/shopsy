import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

interface FeaturedProductsProps {
  products: Product[]
  title: string
}

export default function FeaturedProducts({ products, title }: FeaturedProductsProps) {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

