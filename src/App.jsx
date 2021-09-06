import "./styles.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  ProductListingPage,
  Wishlist,
  Cart,
  Home,
  ProductDetail,
  PrivateRoute,
  Login,
  Signup,
} from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ROUTE_CART,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_PRODUCT,
  ROUTE_PRODUCTS,
  ROUTE_SIGNUP,
  ROUTE_WISHLIST,
} from "./routes";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTE_HOME} end element={<Home />} />
        <Route path={ROUTE_PRODUCTS} element={<ProductListingPage />} />
        <PrivateRoute path={ROUTE_WISHLIST} element={<Wishlist />} />
        <PrivateRoute path={ROUTE_CART} element={<Cart />} />
        <Route path={ROUTE_LOGIN} end element={<Login />} />
        <Route path={ROUTE_SIGNUP} end element={<Signup />} />
        <Route path={ROUTE_PRODUCT} end element={<ProductDetail />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
