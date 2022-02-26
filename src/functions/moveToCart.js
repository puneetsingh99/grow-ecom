import axios from "axios";
import { apiMoveToCart } from "../api";

export const moveToCart = async (userId, productId, setAlert, userDispatch) => {
  try {
    setAlert({ show: true, type: "info", message: "Moving... 😃" });

    const { data } = await axios.post(apiMoveToCart(userId, productId));

    if (data.success) {
      const updatedCart = data.updatedCart.cart;
      const updatedWishlist = data.updatedCart.wishlist;

      const cartItemIds = updatedCart.map((cartItem) => cartItem.product._id);
      const wishlistItemIds = updatedWishlist.map(
        (wishlistItem) => wishlistItem._id
      );

      const newPayload = {
        ...data.user,
        wishlist: updatedWishlist,
        cart: updatedCart,
        cartItemIds,
        wishlistItemIds,
      };

      setAlert({
        show: true,
        type: "success",
        message: "Moved to Cart! 🥳",
      });

      userDispatch({ type: "MOVE_TO_CART", payload: newPayload });
    } else {
      setAlert({
        show: true,
        type: "warning",
        message: `${data.message} 😅`,
      });
    }
    return data;
  } catch (error) {
    setAlert({
      show: true,
      type: "error",
      message: `${error.message} 😟`,
    });
  }
};
