import { useEffect, useReducer } from "react";
import { getAllProductsReducer, getAllProducts } from "../functions";
import { useAuth } from "../contexts/AuthContext";

export const useGetProducts = () => {
  const { userId } = useAuth();
  const [{ allProducts, loading, errorMessage }, dispatch] = useReducer(
    getAllProductsReducer,
    {
      allProducts: [],
      loading: false,
      errorMessage: "",
    }
  );

  useEffect(() => getAllProducts(dispatch), [userId]);

  return { allProducts, loading, errorMessage };
};
