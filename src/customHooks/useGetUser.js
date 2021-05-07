import { useEffect, useReducer } from "react";
import { getUserReducer, getUser } from "../functions";

export const useGetUser = () => {
  const [
    { user, errorMessage, cart, wishlist, wishlistItemIds, cartItemIds },
    dispatch
  ] = useReducer(getUserReducer, {
    user: {},
    cart: [],
    wishlist: [],
    cartItemIds: [],
    wishlistItemIds: [],
    errorMessage: ""
  });

  useEffect(() => getUser(dispatch), []);

  return {
    user,
    errorMessage,
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    userDispatch: dispatch
  };
};
// 6086fa0d0dfc55009dda056f
