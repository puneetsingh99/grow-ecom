import { useEffect, useState } from "react";
import { CrossSvg } from "../../assets";
import { roundToTwoDigits } from "../../functions";
import { applyCouponCode } from "./applyCouponCode";

export const ApplyCouponModal = ({
  showModal,
  setShowModal,
  currencySymbol,
  discountedCartTotal,
  setCouponDiscount
}) => {
  const [couponCode, setCouponCode] = useState("");
  console.log("Coming from applycouponModal", { setCouponDiscount });

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
              className={`text-input`}
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
              discountedCartTotal
            )}`}</p>
            <button
              className={`btn-apply-coupon btn-apply-coupon-lg`}
              onClick={() => applyCouponCode(couponCode)}
            >{`Apply Coupon`}</button>
          </div>
        </div>
      </article>
    </div>
  );
};
