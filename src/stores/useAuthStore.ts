import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  setAuthenticated: (value: boolean) => void;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  setAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
  setToken: (token: string | null) => set({ token }),
}));
