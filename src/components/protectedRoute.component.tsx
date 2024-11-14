import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { tokenManager } from "@/utils/tokenManager";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, tokens, refreshAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      if (
        isAuthenticated &&
        tokens &&
        tokenManager.shouldRefreshToken(tokens)
      ) {
        try {
          await refreshAuth();
        } catch (error) {
          console.error("Failed to refresh token:", error);
        }
      }
    };

    checkAndRefreshToken();
  }, [isAuthenticated, tokens, refreshAuth]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
