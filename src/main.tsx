import React from "react";
import ReactDOM from "react-dom/client";

/** Routeur **/
import { RouterProvider } from "react-router-dom";
import router from "./router";

/** Tailwind CSS Style **/
import "./style/global.css";

/** Context **/
import { ThemeProvider } from "./contexts/ThemeContext";
import { CopyProvider } from "./contexts/CopyContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CopyProvider>
        <RouterProvider router={router} />
      </CopyProvider>
    </ThemeProvider>
  </React.StrictMode>
);
