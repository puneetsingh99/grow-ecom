import { Navbar, Price } from "../";
import { useEffect } from "react";
import { getProduct } from "../../functions";
import { imageAltText, authorName } from "../";
import { StarSvg } from "../../assets";
import "../Cart/cart-styles.css";
import "./product-detail-styles.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { useAuth } from "../../contexts";
import { useCart } from "../../contexts/CartContext/CartContext";
import { useWishlist } from "../../contexts/WishlistContext/WishlistContext";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId, setProduct);
  }, []);

  const { onAddToCartClicked } = useCart();
  const { onAddToWishlistClicked } = useWishlist();

  return (
    <main className={`product-description`}>
      <Navbar />
      {product && Object.keys(product).length === 0 && <Loader />}
      {product && Object.keys(product).length > 0 && (
        <main className={`product-detail-page`}>
          <article className={`product-detail-card`}>
            <div className={`product__info`}>
              <div className={`product__img__container-mobile`}>
                <div className={`product__img-container`}>
                  <img
                    src={product.image}
                    alt={imageAltText(product.title, product.author)}
                    className={`product__img`}
                  />
                </div>
              </div>
              <div className={`product__details`}>
                <h1 className={`product__details-title`}>{product.title}</h1>
                <p className={`product__details-creator`}>
                  {authorName(product.author)}
                </p>
                <div className={`flex product-price`}>
                  <Price
                    mrp={product.price}
                    offerPercentage={product.offerPercentage}
                  />
                  <p className={`ml-2 text-red-400 font-medium`}>
                    {`${
                      product.offerPercentage !== 0
                        ? `${product.offerPercentage}% off`
                        : ""
                    }`}
                  </p>
                </div>
                <div className="flex justify-between items-center w-8 mb-4 rating-container">
                  <span className="mr-1 flex justify-between items-center font-bold text-gray-800">
                    {product.rating}
                  </span>
                  <span className="text-yellow-400 self-center">
                    <StarSvg />
                  </span>
                </div>
                <div className={`mb-8 product__details-btn-container`}>
                  <button
                    className="btn-add-to-cart product__details-btn-add-to-wishlist"
                    onClick={() => onAddToWishlistClicked(product)}
                  >
                    Add to Wishlist
                  </button>

                  <button
                    className="btn-add-to-cart product__details-btn-add-to-cart"
                    onClick={() => onAddToCartClicked(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className={`product-description-container`}>
                  <h2>About this book</h2>
                  <p className={`product-description`}>{product.description}</p>
                </div>
              </div>
            </div>
          </article>
        </main>
      )}
    </main>
  );
};
