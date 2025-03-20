import Link from "next/link";
import { useWishlist } from "@/context/wishlistcontext";
import WishlistButton from "@/components/wishlistButton";

const Navbar = () => {
  const { wishlist } = useWishlist();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/wishlist">Wishlist ({wishlist.length})</Link>
      <WishlistButton product={{
        id: 0,
        name: "",
        description: "",
        price: 0,
        image: "",
        category: "",
        featured: false,
        inStock: false,
        features: undefined
      }} />
    </nav>
  );
};

export default Navbar;
