import { useCurrencyConverter } from "../../../customHooks";
import { translate, roundToTwoDigits } from "../../../functions";
import { useLocalization } from "../../../customHooks";
import { useCart } from "../../../contexts/CartContext/CartContext";

const getHeader = (count, language) => {
  let heading;
  if (count === 1) {
    heading = translate("item", language);
  } else {
    heading = translate("items", language);
  }
  return `${count} ${heading}`;
};

export const CartHeader = () => {
  const { currencySymbol } = useCurrencyConverter();
  const { language } = useLocalization();
  const { cartTotal, cartCount } = useCart();
  const count = cartCount();
  const { discountedTotal } = cartTotal();

  return (
    <li className={`mb-4 flex justify-between`}>
      <p className={`cart-indicator text-xl text-gray-800`}>
        {`${translate("Cart", language)} `}
        <span className={`text-gray-400`}>{getHeader(count, language)}</span>
      </p>
      <p className={`cart-indicator text-xl text-gray-800`}>
        {`${currencySymbol} ${roundToTwoDigits(discountedTotal)}`}
      </p>
    </li>
  );
};
