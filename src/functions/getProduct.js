import axios from "axios";
import { toast } from "react-toastify";
import { apiGetProduct } from "../api";
import { toastConfig } from "../utils";

export const getProduct = async (productId, setProduct) => {
  try {
    const { data } = await axios.get(apiGetProduct(productId));
    console.log(data);
    setProduct(data.product);
  } catch (error) {
    console.log(error.message);
    toast("Could not retrieve product", toastConfig);
  }
};
