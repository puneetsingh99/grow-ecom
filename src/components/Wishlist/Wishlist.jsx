import { WishlistProductCard, Navbar } from "../";
import "../ProductList/product-list-styles.css";
import "../ProductListingPage/product-listing-page-styles.css";
import "./wishlist-styles.css";
import { EmptyWishlist } from "./EmptyWishlist";
import { useWishlist } from "../../contexts/WishlistContext/WishlistContext";
import { WishlistHeader } from "./WishlistHeader";

export const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const { status, wishlist, error } = wishlistState;

  return (
    <div>
      <Navbar />
      {status === "loading" && "Loading..."}
      {status === "succeeded" && wishlist.length === 0 && <EmptyWishlist />}
      {status === "succeeded" && wishlist.length > 0 && (
        <div>
          <WishlistHeader wishlistCount={wishlist?.length} />
          <ul className={`product-list product-list--wishlist`}>
            {wishlist.map((product) => (
              <WishlistProductCard key={product._id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
