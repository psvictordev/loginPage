import React from "react";
import ReactDOM from "react-dom/client";

import { AlertProvider } from "./Context/AlertContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider>
    <App />
  </AlertProvider>
);
