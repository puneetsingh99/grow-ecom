import { ProductCard } from "../";
import "./product-list-styles.css";
import { useProducts } from "../../contexts/ProductContext/ProductContext";
import { Loader } from "../Loader/Loader";
import { toast } from "react-toastify";
import { useECommerce } from "../../customHooks";
import { EmptyProductList } from "./EmptyProductList";

export const ProductList = () => {
  const { productState } = useProducts();
  const { status, products, error } = productState;
  const { getFilteredData, getSortedData } = useECommerce();

  let filteredProducts;
  if (status === "succeeded") {
    filteredProducts = getSortedData(getFilteredData(products));
  }

  return (
    <ul className={`product-list`}>
      {status === "loading" && <Loader />}
      {status === "succeeded" && filteredProducts.length === 0 && (
        <EmptyProductList />
      )}
      {status === "succeeded" &&
        filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      {status === "error" && toast.error(error)}
    </ul>
  );
};
