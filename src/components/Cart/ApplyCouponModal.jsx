import { useState } from "react";
import { CrossSvg } from "../../assets";
import { useCart } from "../../contexts/CartContext/CartContext";
import { roundToTwoDigits } from "../../functions";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils";

export const ApplyCouponModal = ({
  setShowModal,
  currencySymbol,
  setCouponDiscount,
  setIsCouponApplied,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const { cartTotal } = useCart();
  const { discountedTotal } = cartTotal();

  const onApplyCouponClicked = () => {
    const couponDiscountPercent = couponCode === "WELCOME25" ? 25 : 0;

    if (couponDiscountPercent === 0) {
      if (!couponCode) {
        return toast.warn("Please enter a coupon", toastConfig);
      }
      toast.warn("Invalid coupon", toastConfig);
    } else {
      setIsCouponApplied(true);
      setShowModal(false);
      toast.success("Coupon applied", toastConfig);
    }

    setCouponDiscount(couponDiscountPercent);
    setCouponCode("");
  };

  return (
    <div
      className={`modal-container`}
      onClick={() => {
        setShowModal(() => false);
      }}
    >
      <article className={`modal apply-coupon-container`}>
        <div onClick={(e) => e.stopPropagation()}>
          <div className={`modal-apply-coupon-heading`}>
            <p>{`Apply Coupon`}</p>
            <p
              className={`cancel-modal`}
              onClick={() => setShowModal(() => false)}
            >
              <CrossSvg />
            </p>
          </div>
          <div className="text-enter-coupon">
            <input
              type="text"
              name="enter-coupon"
              id="enter-coupon"
              className={`text-input py-2`}
              placeholder={`Enter coupon code`}
              onChange={(e) => setCouponCode(() => e.target.value)}
            />
          </div>
          <div className="coupon-code">
            <div
              className={`coupon-container flex items-center coupon-container-no-border`}
            >
              <p className={`coupon-code-text mr-8 `}>{`WELCOME25`}</p>
              <p
                className={`coupon-code-detail`}
              >{`Get 25% off as a welcome gift!`}</p>
            </div>
          </div>

          <div
            className={`apply-coupon-code modal-apply-coupon-heading border-none`}
          >
            <p>{`${`Save`} ${currencySymbol} ${roundToTwoDigits(
              discountedTotal - discountedTotal * 0.75
            )}`}</p>
            <button
              className={`btn-apply-coupon btn-apply-coupon-lg`}
              onClick={onApplyCouponClicked}
            >{`Apply Coupon`}</button>
          </div>
        </div>
      </article>
    </div>
  );
};
