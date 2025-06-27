import { create } from "zustand";

// 🎯 Zustand Store 기본 구조 설명
// 1. State 인터페이스 정의: store가 관리할 상태의 타입을 명시
interface StoreState {
  // 상태 (State): 컴포넌트에서 사용할 데이터
  count: number;

  // 액션 (Actions): 상태를 변경하는 함수들
  increment: () => void;
  decrement: () => void;
}

// 2. Store 생성: create 함수를 사용해 store를 만듦
// create<StoreState>()는 TypeScript 타입 안전성을 보장
const useAppStore = create<StoreState>()((set) => ({
  // 초기 상태 설정
  count: 0,

  // 액션 함수들: set 함수를 사용해 상태를 불변성 유지하며 업데이트
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useAppStore;
