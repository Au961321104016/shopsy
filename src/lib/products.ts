import type { Product } from "./types"

const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "A timeless classic white t-shirt made from premium cotton. Versatile and comfortable for everyday wear.",
    price: 24.99,
    image: "/t-shirt.jpg?height=100&width=100",
    category: "Clothing",
    featured: true,
    inStock: true,
    features: ["100% premium cotton", "Regular fit", "Crew neck", "Machine washable"],
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with a comfortable stretch. Perfect for any casual occasion.",
    price: 59.99,
    image: "/download2.jpg?height=100&width=100",
    category: "Clothing",
    featured: true,
    inStock: true,
    features: ["98% cotton, 2% elastane", "Slim fit", "Five-pocket styling", "Machine washable"],
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag with adjustable strap and multiple compartments.",
    price: 89.99,
    image: "/bag.jpg?height=100&width=100",
    category: "Accessories",
    featured: true,
    inStock: true,
    features: ["Genuine leather", "Adjustable strap", "Multiple compartments", "Gold-tone hardware"],
  },
  {
    id: 4,
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation and long battery life.",
    price: 129.99,
    image: "/headphone.jpg?height=400&width=400",
    category: "Electronics",
    featured: false,
    inStock: true,
    features: ["Active noise cancellation", "40-hour battery life", "Bluetooth 5.0", "Foldable design"],
  },
  {
    id: 5,
    name: "Running Shoes",
    description: "Lightweight running shoes with responsive cushioning for maximum comfort.",
    price: 79.99,
    image: "/images.jpg?height=400&width=400",
    category: "Footwear",
    featured: true,
    inStock: true,
    features: ["Breathable mesh upper", "Responsive cushioning", "Durable rubber outsole", "Reflective details"],
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    image: "/bottle.jpg?height=400&width=400",
    category: "Accessories",
    featured: false,
    inStock: true,
    features: ["Double-wall insulation", "BPA-free", "Leak-proof lid", "500ml capacity"],
  },
  {
    id: 7,
    name: "Denim Jacket",
    description: "Classic denim jacket with a modern fit. A versatile layering piece for any season.",
    price: 69.99,
    image: "/jacket.jpg?height=100&width=100",
    category: "Clothing",
    featured: false,
    inStock: true,
    features: ["100% cotton denim", "Button front", "Chest pockets", "Adjustable waist tabs"],
  },
  {
    id: 8,
    name: "Smart Watch",
    description: "Feature-packed smartwatch with health tracking, notifications, and customizable watch faces.",
    price: 199.99,
    image: "/smart.jpg?height=100&width=100",
    category: "Electronics",
    featured: true,
    inStock: false,
    features: ["Heart rate monitoring", "Sleep tracking", "Water resistant", "5-day battery life"],
  },
  {
    id: 9, // Changed ID from 8 to 9
    name: "Laptop", // Fixed spelling from "laptob"
    description: "Powerful laptop for work and play with long battery life and a stunning display.",
    price: 200.99,
    image: "/images(1).jpg?height=100&width=100",
    category: "Electronics",
    featured: true,
    inStock: false,
    features: ["High-performance processor", "Full HD display", "Long battery life", "SSD storage"],
  },
];

// Function to get all products
export function getProducts(): Product[] {
  return products;
}

// Function to get a product by ID
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

// Function to toggle wishlist status
export function toggleWishlist(id: number): void {
  console.log(`Toggling wishlist for product ${id}`);
  // Implement wishlist logic (e.g., update state or database)
}
export function getProductByname(name: string): Product | undefined {
  return products.find((product) => product.name.toLowerCase() === name);
}

// Function to toggle wishlist status