interface AuthData {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}
export interface RootState {
  auth: {
    signup: AuthData;
  };
}
