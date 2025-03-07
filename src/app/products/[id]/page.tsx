"use client";

import { useParams } from "next/navigation";
import ProductDetails from "@/components/product-details";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

export default function ProductPage() {
  const params = useParams(); // ✅ Get dynamic params from URL
  const id = params?.id as string; // Ensure id is a string

  if (!id) {
    notFound();
  }

  const product = getProductById(Number.parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <ProductDetails product={product} />
    </div>
  );
}
