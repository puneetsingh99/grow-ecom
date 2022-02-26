import axios from "axios";
import { apiRemoveFromCart } from "../api";

export const removeFromCart = async (
  userId,
  productId,
  setAlert,
  userDispatch
) => {
  try {
    setAlert({ show: true, type: "info", message: "Removing... 😊" });

    const { data } = await axios.delete(apiRemoveFromCart(userId, productId));

    if (data.success) {
      const updatedCart = data.updatedCart.cart;

      const cartItemIds = updatedCart.map((cartItem) => cartItem.product._id);

      const newPayload = {
        ...data.user,
        cart: updatedCart,
        cartItemIds,
      };

      setAlert({
        show: true,
        type: "error",
        message: "Removed from Cart 👍",
      });

      userDispatch({ type: "UPDATE_CART", payload: newPayload });
    } else {
      setAlert({
        show: true,
        type: "warning",
        message: `${data.message} 😟`,
      });
    }
    return data;
  } catch (error) {
    setAlert({
      show: true,
      type: "error",
      message: `${error.message}`,
    });
  }
};
