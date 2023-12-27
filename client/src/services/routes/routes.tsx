import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import App_Layout from "../../pages/Index";
// import PrivateRoute from "./Private-routes";

const ErrorPage = lazy(() => import("../../utils/Errors/ParamError"));
const Home = lazy(() => import("../../pages/Home"));
const Courses = lazy(() => import("../../pages/course/Courses"));
const MyBatch = lazy(() => import("../../pages/Mybatch"));
const Resources = lazy(() => import("../../pages/Resources"));
const Videoplayer = lazy(
  () => import("../../components/videoplayer/Videoplayer")
);
const Profile = lazy(() => import("../../pages/dashboard/Profile"));
import { AuthRoute } from "./logic-route";

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
        path: "/home",
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
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "/mybatch",
        element: (
          <Suspense fallback={<div>Loading MyBatch...</div>}>
            <MyBatch />
          </Suspense>
        ),
      },
      {
        path: "/resources",
        element: (
          <Suspense fallback={<div>Loading Resources...</div>}>
            <Resources />
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
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "/watch/:courseId",
    element: (
      <Suspense fallback={<div>Loading Videoplayer...</div>}>
        <Videoplayer />
      </Suspense>
    ),
  },
]);

export default routes;
