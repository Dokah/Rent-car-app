import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
