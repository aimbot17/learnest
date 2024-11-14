import axios from "axios";
import {
  LoginCredentials,
  SignupCredentials,
  AuthResponse,
  AuthError,
} from "../types/auth";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_URL}/auth/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_URL}/auth/signup`,
        credentials
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_URL}/auth/refresh-token`,
        { refreshToken }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async logout(): Promise<void> {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },

  handleError(error: unknown): AuthError {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response.data.message || "An error occurred",
        statusCode: error.response.status,
      };
    }
    return {
      message: "An unexpected error occurred",
      statusCode: 500,
    };
  },
};

export default authService;
