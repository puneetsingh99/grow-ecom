export const getUserReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        cart: [...state.cart, ...action.payload.cart],
        wishlist: [...state.wishlist, ...action.payload.wishlist],
        cartItemIds: [...action.payload.cartItemIds],
        wishlistItemIds: [...action.payload.wishlistItemIds]
      };

    case "UPDATE_CART":
      return {
        ...state,
        cart: [...action.payload.cart],
        cartItemIds: [...action.payload.cartItemIds]
      };

    case "MOVE_TO_CART":
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
        cart: [...action.payload.cart],
        cartItemIds: [...action.payload.cartItemIds],
        wishlistItemIds: [...action.payload.wishlistItemIds]
      };

    case "UPDATE_WISHLIST":
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
        wishlistItemIds: [...action.payload.wishlistItemIds]
      };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
        cart: [...action.payload.cart],
        cartItemIds: [...action.payload.cartItemIds]
      };

    case "ERROR":
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
