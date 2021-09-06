import { imageAltText, authorName, Price } from "..";
import { useLocalization } from "../../customHooks";
import { translate } from "../../functions";
import "../ProductCard/product-card-styles.css";
import { DismissSvg } from "../../assets";
import { useCurrencyConverter } from "../../customHooks";
import { useWishlist } from "../../contexts/WishlistContext/WishlistContext";
import { useMoveToCart } from "./useMoveToCart";

export const WishlistProductCard = ({ product }) => {
  const { image, title, author, price: mrp, offerPercentage } = product;
  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();
  const { language } = useLocalization();
  const { removeFromWishlist } = useWishlist();
  const { onMoveToCartClicked } = useMoveToCart();

  return (
    <article className={`product-card`}>
      <div
        className={`product-card__img-container wishlist-product-card__img-container`}
      >
        <img
          src={image}
          alt={imageAltText(title, author)}
          className={`product-card__img  responsive-img wishlist-product-card__img`}
          loading="lazy"
          title={title}
        />
        <span
          className="product-dismiss"
          onClick={() => removeFromWishlist(product._id)}
          title={"Remove from Wishlist"}
        >
          <DismissSvg />
        </span>
      </div>
      <div className="product-card__details">
        <h1 title={title} className={`product-title`}>
          {title}
        </h1>
        <p className={`product-creator`}>{authorName(author)}</p>
        <Price
          mrp={mrp}
          offerPercentage={offerPercentage}
          currencySymbol={currencySymbol}
          selectedCurrencyRate={selectedCurrencyRate}
        />
        <button
          className="btn-add-to-cart"
          onClick={() => onMoveToCartClicked(product)}
        >
          {translate("Move to Cart", language)}
        </button>
      </div>
    </article>
  );
};
