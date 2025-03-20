import type { Product } from "@/lib/types";
import ProductCard from "./productcard";

interface ProductGridProps {
  products?: Product[];
  onWishlistToggle: (id: number) => void; // Add this line
}


export default function ProductGrid({ products = [] }: ProductGridProps) {
  // Remove duplicates by id
  const uniqueProducts = Array.from(new Map(products.map(p => [p.id, p])).values());

  console.log("Unique Products:", uniqueProducts.map((p) => p.id));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {uniqueProducts.map((product, index) => (
        <ProductCard key={product.id ?? `fallback-${index}`} product={product} />
      ))}
    </div>
  );
}
