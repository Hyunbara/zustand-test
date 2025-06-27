import { create } from "zustand";
import { persist } from "zustand/middleware";

// 🎯 Zustand 고급 기능 예시: 마우스 위치 추적 + 미들웨어 사용
// 이 store는 복잡한 상태 구조, 액션, 미들웨어를 모두 보여줍니다

// 1. 상태 타입 정의
type PositionStore = {
  // 상태: 마우스 위치 정보
  position: { x: number; y: number };

  // 액션: 위치 업데이트 함수
  setPosition: (position: { x: number; y: number }) => void;
};

// 2. Store 생성 with 미들웨어
// persist 미들웨어: 상태를 자동으로 로컬 스토리지에 저장
// 브라우저를 새로고침해도 상태가 유지됨
export const usePositionStore = create<PositionStore>()(
  persist(
    (set) => ({
      // 초기 상태 설정
      position: { x: 0, y: 0 },

      // 액션: set 함수로 상태 업데이트 (불변성 유지)
      setPosition: (position) => set({ position }),
    }),
    {
      name: "position-storage", // 로컬 스토리지에 저장될 키 이름
    }
  )
);
