import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/cartcontext";
import { WishlistProvider } from "@/context/wishlistcontext"; // ✅ Import WishlistProvider

const inter = Inter({ subsets: ["latin"] });

// ✅ Define metadata here (server component)
export const metadata = {
  title: "StyleShop - Modern Fashion E-commerce",
  description: "Discover our latest collection of high-quality products at affordable prices",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider> {/* ✅ Wrap app with WishlistProvider */}
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
