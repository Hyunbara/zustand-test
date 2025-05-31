import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type User = {
  name: string;
  profile: {
    address: {
      city: string;
      district: string;
    };
  };
};

type UserStore = {
  users: Record<string, User>;
  updateDistrict: (userId: string, district: string) => void;
};

export const useUserStore = create<UserStore>()(
  immer((set) => ({
    users: {
      "1": {
        name: "홍길동",
        profile: {
          address: { city: "서울", district: "강남구" },
        },
      },
    },
    updateDistrict: (userId, district) =>
      set((state) => {
        state.users[userId].profile.address.district = district;
      }),
  }))
);
