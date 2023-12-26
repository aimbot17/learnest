/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import App_Layout from "../../pages/Index";

const ErrorPage = lazy(() => import("../../utils/Errors/ParamError"));
const Home = lazy(() => import("../../pages/Home"));
const Courses = lazy(() => import("../../pages/course/Courses"));
const MyBatch = lazy(() => import("../../pages/Mybatch"));
const Resources = lazy(() => import("../../pages/Resources"));
const Videoplayer = lazy(() => import("../../components/videoplayer/Videoplayer"));
const Profile = lazy(() => import("../../pages/dashboard/Profile"));

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
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/course",
        element: (
          <Suspense>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "/mybatch",
        element: (
          <Suspense>
            <MyBatch />
          </Suspense>
        ),
      },
      {
        path: "/resources",
        element: (
          <Suspense>
            <Resources />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <Suspense>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "/watch/:courseId",
    element: (
      <Suspense>
        <Videoplayer />
      </Suspense>
    ),
  },
]);

export default routes;
