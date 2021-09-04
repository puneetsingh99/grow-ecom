import { ProductCard } from "../";
import "./product-list-styles.css";
import { useProducts } from "../../contexts/ProductContext/ProductContext";
import { Loader } from "../Loader/Loader";
import { toast } from "react-toastify";

export const ProductList = () => {
  const { productState } = useProducts();
  const { status, products, error } = productState;

  return (
    <ul className={`product-list`}>
      {status === "loading" && <Loader />}
      {status === "succeeded" &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      {status === "error" && toast.error(error)}
    </ul>
  );
};
