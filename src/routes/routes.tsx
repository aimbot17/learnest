import { lazy, Suspense, ReactNode } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

// Lazy-loaded components
const ErrorPage = lazy(() => import("@/utils/Errors/ParamError"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Signup"));
const Dashboard = lazy(() => import("@/pages/dashboard/index"));

// Types
type ProtectedRouteProps = {
  children?: ReactNode;
};

// Components
const LoadingFallback = () => <div>Loading...</div>;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

const AuthLayout = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

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
        <Register />
      </Suspense>
    ),
  },
];

const dashboardRoutes: RouteObject[] = [
  {
    path: "courses",
    element: (
      <Suspense fallback={<LoadingFallback />}>{/* <Courses /> */}</Suspense>
    ),
  },
  // Add more dashboard routes as needed
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
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard />
        </Suspense>
      </ProtectedRoute>
    ),
    children: dashboardRoutes,
  },
]);

export default routes;
