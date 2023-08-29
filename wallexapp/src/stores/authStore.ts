import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
interface AuthState {
  token: string;
  setToken: (token: string) => void;
  verify: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: '',
      setToken: (token) => set((state) => ({ token: token })),
      verify: () => {
        return axios
          .post(`${process.env.REACT_APP_BACK_DOMAIN}/api/token/verify/`, {
            token: get().token,
          })
          .then((response) => {
            if (response.status === 200) return true;
            return false;
          })
          .catch(() => {
            return false;
          });
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);
