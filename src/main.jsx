import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { SmokeProvider } from "./context/SmokeContext.jsx";
import { NavigationProvider } from "./context/NavigationContext.jsx";

import "./styles/globals.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <SmokeProvider>

      <NavigationProvider>

        <App />

      </NavigationProvider>

    </SmokeProvider>

  </React.StrictMode>

);