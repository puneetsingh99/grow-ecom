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
import { useState, useEffect } from "react";
import { translate, roundToTwoDigits } from "../../functions";
import { Loader } from "../Loader/Loader";
import { EmptyCart } from "./EmptyCart";
import { useCart } from "../../contexts/CartContext/CartContext";
import { getCart } from "../../contexts/CartContext/getCart";
import { CartHeader } from "./components/CartHeader";
import { toastConfig } from "../../utils";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts";

export const Cart = () => {
  const { language } = useLocalization();
  const { userId } = useAuth();

  const { cartState, cartDispatch, cartTotal, cartCount } = useCart();

  const { status, cart, error } = cartState;

  const count = cartCount();

  console.log({ status, cart, error });

  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  return (
    <div>
      <Navbar />
      {status === "loading" && "Loading..."}
      {status === "succeeded" && count === 0 && <EmptyCart />}
      {status === "succeeded" && count > 0 && (
        <div className={`cart-container`}>
          <ul className={`cart-items`}>
            <CartHeader />
            {cart.map((product) => {
              return (
                <CartProductCard key={product.product._id} product={product} />
              );
            })}
          </ul>
          <PlaceOrder
            currencySymbol={currencySymbol}
            isCouponApplied={isCouponApplied}
            setCouponDiscount={setCouponDiscount}
          />
        </div>
      )}
    </div>
  );
};
