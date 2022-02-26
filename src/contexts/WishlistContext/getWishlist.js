import axios from "axios";
import { apiGetWishlist } from "../../api";

export const getWishlist = async (userId) => {
  try {
    const response = await axios.get(apiGetWishlist(userId));
    return response.data;
  } catch (error) {
    console.error(error.message);
    return {
      success: false,
      message: "Could not retrieve the wishlist",
    };
  }
};
