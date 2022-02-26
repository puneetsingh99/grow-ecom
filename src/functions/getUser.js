import axios from "axios";
import { apiGetUser } from "../api";

export const getUser = async (dispatch, userId) => {
  try {
    const { data } = await axios.get(apiGetUser(userId));

    const cartItemIds = data.user.cart.map((cartItem) => cartItem.product._id);
    const wishlistItemIds = data.user.wishlist.map(
      (wishlistItem) => wishlistItem._id
    );

    const newPayload = { ...data.user, cartItemIds, wishlistItemIds };

    dispatch({
      type: "FETCH_USER",
      payload: newPayload,
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
