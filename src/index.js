import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ECommerceProvider,
  LocalizationProvider,
  HamburgerProvider,
  AuthProvider,
  ProductProvider,
  WishlistProvider,
  CartProvider,
  UserProvider,
} from "./contexts";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ECommerceProvider>
          <ProductProvider>
            <UserProvider>
              <WishlistProvider>
                <CartProvider>
                  <LocalizationProvider>
                    <HamburgerProvider>
                      <App />
                    </HamburgerProvider>
                  </LocalizationProvider>
                </CartProvider>
              </WishlistProvider>
            </UserProvider>
          </ProductProvider>
        </ECommerceProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
