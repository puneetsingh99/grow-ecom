import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTE_LOGIN } from "../../routes";
import { cartReducer } from "./cartReducer";
import { getCart } from "./getCart";
import { toastConfig } from "../../utils";
import axios from "axios";
import { apiAddToCart, apiRemoveFromCart, apiUpdateQty } from "../../api";
import { toast } from "react-toastify";
import {
  addToCartStates,
  removeFromCartStates,
  updateQtyStates,
} from "./constants";

export const CartContext = createContext(null);

const initialState = {
  status: "idle",
  cart: null,
  error: null,
};

export const CartProvider = ({ children }) => {
  const { isUserLoggedIn, userId } = useAuth();
  const location = useLocation();

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const inCart = (productId) => {
    const productExists = cartState.cart?.find(
      (product) => product?.product?._id === productId
    );
    return productExists;
  };

  const onAddToCartClicked = async (product) => {
    if (!isUserLoggedIn) {
      return <Navigate state={{ from: location.pathname }} to={ROUTE_LOGIN} />;
    }

    inCart(product._id)
      ? toast.success("Already in cart", toastConfig)
      : addToCart(product);
  };

  const removeFromCart = async (productId) => {
    try {
      const { data } = await toast.promise(
        axios.delete(apiRemoveFromCart(userId, productId)),
        removeFromCartStates,
        toastConfig
      );
      if (data.updatedCart) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: productId });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToCart = async (product) => {
    try {
      const { data } = await toast.promise(
        axios.post(apiAddToCart(userId, product._id)),
        addToCartStates,
        toastConfig
      );
      if (data.updatedCart) {
        cartDispatch({ type: "ADD_TO_CART", payload: { product, qty: 1 } });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const cartTotal = () => {
    const cartLength = cartState.cart?.length;

    if (!cartLength) {
      return { total, discountedTotal };
    }

    let total = 0;
    let discountedTotal = 0;

    for (let i = 0; i < cartLength; i++) {
      const { qty, product } = cartState.cart[i];
      total += qty * product.price;
      discountedTotal +=
        qty * product.price * (1 - product.offerPercentage / 100);
    }

    return { total, discountedTotal };
  };

  const cartCount = () => {
    const length = cartState.cart?.length || 0;
    return length;
  };

  const onSelectQty = async (productId, qty) => {
    try {
      const { data } = await toast.promise(
        axios.post(apiUpdateQty(userId, productId, qty)),
        updateQtyStates,
        toastConfig
      );
      if (data.updatedCart) {
        cartDispatch({ type: "UPDATE_QTY", payload: { productId, qty } });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (!isUserLoggedIn) {
      cartDispatch({
        type: "SET_CART",
        payload: [],
      });
    }

    if (isUserLoggedIn) {
      (async function () {
        try {
          cartDispatch({ type: "SET_STATUS", payload: "loading" });
          const response = await getCart(userId);
          if (response.cart) {
            return cartDispatch({
              type: "SET_CART",
              payload: response.cart.cart,
            });
          }

          cartDispatch({
            type: "SET_ERROR",
            payload: response.message,
          });
        } catch (error) {
          console.error(error.message);
          toast.error("Something went wrong. Please try later.", toastConfig);
        }
      })();
    }
  }, [userId, isUserLoggedIn]);

  const context = {
    cartState,
    cartDispatch,
    onAddToCartClicked,
    addToCart,
    removeFromCart,
    inCart,
    cartTotal,
    cartCount,
    onSelectQty,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
