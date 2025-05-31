import { createStore } from "zustand";

interface SearchStore {
  keyword: string;
  category: string;
  setKeyword: (keyword: string) => void;
  setCategory: (category: string) => void;
}

const useSearchStore = createStore<SearchStore>((set) => ({
  keyword: "",
  category: "",
  setKeyword: (keyword) => set({ keyword }),
  setCategory: (category) => set({ category }),
}));
