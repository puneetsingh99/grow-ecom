import { useLocalization } from "../../customHooks";
import { translate } from "../../functions";

export const WishlistHeader = ({ wishlistCount }) => {
  const { language } = useLocalization();

  return (
    <p className={`wishlist-indicator  text-xl text-gray-800`}>
      {`${translate("Wishlist", language)} `}
      <span className={`text-gray-400`}>{`${wishlistCount} ${
        wishlistCount === 1
          ? translate("item", language)
          : translate("items", language)
      }`}</span>
    </p>
  );
};
