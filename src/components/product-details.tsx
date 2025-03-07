"use client"

import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useCart } from "./cart-provider"
import { formatCurrency } from "@/lib/utils"
import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-square">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold text-primary mb-4">{formatCurrency(product.price)}</p>
        <div className="mb-6">
          <p className="text-muted-foreground mb-4">{product.description}</p>
          {product.features && (
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center border rounded-md">
            <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button variant="ghost" size="icon" onClick={incrementQuantity}>
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={handleAddToCart} size="lg" className="flex-1">
            Add to Cart
          </Button>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Category:</span> {product.category}
          </p>
          {product.inStock ? (
            <p className="text-sm text-green-600 font-medium">In Stock</p>
          ) : (
            <p className="text-sm text-red-600 font-medium">Out of Stock</p>
          )}
        </div>
      </div>
    </div>
  )
}

