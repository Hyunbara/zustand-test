import { create, type ExtractState } from "zustand";
import { combine } from "zustand/middleware";

interface UserCombine {
  name: string;
  age: number;
  increaseAge: (by: number) => void;
}

const useCombineStore = create<UserCombine>()(
  combine(
    {
      name: "홍길동",
      age: 30,
    },
    (set) => ({
      increaseAge: (by: number) =>
        set((state) => ({
          age: state.age + by,
        })),
    })
  )
);

type UserType = ExtractState<typeof useCombineStore>;

export default useCombineStore;
