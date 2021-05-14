import { useState, useEffect } from "react";
import { getProduct } from "../functions/getProduct";

export const useGetProduct = async (productId, setProduct) => {
  useEffect(() => {
    getProduct(productId, setProduct);
  }, []);
};
