import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ECommerceProvider,
  LocalizationProvider,
  HamburgerProvider
} from "./contexts";
import App from "./App";
import { setupMockServer } from "./api/mock.server";
import { BrowserRouter as Router } from "react-router-dom";

// setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ECommerceProvider>
      <LocalizationProvider>
        <Router>
          <HamburgerProvider>
            <App />
          </HamburgerProvider>
        </Router>
      </LocalizationProvider>
    </ECommerceProvider>
  </StrictMode>,
  rootElement
);
