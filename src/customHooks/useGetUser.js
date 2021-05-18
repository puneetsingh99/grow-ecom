import { useEffect, useReducer } from "react";
import { useAuth } from "../contexts";
import { getUserReducer, getUser } from "../functions";

export const useGetUser = (isUserLoggedIn, loggedInUser) => {
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
    if (loggedInUser) {
      getUser(dispatch, loggedInUser);
    }
  }, [loggedInUser]);

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
// 6086fa0d0dfc55009dda056f
