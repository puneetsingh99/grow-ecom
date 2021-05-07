import emptyWishlist from "../../assets/img/emptyWishlist.svg";
import "../Cart/cart-styles.css";
import { Link } from "react-router-dom";

export const EmptyWishlist = () => {
  return (
    <main className={`empty-page`}>
      <div className={`empty-indicating-img`}>
        <img src={emptyWishlist} alt={`wishlist is empty`} />
        <h1 className={`empty-page-title`}>{`Your Wishlist is empty`}</h1>
        <h2
          className={`empty-page-msg`}
        >{`Add items that you like to your wishlist. Review them anytime and easily move them to the cart.`}</h2>
        <Link className={`text-link`} to="/products">
          <h2 className={`empty-page-cta`}>{`Continue Shopping`}</h2>
        </Link>
      </div>
    </main>
  );
};
