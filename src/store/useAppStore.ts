import { create } from "zustand";

/**
 * count : 상태
 * increament, decrement: 액션
 */
interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useAppStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useAppStore;
