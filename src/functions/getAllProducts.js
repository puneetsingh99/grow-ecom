import axios from "axios";
import { API_ALL_PRODUCTS } from "../api";

export const getAllProducts = async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const { data } = await axios.get(API_ALL_PRODUCTS);
    dispatch({
      type: "FETCH_ALL_PRODUCTS",
      payload: data.products,
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
