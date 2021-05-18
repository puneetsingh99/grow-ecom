import axios from "axios";

export const getUser = async (dispatch, userId) => {
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  console.log("userId being sent to getUser");
  console.log({ userId });
  if (!isUserLoggedIn) {
    return;
  }

  try {
    const { data } = await axios.get(
      `https://e-commerce-backend.puneetsingh2.repl.co/users/${userId}`
    );

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
