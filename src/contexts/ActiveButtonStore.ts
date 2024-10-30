import { createStore } from 'zustand';

interface ButtonStoreState {
  activeButton: number;
  setActiveButton: (buttonNumber: number) => void;
}

export const useButtonStore = createStore<ButtonStoreState>((set) => ({
  activeButton: 5,
  setActiveButton: (buttonNumber) => set({ activeButton: buttonNumber }),
}));
