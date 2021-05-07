import axios from "axios";

export const getAllProducts = async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const { data } = await axios.get(
      "https://e-commerce-backend.puneetsingh2.repl.co/products/"
    );
    dispatch({
      type: "FETCH_ALL_PRODUCTS",
      payload: data.products
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  } finally {
    dispatch({ type: "LOADING", payload: false });
  }
};
