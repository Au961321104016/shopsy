"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Heart } from "lucide-react"; // ✅ Import Heart icon
import { useCart } from "../context/cartcontext";
import { useWishlist } from "../context/wishlistcontext"; // ✅ Import Wishlist context
import { useState } from "react";
import CartDrawer from "./cart-drawer";

export default function Header() {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist(); // ✅ Use Wishlist Context
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length; // ✅ Count wishlist items

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-15">
        <div className="flex items-center">
          <Link href="/" className="text-[20px] font-bold">
            StyleShop
          </Link>
          <nav className="hidden md:flex ml-10 space-x-6">
            <Link href="/" className="text-[15px] font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-[15px] font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="#" className="text-[15px] font-medium transition-colors hover:text-primary">
              Categories
            </Link>
            <Link href="#" className="text-[15px] font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* ✅ Wishlist Button */}
          <Link href="/wishlist" className="relative">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>
          </Link>

          {/* ✅ Cart Button */}
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>

          {/* ✅ Mobile Menu Button */}
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

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link href="/" className="block py-2 text-l font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block py-2 text-l font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/wishlist" className="block py-2 text-l font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Wishlist
            </Link>
            <Link href="#" className="block py-2 text-l font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link href="#" className="block py-2 text-l font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
