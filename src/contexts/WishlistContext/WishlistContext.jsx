import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTE_LOGIN } from "../../routes";
import { wishlistReducer } from "./wishlistReducer";
import { getWishlist } from "./getWishlist";
import { toastConfig } from "../../utils";
import axios from "axios";
import { apiAddToWishlist, apiRemoveFromWishlist } from "../../api";
import { toast } from "react-toastify";
import { addToWishlistStates, removeFromWishlistStates } from "./constants";

export const WishlistContext = createContext(null);

const initialState = {
  status: "idle",
  wishlist: null,
  error: null,
};

export const WishlistProvider = ({ children }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn, userId } = useAuth();

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  const inWishlist = (productId) => {
    const productExists = wishlistState.wishlist?.find(
      (product) => product._id === productId
    );
    return productExists;
  };

  const onAddToWishlistClicked = async (product) => {
    if (!isUserLoggedIn) {
      return navigate(ROUTE_LOGIN);
    }
    if (inWishlist(product._id)) {
      return removeFromWishlist(product._id);
    }
    addToWishlist(product);
  };

  const removeFromWishlist = async (productId) => {
    try {
      const { data } = await toast.promise(
        axios.delete(apiRemoveFromWishlist(userId, productId)),
        removeFromWishlistStates,
        toastConfig
      );

      if (data.updatedWishlist) {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const { data } = await toast.promise(
        axios.post(apiAddToWishlist(userId, product._id)),
        addToWishlistStates,
        toastConfig
      );

      if (data.updatedWishlist) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (userId) {
      (async function () {
        try {
          wishlistDispatch({ type: "SET_STATUS", payload: "loading" });
          const response = await getWishlist(userId);
          if (response.wishlist) {
            return wishlistDispatch({
              type: "SET_WISHLIST",
              payload: response.wishlist.wishlist,
            });
          }

          wishlistDispatch({
            type: "SET_ERROR",
            payload: response.message,
          });
        } catch (error) {
          console.error(error.message);
          toast.error("Something went wrong. Please try later.", toastConfig);
        }
      })();
    }
  }, [userId]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        onAddToWishlistClicked,
        removeFromWishlist,
        inWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
