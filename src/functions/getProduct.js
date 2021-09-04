import axios from "axios";

export const getProduct = async (productId, setProduct, setAlert) => {
  const getProductUrl = `https://e-commerce-backend.puneetsingh2.repl.co/products/${productId}`;
  try {
    const { data } = await axios.get(getProductUrl);
    console.log(data);
    setProduct(data.product);
  } catch (error) {
    console.log(error.message);
    // implement an alert in the final version
  }
};
