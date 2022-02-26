import { imageAltText, authorName, Price } from "../";
import { useLocalization } from "../../customHooks";
import { translate } from "../../functions";
import "./product-card-styles.css";
import { StarSvg } from "../../assets";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useWishlist } from "../../contexts/WishlistContext/WishlistContext";
import { useCart } from "../../contexts/CartContext/CartContext";
import { goToProductRoute } from "../../routes";

export const ProductCard = ({ product }) => {
  const { language } = useLocalization();
  const { image, title, author, price: mrp, offerPercentage, rating } = product;

  const { onAddToWishlistClicked, inWishlist } = useWishlist();
  const { onAddToCartClicked } = useCart();

  return (
    <article className={`product-card`}>
      <Link className={`text-link`} to={goToProductRoute(product._id)}>
        <div className={`product-card__img-container`}>
          <img
            src={image}
            alt={imageAltText(title, author)}
            className={`product-card__img responsive-img`}
            loading="lazy"
            title={title}
          />
        </div>
      </Link>
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
            onClick={() => onAddToWishlistClicked(product)}
            title={
              inWishlist(product._id)
                ? `Remove from Wishlist`
                : `Add to Wishlist`
            }
          >
            <span
              className={`add-to-wishlist-icon ${
                inWishlist(product._id) && `text-red-500`
              }`}
            >
              {inWishlist(product._id) ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
          </div>
        </div>
        <Link className={`text-link`} to={goToProductRoute(product._id)}>
          <h1 className={`product-title`} title={title}>
            {title}
          </h1>
        </Link>
        <p className={`product-creator`}>{authorName(author)}</p>
        <Price mrp={mrp} offerPercentage={offerPercentage} />
        <button
          className="btn-add-to-cart"
          onClick={() => onAddToCartClicked(product)}
          title={translate("Add to Cart", language)}
        >
          {translate("Add to Cart", language)}
        </button>
      </div>
    </article>
  );
};
