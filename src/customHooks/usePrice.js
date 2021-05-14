import { useCurrencyConverter } from "../customHooks";
import { roundToTwoDigits } from "../functions";

export const usePrice = (mrp, offerPercentage) => {
  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();
  const discountPrice =
    mrp * (1 - offerPercentage / 100) * selectedCurrencyRate;

  const roundedDiscountPrice = roundToTwoDigits(discountPrice);

  const finalPrice = `${currencySymbol} ${roundedDiscountPrice}`;

  const originalPrice = roundToTwoDigits(mrp * selectedCurrencyRate);

  return { finalPrice, originalPrice };
};
