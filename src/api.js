export const API_ROOT = `http://localhost:5000`;

// export const API_ROOT = `https://radiant-depths-11487.herokuapp.com`;

export const API_ALL_PRODUCTS = `${API_ROOT}/products`;
export const API_LOGIN = `${API_ROOT}/login`;
export const API_SIGNUP = `${API_ROOT}/users`;

export const apiGetUser = (userId) => `${API_ROOT}/users/${userId}`;
export const apiGetCart = (userId) => `${API_ROOT}/users/${userId}/cart`;
export const apiGetWishlist = (userId) =>
  `${API_ROOT}/users/${userId}/wishlist`;

export const apiAddToWishlist = (userId, productId) =>
  `${API_ROOT}/users/${userId}/wishlist/${productId}`;

export const apiMoveToWishlist = (userId, productId) =>
  `${API_ROOT}/users/${userId}/movetowishlist/${productId}`;

export const apiRemoveFromWishlist = (userId, productId) =>
  `${API_ROOT}/users/${userId}/wishlist/${productId}`;

export const apiAddToCart = (userId, productId) =>
  `${API_ROOT}/users/${userId}/cart/${productId}`;

export const apiRemoveFromCart = (userId, productId) =>
  `${API_ROOT}/users/${userId}/cart/${productId}`;

export const apiMoveToCart = (userId, productId) =>
  `${API_ROOT}/users/${userId}/movetocart/${productId}`;

export const apiUpdateQty = (userId, productId, qty) => {
  console.log(`${API_ROOT}/${userId}/cart/${productId}/${qty}`);
  return `${API_ROOT}/users/${userId}/cart/${productId}/${String(qty)}`;
};
