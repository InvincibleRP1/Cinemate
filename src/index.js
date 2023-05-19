import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { MoviesDataHandler } from "./contexts/dataContext";
import { AuthHandler } from "./contexts/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesDataHandler>
        <AuthHandler>
        <App />
        </AuthHandler>
      </MoviesDataHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
