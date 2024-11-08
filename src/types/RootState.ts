interface AuthData {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  isAuthenticated: boolean;
}
export interface RootState {
  auth: {
    signup: AuthData;
  };
}

export interface User {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}
