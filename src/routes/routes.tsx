import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from "react-router-dom";
import ProtectedRoute from "@/routes/protected.route";
import { LoadingFallback } from "@/components/loader.component";
import { AuthLayout } from "@/routes/protected.route";

// Lazy-loaded components
const ErrorPage = lazy(() => import("@/utils/Errors/ParamError"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));
const Dashboard = lazy(() => import("@/pages/dashboard/index"));

// Route configurations
const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Signup />
      </Suspense>
    ),
  },
];

const dashboardRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Dashboard />
      </Suspense>
    ),
  },
];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
    errorElement: (
      <Suspense fallback={<LoadingFallback />}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: dashboardRoutes,
  },
]);

export default routes;
