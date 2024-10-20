import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "@/store/useAuthStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, refreshAccessToken, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const validateSession = async () => {
      try {
        if (!user) {
          await refreshAccessToken();
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

        logout();
        navigate("/auth/login");
      }
    };

    validateSession();
  }, [user, refreshAccessToken, navigate, logout]);

  // Only render children if the user is authenticated
  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
