"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "./cart-provider"
import { useState } from "react"
import CartDrawer from "./cart-drawer"

export default function Header() {
  const { cartItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-15">
        <div className="flex items-center">
          <Link href="/" className="text-[40px] font-bold">
            StyleShop
          </Link>

          <nav className="hidden md:flex ml-10 space-x-6">
            <Link href="/" className="text-xl font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-xl font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="#" className="text-xl font-medium transition-colors hover:text-primary">
              Categories
            </Link>
            <Link href="#" className="text-xl font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link href="/" className="block py-2 text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2  text-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link href="#" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link href="#" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

