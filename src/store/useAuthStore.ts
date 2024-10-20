import { create } from "zustand";
import axios from "axios";
import { API_URL } from "@/config/Index";

// Define a type for the user
interface User {
  name: string;
  email: string;
  username: string;
  phoneNumber: string;
}

// Define a type for the state
interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

// Define a type for the actions
interface AuthActions {
  setUser: (user: User | null) => void;
  setAccessToken: (token: string | null) => void;
  login: (
    email: string,
    password: string,
    phoneNumber: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<string | null>;
  signup: (
    name: string,
    email: string,
    password: string,
    phoneNumber: string
  ) => Promise<{ success: boolean; message?: string }>;
}

// Combine state and actions
type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setAccessToken: (token) => set({ accessToken: token }),

  // Signup function to register a new user
  signup: async (name, email, password, phoneNumber) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/signup`,
        { name, email, password, phoneNumber },
        { withCredentials: true }
      );
      const { user, access_token } = response.data.data;

      set({ user, accessToken: access_token, isAuthenticated: true });
      return { success: true };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return {
          success: false,
          message: error.response.data.message || "Signup failed",
        };
      }
      return { success: false, message: "Signup failed" };
    }
  },

  // Login function
  login: async (email, password, phoneNumber) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password, phoneNumber },
        { withCredentials: true }
      );
      const { user, access_token } = response.data.data;

      set({ user, accessToken: access_token, isAuthenticated: true });
      return { success: true };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return {
          success: false,
          message: error.response.data.message || "Login failed",
        };
      }
      return { success: false, message: "Login failed" };
    }
  },

  // Logout function
  logout: async () => {
    try {
      await axios.post(
        `${API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      set({ user: null, accessToken: null, isAuthenticated: false });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },

  // Refresh token logic
  refreshAccessToken: async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/refreshToken`,
        {},
        { withCredentials: true }
      );
      const { access_token } = response.data.data;

      set({ accessToken: access_token });
      return access_token;
    } catch (error) {
      set({ user: null, accessToken: null, isAuthenticated: false });
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data.message || "Failed to refresh token"
        );
      }
      throw error;
    }
  },
}));

export default useAuthStore;
