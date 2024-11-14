export interface ApiResponse {
  data: User;
  error: string;
  status: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
  message: string;
}

export interface AuthError {
  message: string;
  statusCode: number;
}
