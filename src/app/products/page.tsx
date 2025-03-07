import ProductGrid from "@/components/product-grid"
import { getProducts } from "@/lib/products"

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="container mx-auto py-10 px-8">
      <h1 className="text-3xl font-bold mb-13">All Products</h1>
      <ProductGrid products={products} />
    </div>
  )
}

