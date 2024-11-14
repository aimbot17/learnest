import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, AuthTokens, AuthResponse } from "../types/auth";
import authService from "@/services/authServices";

interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  setAuth: (authResponse: AuthResponse) => void;
  clearAuth: () => void;
  refreshAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      tokens: null,
      setAuth: (authResponse: AuthResponse) =>
        set({
          user: authResponse.user,
          tokens: authResponse.tokens,
        }),
      clearAuth: () => set({ user: null, tokens: null }),
      refreshAuth: async () => {
        const { tokens } = get();
        if (tokens?.refreshToken) {
          try {
            const authResponse = await authService.refreshToken(
              tokens.refreshToken
            );
            set({
              user: authResponse.user,
              tokens: authResponse.tokens,
            });
          } catch (error) {
            set({ user: null, tokens: null });
            throw error;
          }
        } else {
          set({ user: null, tokens: null });
          throw new Error("No refresh token available");
        }
      },
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
