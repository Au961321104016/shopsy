"use client";
import { useState, useEffect } from "react";
import ProductGrid from "@/components/product-grid";
import { getProducts, toggleWishlist } from "@/lib/products";
import SearchFilter from "@/components/searchfilter";
import type { Product } from "@/lib/types"; // Import the Product type

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(getProducts());
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Update products based on search and category filter
  useEffect(() => {
    let filteredProducts = getProducts();

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    setProducts(filteredProducts);
  }, [searchQuery, selectedCategory]); // Runs when searchQuery or selectedCategory changes

  const handleWishlistToggle = (id: number) => {
    toggleWishlist(id);
    setProducts([...getProducts()]); // Refresh product list
  };

  return (
    <div className="container mx-auto py-10 px-8">
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <h1 className="text-xl font-bold mb-6">All Products</h1>
      <ProductGrid products={products} onWishlistToggle={handleWishlistToggle} />
    </div>
  );
}
