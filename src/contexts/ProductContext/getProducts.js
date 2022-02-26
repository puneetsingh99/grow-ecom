import axios from "axios";
import { API_ALL_PRODUCTS } from "../../api";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_ALL_PRODUCTS);
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Could not retrieve products",
    };
  }
};
