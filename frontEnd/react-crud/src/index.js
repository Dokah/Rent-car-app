import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login"

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
