import React from "react";
import ReactDOM from "react-dom/client";

/** Routeur **/
import { RouterProvider } from "react-router-dom";
import router from "./router";

/** Tailwind CSS Style **/
import "./style/global.css";

/** Context **/
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
