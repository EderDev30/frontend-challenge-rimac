import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/layout";
import { ProtectedRoute } from "@/components";
import { paths } from "./config";
const Login = lazy(() => import("./pages/login/login"));
const Planes = lazy(() => import("./pages/planes/planes"));
const Resumen = lazy(() => import("./pages/resumen/resumen"));

const router = createBrowserRouter([
  {
    element: <Layout showFooter={true} />,
    children: [
      {
        path: paths.home,
        element: <Login />,
      },
    ],
  },
  {
    element: <Layout showFooter={false} />,
    children: [
      {
        path: paths.planes,
        element: (
          <ProtectedRoute>
            <Planes />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.resumen,
        element: (
          <ProtectedRoute>
            <Resumen />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
