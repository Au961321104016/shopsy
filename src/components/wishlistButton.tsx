"use client";

import { useWishlist } from "@/context/wishlistcontext";
import { HeartIcon } from "lucide-react";

type Product = {
  id: number
    name: string
    description: string
    price: number
    image: string
    category: string
    featured: boolean
    inStock: boolean
    features?: string[]
};

type Props = {
  product: Product;
};

export default function WishlistButton({ product }: Props) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // ✅ Ensure `wishlist` items also use string IDs to match `product.id`
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <button
      onClick={() =>
        isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
      }
      className={`p-2 rounded ${isInWishlist ? "text-red-500" : "text-gray-400"}`}
      aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      <HeartIcon size={24} />
    </button>
  );
}
