import axios from "axios";
import { apiAddToWishlist } from "../api";

export const addToWishlist = async (
  userId,
  productId,
  setAlert,
  userDispatch
) => {
  try {
    setAlert({ show: true, type: "info", message: "Adding..." });
    const { data } = await axios.post(apiAddToWishlist(userId, productId));

    if (data.success) {
      const updatedWishlist = data.updatedWishlist.wishlist;

      const wishlistItemIds = updatedWishlist.map(
        (wishlistItem) => wishlistItem._id
      );

      const newPayload = {
        ...data.user,
        wishlist: updatedWishlist,
        wishlistItemIds,
      };

      setAlert({
        show: true,
        type: "success",
        message: "Added to Wishlist!",
      });

      userDispatch({ type: "UPDATE_WISHLIST", payload: newPayload });
    } else {
      setAlert({
        show: true,
        type: "warning",
        message: `${data.message}`,
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
