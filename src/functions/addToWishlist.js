import axios from "axios";

export const addToWishlist = async (
  userId,
  productId,
  setAlert,
  userDispatch
) => {
  try {
    setAlert({ show: true, type: "info", message: "Adding... 😃" });

    const url = `https://e-commerce-backend.puneetsingh2.repl.co/users/${userId}/wishlist/${productId}`;
    const { data } = await axios.post(url);

    if (data.success) {
      const updatedWishlist = data.updatedWishlist.wishlist;

      const wishlistItemIds = updatedWishlist.map(
        (wishlistItem) => wishlistItem._id
      );

      const newPayload = {
        ...data.user,
        wishlist: updatedWishlist,
        wishlistItemIds
      };

      setAlert({
        show: true,
        type: "success",
        message: "Added to Wishlist! 🥳"
      });

      userDispatch({ type: "UPDATE_WISHLIST", payload: newPayload });
    } else {
      setAlert({
        show: true,
        type: "warning",
        message: `${data.message} 😅`
      });
    }
    return data;
  } catch (error) {
    setAlert({
      show: true,
      type: "error",
      message: `${error.message} 😟`
    });
  }
};
