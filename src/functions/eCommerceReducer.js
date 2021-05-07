export const eCommerceReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };

    case "FAST_DELIVERY":
      return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };

    case "IN_STOCK":
      return { ...state, inStockOnly: !state.inStockOnly };

    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };

    case "LEVEL":
      return {
        ...state,
        levels: [...state.levels, action.payload]
      };

    case "CATEGORIES":
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };

    case "PRODUCT_TYPE":
      return {
        ...state,
        productType: [...state.productType, action.payload]
      };

    case "DELIVERY_TYPE":
      return {
        ...state,
        deliveryType: [...state.deliveryType, action.payload]
      };

    case "STOCK_AVAILABILITY":
      return {
        ...state,
        stockAvailability: [...state.stockAvailability, action.payload]
      };

    case "REMOVE_LEVEL":
      return {
        ...state,
        levels: state.levels.filter((level) => level !== action.payload)
      };

    case "REMOVE_CATEGORIES":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category !== action.payload
        )
      };

    case "REMOVE_PRODUCT_TYPE":
      return {
        ...state,
        productType: state.productType.filter(
          (product) => product !== action.payload
        )
      };

    case "REMOVE_DELIVERY_TYPE":
      return {
        ...state,
        deliveryType: state.deliveryType.filter(
          (deliveryMethod) => deliveryMethod !== action.payload
        )
      };

    case "REMOVE_STOCK_AVAILABILITY":
      return {
        ...state,
        stockAvailability: state.stockAvailability.filter(
          (stock) => stock !== action.payload
        )
      };

    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        levels: [],
        categories: [],
        productType: [],
        inStockOnly: true,
        fastDeliveryOnly: false
      };

    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [action.payload, ...state.wishlist] };

    case "ADD_TO_CART":
      return { ...state, cart: [action.payload, ...state.cart] };

    default:
      return state;
  }
};

// functionalities  to be implemented
// 1. addToCart
// 2. addToWishlist

// 1. ADD_TO_CART
// Initial value of useReducer will be something like this:
//  {productListing : {sortBy: "none", filterBy: "none"}, wishlist:[], cart:[]}
