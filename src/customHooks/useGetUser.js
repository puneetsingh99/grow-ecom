import { useEffect, useReducer } from "react";
import { useAuth } from "../contexts";
import { getUserReducer, getUser } from "../functions";

export const useGetUser = () => {
  const { isUserLoggedIn, userId } = useAuth();
  const [
    { user, errorMessage, cart, wishlist, wishlistItemIds, cartItemIds },
    dispatch,
  ] = useReducer(getUserReducer, {
    user: {},
    cart: [],
    wishlist: [],
    cartItemIds: [],
    wishlistItemIds: [],
    errorMessage: "",
  });

  useEffect(() => {
    if (isUserLoggedIn) {
      getUser(dispatch, userId);
    }
  }, [isUserLoggedIn]);

  return {
    user,
    errorMessage,
    cart,
    wishlist,
    cartItemIds,
    wishlistItemIds,
    userDispatch: dispatch,
  };
};
