import { ECommerceContext } from "../contexts/ECommerceContext";
import { useContext } from "react";

export const useECommerce = () => {
  const {
    eCommerceState,
    filteredData,
    loading,
    errorMessage,
    eCommerceDispatch,
    user,
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    fetchUserErrorMessage,
    userDispatch
  } = useContext(ECommerceContext);
  return {
    eCommerceState,
    filteredData,
    loading,
    errorMessage,
    eCommerceDispatch,
    user,
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    fetchUserErrorMessage,
    userDispatch
  };
};
