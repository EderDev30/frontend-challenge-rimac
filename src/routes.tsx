import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Layout from "./layout/layout";
import Planes from "./pages/planes/planes";
import Resumen from "./pages/resumen/resumen";

const router = createBrowserRouter([
  {
    element: <Layout showFooter={true} />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    element: <Layout showFooter={false} />,
    children: [
      {
        path: "/planes",
        element: <Planes />,
      },
      {
        path: "/resumen",
        element: <Resumen />,
      },
    ],
  },
]);

export default router;
