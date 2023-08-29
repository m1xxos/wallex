import { create } from 'zustand';
interface CurrencyState {
  exFrom: number;
  setExFrom: (walletId: number) => void;
  exTo: number;
  setExTo: (walletId: number) => void;
  exhange: () => void;
}

export const useCurrencyStore = create<CurrencyState>()((set, get) => ({
  exFrom: 5,
  exTo: 6,
  exhange() {},
  setExFrom(walletId) {
    set((state) => ({ exFrom: walletId }));
  },
  setExTo(walletId) {
    set((state) => ({ exTo: walletId }));
  },
}));
