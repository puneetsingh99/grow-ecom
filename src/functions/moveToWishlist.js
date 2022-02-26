import axios from "axios";
import { apiMoveToWishlist } from "../api";

export const moveToWishlist = async (
  userId,
  productId,
  setAlert,
  userDispatch
) => {
  try {
    setAlert({ show: true, type: "info", message: "Moving... 😃" });

    const { data } = await axios.post(apiMoveToWishlist(userId, productId));

    if (data.success) {
      const updatedCart = data.updatedWishlist.cart;
      const updatedWishlist = data.updatedWishlist.wishlist;

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
        message: "Moved to Wishlist! 🥳",
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
