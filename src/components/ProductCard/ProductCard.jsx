import { imageAltText, authorName, Price } from "../";
import { useLocalization } from "../../customHooks";
import { translate, wishlistHandler, cartHandler } from "../../functions";
import "./product-card-styles.css";
import { StarSvg, WishlistSvg } from "../../assets";
import { Link } from "react-router-dom";

export const ProductCard = ({
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

  console.log("productType: ", { productType });

  return (
    <article className={`product-card`}>
      <div className={`product-card__img-container`}>
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
          className={`product-card__img responsive-img`}
        />
      </div>
      <div className="product-card__details">
        <div className="add-to-wishlist_container">
          <div className="flex justify-between items-center rating-container">
            <span className="mr-1 flex justify-between items-center font-bold text-gray-800">
              {rating}
            </span>
            <span className="text-yellow-400 self-center">
              <StarSvg />
            </span>
          </div>
          <div
            className="add-to-wishlist"
            onClick={() =>
              inWishlist
                ? wishlistHandler(
                    "remove",
                    userId,
                    product._id,
                    setAlert,
                    userDispatch,
                    inWishlist
                  )
                : wishlistHandler(
                    "add",
                    userId,
                    product._id,
                    setAlert,
                    userDispatch,
                    inWishlist
                  )
            }
          >
            <span
              className={`add-to-wishlist-icon ${inWishlist && "text-red-400"}`}
            >
              <WishlistSvg toggle={inWishlist} />
            </span>
          </div>
        </div>
        <Link className={`text-link`} to={`product/${product._id}`}>
          <h1 className={`product-title`}>{title}</h1>
        </Link>
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
              "add",
              userId,
              product._id,
              setAlert,
              userDispatch,
              inCart
            )
          }
        >
          {translate("Add to Cart", language)}
        </button>
      </div>
    </article>
  );
};
