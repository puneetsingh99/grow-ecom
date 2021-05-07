import axios from "axios";

export const updateQty = async (
  userId,
  productId,
  setAlert,
  userDispatch,
  qty
) => {
  try {
    setAlert({ show: true, type: "info", message: "Updating... 😃" });

    const url = `https://e-commerce-backend.puneetsingh2.repl.co/users/${userId}/cart/${productId}?qty=${qty}`;

    const { data } = await axios.post(url);

    if (data.success) {
      const updatedCart = data.updatedCart.cart;

      const cartItemIds = updatedCart.map((cartItem) => cartItem.product._id);

      const newPayload = {
        ...data.user,
        cart: updatedCart,
        cartItemIds
      };

      userDispatch({ type: "UPDATE_CART", payload: newPayload });

      setAlert({
        show: true,
        type: "success",
        message: "Quantity Updated! 🥳"
      });
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
