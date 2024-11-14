import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { isAxiosError } from "axios";
import { LoadingFallback } from "@/components/loader.component";
import "react-toastify/dist/ReactToastify.css";
import {useAuthStore} from "@/store/useAuthStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallbackPath = "/auth/login",
}) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const validateSession = async () => {
      setIsValidating(true);
      try {
        if (!user) {
          throw new Error("User is not authenticated");
        }
        // Here you could add an API call to validate the user's session if needed
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(
            error.response?.data.message ||
              "Session expired. Please log in again."
          );
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }

        navigate(fallbackPath, {
          state: { from: location.pathname },
          replace: true,
        });
      } finally {
        setIsValidating(false);
      }
    };

    validateSession();
  }, [user, navigate, location, fallbackPath]);

  if (isValidating) {
    return <LoadingFallback />;
  }

  return user ? <>{children}</> : null;
};

export const AuthLayout: React.FC = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user-storage");
    if (token) {
      setIsAuthenticated(true);
      navigate("/dashboard", { replace: true });
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate, setUser]);

  if (isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
