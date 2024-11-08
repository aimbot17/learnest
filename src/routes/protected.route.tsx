import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "@/store/useAuthStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallbackPath = "/auth/login",
}) => {
  const { user } = useUserStore();
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
      } catch (error) {
        if (axios.isAxiosError(error)) {
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
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
