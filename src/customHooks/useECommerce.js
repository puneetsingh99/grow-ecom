import { ECommerceContext } from "../contexts/ECommerceContext";
import { useContext } from "react";

export const useECommerce = () => {
  return useContext(ECommerceContext);
};
