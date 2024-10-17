import {create} from "zustand";

interface User {
  email: string;
  phoneNumber: string;
}

interface AuthState {
  user: User | null;
  error: string | null;
  setUser: (user: User) => void;
  setError: (error: string) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  setUser: (user: User) => set({ user, error: null }),
  setError: (error: any) => set({ error }),
  clearUser: () => set({ user: null, error: null }),
}));
