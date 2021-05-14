import { imageAltText, authorName, Price } from "../";
import { useLocalization } from "../../customHooks";
import { translate, wishlistHandler, cartHandler } from "../../functions";
import "./product-card-styles.css";
import { DismissSvg, DropDownSvg } from "../../assets";
import "../Cart/cart-styles.css";
import { QuantitySelector } from "../Cart/QuantitySelector";
import { QuantitySelectorModal } from "../Cart/QuantitySelectorModal";
import { useState } from "react";

export const CartProductCard = ({
  product,
  userId,
  setAlert,
  currencySymbol,
  selectedCurrencyRate,
  userDispatch,
  cartItemIds,
  wishlistItemIds,
  qty,
  alert
}) => {
  const { language } = useLocalization();
  const inWishlist = wishlistItemIds.includes(product._id);
  const inCart = cartItemIds.includes(product._id);
  const [showQtyModal, setShowQtyModal] = useState(false);

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
    <article className={`cart-product-card`}>
      {/* img and details container */}
      <div className={`cart-product-card__info`}>
        <div className={`cart-product-card__img-container`}>
          <img
            src={image}
            alt={imageAltText(title, author)}
            className={`cart-product-card__img`}
          />
        </div> 
        <div className={`cart-product-card__details`}>
          <h1 className={`product-title--cart`}>{title}</h1>
          <p className={`product-creator product-creator--cart mb-4`}>
            {authorName(author)}
          </p>
          <div className={`flex`}>
            <Price
              mrp={mrp}
              offerPercentage={offerPercentage}
              currencySymbol={currencySymbol}
              selectedCurrencyRate={selectedCurrencyRate}
            />
            <p className={`ml-2 text-red-400 font-medium`}>
              {`${offerPercentage !== 0 ? `${offerPercentage}% off` : ""}`}
            </p>
          </div>
          <div
            className={`cart-product-qty`}
            onClick={() => setShowQtyModal(() => true)}
          >
            <p
              className={`cart-product-qty-indicator flex align-items justify-between`}
            >
              {`Qty ${qty}`}{" "}
              <span className={`flex align-items drop-down-svg`}>
                <DropDownSvg />
              </span>
            </p>
          </div>
          {showQtyModal && (
            <QuantitySelectorModal
              showQtyModal={showQtyModal}
              setShowQtyModal={setShowQtyModal}
              userId={userId}
              qty={qty}
              productId={product._id}
              setAlert={setAlert}
              alert={alert}
              userDispatch={userDispatch}
              inCart={inCart}
            />
          )}
        </div>
      </div>

      {/* btn container */}
      <div className="cart-btn-container">
        <div className="cart-btn-remove__wrapper">
          <button
            className="cart-btn cart-btn--remove"
            onClick={() => {
              cartHandler(
                "remove",
                userId,
                product._id,
                setAlert,
                userDispatch,
                inCart
              );
            }}
          >
            {/* {translate("Remove", language)} */}
            Remove
          </button>
        </div>
        <div className="cart-btn-move-to-wishlist__wrapper">
          <button
            className="cart-btn cart-btn--move-to-wishlist"
            onClick={() =>
              wishlistHandler(
                "move",
                userId,
                product._id,
                setAlert,
                userDispatch,
                inCart
              )
            }
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </article>
  );
};

// Upon initial load get the wishlist and cart of the user.
// then using that  id match the product's id. if it's present in the cart then set
// in cart flag and similarly for wishlist flag
