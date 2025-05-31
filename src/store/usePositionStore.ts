import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * position: x,y 좌표를 저장
 * setPosition: 좌표를 업데이트하는 함수
 */
type PositionStore = {
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
};

/**
 * zustand의 React Hook을 만드는 부분으로, usePositionStore이라는 이름 사용
 * persist: 상태를 자동으로 로컬 스토리지에 저장해주는 미들웨어로, create에 넘겨주기 전 persist로 감싸줌.
 
 * persist(x,y)
 * x: 첫 번째 인자로 스토어를 정의해주는 부분을 넘김
 * y: 두 번째 인자로 persist 미들웨어의 속성을 넘김 (로컬 스토리지에 저장될 키 값(position-storage))
 * 이를 통해 상태가 로컬 스토리지에 자동 저장
 */
export const usePositionStore = create<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    { name: "position-storage" }
    // {
    //     name: "position-storage",
    //     partialize: (state) => ({ context: {position: state.context.position}})
    ////storeage: createJSONStorage(() => searchParamsStorage),
    // }
  )
);
