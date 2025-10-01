import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./main.scss";
import { UserProvider } from "@/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </React.StrictMode>
);
