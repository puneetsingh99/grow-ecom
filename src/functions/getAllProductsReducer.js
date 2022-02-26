export const getAllProductsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: [...state.allProducts, ...action.payload]
      };

    case "LOADING":
      return {
        ...state,
        loading: action.payload
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

// Initial value of useReducer will be something like this:
//  {allProducts: [], loading: false, error: ""}
