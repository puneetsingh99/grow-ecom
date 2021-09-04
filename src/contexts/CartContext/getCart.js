import axios from "axios";
import { apiGetCart } from "../../api";

export const getCart = async (userId) => {
  try {
    const response = await axios.get(apiGetCart(userId));
    return response.data;
  } catch (error) {
    console.error(error.message);
    return {
      success: false,
      message: "Could not retrieve the cart",
    };
  }
};
