import "./styles.css";
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
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" end element={<Home />} />
        <PrivateRoute path="/products" end element={<ProductListingPage />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <Route path="/login" end element={<Login />} />
        <Route path="/signup" end element={<Signup />} />
        <PrivateRoute
          path="products/product/:productId"
          end
          element={<ProductDetail />}
        />
      </Routes>
    </div>
  );
}
