import "./styles.css";
import {
  Navbar,
  ProductListingPage,
  Wishlist,
  Cart,
  Home,
  Login,
  Signup,
  ProductDetail
} from "./components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  // Remove all string literal classNames and replace them by template string
  return (
    <div className="App">
      <Routes>
        <Route path="/products" end element={<ProductListingPage />} />
        <Route path="/" end element={<Home />} />
        <Route path="/wishlist" end element={<Wishlist />} />
        <Route path="/cart" end element={<Cart />} />
        <Route path="/login" end element={<Login />} />
        <Route path="/signup" end element={<Signup />} />
        {/* <Route
          path="products/product/:productId"
          end
          element={<ProductDetail />}
        /> */}
      </Routes>
    </div>
  );
}

// get rid of getTranslatedStrings function and replace everywhere its used

// At full width, at most only three products should show, make use of white space, create ample gap

// customhook for network call
// 1.loads once

// a useReducer whose initial value  will be:
// useReducer(EcommerceReducer, {allProducts : [], wishlist : [], cart : []});
// when a user adds to wishlist, dispatch({type: "ADD_TO_WISHLIST"(create a separate file for all the types.), payload: product})
// The reducerFunction must add that product to the "cart" property of initial value of  useReducer.
// Make sure the initial fetching of the data is done outside the component consuming the data.

// create custom hooks such as useCart({}) which abstracts away the dispatch function
// it just takes a product as a parameter using  setCart setter function and passes it as a payload while keeping  the type hardcoded.

// You can even set a custom hook for  fetching all the data at the beginning.
// useContext to supply all data from top

// Tasks: Create a context
// Refactor and put the Price component in a proper location
