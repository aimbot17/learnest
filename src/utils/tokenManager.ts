import jwtDecode from "jwt-decode";
import { AuthTokens } from "@/types/auth";

export const tokenManager = {
  isTokenExpired(token: string): boolean {
    try {
      const decodedToken: { exp: number } = jwtDecode(token);
      return decodedToken.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  },

  shouldRefreshToken(tokens: AuthTokens): boolean {
    if (!tokens.accessToken) return true;
    // Refresh when less than 5 minutes left before expiration
    return (
      this.isTokenExpired(tokens.accessToken) ||
      this.getTokenExpirationTime(tokens.accessToken) - Date.now() <
        5 * 60 * 1000
    );
  },

  getTokenExpirationTime(token: string): number {
    try {
      const decodedToken: { exp: number } = jwtDecode(token);
      return decodedToken.exp * 1000;
    } catch {
      return 0;
    }
  },
};
