import { couponCodes } from "./couponCodes";

export const applyCouponCode = (couponCode) => {
  const coupon = couponCodes.find(
    (coupon) => coupon.code === couponCode.toLowerCase()
  );

  return coupon ? 1 - coupon.offerPercentage / 100 : 1;
};
