import { createContext, useReducer } from "react";
import { eCommerceReducer, getFilteredData, getSortedData } from "../functions";
import { useGetProducts, useGetUser } from "../customHooks";
import { useAuth } from "./AuthContext";

export const ECommerceContext = createContext();

export const ECommerceProvider = ({ children }) => {
  const [eCommerceState, eCommerceDispatch] = useReducer(eCommerceReducer, {
    sortBy: "RECOMMENDED",
    search: "",
    levels: [],
    categories: [],
    productType: [],
    fastDeliveryOnly: false,
    inStockOnly: true,
    wishList: [],
    cart: [],
  });

  const { allProducts, loading, errorMessage } = useGetProducts();

  const {
    levels,
    categories,
    productType,
    fastDeliveryOnly,
    inStockOnly,
    sortBy,
    search,
  } = eCommerceState;

  const getSortedData = (filteredData) => {
    switch (sortBy) {
      case "RECOMMENDED":
        return [...filteredData.sort((a, b) => b["rating"] - a["rating"])];
      case "PRICE_LOW_TO_HIGH":
        return [...filteredData.sort((a, b) => a["price"] - b["price"])];
      case "PRICE_HIGH_TO_LOW":
        return [...filteredData.sort((a, b) => b["price"] - a["price"])];
      case "HIGHEST_RATED":
        return [...filteredData.sort((a, b) => b["rating"] - a["rating"])];
      default:
        return filteredData;
    }
  };

  const getFilteredData = (data) => {
    const filteredByProductType =
      productType.length === 0
        ? data
        : data.filter((item) => productType.includes(item.productType));

    const filteredByDeliveryType = fastDeliveryOnly
      ? filteredByProductType.filter((item) => item.fastDelivery)
      : filteredByProductType;

    const filteredByStockAvailability = inStockOnly
      ? filteredByDeliveryType.filter((item) => item.inStock)
      : filteredByDeliveryType;

    const filteredByLevel =
      levels.length === 0
        ? filteredByStockAvailability
        : filteredByStockAvailability.filter((item) =>
            levels.includes(item.level)
          );

    const filteredByCategory =
      categories.length === 0
        ? filteredByLevel
        : filteredByLevel.filter((item) => categories.includes(item.category));

    return filteredByCategory;
  };

  // ["course", "investing", "fastdelivery"]
  // Note : product of type course will not have an option of delivery type:

  // possible  types of filters;
  // productType
  // level
  // fastDelivery
  // instock
  // categories.

  const sortedData = getSortedData(allProducts);

  const filteredData = getFilteredData(sortedData);

  const {
    user,
    errorMessage: fetchUserErrorMessage,
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    userDispatch,
  } = useGetUser();

  return (
    <ECommerceContext.Provider
      value={{
        eCommerceState,
        filteredData,
        sortBy,
        loading,
        errorMessage,
        eCommerceDispatch,
        user,
        fetchUserErrorMessage,
        cart,
        wishlist,
        cartItemIds,
        wishlistItemIds,
        userDispatch,
        getSortedData,
        getFilteredData,
      }}
    >
      {children}
    </ECommerceContext.Provider>
  );
};
