"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat text-white p-12"
      style={{
        backgroundImage: "url('/simple banner2.jpg')",
      }}>
      
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to EcomStore
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover the best deals on the latest products. Shop now and enjoy amazing discounts!
          </p>

          {/* CTA Button */}
          <button
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-orange-600 transition"
            onClick={() => router.push('/example')}
          >
            Start Shopping
          </button>
        </div>
      </div>
    </main>
  );
}
