import axios from "axios";
import { apiGetUser } from "../../api";

export const getUser = async (userId) => {
  try {
    const response = await axios.get(apiGetUser(userId));
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Could not retrieve user",
    };
  }
};
