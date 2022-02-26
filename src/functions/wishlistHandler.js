import { addToWishlist, removeFromWishlist, moveToWishlist } from "./";

export const wishlistHandler = (
  operation,
  userId,
  productId,
  setAlert,
  userDispatch,
  inWishlist
) => {
  console.log(userId);
  switch (operation) {
    case "add":
      inWishlist
        ? setAlert({
            show: true,
            type: "info",
            message: `Product already present in Wishlist 😊`,
          })
        : addToWishlist(userId, productId, setAlert, userDispatch);
      break;

    case "move":
      moveToWishlist(userId, productId, setAlert, userDispatch);
      break;

    case "remove":
      removeFromWishlist(userId, productId, setAlert, userDispatch);
      break;
    default:
      break;
  }
};
