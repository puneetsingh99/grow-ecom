import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "./getProducts";

const ProductContext = createContext(null);

const initialState = {
  status: "idle",
  products: null,
  error: null,
};

export const ProductProvider = ({ children }) => {
  const [productState, setProductState] = useState(initialState);

  useEffect(() => {
    if (productState.status === "idle") {
      (async function () {
        try {
          setProductState((prevProducts) => ({
            ...prevProducts,
            status: "loading",
          }));

          const response = await getProducts();

          if (response.products) {
            return setProductState({
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
          console.error(error.message);
        }
      })();
    }
  }, [productState.status]);

  return (
    <ProductContext.Provider value={{ productState }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
