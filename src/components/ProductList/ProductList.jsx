import { ProductCard } from "../";
import "./product-list-styles.css";
import { useProducts } from "../../contexts/ProductContext/ProductContext";
import { Loader } from "../Loader/Loader";

export const ProductList = () => {
  const { products } = useProducts();
  const { status, error } = products;

  return (
    <ul className={`product-list`}>
      {status === "loading" && <Loader />}
      {status === "succeeded" &&
        products.products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      {status === "error" && <p>{error}</p>}
    </ul>
  );
};
