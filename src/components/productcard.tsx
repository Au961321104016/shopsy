"use client";

import Link from "next/link";
import { useWishlist } from "@/context/wishlistcontext";
import { HeartIcon } from "lucide-react"; // Icon library for UI
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="border p-4 rounded-lg relative">
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
      >
        <HeartIcon
          className={`h-6 w-6 transition-colors ${
            isInWishlist ? "text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      </Link>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
}
