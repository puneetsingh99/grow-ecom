import { useEffect, useReducer } from "react";
import { getAllProductsReducer, getAllProducts } from "../functions";

export const useGetProducts = () => {
  const [{ allProducts, loading, errorMessage }, dispatch] = useReducer(
    getAllProductsReducer,
    {
      allProducts: [],
      loading: false,
      errorMessage: ""
    }
  );

  useEffect(() => getAllProducts(dispatch), []);

  return { allProducts, loading, errorMessage }; //change array to object
};
