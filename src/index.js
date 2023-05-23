import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { MoviesDataHandler } from "./contexts/dataContext";
import { AuthHandler } from "./contexts/authContext";
import { CartHandler } from "./contexts/cartContext";
import { WishlistHandler } from "./contexts/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesDataHandler>
        <AuthHandler>
          <CartHandler>
            <WishlistHandler>
              <App />
            </WishlistHandler>
          </CartHandler>
        </AuthHandler>
      </MoviesDataHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
