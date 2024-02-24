import { createBrowserRouter } from "react-router-dom";
import SeguroSaludFlexible from "./pages/seguro-salud-flexible/seguro-salud-flexible";
import Layout from "./layout/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SeguroSaludFlexible />,
      },
    ],
  },
]);

export default router;
