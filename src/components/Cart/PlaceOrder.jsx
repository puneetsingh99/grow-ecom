import { useState } from "react";
import { ApplyCouponModal } from "../";
import { TagSvg } from "../../assets";
import { roundToTwoDigits } from "../../functions";
import { useCart } from "../../contexts/CartContext/CartContext";
import { useCurrencyConverter } from "../../customHooks";

export const PlaceOrder = (props) => {
  const {
    isCouponApplied,
    setIsCouponApplied,
    couponDiscount,
    setCouponDiscount,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const { cartCount, cartTotal } = useCart();
  const { total, discountedTotal } = cartTotal();
  const count = cartCount();
  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();

  const orderTotal = discountedTotal * (1 - couponDiscount / 100);

  return (
    <div className={`order-summary`}>
      {showModal && (
        <ApplyCouponModal
          setShowModal={setShowModal}
          currencySymbol={currencySymbol}
          setCouponDiscount={setCouponDiscount}
          setIsCouponApplied={setIsCouponApplied}
        />
      )}

      <div className="coupon-container">
        <p className={`order-summary-heading`}>{`Coupons`}</p>
        <div className={`coupon-apply`}>
          <p className={`text-apply-coupon`}>
            <span className={`coupon-tag`}>
              <TagSvg />
            </span>
            {`Apply Coupons`}
          </p>
          <button
            className="btn-apply-coupon"
            onClick={() => setShowModal(() => true)}
          >{`Apply`}</button>
        </div>
      </div>

      <div className="price-details-container">
        <p className={`order-summary-heading`}>
          {`Price details`} <span>{`(${count} items)`}</span>
        </p>
        <p className={`order-summary-fields`}>
          {`Total MRP`}
          <span>{`${currencySymbol} ${roundToTwoDigits(total)}`}</span>
        </p>
        <p className={`order-summary-fields text-money-saved`}>
          {`Discount on MRP`}
          <span>{`- ${currencySymbol} ${roundToTwoDigits(
            total - discountedTotal
          )}`}</span>
        </p>
        <div className={`discount-from-coupon`}>
          <p>{`Coupon Discount`} </p>
          {isCouponApplied ? (
            <p>{`${couponDiscount}%`}</p>
          ) : (
            <p
              className={`text-apply-coupon cursor-pointer text-dark`}
              onClick={() => setShowModal(() => true)}
            >{`Apply Coupon`}</p>
          )}
        </div>

        <p className={`order-summary-fields text-money-saved`}>
          {`Convenience Fee`} <span>{`Free`}</span>
        </p>
      </div>

      <div className="coupon-container">
        <div className={`flex justify-between font-bold`}>
          <p className={`order-summary-heading`}>{`Total Amount`}</p>
          <span className={`total-amount-summary`}>
            {`${currencySymbol} ${roundToTwoDigits(orderTotal)}`}
          </span>
        </div>
        <div className={`coupon-apply`}>
          <button className="btn btn-add-to-cart btn-lg">{`Place Order`}</button>
        </div>
      </div>
    </div>
  );
};
