import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ECommerceProvider,
  LocalizationProvider,
  HamburgerProvider,
  AuthProvider,
} from "./contexts";
import App from "./App";
import { setupMockServer } from "./api/mock.server";
import { BrowserRouter as Router } from "react-router-dom";

// setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ECommerceProvider>
          <LocalizationProvider>
            <HamburgerProvider>
              <App />
            </HamburgerProvider>
          </LocalizationProvider>
        </ECommerceProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
