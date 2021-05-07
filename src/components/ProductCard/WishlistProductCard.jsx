import { imageAltText, authorName, Price } from "../";
import { useLocalization } from "../../customHooks";
import { translate, wishlistHandler, cartHandler } from "../../functions";
import "./product-card-styles.css";
import { DismissSvg } from "../../assets";

export const WishlistProductCard = ({
  product,
  userId,
  setAlert,
  currencySymbol,
  selectedCurrencyRate,
  userDispatch,
  cartItemIds,
  wishlistItemIds
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
    level
  } = product;

  return (
    <article className={`product-card`}>
      <div
        className={`product-card__img-container wishlist-product-card__img-container`}
      >
        {/* <img
          src={image}
          alt={imageAltText(title, author)}
          className={`product-card__img  responsive-img`}
        /> */}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1nCB0N83xsrsCphz2PwU62yKP3CWAPfnkBoHDueyw0FB5j0q4AOU6CU6cxqvvXBCDmQ&usqp=CAU"
          alt="test book"
          className={`product-card__img responsive-img`}
        /> */}

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

// Upon initial load get the wishlist and cart of the user.
// then using that  id match the product's id. if it's present in the cart then set
// in cart flag and similarly for wishlist flag
