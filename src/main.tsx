import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./main.scss";
import { UserProvider } from "@/context";
import { Spinner } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={routes} />
      </Suspense>
    </UserProvider>
  </React.StrictMode>
);
