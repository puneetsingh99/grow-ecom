import axios from "axios";
import { apiSearch } from "../../api";

export const searchProducts = async (searchKey) => {
  try {
    const { data } = await axios.post(apiSearch(), { searchKey });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
