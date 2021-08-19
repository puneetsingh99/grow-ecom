import "./cart-styles.css";
import {
  CartProductCard,
  AlertHandler,
  PlaceOrder,
  Navbar,
  ApplyCouponModal,
} from "../";
import { TagSvg } from "../../assets";
import "../ProductList/product-list-styles.css";
import "../ProductListingPage/product-listing-page-styles.css";
import {
  useECommerce,
  useCurrencyConverter,
  useLocalization,
} from "../../customHooks";
import { useState } from "react";
import { translate, roundToTwoDigits } from "../../functions";
import { Loader } from "../Loader/Loader";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  const { language } = useLocalization();
  const { cart, cartItemIds, wishlistItemIds, user, userDispatch } =
    useECommerce();

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const cartCount = cartItemIds.length;

  const discountedCartTotal =
    selectedCurrencyRate *
    cart.reduce((total, cartItem) => {
      const discount = 1 - cartItem.product.offerPercentage / 100;
      return (
        total +
        cartItem.product.price * cartItem.qty * discount -
        couponDiscount
      );
    }, 0);

  const cartTotal =
    selectedCurrencyRate *
    cart.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.qty,
      0
    );

  return (
    <div>
      <Navbar />
      {cartCount === 0 && <EmptyCart />}
      {cartCount !== 0 && (
        <div className={`cart-container`}>
          <ul className={`cart-items`}>
            <li className={`mb-4 flex justify-between`}>
              <p className={`cart-indicator text-xl text-gray-800`}>
                {`${translate("Cart", language)} `}
                <span className={`text-gray-400`}>{`${cartCount} ${
                  cartCount === 1
                    ? translate("item", language)
                    : translate("items", language)
                }`}</span>
              </p>
              <p className={`cart-indicator text-xl text-gray-800`}>
                {`${currencySymbol} ${roundToTwoDigits(discountedCartTotal)}`}
              </p>
            </li>
            {cartCount === 0 && <Loader />}
            {cartCount > 0 &&
              cart.map((product) => {
                return (
                  <li key={product.product._id}>
                    {
                      <CartProductCard
                        product={product.product}
                        userId={user._id}
                        alert={alert}
                        setAlert={setAlert}
                        currencySymbol={currencySymbol}
                        selectedCurrencyRate={selectedCurrencyRate}
                        userDispatch={userDispatch}
                        wishlistItemIds={wishlistItemIds}
                        cartItemIds={cartItemIds}
                        qty={product.qty}
                      />
                    }
                  </li>
                );
              })}
          </ul>
          {cartCount > 0 && (
            <PlaceOrder
              cartCount={cartCount}
              cartTotal={cartTotal}
              discountedCartTotal={discountedCartTotal}
              currencySymbol={currencySymbol}
              roundToTwoDigits={roundToTwoDigits}
              isCouponApplied={isCouponApplied}
              setAlert={setAlert}
              setCouponDiscount={setCouponDiscount}
            />
          )}
        </div>
      )}
      {alert.show && <AlertHandler {...alert} setAlert={setAlert} />}
    </div>
  );
};
