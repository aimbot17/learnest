import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Login = lazy(() => import("../../pages/auth/Login"));
const Signup = lazy(() => import("../../pages/auth/Signup"));

export const AuthRoute = () => {
  return (
    <Suspense>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/auth/login" replace={true} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Suspense>
  );
};

export const PrivateRoutes = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
