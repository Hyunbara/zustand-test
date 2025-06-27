import { create } from "zustand";

// 🎯 Zustand 복잡한 상태 관리 예시: 유저 리스트 관리
// 이 store는 배열 상태, 액션, 계산된 값을 모두 보여줍니다

type UserStore = {
  // 1. 상태 (State): 유저 배열 데이터
  users: { id: string; name: string; age: number }[];

  // 2. 액션 (Actions): 상태를 변경하는 함수들
  addUser: (user: { name: string; age: number }) => void;
  updateUser: (id: string, user: { name?: string; age?: number }) => void;

  // 3. 계산된 값 (Computed Values): 상태를 기반으로 계산되는 값
  // get 함수를 사용해 현재 상태에 접근
  adultUsersCount: () => number;
};

export const useUserStore = create<UserStore>((set, get) => ({
  // 초기 상태: 유저 배열 설정
  users: [
    { id: "1", name: "Young", age: 28 },
    { id: "2", name: "Hyun", age: 25 },
  ],

  // 액션 1: 새로운 유저 추가
  // 불변성을 유지하며 배열에 새 유저를 추가
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: Date.now().toString() }],
    })),

  // 액션 2: 기존 유저 정보 업데이트
  // map을 사용해 특정 유저만 업데이트
  updateUser: (id, user) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
    })),

  // 계산된 값: 성인 유저 수 계산
  // get() 함수로 현재 상태에 접근하여 계산
  adultUsersCount: () => get().users.filter((u) => u.age >= 20).length,
}));
