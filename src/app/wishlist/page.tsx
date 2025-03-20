"use client";

import { useEffect } from "react";
import { useWishlist } from "@/context/wishlistcontext";
import ProductCard from "@/components/productcard";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  useEffect(() => {
    console.log("Wishlist updated:", wishlist);
  }, [wishlist]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
