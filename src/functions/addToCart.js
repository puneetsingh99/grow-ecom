import axios from "axios";

export const addToCart = async (userId, productId, setAlert, userDispatch) => {
  try {
    setAlert({ show: true, type: "info", message: "Adding... 😃" });

    const url = `https://e-commerce-backend.puneetsingh2.repl.co/users/${userId}/cart/${productId}`;
    const { data } = await axios.post(url);

    if (data.success) {
      const updatedCart = data.updatedCart.cart;

      const cartItemIds = updatedCart.map((cartItem) => cartItem.product._id);

      const newPayload = {
        ...data.user,
        cart: updatedCart,
        cartItemIds
      };

      setAlert({
        show: true,
        type: "success",
        message: "Added to Cart! 🥳"
      });

      userDispatch({ type: "UPDATE_CART", payload: newPayload });
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
