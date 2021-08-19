import { addToCart, moveToCart, updateQty } from "./";
import { removeFromCart } from "./removeFromCart";

export const cartHandler = (
  operation,
  userId,
  productId,
  setAlert,
  userDispatch,
  inCart,
  qty = 1
) => {
  switch (operation) {
    case "add":
      inCart
        ? setAlert({
            show: true,
            type: "success",
            message: `Added to Cart! 🥳`,
          })
        : addToCart(userId, productId, setAlert, userDispatch);
      break;

    case "move":
      moveToCart(userId, productId, setAlert, userDispatch);
      break;

    case "updateQty":
      updateQty(userId, productId, setAlert, userDispatch, qty);
      break;

    case "remove":
      removeFromCart(userId, productId, setAlert, userDispatch);
      break;

    default:
      break;
  }
};
