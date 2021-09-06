const addToCart = (state, product) => {
  const { _id } = product.product;
  const present = state.cart.find(
    (cartProduct) => cartProduct.product._id === _id
  );

  if (!present) {
    const updatedCart = [...state.cart, product];
    return { ...state, cart: updatedCart };
  }

  return state;
};

const removeFromCart = (state, productId) => {
  const updatedCart = state.cart?.filter(
    (product) => product.product._id !== productId
  );

  const updatedCartState = { ...state, cart: updatedCart };
  return updatedCartState;
};

const updateQty = (state, payload) => {
  const { productId, qty } = payload;
  const updatedState = state.cart?.map((product) => {
    if (product.product._id === productId) {
      product.qty = qty;
    }
    return product;
  });

  return { ...state, cart: updatedState };
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  const actions = {
    ADD_TO_CART: () => addToCart(state, payload),
    REMOVE_FROM_CART: () => removeFromCart(state, payload),
    MOVE_TO_CART: () => moveToCart(wishlist, state, payload),
    UPDATE_QTY: () => updateQty(state, payload),
    SET_CART: () => ({
      status: "succeeded",
      cart: payload,
      error: null,
    }),
    SET_STATUS: () => ({ ...state, status: payload }),
    SET_ERROR: () => ({ status: "error", cart: null, error: payload }),
  };

  const updatedState = actions[type];

  if (!updatedState) {
    throw new Error("Invalid cart reducer action");
  }

  return updatedState();
};
