import { WishlistProvider } from "@/context/wishlistcontext";
import { CartProvider } from "@/context/cartcontext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <WishlistProvider>
        <Component {...pageProps} />
      </WishlistProvider>
    </CartProvider>
  );
}
