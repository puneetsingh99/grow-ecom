import "./cart-styles.css";
import {
  CartProductCard,
  AlertHandler,
  PlaceOrder,
  Navbar,
  ApplyCouponModal,
} from "../";
import "../ProductList/product-list-styles.css";
import "../ProductListingPage/product-listing-page-styles.css";
import { useCurrencyConverter, useLocalization } from "../../customHooks";
import { useState } from "react";
import { translate, roundToTwoDigits } from "../../functions";
import { Loader } from "../Loader/Loader";
import { EmptyCart } from "./EmptyCart";
import { useCart } from "../../contexts/CartContext/CartContext";
import { CartHeader } from "./components/CartHeader";

export const Cart = () => {
  const { language } = useLocalization();

  const { cartState, cartTotal } = useCart();

  const { status, cart, error } = cartState;
  const cartCount = cart?.length;

  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  return (
    <div>
      <Navbar />
      {status === "loading" && "Loading..."}
      {status === "succeeded" && cartCount === 0 && <EmptyCart />}
      {status === "succeeded" && cartCount > 0 && (
        <div className={`cart-container`}>
          <ul className={`cart-items`}>
            <CartHeader />
            {cart.map((product) => (
              <CartProductCard key={product._id} product={product} />
            ))}
          </ul>
          {cartCount > 0 && (
            <PlaceOrder
              currencySymbol={currencySymbol}
              isCouponApplied={isCouponApplied}
              setCouponDiscount={setCouponDiscount}
            />
          )}
        </div>
      )}
    </div>
  );
};
