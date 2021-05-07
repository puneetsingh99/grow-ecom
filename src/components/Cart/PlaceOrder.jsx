import { useState } from "react";
import { ApplyCouponModal } from "../";
import { TagSvg } from "../../assets";

export const PlaceOrder = ({
  cartCount,
  cartTotal,
  discountedCartTotal,
  currencySymbol,
  roundToTwoDigits,
  isCouponApplied,
  setCouponDiscount,
  setAlert
}) => {
  const [showModal, setShowModal] = useState(false);
  console.log("setCouponDiscount coming from placeOrder");
  console.log({ setCouponDiscount });
  return (
    <div className={`order-summary`}>
      {showModal && (
        <ApplyCouponModal
          setShowModal={setShowModal}
          currencySymbol={currencySymbol}
          discountedCartTotal={discountedCartTotal}
          setCouponDiscount={setCouponDiscount}
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
          {`Price details`} <span>{`(${cartCount} items)`}</span>
        </p>
        <p className={`order-summary-fields`}>
          {`Total MRP`}
          <span>{`${currencySymbol} ${roundToTwoDigits(cartTotal)}`}</span>
        </p>
        <p className={`order-summary-fields text-money-saved`}>
          {`Discount on MRP`}
          <span>{`- ${currencySymbol} ${roundToTwoDigits(
            cartTotal - discountedCartTotal
          )}`}</span>
        </p>
        <div className={`discount-from-coupon`}>
          <p>{`Coupon Discount`} </p>
          {isCouponApplied ? (
            <p>{`coupon applied`}</p>
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
            {`${currencySymbol} ${roundToTwoDigits(discountedCartTotal)}`}
          </span>
        </div>
        <div className={`coupon-apply`}>
          <button
            className="btn btn-add-to-cart btn-lg"
            onClick={() => {
              setAlert({
                show: true,
                message: "Order Placed",
                type: "success"
              });
            }}
          >{`Place Order`}</button>
        </div>
      </div>
    </div>
  );
};
