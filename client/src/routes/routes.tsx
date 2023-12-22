/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import App_Layout from "../components/Index";
import ErrorPage from "../components/utils/Errors/ParamError";

const Home = lazy(() => import("../components/pages/Home.tsx"));
const Courses = lazy(() => import("../components/pages/Courses.tsx"));
const MyBatch = lazy(() => import("../components/pages/Mybatch.tsx"));
const Resources = lazy(() => import("../components/pages/Resources.tsx"));
const Videoplayer = lazy(() => import("../components/layout/Videoplayer.tsx"));
const Profile = lazy(() => import("../components/pages/dashboard/Profile.tsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    path: "watch/:courseId",
    element: (
      <Suspense>
        <Videoplayer />
      </Suspense>
    ),
  },
]);

export default routes;
