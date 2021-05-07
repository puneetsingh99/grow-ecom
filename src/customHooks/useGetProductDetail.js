import { useECommerce } from "./useECommerce";

export const useGetProductDetail = ({ productId }) => {
  const { filteredData } = useECommerce();
  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }
  return getProductDetails(filteredData, productId);
};
