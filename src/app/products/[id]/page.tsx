import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import ProductDetails from "@/components/product-details";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  if (isNaN(productId)) return notFound();

  const product = await getProductById(productId);
  if (!product) return notFound();

  return (
    <div className="container mx-auto py-10 px-4">
      <ProductDetails product={product} />
    </div>
  );
}
