import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { MoviesDataHandler } from "./contexts/dataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesDataHandler>
        <App />
      </MoviesDataHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
