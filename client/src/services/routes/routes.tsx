import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import App_Layout from "../../pages/Index";
import { AuthRoute } from "./logic-route";
import PrivateRoutes from "./Private-routes";

const ErrorPage = lazy(() => import("../../utils/Errors/ParamError"));
const Home = lazy(() => import("../../pages/Home"));
const Courses = lazy(() => import("../../pages/course/Courses"));
const MyBatch = lazy(() => import("../../pages/Mybatch"));
const Resources = lazy(() => import("../../pages/Resources"));
const Profile = lazy(() => import("../../pages/dashboard/Profile"));
const  VideoPlayer = lazy(() => import("../../pages/Videoplayer"));

const routes = createBrowserRouter([
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
        path: "/course",
        element: (
          <Suspense fallback={<div>Loading Courses...</div>}>
            <PrivateRoutes>
              <Courses />
            </PrivateRoutes>
          </Suspense>
        ),
      },
      {
        path: "/mybatch",
        element: (
          <Suspense fallback={<div>Loading MyBatch...</div>}>
            <PrivateRoutes>
              <MyBatch />
            </PrivateRoutes>
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
  {
    path: "/auth/*",
    element: <AuthRoute />,
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<div>Loading Profile...</div>}>
        <PrivateRoutes>
          <Profile />
        </PrivateRoutes>
      </Suspense>
    ),
  },
  {
    path: "/watch",
    element: (
      <Suspense fallback={<div>Loading Videoplayer...</div>}>
        <PrivateRoutes>
          <VideoPlayer />
        </PrivateRoutes>
      </Suspense>
    ),
  },
]);

export default routes;
