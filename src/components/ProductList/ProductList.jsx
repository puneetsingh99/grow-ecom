import { ProductCard, AlertHandler } from "../";
import "./product-list-styles.css";
import { useECommerce, useCurrencyConverter } from "../../customHooks";
import { useState } from "react";

export const ProductList = ({ filteredData }) => {
  const { cartItemIds, wishlistItemIds, user, userDispatch } = useECommerce();
  const { currencySymbol, selectedCurrencyRate } = useCurrencyConverter();

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  return (
    <ul className={`product-list`}>
      {filteredData.map((product) => {
        return (
          <li key={product._id}>
            {
              <ProductCard
                product={product}
                userId={user._id}
                setAlert={setAlert}
                currencySymbol={currencySymbol}
                selectedCurrencyRate={selectedCurrencyRate}
                userDispatch={userDispatch}
                wishlistItemIds={wishlistItemIds}
                cartItemIds={cartItemIds}
              />
            }
          </li>
        );
      })}
      {alert.show && <AlertHandler {...alert} setAlert={setAlert} />}
    </ul>
  );
};
