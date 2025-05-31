import { create } from "zustand";

type UserStore = {
  // 상태 (users)
  users: { id: string; name: string; age: number }[];
  // 액션 (addUser, updateUser)
  addUser: (user: { name: string; age: number }) => void;
  updateUser: (id: string, user: { name?: string; age?: number }) => void;
  // 계산된(파생) 값 -> state를 기반으로 계산해서 얻는 값
  adultUsersCount: () => number;
};

export const useUserStore = create<UserStore>((set, get) => ({
  // 초기 상태 세팅
  users: [
    { id: "1", name: "Young", age: 28 },
    { id: "2", name: "Hyun", age: 25 },
  ],
  // 액션: 상태를 불변성 유지하며 업데이트 (새로운 사용자 추가)
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: Date.now().toString() }],
    })),

  // 사용자 정보 업데이트
  updateUser: (id, user) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
    })),
  // 계산된(파생) 값
  adultUsersCount: () => get().users.filter((u) => u.age >= 20).length,
}));
