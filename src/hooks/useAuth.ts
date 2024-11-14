import { useCallback } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import authService from "@/services/authServices";
import { LoginCredentials, SignupCredentials } from "../types/auth";

export const useAuth = () => {
  const { user, tokens, setAuth, clearAuth, refreshAuth } = useAuthStore();

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const authResponse = await authService.login(credentials);
      setAuth(authResponse);
      return authResponse;
    },
    [setAuth]
  );

  const signup = useCallback(
    async (credentials: SignupCredentials) => {
      const authResponse = await authService.signup(credentials);
      setAuth(authResponse);
      return authResponse;
    },
    [setAuth]
  );

  const logout = useCallback(async () => {
    await authService.logout();
    clearAuth();
  }, [clearAuth]);

  const isAuthenticated = !!user && !!tokens;

  return {
    user,
    tokens,
    login,
    signup,
    logout,
    refreshAuth,
    isAuthenticated,
  };
};
