const addToWishlist = (state, product) => {
  const present = state.wishlist.find(
    (wishlistProduct) => wishlistProduct._id === product._id
  );

  if (!present) {
    const updatedWishlist = [...state.wishlist, product];
    return { ...state, wishlist: updatedWishlist };
  }

  return state;
};

const removeFromWishlist = (state, productId) => {
  const updatedWishlist = state.wishlist?.filter(
    (product) => product._id !== productId
  );

  const updatedWishlistState = { ...state, wishlist: updatedWishlist };
  console.log(updatedWishlistState);
  return updatedWishlistState;
};

export const wishlistReducer = (state, action) => {
  const { type, payload } = action;

  const actions = {
    ADD_TO_WISHLIST: () => addToWishlist(state, payload),
    REMOVE_FROM_WISHLIST: () => removeFromWishlist(state, payload),
    MOVE_TO_CART: () => moveToCart(cart, state, payload),
    SET_WISHLIST: () => ({
      status: "succeeded",
      wishlist: payload,
      error: null,
    }),
    SET_STATUS: () => ({ ...state, status: payload }),
    SET_ERROR: () => ({ status: "error", wishlist: null, error: payload }),
  };

  const updatedState = actions[type];

  if (!updatedState) {
    throw new Error("Invalid wishlist reducer action");
  }

  return updatedState();
};
