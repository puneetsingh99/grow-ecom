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
  const { isUserLoggedIn, loggedInUser } = useAuth();

  const {
    levels,
    categories,
    productType,
    fastDeliveryOnly,
    inStockOnly,
    sortBy,
    search,
  } = eCommerceState;

  const sortedData = getSortedData(allProducts, sortBy);

  const filteredData = getFilteredData(
    sortedData,
    levels,
    categories,
    productType,
    fastDeliveryOnly,
    inStockOnly,
    search
  );

  // Fetching user
  const {
    user,
    errorMessage: fetchUserErrorMessage,
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    userDispatch,
  } = useGetUser(isUserLoggedIn, loggedInUser);

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
      }}
    >
      {children}
    </ECommerceContext.Provider>
  );
};
