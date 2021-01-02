import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login";
import { CookiesProvider } from "react-cookie";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
