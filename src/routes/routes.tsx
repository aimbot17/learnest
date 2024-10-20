import { lazy, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  useNavigate,
} from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import ProtectedRoute from "@/routes/protected.route";

// Lazy-loaded components
const ErrorPage = lazy(() => import("@/utils/Errors/ParamError"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));
const Dashboard = lazy(() => import("@/pages/dashboard/index"));
// Components
const LoadingFallback = () => <div>Loading...</div>;

const AuthLayout = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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
        <Signup />
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
