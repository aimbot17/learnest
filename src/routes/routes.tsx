import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/layout/Home";
import App_Layout from "../pages/Index";
import { AuthRoute } from "./logic-route";
import PrivateRoutes from "./Private-routes";

const ErrorPage = lazy(() => import("../utils/Errors/ParamError"));
const Home = lazy(() => import("../pages/Home"));
const Resources = lazy(() => import("../pages/Resources"));

const routes = createBrowserRouter([
  {
    path: "/auth/*",
    element: <AuthRoute />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <App_Layout />,
      },
      {
        path: "/Home",
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/resources",
        element: (
          <Suspense fallback={<div>Loading Resources...</div>}>
            <PrivateRoutes>
              <Resources />
            </PrivateRoutes>
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
