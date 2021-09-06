import { Navbar, Price } from "../";
import { imageAltText, authorName } from "../";
import { StarSvg } from "../../assets";
import { useECommerce, useGetProduct } from "../../customHooks";
import "../Cart/cart-styles.css";
import "./product-detail-styles.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { useAuth } from "../../contexts";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useGetProduct(productId, setProduct);

  const { userId } = useAuth();

  const { userDispatch, inWishlist, inCart } = useECommerce();

  const {
    image,
    author,
    title,
    rating,
    price: mrp,
    offerPercentage,
    description,
  } = product;

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  return (
    <main className={`product-description`}>
      <Navbar />
      {Object.keys(product).length === 0 && <Loader />}
      {Object.keys(product).length > 0 && (
        <main className={`product-detail-page`}>
          <article className={`product-detail-card`}>
            <div className={`product__info`}>
              <div className={`product__img__container-mobile`}>
                <div className={`product__img-container`}>
                  <img
                    src={image}
                    alt={imageAltText(title, author)}
                    className={`product__img`}
                  />
                </div>
              </div>
              <div className={`product__details`}>
                <h1 className={`product__details-title`}>{title}</h1>
                <p className={`product__details-creator`}>
                  {authorName(author)}
                </p>
                <div className={`flex product-price`}>
                  <Price mrp={mrp} offerPercentage={offerPercentage} />
                  <p className={`ml-2 text-red-400 font-medium`}>
                    {`${
                      offerPercentage !== 0 ? `${offerPercentage}% off` : ""
                    }`}
                  </p>
                </div>
                <div className="flex justify-between items-center w-8 mb-4 rating-container">
                  <span className="mr-1 flex justify-between items-center font-bold text-gray-800">
                    {rating}
                  </span>
                  <span className="text-yellow-400 self-center">
                    <StarSvg />
                  </span>
                </div>
                <div className={`mb-8 product__details-btn-container`}>
                  <button
                    className="btn-add-to-cart product__details-btn-add-to-wishlist"
                    onClick={() =>
                      wishlistHandler(
                        "add",
                        userId,
                        product._id,
                        setAlert,
                        userDispatch,
                        inWishlist
                      )
                    }
                  >
                    Add to Wishlist
                  </button>

                  <button
                    className="btn-add-to-cart product__details-btn-add-to-cart"
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
                    Add to Cart
                  </button>
                </div>
                <div className={`product-description-container`}>
                  <h2>Description</h2>
                  <p className={`product-description`}>{description}</p>
                </div>
              </div>
            </div>
          </article>
        </main>
      )}
    </main>
  );
};
