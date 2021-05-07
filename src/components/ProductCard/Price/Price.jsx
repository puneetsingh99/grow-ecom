import "./Price.css";

export const Price = ({
  mrp,
  offerPercentage,
  currencySymbol,
  selectedCurrencyRate
}) => {
  const discountPrice =
    mrp * (1 - offerPercentage / 100) * selectedCurrencyRate;
  const roundedDiscountPrice = Math.round(discountPrice * 100) / 100;
  const finalPrice = `${currencySymbol} ${roundedDiscountPrice}`;
  const roundedOriginalPrice =
    Math.round(mrp * selectedCurrencyRate * 100) / 100;
  return (
    <p className={`product-price`}>
      {finalPrice}
      <span className={`product-price-og`}>
        {`${
          offerPercentage > 0 ? `${currencySymbol} ${roundedOriginalPrice}` : ""
        }`}
      </span>
      {/* remove inline styling from the final version
       */}
      {/* <span style={{ color: "red", marginLeft: "0.5rem" }}>
        {offerPercentage > 0 ? `(${offerPercentage}% off)` : ""}
      </span> */}
    </p>
  );
};
