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
import { useLocalization } from "../../customHooks";
import { useState } from "react";
import { translate, roundToTwoDigits } from "../../functions";
import { Loader } from "../Loader/Loader";
import { EmptyCart } from "./EmptyCart";
import { useCart } from "../../contexts/CartContext/CartContext";
import { CartHeader } from "./components/CartHeader";
import { useAuth } from "../../contexts";

export const Cart = () => {
  const { language } = useLocalization();
  const { userId } = useAuth();

  const { cartState, cartDispatch, cartTotal, cartCount } = useCart();

  const { status, cart, error } = cartState;

  const count = cartCount();

  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const placeOrderProps = {
    isCouponApplied,
    setIsCouponApplied,
    couponDiscount,
    setCouponDiscount,
  };

  return (
    <div>
      <Navbar />
      {status === "loading" && <Loader />}
      {status === "succeeded" && count === 0 && <EmptyCart />}
      {status === "succeeded" && count > 0 && (
        <div className={`cart-container`}>
          <ul className={`cart-items`}>
            <CartHeader couponDiscount={couponDiscount} />
            {cart.map((product) => {
              return (
                <CartProductCard key={product.product._id} product={product} />
              );
            })}
          </ul>
          <PlaceOrder {...placeOrderProps} />
        </div>
      )}
    </div>
  );
};
