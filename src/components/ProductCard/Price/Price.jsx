import "./price-styles.css";
import {useCurrencyConverter, usePrice} from "../../../customHooks"

export const Price = ({
  mrp,
  offerPercentage,
 
}) => {
  const {finalPrice, originalPrice} = usePrice(mrp, offerPercentage);
  const {currencySymbol} = useCurrencyConverter();

  return (
    <p className={`product-price`}>
      {finalPrice}
      <span className={`product-price-og`}>
        {`${
          offerPercentage > 0 ? `${currencySymbol} ${originalPrice}` : ""
        }`}
      </span>
    </p>
  );
};
