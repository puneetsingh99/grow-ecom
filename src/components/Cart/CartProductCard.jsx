import { imageAltText, authorName, Price } from "..";
import { useLocalization } from "../../customHooks";
import "../ProductCard/product-card-styles.css";
import { DismissSvg, DropDownSvg } from "../../assets";
import "../Cart/cart-styles.css";
import { QuantitySelectorModal } from "./QuantitySelectorModal";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext/CartContext";
import { useMoveToWishlist } from "./hooks/useMoveToWishlist";
import { goToProductRoute } from "../../routes";
import { Link } from "react-router-dom";

export const CartProductCard = ({ product }) => {
  const { language } = useLocalization();
  const [showQtyModal, setShowQtyModal] = useState(false);

  const { removeFromCart } = useCart();

  const { image, title, author, price: mrp, offerPercentage } = product.product;
  const { qty } = product;
  const { onMoveToWishlistClicked } = useMoveToWishlist();
  const qtySelectorProps = { showQtyModal, setShowQtyModal, qty };

  return (
    <article className={`cart-product-card`}>
      <div className={`cart-product-card__info`}>
        <Link
          className={`text-link`}
          to={goToProductRoute(product.product._id)}
        >
          <div className={`cart-product-card__img-container`}>
            <img
              src={image}
              alt={imageAltText(title, author)}
              className={`cart-product-card__img`}
              loading="lazy"
            />
          </div>
        </Link>
        <div className={`cart-product-card__details`}>
          <Link
            className={`text-link`}
            to={goToProductRoute(product.product._id)}
          >
            <h1 className={`product-title--cart`}>{title}</h1>
          </Link>
          <p className={`product-creator product-creator--cart mb-4`}>
            {authorName(author)}
          </p>
          <div className={`flex`}>
            <Price mrp={mrp} offerPercentage={offerPercentage} />
            <p className={`ml-2 text-red-400 font-medium`}>
              {`${offerPercentage !== 0 ? `${offerPercentage}% off` : ""}`}
            </p>
          </div>
          <div
            className={`cart-product-qty`}
            onClick={() => setShowQtyModal(true)}
          >
            <p
              className={`cart-product-qty-indicator flex align-items justify-between`}
            >
              {`Qty ${qty}`}
              <span className={`flex align-items drop-down-svg`}>
                <DropDownSvg />
              </span>
            </p>
          </div>
          {showQtyModal && (
            <QuantitySelectorModal
              {...qtySelectorProps}
              productId={product.product._id}
            />
          )}
        </div>
      </div>

      <div className="cart-btn-container">
        <div className="cart-btn-remove__wrapper">
          <button
            className="cart-btn cart-btn--remove"
            onClick={() => removeFromCart(product.product._id)}
          >
            Remove
          </button>
        </div>
        <div className="cart-btn-move-to-wishlist__wrapper">
          <button
            className="cart-btn cart-btn--move-to-wishlist"
            onClick={() => onMoveToWishlistClicked(product.product)}
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </article>
  );
};
