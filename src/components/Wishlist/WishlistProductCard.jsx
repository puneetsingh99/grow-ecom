import { imageAltText, authorName, Price } from "..";
import { useLocalization } from "../../customHooks";
import { translate, wishlistHandler, cartHandler } from "../../functions";
import "../ProductCard/product-card-styles.css";
import { DismissSvg } from "../../assets";

export const WishlistProductCard = ({
  product,
  userId,
  setAlert,
  currencySymbol,
  selectedCurrencyRate,
  userDispatch,
  cartItemIds,
  wishlistItemIds,
}) => {
  const { language } = useLocalization();
  const inWishlist = wishlistItemIds.includes(product._id);
  const inCart = cartItemIds.includes(product._id);

  const {
    image,
    title,
    author,
    price: mrp,
    offerPercentage,
    rating,
    productType,
    fastDelivery,
    inStock,
    category,
    level,
  } = product;

  return (
    <article className={`product-card`}>
      <div
        className={`product-card__img-container wishlist-product-card__img-container`}
      >
        <img
          src={image}
          alt={imageAltText(title, author)}
          className={`product-card__img  responsive-img wishlist-product-card__img`}
        />
        <span
          className="product-dismiss"
          onClick={() =>
            wishlistHandler(
              "remove",
              userId,
              product._id,
              setAlert,
              userDispatch,
              inWishlist
            )
          }
        >
          <DismissSvg />
        </span>
      </div>
      <div className="product-card__details">
        <h1 className={`product-title`}>{title}</h1>
        <p className={`product-creator`}>{authorName(author)}</p>
        <Price
          mrp={mrp}
          offerPercentage={offerPercentage}
          currencySymbol={currencySymbol}
          selectedCurrencyRate={selectedCurrencyRate}
        />
        <button
          className="btn-add-to-cart"
          onClick={() =>
            cartHandler(
              "move",
              userId,
              product._id,
              setAlert,
              userDispatch,
              inCart
            )
          }
        >
          {translate("Move to Cart", language)}
        </button>
      </div>
    </article>
  );
};
