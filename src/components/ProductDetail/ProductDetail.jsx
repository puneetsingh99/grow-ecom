import { Navbar } from "../";
import { imageAltText, authorName, Price } from "../";
import { useECommerce, useLocalization } from "../../customHooks";
import {
  translate,
  wishlistHandler,
  cartHandler,
  getFilteredData
} from "../../functions";
import { DismissSvg, DropDownSvg } from "../../assets";
import "../Cart/cart-styles.css";
import { QuantitySelector } from "../Cart/QuantitySelector";
import { QuantitySelectorModal } from "../Cart/QuantitySelectorModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../../customHooks/useGetProductDetail";

export const ProductDetail = () => {
  const { productId } = useParams();
  const { filteredData } = useECommerce();
  const product = filteredData.find((product) => product._id === productId);

  const { image, title, author } = product;

  console.log({ author });

  return (
    <main className={`product-description`}>
      <Navbar />
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
          </div>
        </div>
      </article>
    </main>
  );
};

{
  /* // Upon initial load get the wishlist and cart of the user.
// then using that  id match the product's id. if it's present in the cart then set
// in cart flag and similarly for wishlist flag */
}
