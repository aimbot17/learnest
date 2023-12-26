interface AuthState {
  signup: string[];
}

export interface RootState {
  auth: AuthState;
}
