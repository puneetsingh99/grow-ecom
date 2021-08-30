import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "./getProducts";

const ProductContext = createContext(null);

const initialState = {
  status: "idle",
  products: null,
  error: null,
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialState);

  useEffect(() => {
    if (products.status === "idle") {
      (async function () {
        try {
          setProducts((prevProducts) => ({
            status: "loading",
            ...prevProducts,
          }));
          const response = await getProducts();

          if (response.products) {
            return setProducts({
              status: "succeeded",
              products: response.products,
              error: null,
            });
          }

          setProducts({
            status: "error",
            products: null,
            error: response.message,
          });
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, [products.status]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
