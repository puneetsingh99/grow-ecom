import { WishlistProductCard, AlertHandler, Navbar } from "../";
import "../ProductList/product-list-styles.css";
import "../ProductListingPage/product-listing-page-styles.css";
import "./wishlist-styles.css";
import {
  useECommerce,
  useCurrencyConverter,
  useLocalization
} from "../../customHooks";
import { useState } from "react";
import { translate } from "../../functions";
import { EmptyWishlist } from "./EmptyWishlist";

export const Wishlist = ({ filteredData }) => {
  const {
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    user,
    userDispatch
  } = useECommerce();
  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();
  const { language } = useLocalization();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const wishlistCount = wishlistItemIds.length;
  return (
    <div>
      <Navbar />
      {wishlistCount === 0 && <EmptyWishlist />}
      {wishlistCount !== 0 && (
        <div>
          <p className={`wishlist-indicator  text-xl text-gray-800`}>
            {`${translate("Wishlist", language)} `}
            <span className={`text-gray-400`}>{`${wishlistCount} ${
              wishlistCount === 1
                ? translate("item", language)
                : translate("items", language)
            }`}</span>
          </p>
          <ul className={`product-list product-list--wishlist`}>
            {wishlist.map((product) => {
              return (
                <li key={product._id}>
                  {
                    <WishlistProductCard
                      product={product}
                      userId={user._id}
                      setAlert={setAlert}
                      currencySymbol={currencySymbol}
                      selectedCurrencyRate={selectedCurrencyRate}
                      userDispatch={userDispatch}
                      wishlistItemIds={wishlistItemIds}
                      cartItemIds={cartItemIds}
                    />
                  }
                </li>
              );
            })}
            {alert.show && <AlertHandler {...alert} setAlert={setAlert} />}
          </ul>
        </div>
      )}
    </div>
  );
};
